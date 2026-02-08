import React from 'react';
import { FaArrowLeft, FaHeart, FaBuilding, FaGlobe, FaBullseye, FaUsers, FaRocket, FaInfinity } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Outstandr.css';

import BackButton from '../components/BackButton';

const Outstandr: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="outstandr-container">
            <BackButton />

            {/* Header Section */}
            <div className="outstandr-header">
                <h1 className="outstandr-page-title">Outstandr Vision</h1>
                <p className="outstandr-page-subtitle">
                    Co-foundeder • Building the future where AI creates endlesspossibilities
                </p>
            </div>

            {/* Vision Card Section */}
            <div className="vision-card-section">
                <div className="outstandr-vision-card">
                    <h2 className="vision-card-title">My Vision for Outstandr</h2>
                    <p className="vision-text">
                        As co-founder of Outstandr, I envision a world where AI transformation is accessible to every organization.
                        My vision combines 20+ years of IT expertise with a deep understanding of human potential.
                        I believe AI doesn't replace human creativity but amplifies it, where businesses can seamlessly
                        integrate advanced technology to drive unprecedented growth and success.
                    </p>

                    <div className="role-box">
                        <div className="role-title">
                            <FaHeart /> My Role as Co-Founder
                        </div>
                        <p className="role-text">
                            Creating fusion between AI transformation and the expansion at Sonex Partners, in my work at Outstandr
                            spans from AI integration strategy to spiritual evolution to ensure we create growth and the Outstandr
                            mission of exceptional AI transformation.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-box">
                            <div className="stat-value">12+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value">9+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value">42%</div>
                            <div className="stat-label">Avg Efficiency Gain</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value"><FaInfinity /></div>
                            <div className="stat-label">Possibilities</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Pillars Section */}
            <div className="pillars-section">
                <h2 className="section-heading">Strategic Pillars</h2>
                <div className="pillars-grid">
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-red">
                            <FaBuilding />
                        </div>
                        <h3>AI Business Transformation</h3>
                        <p>
                            We are transforming businesses through intelligent AI adoption and digital transformation
                            that drives competitive advantage and measurable ROI.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-blue">
                            <FaGlobe />
                        </div>
                        <h3>AI Training & Education</h3>
                        <p>
                            I'm building a worldwide network of AI-savvy leaders through comprehensive training
                            programs and the University of Outstandr.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-teal">
                            <FaBullseye />
                        </div>
                        <h3>Conscious AI Integration</h3>
                        <p>
                            We are pioneering in the intersection of technology to create
                            more meaningful and purposeful AI solutions.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-purple">
                            <FaUsers />
                        </div>
                        <h3>Future of Business Revolution</h3>
                        <p>
                            We are redefining how business and AI collaboration in the biggest disruption of the
                            human experience and leadership data.
                        </p>
                    </div>
                </div>
            </div>

            {/* Journey to the Future Section */}
            <div className="timeline-section">
                <h2 className="section-heading">Journey to the Future</h2>

                <div className="timeline-item">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">
                        <h3>Foundation Building</h3>
                        <p>Building Outstandr as an international center of excellence with AI obsessives and business builders.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">
                        <h3>Scale & Expand</h3>
                        <ul className="timeline-list">
                            <li>• Expand Outstandr to major business markets</li>
                            <li>• Scale transformative AI development excellence</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2026</div>
                    <div className="timeline-content">
                        <h3>Innovation Leadership</h3>
                        <ul className="timeline-list">
                            <li>• Establish Outstandr thought leaders in business transformation</li>
                            <li>• Launch immersive AI technology products for businesses</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2027+</div>
                    <div className="timeline-content">
                        <h3>Global Transformation</h3>
                        <ul className="timeline-list">
                            <li>• Establish multiple initiatives through AI solutions</li>
                            <li>• Establish new paradigms for humanity business transformation</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <h2 className="cta-title">Join My Vision</h2>
                <p className="cta-text">
                    Be part of my mission to transform businesses through AI. Let's make extraordinary
                    transformation for growth. Let's build the future together.
                </p>
                <div className="cta-buttons">
                    <a href="https://www.outstandr.com" target="_blank" rel="noopener noreferrer" className="btn-join">
                        <FaRocket /> JOIN THE NETWORK
                    </a>
                    <a href="https://www.outstandr.com/about" target="_blank" rel="noopener noreferrer" className="btn-learn">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Outstandr;
