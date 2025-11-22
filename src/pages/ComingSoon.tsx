import React from 'react';
import { FaArrowLeft, FaRocket, FaBell, FaPalette, FaRobot, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-container">
            <button onClick={() => navigate(-1)} className="btn-back-coming-soon">
                <FaArrowLeft /> Back
            </button>

            <div className="coming-soon-content">
                <div className="rocket-icon">
                    <FaRocket />
                </div>
                <h1 className="coming-soon-title">Concept Projects</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    I'm working on something extraordinary. Innovative concept projects that push the boundaries of creativity, technology, and imagination.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaPalette /></div>
                        <h3>Creative Experiments</h3>
                        <p>Exploring new frontiers in art and technology</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaRobot /></div>
                        <h3>AI Innovations</h3>
                        <p>Cutting‑edge AI applications and prototypes</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaLightbulb /></div>
                        <h3>Visionary Ideas</h3>
                        <p>Concepts that challenge conventional thinking</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Want to be notified when we launch?</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Expected Launch: Q2 2025</p>
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

export default ComingSoon;
