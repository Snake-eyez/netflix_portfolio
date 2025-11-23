import React from 'react';
import { FaPlay, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './WorkExperience.css';

const storyData = [
  {
    title: "The Social Expert",
    role: "Technical Media Strateeg",
    company: "Desocialexpert",
    date: "Jan 2016 - May 2018",
    description: "In this chapter of my career, I immersed myself in the fast-paced world of digital engagement. As a Technical Media Strateeg, I crafted compelling social media content for small businesses, helping them find their voice online. I pioneered the use of chatbot ads with Facebook Messenger, bridging the gap between technology and human connection to drive real results.",
    techStack: "Social Media Marketing, Chatbots, Facebook Messenger Ads",
    color: "#E50914" // Netflix Red
  },
  {
    title: "The Founder's Spark",
    role: "AI Architect & Founder",
    company: "ChatiX / Chatix Creations",
    date: "Jul 2018 - Present",
    description: "Driven by a vision of intelligent automation, I founded ChatiX. Here, I design and realize cutting-edge AI architectures for major clients like KPN and the Municipality of Rotterdam. From multi-agent voice assistants to complex RAG pipelines, I build the systems that power the future of work.",
    techStack: "Python, Mistral/Llama, RAG, Voicebots, Azure, Google Cloud",
    color: "#B81D24"
  },
  {
    title: "Public Service Infrastructure",
    role: "Consultant Engineer",
    company: "House of Representatives (Tweede Kamer)",
    date: "Jan 2019 - Dec 2022",
    description: "Serving at the heart of Dutch democracy, I managed critical infrastructure including Azure, VMware, and Citrix environments. I ensured secure and efficient mobile workflows by managing the Citrix XenMobile environment and packaging applications with Ivanti and App-V.",
    techStack: "Azure, VMware, Citrix, Ivanti, App-V",
    color: "#221F1F"
  },
  {
    title: "The CTO Chapter",
    role: "CTO & VP Operations",
    company: "Rainmakers",
    date: "Mar 2020 - Dec 2024",
    description: "As the CTO and VP of Operations, I was responsible for the technical heartbeat of this international holding. My role extended beyond code; I was deeply involved in strategic growth, participating in closing deals and managing complex M&A processes to help SMEs scale and win big.",
    techStack: "Technical Operations, M&A, Strategic Planning, Leadership",
    color: "#E50914"
  },
  {
    title: "Cloud Engineering",
    role: "Cloud Engineer",
    company: "Louwman ICT and Axians NL",
    date: "Jan 2022 - Dec 2023",
    description: "I took charge of the full cloud and server stack, leading the implementation of Windows Hello for Business. Through PowerShell automation and Azure AD/Entra ID optimization, I enhanced security and streamlined user experiences.",
    techStack: "Azure, PowerShell, Windows Hello, Entra ID",
    color: "#B81D24"
  },
  {
    title: "AI Adoption & Training",
    role: "AI Trainer & Adoption Specialist",
    company: "Capgemini / KPN / Municipality of Rotterdam",
    date: "Mar 2023 - Present",
    description: "Sharing knowledge is as vital as building systems. I became a trainer for AI modules, delivering workshops to groups of 60+ participants. I taught AI productivity and safe usage, empowering public service professionals to harness the power of GenAI.",
    techStack: "Copilot, Prompt Engineering, GenAI Training",
    color: "#221F1F"
  },
  {
    title: "Innovation & AI Agents",
    role: "IT & Business Manager",
    company: "SpeedyKoeriers B.V.",
    date: "May 2023 - Nov 2025",
    description: "Managing the full IT agenda, I designed a custom CRM platform integrated with AI agents for planning and communication. By realizing API integrations with PostNL and modernizing processes with Llama-based models, I transformed operations.",
    techStack: "PostgreSQL, AI Agents, Llama, API Integration",
    color: "#E50914"
  },
  {
    title: "Enterprise Scale AI",
    role: "Sr. VMware Engineer \\ Consultant",
    company: "Tax and Customs Administration (Belastingdienst)",
    date: "Oct 2024 - Apr 2025",
    description: "At a massive scale, I built the NSX & Aria VMware platform, integrating it with CI/CD pipelines. I initiated a pivotal GPU project, laying the groundwork for seamless AI integration within a secure government environment.",
    techStack: "VMware NSX, Aria, CI/CD, RedHat, GPU",
    color: "#B81D24"
  }
];

const WorkExperience: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="work-experience-container">
      {/* Hero Section */}
      <div className="we-hero">
        <h1 className="we-title">The Derrel Winter Story</h1>
        <div className="we-meta">
          <span className="match-score">100% Match</span>
          <span>2016 - Present</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>Biography</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>Tech</span>
          <span>8 Chapters</span>
        </div>

        <div className="we-actions">
          <button onClick={() => navigate('/contact-me')} className="btn-primary">
            <FaPlay /> Request CV
          </button>
          <button onClick={() => navigate('/profile/Professional')} className="btn-primary" style={{ backgroundColor: 'rgba(109, 109, 110, 0.7)', color: '#fff', border: 'none' }}>
            <FaArrowLeft /> Back
          </button>
        </div>

        <div className="we-description" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', marginBottom: '20px' }}>
          <p>
            From crafting social media strategies to architecting enterprise AI systems, my journey has been defined by a relentless pursuit of innovation.
            This is the story of how I evolved from a digital strategist to a CTO and AI Architect, building the future one project at a time.
          </p>
        </div>
      </div>

      {/* Episodes List */}
      <div className="episodes-section">
        <div className="episodes-header">
          <span className="episodes-title">Chapters</span>
          <span style={{ fontSize: '1.1rem', color: '#a3a3a3' }}>Season 1</span>
        </div>

        <div className="episode-list">
          {storyData.map((item, index) => (
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
                <div style={{ color: '#e5e5e5', fontWeight: '600', marginBottom: '5px' }}>{item.role} at {item.company}</div>
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

      <div className="request-cv-section">
        <button onClick={() => navigate('/contact-me')} className="btn-primary" style={{ width: '100%', maxWidth: '400px', justifyContent: 'center' }}>
          Request Full CV
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
