export interface Workshop {
    id: number;
    title: string;
    description: string;
    duration: string;
    participants: string;
    date: string;
    level: string;
    topics: string[];
    image: string;
    status: 'upcoming' | 'available';
}

export const workshops: Workshop[] = [
    {
        id: 1,
        title: "AI Prompt Engineering Masterclass",
        description: "Learn to craft powerful prompts that unlock the full potential of AI models. From ChatGPT to Claude, master the art of effective communication with AI.",
        duration: "3 hours",
        participants: "Max 20",
        date: "Coming Soon",
        level: "Beginner to Advanced",
        topics: [
            "Prompt structure and best practices",
            "Advanced techniques for complex tasks",
            "Real-world applications and use cases",
            "Hands-on exercises and Q&A"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        status: "upcoming"
    },
    {
        id: 2,
        title: "Building AI Agents from Scratch",
        description: "Dive deep into creating autonomous AI agents. Learn architecture, tool integration, and deployment strategies for production-ready agents.",
        duration: "4 hours",
        participants: "Max 15",
        date: "Coming Soon",
        level: "Intermediate to Advanced",
        topics: [
            "Agent architecture and design patterns",
            "Tool integration and function calling",
            "Memory and context management",
            "Deployment and monitoring"
        ],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
        status: "upcoming"
    },
    {
        id: 3,
        title: "ComfyUI for Creative Professionals",
        description: "Master ComfyUI workflows for AI image generation. From installation to advanced techniques, create stunning visuals with complete control.",
        duration: "2.5 hours",
        participants: "Max 25",
        date: "Coming Soon",
        level: "Beginner Friendly",
        topics: [
            "ComfyUI setup and configuration",
            "Understanding nodes and workflows",
            "Custom models and LoRAs",
            "Production-ready workflows"
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        status: "upcoming"
    }
];
