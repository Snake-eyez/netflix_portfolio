import React from 'react';
import { FaPlay, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './WorkExperience.css';

const cvData = [
  {
    title: "AI Architect & Founder",
    company: "ChatiX / Chatix Creations",
    date: "Jul 2018 - Present",
    description: "I design and realize AI architectures for clients such as KPN, ThirdPlace, SME organizations, and internal ChatiX products. Responsibilities include: Designing multi-agent voice assistants, RAG pipelines, and local LLM integrations. Creating prompt kits and AI playbooks.",
    techStack: "Python, Mistral/Llama, RAG, Voicebots, Azure, Google Cloud"
  },
  {
    title: "AI Trainer & Adoption Specialist",
    company: "Capgemini / KPN / Municipality of Rotterdam",
    date: "Jan 2025 - Dec 2025",
    description: "Trainer for AI modules (Copilot, RAG, MCP). Delivered workshops for groups of 60+ participants on AI productivity and safe usage within public services.",
    techStack: "Copilot, Prompt Engineering, GenAI Training"
  },
  {
    title: "IT & Business Manager",
    company: "SpeedyKoeriers B.V.",
    date: "May 2023 - Nov 2025",
    description: "Managed the full IT and innovation agenda. Designed a custom CRM platform with AI agents for planning and communication. Realized API integration with PostNL and modernized processes with Llama-based models.",
    techStack: "PostgreSQL, AI Agents, Llama, API Integration"
  },
  {
    title: "Sr. VMware Engineer \\ Consultant",
    company: "Tax and Customs Administration (Belastingdienst)",
    date: "Oct 2024 - Apr 2025",
    description: "Built NSX & Aria VMware platform, integrated with CI/CD, RedHat Linux, and Windows Administration. Initiated GPU project for AI integration.",
    techStack: "VMware NSX, Aria, CI/CD, RedHat, GPU"
  },
  {
    title: "Cloud Engineer",
    company: "Louwman ICT (Axians)",
    date: "Jan 2022 - Dec 2023",
    description: "Managed the full cloud and server stack. Led Windows Hello for Business implementation, automated with PowerShell, and optimized Azure AD/Entra ID security.",
    techStack: "Azure, PowerShell, Windows Hello, Entra ID"
  },
  {
    title: "Consultant Engineer",
    company: "House of Representatives (Tweede Kamer)",
    date: "Jan 2019 - Dec 2022",
    description: "Managed Azure, VMware, Citrix, Active Directory. Managed Citrix XenMobile environment and packaged applications with Ivanti and App-V.",
    techStack: "Azure, VMware, Citrix, Ivanti, App-V"
  },

];

const WorkExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="work-experience-container">
      {/* Hero Section */}
      <div className="we-hero">
        <h1 className="we-title">Derrel Winter</h1>
        <div className="we-meta">
          <span className="match-score">100% Match</span>
          <span>2005 - Present</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>AI & IT</span>
          <span>11 Episodes</span>
        </div>

        <div className="we-actions">
          <a href="/DERREL_WINTER_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaPlay /> View CV
          </a>
          <button onClick={() => navigate('/profile/Professional')} className="btn-primary" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none', cursor: 'pointer' }}>
            <FaArrowLeft /> Back to Professional
          </button>
        </div>

        <div className="we-description" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', marginBottom: '20px' }}>
          <p style={{ marginBottom: '15px' }}>
            I am a hybrid AI and IT specialist with over 25 years of experience in enterprise infrastructures, cloud engineering, and workflow automation.
            As the founder of ChatiX, I design and build modern AI systems such as RAG solutions, multi-agent workflows, and voice assistants.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#d2d2d2' }}>
            <strong>Skills:</strong> Prompt Engineering, Python, JavaScript, Azure, Google Cloud, VMware, DevOps, Storytelling.
          </p>
        </div>
      </div>

      {/* Episodes List */}
      <div className="episodes-section">
        <div className="episodes-header">
          <span className="episodes-title">Career Episodes</span>
          <span style={{ fontSize: '1.1rem', color: '#a3a3a3' }}>Season 1</span>
        </div>

        <div className="episode-list">
          {cvData.map((item, index) => (
            <div className="episode-item" key={index}>
              <div className="episode-number">{index + 1}</div>
              <div className="episode-thumbnail">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${index % 2 === 0 ? '#B81D24' : '#221F1F'} 0%, #000 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  {index === 0 ? '🚀' : '💼'}
                </div>
              </div>
              <div className="episode-info">
                <div className="episode-header">
                  <span className="episode-name">{item.title}</span>
                  <span className="episode-duration">{item.date}</span>
                </div>
                <div style={{ color: '#e5e5e5', fontWeight: '600', marginBottom: '5px' }}>{item.company}</div>
                <p className="episode-desc">
                  {item.description}
                  <br />
                  <span style={{ color: '#777', fontSize: '0.85rem', marginTop: '8px', display: 'inline-block' }}>
                    Tech Stack: {item.techStack}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
