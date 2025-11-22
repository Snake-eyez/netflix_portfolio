import React from 'react';
import { FaArrowLeft, FaMicrophone, FaBell, FaUsers, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';

const Speaking: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-container">
            <button onClick={() => navigate(-1)} className="btn-back-coming-soon">
                <FaArrowLeft /> Back
            </button>

            <div className="coming-soon-content">
                <div className="rocket-icon">
                    <FaMicrophone />
                </div>
                <h1 className="coming-soon-title">Speaking Events</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    Upcoming talks, keynotes, and workshops on AI, technology, and future trends.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaUsers /></div>
                        <h3>Keynotes</h3>
                        <p>Inspiring talks for large audiences</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaCalendarAlt /></div>
                        <h3>Schedule</h3>
                        <p>Upcoming event dates and locations</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaGlobe /></div>
                        <h3>Global Reach</h3>
                        <p>Virtual and in-person engagements</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Get notified about new events</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Launching: Q3 2025</p>
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

export default Speaking;
