// queries/getContactMe.ts

import { ContactMe } from '../types';
import { mockContactMe } from '../data/mockData';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  return Promise.resolve(mockContactMe);
}
