import React from 'react';
import { FaArrowLeft, FaRocket, FaChartLine, FaCogs, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Outstandr.css';

const Outstandr: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="outstandr-container">
            <button onClick={() => navigate(-1)} className="btn-back-outstandr">
                <FaArrowLeft /> Back
            </button>

            <div className="outstandr-hero">
                <h1 className="outstandr-title">Outstandr</h1>
                <h2 className="outstandr-subtitle">From AI Tools to AI Ecosystems</h2>
                <p className="outstandr-mission">
                    Transform your business with AI. From quick wins to complete ecosystem transformation.
                    Partner with Outstandr for scalable AI infrastructure that grows with your business.
                </p>
            </div>

            <div className="outstandr-features">
                <div className="feature-card">
                    <div className="feature-icon"><FaRocket /></div>
                    <h3>Move 10x Faster</h3>
                    <p>Smash bottlenecks and accelerate your workflows with intelligent automation.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><FaChartLine /></div>
                    <h3>Scale Smarter</h3>
                    <p>Build AI systems that drive real results and clear the clutter so your team can focus on impact.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><FaCogs /></div>
                    <h3>Intelligent Infrastructure</h3>
                    <p>We turn processes into intelligent systems, built for businesses, entrepreneurs, and teams.</p>
                </div>
            </div>

            <div className="outstandr-cta-section">
                <h2>Ready to Transform?</h2>
                <p>Join the AI revolution and future-proof your business today.</p>
                <a href="https://www.outstandr.com" target="_blank" rel="noopener noreferrer" className="outstandr-btn">
                    Visit Outstandr.com
                </a>
            </div>
        </div>
    );
};

export default Outstandr;
