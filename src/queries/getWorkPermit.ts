// queries/getWorkPermit.ts

import { WorkPermit } from '../types';
import { mockWorkPermit } from '../data/mockData';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  return Promise.resolve(mockWorkPermit);
}
