import React from 'react';
import { FaArrowLeft, FaVideo, FaRobot, FaHeadset, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './CaseStudy.css';

import BackButton from '../components/BackButton';

const AIAvatarCaseStudy: React.FC = () => {
    const navigate = useNavigate();

    const problemSolutions = [
        {
            problem: "IT support requires constant human availability 24/7",
            solution: "AI Avatar Agent with Screen Sharing",
            description: "Built an AI-powered avatar that can see users' screens in real-time, diagnose issues visually, and provide step-by-step guidance just like a human support agent.",
            impact: "24/7 availability, instant response"
        },
        {
            problem: "Manual user account management is time-consuming",
            solution: "Automated Admin Tools",
            description: "Integrated backend access allowing the AI to perform admin tasks like unblocking users, resetting passwords, and managing permissions autonomously.",
            impact: "90% reduction in admin workload"
        },
        {
            problem: "Support tickets lack context and follow-up",
            solution: "Intelligent Ticket Generation",
            description: "AI automatically creates detailed support tickets with conversation summaries, screenshots, and sends follow-up emails with solution steps to users.",
            impact: "100% ticket documentation accuracy"
        },
        {
            problem: "Users struggle with complex login formats and errors",
            solution: "Visual Error Detection",
            description: "AI analyzes shared screens to identify formatting errors, typos, and system messages, providing immediate corrections and guidance.",
            impact: "85% first-contact resolution rate"
        }
    ];

    return (
        <div className="case-study-container">
            {/* Hero Section */}
            <div className="case-study-hero">
                <BackButton />

                <div className="hero-content">
                    <span className="project-tag">Internal ChatiX AI Project</span>
                    <h1 className="project-title">AI Avatar IT Support Agent</h1>
                    <p className="project-subtitle">
                        Revolutionizing IT support with an AI avatar that sees, understands, and resolves
                        technical issues through natural conversation and screen sharing.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon"><FaHeadset /></div>
                        <div className="metric-value">24/7</div>
                        <div className="metric-label">Support Availability</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaVideo /></div>
                        <div className="metric-value">Real-time</div>
                        <div className="metric-label">Screen Analysis</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaRobot /></div>
                        <div className="metric-value">85%</div>
                        <div className="metric-label">First-Contact Resolution</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaClock /></div>
                        <div className="metric-value">&lt;2 min</div>
                        <div className="metric-label">Average Resolution Time</div>
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
                            Traditional IT support is expensive, slow, and limited by human availability. Users wait
                            in queues, struggle to explain technical issues over chat, and support teams spend hours
                            on repetitive tasks like password resets and account unlocks.
                        </p>
                        <p>
                            ChatiX needed an intelligent solution that could provide instant, visual support while
                            maintaining the personal touch of human interaction—available 24/7 without the overhead.
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

                {/* How It Works */}
                <section className="content-section">
                    <h2 className="section-title">How It Works</h2>
                    <div className="role-content">
                        <div className="role-item">
                            <h3>1. Natural Conversation</h3>
                            <p>Users interact with a lifelike AI avatar through voice. The avatar uses OpenAI's GPT-4 for natural language understanding and responds with human-like empathy and clarity.</p>
                        </div>
                        <div className="role-item">
                            <h3>2. Visual Problem Diagnosis</h3>
                            <p>Users share their screen, and the AI analyzes it in real-time using computer vision to identify error messages, formatting issues, and UI problems—just like a human would.</p>
                        </div>
                        <div className="role-item">
                            <h3>3. Autonomous Problem Resolution</h3>
                            <p>The AI executes admin tools to unblock accounts, reset passwords, or update permissions. It then auto-generates tickets and emails users with detailed solution summaries.</p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="content-section">
                    <h2 className="section-title">Key Capabilities</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-label">Screen Sharing</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>ARKit Vision</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Voice Interaction</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>LiveKit</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">AI Avatar</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>Beyond Presence</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Admin Tools</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>RPC Methods</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Ticket System</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>Auto-Generated</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Email Summaries</div>
                            <div className="impact-number" style={{ fontSize: '1.5rem' }}>Gmail API</div>
                        </div>
                    </div>
                </section>

                {/* My Role */}
                <section className="content-section">
                    <h2 className="section-title">My Role</h2>
                    <div className="role-content">
                        <div className="role-item">
                            <h3>Full-Stack Development</h3>
                            <p>Built the entire system from scratch using Python, LiveKit for voice agents, and React for the custom frontend. Integrated OpenAI GPT-4, Beyond Presence avatars, and Gmail API.</p>
                        </div>
                        <div className="role-item">
                            <h3>AI Agent Architecture</h3>
                            <p>Designed the conversational flow, tool integration (unblock user, send email), and RPC methods for real-time frontend notifications. Implemented screen-sharing with visual analysis.</p>
                        </div>
                        <div className="role-item">
                            <h3>UX & Prompt Engineering</h3>
                            <p>Crafted detailed system prompts to ensure the AI provides empathetic, step-by-step guidance. Designed the frontend with visual feedback for tool execution (notifications, typing sounds).</p>
                        </div>
                    </div>
                </section>

                {/* Technical Stack */}
                <section className="content-section">
                    <h2 className="section-title">Technical Highlights</h2>
                    <div className="section-content">
                        <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#d2d2d2' }}>
                            <li><strong>Voice Agent:</strong> LiveKit + OpenAI GPT-4 for real-time conversation</li>
                            <li><strong>AI Avatar:</strong> Beyond Presence for lifelike video avatars</li>
                            <li><strong>Screen Sharing:</strong> ARKit-enabled visual analysis of user screens</li>
                            <li><strong>Function Tools:</strong> Python-based admin tools (unblock user, send email)</li>
                            <li><strong>Frontend:</strong> React with custom UI and RPC handlers for live notifications</li>
                            <li><strong>Audio Feedback:</strong> Typing sounds during tool execution for natural UX</li>
                            <li><strong>Email Integration:</strong> Gmail API for automated ticket summaries</li>
                        </ul>
                    </div>
                </section>

                {/* Impact */}
                <section className="content-section">
                    <h2 className="section-title">Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-number">90%</div>
                            <div className="impact-label">Reduction in admin workload</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">85%</div>
                            <div className="impact-label">First-contact resolution rate</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">&lt;2 min</div>
                            <div className="impact-label">Average resolution time</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-number">24/7</div>
                            <div className="impact-label">Continuous availability</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AIAvatarCaseStudy;
