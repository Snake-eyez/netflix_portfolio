import { getOptionalBooleanEnv, getOptionalEnv, isProduction } from './config/env';

type MixpanelClient = {
  init: (token: string, config?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    mixpanel?: MixpanelClient;
  }
}

const injectScript = (id: string, src: string): Promise<void> => {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

const initGoogleAnalytics = async (measurementId: string): Promise<void> => {
  await injectScript(
    'ga-sdk',
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  );

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
};

const initMixpanel = async (token: string): Promise<void> => {
  await injectScript('mixpanel-sdk', 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js');
  window.mixpanel?.init(token, {
    autocapture: true,
    api_host: 'https://api-eu.mixpanel.com',
  });
};

export const initAnalytics = async (): Promise<void> => {
  const analyticsEnabled = getOptionalBooleanEnv('REACT_APP_ENABLE_ANALYTICS', false);
  if (!isProduction || !analyticsEnabled) {
    return;
  }

  const gaMeasurementId = getOptionalEnv('REACT_APP_GA_MEASUREMENT_ID');
  const mixpanelToken = getOptionalEnv('REACT_APP_MIXPANEL_TOKEN');

  try {
    if (gaMeasurementId) {
      await initGoogleAnalytics(gaMeasurementId);
    }

    if (mixpanelToken) {
      await initMixpanel(mixpanelToken);
    }
  } catch (error) {
    // Analytics must never block rendering if an external script fails.
    console.error('[analytics] initialization failed', error);
  }
};
