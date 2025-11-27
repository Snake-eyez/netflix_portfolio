import React from 'react';
import { FaArrowLeft, FaBolt, FaHeart, FaUsers, FaSync, FaEye, FaGlobe, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './VisionMission.css';

const VisionMission: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="vision-mission-container">
            <button onClick={() => navigate(-1)} className="btn-back-vision">
                <FaArrowLeft /> Back to Dashboard
            </button>

            {/* Header Section */}
            <div className="vision-header">
                <h1 className="vision-page-title">Vision & Mission</h1>
                <p className="vision-page-subtitle">
                    Shaping the future through conscious innovation and human-centered technology
                </p>
            </div>

            {/* Mission Section */}
            <div className="vision-section">
                <h2 className="section-title">My Mission</h2>
                <div className="mission-grid">
                    <div className="mission-card">
                        <div className="icon-box">
                            <FaBolt />
                        </div>
                        <h3>Empower</h3>
                        <p>
                            I empower businesses to harness the full potential of AI and automation,
                            transforming their operations and driving unprecedented growth
                        </p>
                    </div>
                    <div className="mission-card">
                        <div className="icon-box">
                            <FaHeart />
                        </div>
                        <h3>Inspire</h3>
                        <p>
                            I inspire leaders to embrace AI transformation, showing them how technology
                            can amplify human potential rather than replace it
                        </p>
                    </div>
                    <div className="mission-card">
                        <div className="icon-box">
                            <FaUsers />
                        </div>
                        <h3>Connect</h3>
                        <p>
                            I connect businesses with cutting-edge AI solutions, bridging the gap
                            between complex technology and practical business needs
                        </p>
                    </div>
                    <div className="mission-card">
                        <div className="icon-box">
                            <FaSync />
                        </div>
                        <h3>Transform</h3>
                        <p>
                            I transform how organizations approach AI adoption, making advanced
                            technology accessible and actionable for every business
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="vision-section">
                <h2 className="section-title">My Vision</h2>
                <div className="vision-grid">
                    <div className="vision-card">
                        <div className="vision-icon-box bg-red">
                            <FaBolt />
                        </div>
                        <div className="vision-content">
                            <h3>AI-First Business Transformation</h3>
                            <p>
                                I envision a world where every business seamlessly integrates AI to
                                amplify human potential and drive unprecedented success
                            </p>
                        </div>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon-box bg-teal">
                            <FaEye />
                        </div>
                        <div className="vision-content">
                            <h3>Conscious Technology Integration</h3>
                            <p>
                                I believe in exploring the intersection of technology and human
                                consciousness to create more meaningful business solutions
                            </p>
                        </div>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon-box bg-blue">
                            <FaGlobe />
                        </div>
                        <div className="vision-content">
                            <h3>Global Business Impact</h3>
                            <p>
                                I'm committed to using AI technology to solve business challenges
                                and create positive global impact
                            </p>
                        </div>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon-box bg-pink">
                            <FaShieldAlt />
                        </div>
                        <div className="vision-content">
                            <h3>Ethical AI Leadership</h3>
                            <p>
                                I ensure that AI technology serves humanity's highest values while
                                delivering exceptional business results
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="vision-section">
                <div className="philosophy-section">
                    <div className="circle-decoration circle-1"></div>
                    <div className="circle-decoration circle-2"></div>

                    <h2 className="philosophy-title">My Core Philosophy</h2>

                    <div className="quote-block">
                        <p className="quote-text">
                            "I believe technology should serve humanity's highest aspirations, not just our immediate needs.
                            Every innovation I create is guided by wisdom, compassion, and a deep understanding of what it
                            means to be human in an increasingly connected world."
                        </p>
                    </div>

                    <div className="philosophy-content">
                        <p>
                            I believe that the future belongs to those who can seamlessly blend human intuition with artificial intelligence,
                            creating solutions that are both powerful and profoundly human. Through Outstandr, I'm making this vision a
                            reality for businesses worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
