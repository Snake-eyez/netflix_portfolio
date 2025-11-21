// queries/getTimeline.ts

import { Skill } from '../types';
import { mockSkills } from '../data/mockData';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve(mockSkills);
}
