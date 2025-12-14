import React from 'react';
import { FaArrowLeft, FaFilePowerpoint, FaFilePdf, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Speaking.css';

interface Presentation {
    id: string;
    title: string;
    type: 'PPTX' | 'PDF';
    description: string;
    filename: string;
    date: string;
}

const presentations: Presentation[] = [
    {
        id: '1',
        title: 'Prototype Presentation',
        type: 'PPTX',
        description: 'A comprehensive detailed presentation showcasing the initial prototype development, core features, and design decisions.',
        filename: 'Presentatie van prototype.pptx',
        date: '2025'
    },
    {
        id: '2',
        title: 'AI Workflow & Multi-Agent Systems',
        type: 'PPTX',
        description: 'Exploring the architecture and implementation of autonomous multi-agent systems for optimized workflow automation.',
        filename: 'ai_work_flowgrammers_multi_agent_20251106150313.pptx',
        date: 'Nov 2025'
    },
    {
        id: '3',
        title: 'AI Workshop: Hands-On',
        type: 'PDF',
        description: 'Practical workbook and materials for the interactive AI workshop, covering implementation guides and exercises.',
        filename: 'ai_workshop_hands_on.pdf',
        date: '2025'
    }
];

const Speaking: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="speaking-container">
            <button onClick={() => navigate(-1)} className="btn-back-speaking">
                <FaArrowLeft /> Back
            </button>

            <div className="speaking-header">
                <h1 className="speaking-title">Speaking & Presentations</h1>
                <p className="speaking-description">
                    Access resources, slide decks, and materials from recent talks, workshops, and technical deep dives.
                </p>
            </div>

            <div className="presentations-grid">
                {presentations.map((item) => (
                    <div key={item.id} className="presentation-card">
                        <div className="card-icon">
                            {item.type === 'PPTX' ? <FaFilePowerpoint /> : <FaFilePdf />}
                        </div>
                        <div className="card-content">
                            <span className="card-type">{item.type} • {item.date}</span>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <a
                            href={`/presentation/${item.filename}`}
                            download
                            className="download-btn"
                        >
                            <FaDownload /> Download {item.type}
                        </a>
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
