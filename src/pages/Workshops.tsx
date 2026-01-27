import React from 'react';
import { FaArrowLeft, FaCalendar, FaClock, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { workshops } from '../data/workshopsData';
import './Workshops.css';

export default function Workshops(): React.JSX.Element {
    const navigate = useNavigate();

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
}

