import React from 'react';
import { FaArrowLeft, FaCalendar, FaClock, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Workshops.css';

const Workshops: React.FC = () => {
    const navigate = useNavigate();

    const workshops = [
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

    return (
        <div className="workshops-container">
            <button onClick={() => navigate(-1)} className="btn-back-workshops">
                <FaArrowLeft /> Back
            </button>

            <div className="workshops-hero">
                <h1 className="workshops-title">AI Workshops</h1>
                <p className="workshops-subtitle">
                    Hands-on learning experiences to accelerate your AI journey
                </p>
            </div>

            <div className="workshops-grid">
                {workshops.map((workshop, index) => (
                    <div
                        className="workshop-card"
                        key={workshop.id}
                        style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
                    >
                        <div className="workshop-image-container">
                            <img src={workshop.image} alt={workshop.title} className="workshop-image" />
                            <div className="workshop-status-badge">{workshop.status === 'upcoming' ? 'Coming Soon' : 'Available'}</div>
                        </div>

                        <div className="workshop-content">
                            <h2 className="workshop-title">{workshop.title}</h2>
                            <p className="workshop-description">{workshop.description}</p>

                            <div className="workshop-meta">
                                <div className="meta-item">
                                    <FaClock />
                                    <span>{workshop.duration}</span>
                                </div>
                                <div className="meta-item">
                                    <FaUsers />
                                    <span>{workshop.participants}</span>
                                </div>
                                <div className="meta-item">
                                    <FaCalendar />
                                    <span>{workshop.date}</span>
                                </div>
                            </div>

                            <div className="workshop-level">
                                <span className="level-badge">{workshop.level}</span>
                            </div>

                            <div className="workshop-topics">
                                <h3>What You'll Learn:</h3>
                                <ul>
                                    {workshop.topics.map((topic, idx) => (
                                        <li key={idx}>✓ {topic}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="workshop-btn" disabled={workshop.status === 'upcoming'}>
                                {workshop.status === 'upcoming' ? 'Notify Me' : 'Register Now'} <FaExternalLinkAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="workshops-cta">
                <h2>Want a custom workshop for your team?</h2>
                <p>I offer tailored AI training sessions for companies and organizations</p>
                <button onClick={() => navigate('/contact-me')} className="cta-btn">
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default Workshops;
