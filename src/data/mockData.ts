import { ProfileBanner, WorkPermit, TimelineItem, Project, Certification, ContactMe, Skill } from '../types';

export const mockProfileBanner: ProfileBanner = {
  backgroundImage: { url: 'https://picsum.photos/seed/banner/1920/1080' },
  headline: 'Derrel Winter',
  resumeLink: { url: '#' },
  linkedinLink: 'https://linkedin.com/in/derrelwinter',
  profileSummary: 'Experienced professional with a passion for technology and innovation.',
};

export const mockWorkPermit: WorkPermit = {
  visaStatus: 'Active',
  expiryDate: new Date('2025-12-31'),
  summary: 'Eligible to work in the target country.',
  additionalInfo: 'No sponsorship required.',
};

export const mockTimeline: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Tech Company Inc.',
    title: 'Senior Developer',
    techStack: 'React, TypeScript, Node.js',
    summaryPoints: ['Led a team of 5 developers.', 'Implemented new features.'],
    dateRange: '2020 - Present',
  },
  {
    timelineType: 'education',
    name: 'University of Technology',
    title: 'Bachelor of Science in Computer Science',
    techStack: 'Java, Python, C++',
    summaryPoints: ['Graduated with Honors.', 'President of Coding Club.'],
    dateRange: '2016 - 2020',
  },
];

export const mockProjects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React.',
    techUsed: 'React, TypeScript, CSS',
    image: { url: 'https://picsum.photos/seed/project1/800/600' },
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application.',
    techUsed: 'Next.js, Stripe, MongoDB',
    image: { url: 'https://picsum.photos/seed/project2/800/600' },
  },
];

export const mockCertifications: Certification[] = [
  {
    title: 'Certified Cloud Practitioner',
    issuer: 'AWS',
    issuedDate: '2023-01-15',
    link: '#',
    iconName: 'aws',
  },
];

export const mockContactMe: ContactMe = {
  profilePicture: { url: 'https://picsum.photos/seed/profile/200/200' },
  name: 'Derrel Winter',
  title: 'Software Engineer',
  summary: 'Feel free to reach out for collaborations or opportunities.',
  companyUniversity: 'Tech University',
  linkedinLink: 'https://linkedin.com/in/derrelwinter',
  email: 'derrel.winter@example.com',
  phoneNumber: '+1 234 567 890',
};

export const mockSkills: Skill[] = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Building interactive UIs.',
    icon: 'react',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Server-side JavaScript.',
    icon: 'node',
  },
];
