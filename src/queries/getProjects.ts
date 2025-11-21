// queries/getProjects.ts

import { Project } from '../types';
import { mockProjects } from '../data/mockData';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(mockProjects);
}
