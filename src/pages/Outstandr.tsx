import React from 'react';
import { FaBuilding, FaBullseye, FaGlobe, FaHeart, FaInfinity, FaRocket, FaUsers } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import './Outstandr.css';

const Outstandr: React.FC = () => {
    return (
        <div className="outstandr-container nf-page nf-theme-vision">
            <BackButton />

            <div className="outstandr-header nf-hero">
                <h1 className="outstandr-page-title">Outstandr Vision</h1>
                <p className="outstandr-page-subtitle">
                    Co-founder | Building the future where AI creates endless possibilities
                </p>
            </div>

            <div className="vision-card-section">
                <div className="outstandr-vision-card">
                    <h2 className="vision-card-title">My Vision for Outstandr</h2>
                    <p className="vision-text">
                        As co-founder of Outstandr, I envision a world where AI transformation is accessible to every organization.
                        My vision combines 20+ years of IT expertise with a deep understanding of human potential.
                        I believe AI does not replace human creativity, it amplifies it.
                    </p>

                    <div className="role-box">
                        <div className="role-title">
                            <FaHeart /> My Role as Co-Founder
                        </div>
                        <p className="role-text">
                            I connect AI transformation strategy with Sonex Partners expansion goals. My work spans AI integration,
                            operating model design, and long-term capability building so organizations can scale with clarity and
                            measurable business value.
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

            <div className="pillars-section">
                <h2 className="section-heading">Strategic Pillars</h2>
                <div className="pillars-grid">
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-red">
                            <FaBuilding />
                        </div>
                        <h3>AI Business Transformation</h3>
                        <p>
                            We transform businesses through practical AI adoption and digital systems that drive
                            measurable ROI and operational resilience.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-blue">
                            <FaGlobe />
                        </div>
                        <h3>AI Training & Education</h3>
                        <p>
                            I build a worldwide network of AI-ready leaders through focused training programs
                            and the University of Outstandr.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-teal">
                            <FaBullseye />
                        </div>
                        <h3>Conscious AI Integration</h3>
                        <p>
                            We innovate at the intersection of technology and human-centered design to create
                            meaningful, ethical, and practical AI solutions.
                        </p>
                    </div>
                    <div className="pillar-card">
                        <div className="pillar-icon-box bg-purple">
                            <FaUsers />
                        </div>
                        <h3>Future of Business</h3>
                        <p>
                            We are redefining how leadership teams and AI systems collaborate during one of the
                            biggest shifts in modern business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="timeline-section">
                <h2 className="section-heading">Journey to the Future</h2>

                <div className="timeline-item">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">
                        <h3>Foundation Building</h3>
                        <p>Built Outstandr as an international center of excellence with AI obsessives and business builders.</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">
                        <h3>Scale & Expand</h3>
                        <ul className="timeline-list">
                            <li>Expand Outstandr into major business markets</li>
                            <li>Scale transformative AI delivery excellence</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2026</div>
                    <div className="timeline-content">
                        <h3>Innovation Leadership</h3>
                        <ul className="timeline-list">
                            <li>Establish Outstandr as a thought leader in business transformation</li>
                            <li>Launch immersive AI technology products for businesses</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2027+</div>
                    <div className="timeline-content">
                        <h3>Global Transformation</h3>
                        <ul className="timeline-list">
                            <li>Launch multiple transformation initiatives powered by AI</li>
                            <li>Create new paradigms for human-centered business transformation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h2 className="cta-title">Join My Vision</h2>
                <p className="cta-text">
                    Be part of my mission to transform businesses through AI. Let us build extraordinary outcomes
                    for growth, resilience, and long-term impact.
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
