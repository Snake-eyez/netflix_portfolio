import React from 'react';
import { FaMobileAlt, FaClock, FaShieldAlt, FaEuroSign } from 'react-icons/fa';
import './CaseStudy.css';

import BackButton from '../components/BackButton';

const LeaseScanCaseStudy: React.FC = () => {
    const problemSolutions = [
        {
            problem: "Damage assessments are subjective and lead to disputes",
            solution: "3D Baseline Capture",
            description: "iOS app creates a legally verifiable 3D baseline of the vehicle at handover using ARKit and photogrammetry, with cryptographic hashing and timestamping.",
            impact: "95% reduction in disputes"
        },
        {
            problem: "Manual inspections take 30+ minutes per vehicle",
            solution: "Guided 5-Minute Scan",
            description: "Pose-wizard guides users through optimal capture angles with real-time quality checks for lighting, blur, and coverage.",
            impact: "3-5 minute complete scan"
        },
        {
            problem: "Damage cost estimation is inconsistent",
            solution: "AI Cost Prediction",
            description: "Machine learning model trained on historical repair invoices provides cost ranges (P10/P50/P90) with repair method recommendations.",
            impact: "±15% accuracy on estimates"
        },
        {
            problem: "Offline locations can't perform inspections",
            solution: "Offline-First Architecture",
            description: "Full capture and preliminary detection works offline with automatic sync when connection is restored.",
            impact: "100% location coverage"
        }
    ];

    return (
        <div className="case-study-container">
            {/* Hero Section */}
            <div className="case-study-hero">
                <BackButton />

                <div className="hero-content">
                    <span className="project-tag">AI-Powered Vehicle Inspection</span>
                    <h1 className="project-title">LeaseScan</h1>
                    <p className="project-subtitle">
                        Eliminating disputes in vehicle lease returns through automated 3D damage detection
                        and AI-powered cost estimation.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="metrics-grid">
                    <div className="metric-card">
                        <div className="metric-icon"><FaClock /></div>
                        <div className="metric-value">3-5 min</div>
                        <div className="metric-label">Scan Time</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaMobileAlt /></div>
                        <div className="metric-value">iOS First</div>
                        <div className="metric-label">ARKit + LiDAR</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaShieldAlt /></div>
                        <div className="metric-value">95%</div>
                        <div className="metric-label">Dispute Reduction</div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-icon"><FaEuroSign /></div>
                        <div className="metric-value">±15%</div>
                        <div className="metric-label">Cost Accuracy</div>
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
                            Vehicle lease returns are plagued by subjective damage assessments that lead to costly
                            disputes between lessors and lessees. Manual inspections are time-consuming, inconsistent,
                            and lack verifiable proof of vehicle condition at handover.
                        </p>
                        <p>
                            LeaseScan was built to create an objective, legally defensible record of vehicle condition
                            using 3D scanning and AI-powered damage detection.
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
                            <h3>1. Baseline Capture</h3>
                            <p>At vehicle handover, the app guides users through a 9-pose capture sequence plus macro shots of wheels, windows, and mirrors. ARKit creates a high-resolution 3D mesh with textures.</p>
                        </div>
                        <div className="role-item">
                            <h3>2. AI Damage Detection</h3>
                            <p>When the vehicle returns, the same capture process runs. AI models detect 10 damage classes (scratches, dents, paint damage, glass chips, etc.) with 90%+ precision.</p>
                        </div>
                        <div className="role-item">
                            <h3>3. 3D Delta Report</h3>
                            <p>The system compares baseline and return scans, highlighting only new damage with 3D overlays, photos, measurements, and AI-generated cost estimates based on historical repair data.</p>
                        </div>
                    </div>
                </section>

                {/* Damage Detection */}
                <section className="content-section">
                    <h2 className="section-title">Damage Classes Detected</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <div className="impact-label">Scratches</div>
                            <div className="impact-number">≥2mm</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Dents</div>
                            <div className="impact-number">≥1mm</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Paint Damage</div>
                            <div className="impact-number">≥1cm²</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Glass Chips</div>
                            <div className="impact-number">≥2mm</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Wheel Damage</div>
                            <div className="impact-number">≥10mm</div>
                        </div>
                        <div className="impact-card">
                            <div className="impact-label">Tire Damage</div>
                            <div className="impact-number">≥5mm</div>
                        </div>
                    </div>
                </section>

                {/* My Role */}
                <section className="content-section">
                    <h2 className="section-title">My Role</h2>
                    <div className="role-content">
                        <div className="role-item">
                            <h3>Product Architecture</h3>
                            <p>Designed the end-to-end system architecture including iOS app with ARKit integration, ML pipeline for damage detection, and web portal for report viewing with 3D visualization.</p>
                        </div>
                        <div className="role-item">
                            <h3>AI Model Design</h3>
                            <p>Architected the damage detection pipeline using YOLOv8 for 2D segmentation and ICP alignment for 3D delta analysis. Designed the cost estimation model trained on historical repair invoices.</p>
                        </div>
                        <div className="role-item">
                            <h3>Legal Compliance</h3>
                            <p>Implemented cryptographic signing with SHA-256 hashing, external timestamping, and Apple App Attest for device attestation to ensure legal defensibility of reports.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Highlights */}
                <section className="content-section">
                    <h2 className="section-title">Technical Highlights</h2>
                    <div className="section-content">
                        <ul style={{ fontSize: '1.1rem', lineHeight: '2', color: '#d2d2d2' }}>
                            <li><strong>ARKit & LiDAR:</strong> iPhone 13 Pro+ for high-precision 3D capture</li>
                            <li><strong>Offline-First:</strong> Full functionality without internet, sync when available</li>
                            <li><strong>Quality Gates:</strong> Real-time checks for lighting, blur, reflections, and coverage</li>
                            <li><strong>Precision Thresholds:</strong> Configurable per damage class and client requirements</li>
                            <li><strong>Legal Audit Trail:</strong> Every step cryptographically signed with QR verification</li>
                            <li><strong>Cost ML Model:</strong> Gradient boosted trees with P10/P50/P90 confidence ranges</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LeaseScanCaseStudy;
