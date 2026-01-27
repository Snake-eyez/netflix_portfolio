import { ProfileType } from '../types';

export interface Tile {
    label: string;
    title: string;
    color: string;
    route: string;
    image?: string;
}

export const dashboardData: Record<ProfileType, Tile[]> = {
    Professional: [
        {
            label: 'PROFESSIONAL',
            title: 'Work Experience',
            color: 'linear-gradient(180deg, #1e3a8a 0%, #172554 100%)',
            route: '/work-experience'
        },
        {
            label: 'SKILLS',
            title: 'Additional Skillsets',
            color: 'linear-gradient(180deg, #166534 0%, #14532d 100%)',
            route: '/skills'
        },
        {
            label: 'SPEAKING',
            title: 'Presentation',
            color: 'linear-gradient(180deg, #3b3b98 0%, #2e2e7a 100%)',
            route: '/speaking'
        },
        {
            label: 'CONNECT',
            title: 'Contact/Booking',
            color: 'linear-gradient(180deg, #991b1b 0%, #7f1d1d 100%)',
            route: '/contact-me'
        },
    ],
    Creative: [
        {
            label: 'PORTFOLIO',
            title: 'Image/Video Portfolio',
            color: 'linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)',
            route: '/portfolio'
        },
        {
            label: 'WRITING',
            title: 'Essays & Blogs',
            color: 'linear-gradient(180deg, #1e3a8a 0%, #172554 100%)',
            route: '/blogs'
        },
        {
            label: 'WORKSHOPS',
            title: 'Interactive Workshops',
            color: 'linear-gradient(180deg, #7f1d1d 0%, #450a0a 100%)',
            route: '/workshops'
        },
        {
            label: 'CONCEPTS',
            title: 'Concept Projects',
            color: 'linear-gradient(180deg, #854d0e 0%, #713f12 100%)',
            route: '/coming-soon'
        },
    ],
    Explorer: [
        {
            label: 'LIBRARY',
            title: 'Books',
            color: 'linear-gradient(180deg, #7f1d1d 0%, #450a0a 100%)',
            route: '/reading'
        },
        {
            label: 'CINEMA',
            title: 'Movies',
            color: 'linear-gradient(180deg, #1e3a8a 0%, #172554 100%)',
            route: '/movies'
        },
        {
            label: 'RESOURCES',
            title: 'Resource Vault',
            color: 'linear-gradient(180deg, #854d0e 0%, #713f12 100%)',
            route: '/resource-vault'
        },
        {
            label: 'LEARNING',
            title: 'Interactive Learning',
            color: 'linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)',
            route: '/interactive-learning'
        },
    ],
    Visionary: [
        {
            label: 'MISSION',
            title: "Vision & Mission",
            color: "linear-gradient(180deg, #1e3a8a 0%, #172554 100%)",
            route: "/vision-mission"
        },
        {
            label: 'INNOVATION',
            title: "Idea Lab",
            color: "linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)",
            route: "/idea-lab"
        },
        {
            label: 'EVENTS',
            title: "Speaking Events",
            color: "linear-gradient(180deg, #854d0e 0%, #713f12 100%)",
            route: "/speaking"
        },
        {
            label: 'VENTURES',
            title: "Outstandr Vision",
            color: "linear-gradient(180deg, #7f1d1d 0%, #450a0a 100%)",
            route: "/outstandr"
        },
    ],
};
