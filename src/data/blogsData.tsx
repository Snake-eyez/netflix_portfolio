import React from 'react';
import { FaPenNib } from 'react-icons/fa';

export interface Blog {
    title: string;
    platform: string;
    icon: React.ReactNode;
    link: string;
    description: string;
    date: string;
    readTime: string;
    image: string;
}

export const blogs: Blog[] = [
    {
        title: "Google’s Quiet Coup",
        platform: "Substack",
        icon: <FaPenNib />,
        link: "https://derrelwinter.substack.com/p/googles-quiet-coup",
        description: "An analysis of Google's strategic shifts and what they mean for the future of search and AI.",
        date: "Recent",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800"
    },
    {
        title: "Derrel Winter on Substack",
        platform: "Substack",
        icon: <FaPenNib />,
        link: "https://substack.com/@derrelwinter",
        description: "Explore my latest essays, thoughts on AI, and future tech trends directly on Substack. Join the conversation.",
        date: "Weekly",
        readTime: "Newsletter",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
    }
];
