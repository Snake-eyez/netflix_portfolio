import React from 'react';
import { FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Speaking.css';
import BackButton from '../components/BackButton';

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
];

const Speaking: React.FC = () => {
    const navigate = useNavigate();
    const [expandedId, setExpandedId] = React.useState<string | null>('1');

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="speaking-container">
            <BackButton />

            {/* Background Animation */}
            <div className="background-animation">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

            <div className="speaking-header">
                <h1 className="speaking-title">Speaking & Workshops</h1>
                <p className="speaking-description">
                    Sharing insights on AI, technology, and the future of work through interactive sessions and strategic workshops.
                </p>
            </div>

            <div className="presentations-list">
                {presentations.map((item) => (
                    <div
                        key={item.id}
                        className={`presentation-item ${expandedId === item.id ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(item.id)}
                    >
                        <div className="presentation-summary-header">
                            <div className="presentation-icon-wrapper">
                                {item.icon}
                            </div>
                            <div className="presentation-main-info">
                                <span className="presentation-meta">{item.type} • {item.date}</span>
                                <h3 className="presentation-title">{item.title}</h3>
                            </div>
                            <div className="presentation-expand-icon">
                                ▼
                            </div>
                        </div>

                        <div className="presentation-details">
                            <div className="presentation-summary-text">
                                {item.summary}
                            </div>
                            <div className="presentation-highlights">
                                4<h4>Key Takeaways</h4>
                                <ul>
                                    {item.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speaking;
