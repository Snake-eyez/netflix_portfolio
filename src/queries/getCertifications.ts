// queries/getCertifications.ts

import { Certification } from '../types';
import { mockCertifications } from '../data/mockData';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(mockCertifications);
}
