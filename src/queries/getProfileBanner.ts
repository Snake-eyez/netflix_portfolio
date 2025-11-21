// queries/getProfileBanner.ts

import { ProfileBanner } from '../types';
import { mockProfileBanner } from '../data/mockData';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  return Promise.resolve(mockProfileBanner);
}
