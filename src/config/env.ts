const readEnv = (key: string): string | undefined => {
  const rawValue = process.env[key];
  if (typeof rawValue !== 'string') {
    return undefined;
  }

  const value = rawValue.trim();
  return value.length > 0 ? value : undefined;
};

export const getOptionalEnv = (key: string): string | undefined => readEnv(key);

export const getOptionalBooleanEnv = (key: string, fallback = false): boolean => {
  const value = readEnv(key);
  if (!value) {
    return fallback;
  }

  return value.toLowerCase() === 'true';
};

export const getEnvOrDefault = (key: string, defaultValue: string): string => {
  return readEnv(key) ?? defaultValue;
};

export const isProduction = process.env.NODE_ENV === 'production';
