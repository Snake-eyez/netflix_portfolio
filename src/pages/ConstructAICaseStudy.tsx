import React from 'react';
import { FaChartLine, FaRobot, FaUsers, FaClock } from 'react-icons/fa';
import './CaseStudy.css';

import BackButton from '../components/BackButton';

const ConstructAICaseStudy: React.FC = () => {
    const problemSolutions = [
        {
            problem: "77% of construction projects finish late",
            solution: "AI Predictive Scheduler",
            description: "Machine learning analyzes historical data, weather patterns, and resource availability to predict delays before they happen.",
            impact: "Early warnings with 85% accuracy"
        },
        {
            problem: "52% of rework due to miscommunication",
            solution: "Unified Communication Hub",
            description: "Centralized platform with AI chatbots that provide instant answers and route complex queries to the right team members.",
            impact: "50% reduction in response time"
        },
        {
            problem: "83% struggle with payment delays",
            solution: "AI Invoice Management",
            description: "Automated OCR processing extracts invoice data, matches with purchase orders, and routes approvals automatically.",
            impact: "83% faster payment processing"
        },
        {
            problem: "30% productivity loss from poor resource allocation",
            solution: "Resource Optimizer",
            description: "AI-powered system allocates labor, equipment, and materials based on skills, availability, and project priorities.",
            impact: "30% improvement in productivity"
        }
    ];

    return (
        <div className="case-study-container">
            {/* Hero Section */}
            <div className="case-study-hero">
                <BackButton />

                <div className="hero-content">
                    <span className="project-tag">AI-Powered Construction Management</span>
                    <h1 className="project-title">ConstructAI</h1>
                    <p className="project-subtitle">
                        Eliminating inefficiencies in construction projects through intelligent automation
                        and predictive analytics.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon"><FaChartLine /></div>
                        <div className="metric-value">$7.4B</div>
                        <div className="metric-label">Market Size</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaRobot /></div>
                        <div className="metric-value">6 AI Modules</div>
                        <div className="metric-label">Core Features</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaUsers /></div>
                        <div className="metric-value">100+</div>
                        <div className="metric-label">Concurrent Users</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaClock /></div>
                        <div className="metric-value">6 Months</div>
                        <div className="metric-label">Development Time</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="case-study-content">

                {/* The Challenge */}
                <section className="content-section">
                    <h2 className="section-title">The Challenge</h2>
                    <div className="section-content">
                        <p>
                            The construction industry loses billions annually due to delays, miscommunication,
                            and inefficient resource management. Traditional project management tools don't address
                            the root causes—they just track problems after they occur.
                        </p>
                        <p>
                            ConstructAI was built to change that by predicting issues before they happen and
                            automating the workflows that slow teams down.
                        </p>
                    </div>
                </section>

                {/* Problem → Solution */}
                <section className="content-section">
                    <h2 className="section-title">Problems We Solved</h2>
                    <div className="solutions-list">
                        {problemSolutions.map((item, index) => (
                            <div className="solution-item" key={index}>
                                <div className="solution-header">
                                    <span className="solution-number">{index + 1}</span>
                                    <div>
                                        <div className="solution-problem">{item.problem}</div>
                                        <h3 className="solution-title">{item.solution}</h3>
                                    </div>
                                </div>
                                <p className="solution-text">{item.description}</p>
                                <div className="solution-result">✓ {item.impact}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className="content-section">
                    <h2 className="section-title">Real-World Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-number">77%</div>
                            <div className="impact-label">Reduction in project delays</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">52%</div>
                            <div className="impact-label">Less rework from miscommunication</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">13%</div>
                            <div className="impact-label">Time saved on admin work</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">30%</div>
                            <div className="impact-label">Productivity improvement</div>
                        </div>
                    </div>
                </section>

                {/* My Role */}
                <section className="content-section">
                    <h2 className="section-title">My Role</h2>
                    <div className="role-content">
                        <div className="role-item">
                            <h3>Full-Stack Development</h3>
                            <p>Architected and built the entire platform from database design to responsive UI components using React, TypeScript, and Supabase.</p>
                        </div>
                        <div className="role-item">
                            <h3>AI Integration</h3>
                            <p>Implemented machine learning models for predictive analytics, OCR for invoice processing, and computer vision for progress tracking.</p>
                        </div>
                        <div className="role-item">
                            <h3>User Experience Design</h3>
                            <p>Designed intuitive workflows for field teams and project managers, ensuring the platform works seamlessly on mobile and desktop.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ConstructAICaseStudy;
