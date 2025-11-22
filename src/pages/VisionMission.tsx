import React from 'react';
import { FaArrowLeft, FaRocket, FaBell, FaEye, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css'; // Reusing the same CSS

const VisionMission: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-container">
            <button onClick={() => navigate(-1)} className="btn-back-coming-soon">
                <FaArrowLeft /> Back
            </button>

            <div className="coming-soon-content">
                <div className="rocket-icon">
                    <FaEye />
                </div>
                <h1 className="coming-soon-title">Vision & Mission</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    Defining the path forward. My personal manifesto for impact, innovation, and the future of technology.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaLightbulb /></div>
                        <h3>Vision</h3>
                        <p>A world empowered by ethical and accessible AI</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaHandshake /></div>
                        <h3>Mission</h3>
                        <p>Bridging the gap between human creativity and machine intelligence</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaRocket /></div>
                        <h3>Impact</h3>
                        <p>Building systems that solve real-world problems</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Read the full manifesto when it launches</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Publishing: Q3 2025</p>
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

export default VisionMission;
