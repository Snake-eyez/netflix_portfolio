import React from 'react';
import { FaArrowLeft, FaRocket, FaBell, FaLaptopCode, FaGamepad, FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css'; // Reusing the same CSS

import BackButton from '../components/BackButton';

const InteractiveLearning: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-container">
            <BackButton />

            <div className="coming-soon-content">
                <div className="rocket-icon">
                    <FaLaptopCode />
                </div>
                <h1 className="coming-soon-title">Interactive Learning</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    Immersive, hands-on learning experiences designed to master complex topics through doing.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaGamepad /></div>
                        <h3>Gamified Labs</h3>
                        <p>Learn by playing and solving challenges</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaChalkboardTeacher /></div>
                        <h3>Live Sessions</h3>
                        <p>Interactive workshops and code-alongs</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaLaptopCode /></div>
                        <h3>Real-world Projects</h3>
                        <p>Build production-ready applications</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Join the waitlist for early access</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Launching: Q3 2026</p>
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

export default InteractiveLearning;
