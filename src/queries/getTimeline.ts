// queries/getTimeline.ts

import { TimelineItem } from '../types';
import { mockTimeline } from '../data/mockData';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  return Promise.resolve(mockTimeline);
}
