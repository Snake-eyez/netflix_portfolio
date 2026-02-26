import React, { useState } from 'react';
import { FaLightbulb, FaCogs, FaChalkboardTeacher, FaChevronDown, FaChevronUp, FaNetworkWired, FaChartLine } from 'react-icons/fa';
import './Methodology.css';
import BackButton from '../components/BackButton';

interface MethodologyStep {
    id: string;
    title: string;
    icon: React.ReactNode;
    summary: string;
    highlights: string[];
}

const methodologySteps: MethodologyStep[] = [
    {
        id: '1',
        title: 'Context Engineering',
        icon: <FaLightbulb />,
        summary: 'We start by deep-diving into your specific business context. This isn\'t just about data; it\'s about understanding your workflows, culture, and strategic goals to ensure AI solutions are relevant and impactful.',
        highlights: [
            'Business Goal Alignment: Mapping AI potential to your KABs',
            'Workflow Analysis: Identifying bottlenecks and automation opportunities',
            'Data Readiness Assessment: Evaluating quality and availability of data',
            'Cultural Fit: Ensuring solutions align with your team\'s way of working'
        ]
    },
    {
        id: '2',
        title: 'AI Architecture & System Design',
        icon: <FaNetworkWired />,
        summary: 'Designing a robust and scalable AI architecture. We select the right models (LLMs, SLMs) and design the system infrastructure to support your specific needs, ensuring security and efficiency.',
        highlights: [
            'Model Selection: Choosing the right AI models for the task',
            'Infrastructure Design: Cloud vs. On-premise solutions',
            'Security & Compliance: Ensuring data privacy and regulatory adherence',
            'Scalability Planning: Designing for future growth'
        ]
    },
    {
        id: '3',
        title: 'Integration',
        icon: <FaCogs />,
        summary: 'Seamlessly integrating AI agents and tools into your existing ecosystem. We ensure that new AI capabilities work harmoniously with your current software and platforms.',
        highlights: [
            'API Integration: Connecting AI to your CRM, ERP, and other tools',
            'Workflow Automation: Automating hand-offs between systems',
            'UI/UX Integration: Embedding AI into familiar interfaces',
            'Testing & Validation: Rigorous testing of integration points'
        ]
    },
    {
        id: '4',
        title: 'Training & Automation',
        icon: <FaChalkboardTeacher />,
        summary: 'Empowering your team and automating processes. We provide comprehensive training to ensure your team can effectively use AI tools, while deploying agents to handle repetitive tasks.',
        highlights: [
            'Team Training: Hands-on workshops and documentation',
            'Agent Deployment: Rolling out autonomous agents',
            'Change Management: Supporting the team through the transition',
            'Performance Monitoring: Tracking agent and team performance'
        ]
    },
    {
        id: '5',
        title: 'Optimization & Scalable Growth',
        icon: <FaChartLine />,
        summary: 'Continuous improvement data-driven growth. We monitor performance, gather feedback, and iterate on the solutions to maximize ROI and scale success across the organization.',
        highlights: [
            'Continuous Monitoring: Real-time performance tracking',
            'Feedback Loops: Iterating based on user feedback',
            'ROI Analysis: Measuring the impact on business metrics',
            'Scaling Strategy: Expanding successful pilots to the wider organization'
        ]
    }
];

const Methodology: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="methodology-container nf-page nf-theme-vision">
            <BackButton />

            <div className="methodology-header nf-hero">
                <h1 className="methodology-title">My Methodology</h1>
                <p className="methodology-description">
                    A proven 5-step framework for implementing impactful and scalable AI solutions.
                </p>
            </div>

            <div className="presentations-list">
                {methodologySteps.map((item) => (
                    <div key={item.id} className={`presentation-item ${expandedId === item.id ? 'expanded' : ''}`}>
                        <div className="presentation-summary-header" onClick={() => toggleExpand(item.id)}>
                            <div className="presentation-icon-wrapper">
                                {item.icon}
                            </div>
                            <div className="presentation-main-info">
                                <span className="presentation-meta">Step {item.id}</span>
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
                                <h4>Key Focus Areas</h4>
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

export default Methodology;
