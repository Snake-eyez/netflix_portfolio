import React from 'react';
import { FaBell, FaDatabase, FaFolderOpen, FaLock } from 'react-icons/fa';
import './ComingSoon.css'; // Reusing the same CSS

import BackButton from '../components/BackButton';

const ResourceVault: React.FC = () => {
    return (
        <div className="coming-soon-container nf-page nf-theme-explorer">
            <BackButton />

            <div className="coming-soon-content nf-hero">
                <div className="rocket-icon">
                    <FaDatabase />
                </div>
                <h1 className="coming-soon-title">Resource Vault</h1>
                <h2 className="coming-soon-subtitle">Coming Soon</h2>
                <p className="coming-soon-description">
                    A curated collection of tools, templates, and resources to accelerate your development and creativity.
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon"><FaFolderOpen /></div>
                        <h3>Curated Assets</h3>
                        <p>High-quality design and code assets</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaLock /></div>
                        <h3>Exclusive Content</h3>
                        <p>Premium guides and cheat sheets</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><FaDatabase /></div>
                        <h3>Knowledge Base</h3>
                        <p>Structured learning paths and references</p>
                    </div>
                </div>
                <div className="notify-section">
                    <p className="notify-text">Get notified when the vault opens</p>
                    <button className="notify-btn">
                        <FaBell /> Notify Me
                    </button>
                </div>
                <div className="timeline">
                    <p className="timeline-text">Opening: Q3 2026</p>
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

export default ResourceVault;
