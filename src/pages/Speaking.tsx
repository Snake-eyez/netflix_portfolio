import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLightbulb, FaCogs, FaChalkboardTeacher, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Speaking.css';

interface Presentation {
    id: string;
    title: string;
    type: string;
    date: string;
    icon: React.ReactNode;
    summary: string;
    highlights: string[];
}

const presentations: Presentation[] = [
    {
        id: '1',
        title: 'AI Integration Workshop for telecom Managers',
        type: 'Corporate Workshop',
        date: '2025',
        icon: <FaLightbulb />,
        summary: 'A strategic interactive session designed for managers to explore AI applications in business functions. The workshop featured practical challenges such as analyzing sustainability data with an "AI Sustainability Officer," creating marketing campaigns with "AI Louis" (CMO), building personal GPT clones for task management, and developing strategic AI implementation plans. The focus was on improving AI literacy and developing practical skills in analyzing data, generating content, and optimizing daily management tasks.',
        highlights: [
            'Sustainability Data Analysis: Using AI to find correlations between energy use and network data',
            'Creative Marketing: Developing campaigns with "AI" adhering to brand voice and formats',
            'Personal GPT Clones: Building custom assistants for daily management and communication',
            'Strategic Implementation: Collaborating with "AI" to create feasible, innovative AI integration plans'
        ]
    },
    {
        id: '2',
        title: 'Flowgrammers & Multi-Agent Systems',
        type: 'Technical Keynote',
        date: 'Nov 2025',
        icon: <FaCogs />,
        summary: 'A visionary presentation defining the "Flowgrammer" role a hybrid between technical architect and business process thinker. This talk covered the shift towards Agentic AI, where "Master Agents" orchestrate specialized sub-agents (HR, IT, Fleet) to automate complex workflows without code using Microsoft Copilot Studio and Power Automate. It emphasized that AI is a way of working, not just a tool, and demonstrated how to build self-correcting, multi-agent systems that integrate people, data, and systems.',
        highlights: [
            'The Rise of the Flowgrammer: Orchestrating logic without writing code',
            'Multi-Agent Orchestration: Master Agents routing tasks to specialized worker agents',
            'Live Demo: Building a Master Agent in Copilot Studio with seamless hands-offs',
            'Integration: Connecting AI agents to Power Automate for real-world actions (e.g., SharePoint, Email)'
        ]
    },
    {
        id: '3',
        title: 'Hands-on AI Workshop: From Prompting to Agents',
        type: 'Technical Training',
        date: '2025',
        icon: <FaChalkboardTeacher />,
        summary: 'A comprehensive guide for IT professionals moving from basic prompting to building autonomous agents. This session covered "Prompting Mastery" using the 5 building blocks (Role, Task, Context, Output, Instructions), compared major models (Gemini, Claude, ChatGPT), and provided a step-by-step framework for building agents in Microsoft Copilot Studio. The workshop emphasized the practical application of AI, shifting from passive usage to active integration in enterprise workflows.',
        highlights: [
            'Prompting Mastery: The 6-layer framework for precise, predictable AI output',
            'Model Comparison: Strengths of Gemini (Multimodal) vs Claude (Coding) vs ChatGPT (Versatile)',
            'Building Agents: A 5-step process from Use-Case to Adaptive Cards in Copilot Studio',
            'Security & Best Practices: Guardrails for deploying agents in enterprise environments'
        ]
    }
];

const Speaking: React.FC = () => {
    const navigate = useNavigate();
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="speaking-container">
            <button onClick={() => navigate(-1)} className="btn-back-speaking">
                <FaArrowLeft /> Back
            </button>

            <div className="speaking-header">
                <h1 className="speaking-title">Speaking & Presentations</h1>
                <p className="speaking-description">
                    Core insights and summaries from my recent technical talks, workshops, and product demonstrations.
                </p>
            </div>

            <div className="presentations-list">
                {presentations.map((item) => (
                    <div key={item.id} className={`presentation-item ${expandedId === item.id ? 'expanded' : ''}`}>
                        <div className="presentation-summary-header" onClick={() => toggleExpand(item.id)}>
                            <div className="presentation-icon-wrapper">
                                {item.icon}
                            </div>
                            <div className="presentation-main-info">
                                <span className="presentation-meta">{item.type} • {item.date}</span>
                                <h3 className="presentation-title">{item.title}</h3>
                            </div>
                            <div className="presentation-expand-icon">
                                {expandedId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>

                        <div className="presentation-details">
                            <div className="presentation-summary-text">
                                <p>{item.summary}</p>
                            </div>
                            <div className="presentation-highlights">
                                <h4>Key Takeaways</h4>
                                <ul>
                                    {item.highlights.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="background-animation">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    );
};

export default Speaking;
