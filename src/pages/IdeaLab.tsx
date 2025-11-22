import React from 'react';
import { FaArrowLeft, FaRocket, FaBell, FaLightbulb, FaMicrochip, FaBrain } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const IdeaLab: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-container">
            <button onClick={() => navigate(-1)} className="btn-back-coming-soon">
                <FaArrowLeft /> Back
            </button>

            <div className="coming-soon-content">
                <div className="rocket-icon">
                    <FaLightbulb />
                </div>
                <h1 className="coming-soon-title">Idea Lab</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    A playground for experimental concepts, future tech explorations, and innovative breakthroughs.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaBrain /></div>
                        <h3>Brainstorming</h3>
                        <p>Raw ideas and creative thinking processes</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaMicrochip /></div>
                        <h3>Prototypes</h3>
                        <p>Early-stage technical demos and POCs</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaRocket /></div>
                        <h3>Moonshots</h3>
                        <p>Ambitious projects aiming for 10x impact</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Be the first to see what's cooking</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Opening: Q3 2025</p>
                </div>
            </div>

            {/* Animated Background */}
            <div className="background-animation">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
        </div>
    );
};

export default IdeaLab;
