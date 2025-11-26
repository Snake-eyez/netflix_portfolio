import React from 'react';
import { FaPlay, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './WorkExperience.css';

const season1Data = [
  {
    title: "The Engine Room",
    role: "System Engineer",
    company: "Various Organizations",
    date: "Early Career",
    description: (
      <>
        My early roles as a system engineer for organizations like the <strong>AIG Europe, Municipality of Rotterdam, Sandvik, Nutricia and Atlas Copco</strong> built the foundation of who I am professionally. I led migrations, managed Active Directory environments, secured networks and guided teams through transitions where failure wasn't allowed. Those years shaped my instinct for <strong>reliability and structure</strong>.
        <br /><br />
        As I grew into senior and teamlead roles at <strong>Pink & Nelson</strong> and later <strong>Inlumi</strong>, my work shifted from incident response to <strong>system design</strong>. I led engineering teams, introduced automation into traditional environments and modernized infrastructure so organizations could operate with more stability and control. I began thinking <strong>ahead of problems</strong> instead of reacting to them.
        <br /><br />
        My consultant years at the <strong>Tweede Kamer der Staten-Generaal</strong> and <strong>Louwman ICT</strong> expanded that mindset. I worked across cloud stacks, <strong>Azure identity and security</strong>, VMware, mobile device management, PowerShell automation and enterprise deployments. These roles required more than technical expertise. They required the ability to <strong>translate complexity into clarity</strong> and guide non-technical users through massive change.
      </>
    ),
    techStack: "Active Directory, VMware, Azure, PowerShell, System Design",
    color: "#221F1F"
  },
  {
    title: "The Marketing Chapter",
    role: "Technical Media Strategist",
    company: "The Social Expert",
    date: "2016 - 2018",
    description: (
      <>
        But my career wasn't only shaped by infrastructure and engineering. Between 2009 and 2016, I ran a side business building websites for small companies. That period sharpened my <strong>design sense</strong>, my understanding of user experience and my appreciation for the <strong>psychology behind digital products</strong>.
        <br /><br />
        That naturally led into a full marketing chapter. From 2016 to 2018, I stepped into the fast-paced world of digital engagement as a <strong>Technical Media Strategist</strong> at <strong>The Social Expert</strong>. I created social content for small businesses and learned how to give brands a voice online. I experimented with early chatbot integrations and became one of the first in my circle to deploy <strong>Messenger-based ad funnels</strong> that turned cold audiences into warm conversations.
        <br /><br />
        This period taught me how people think, how they behave and what makes digital communication actually convert. It also taught me an unexpected lesson:
        <br />
        <strong>Technology isn't enough unless people understand it.</strong>
        <br />
        <strong>Marketing isn't enough unless systems support it.</strong>
        <br />
        That insight plays a huge role in everything I build today.
      </>
    ),
    techStack: "Social Media Marketing, Chatbots, Facebook Messenger Ads, UX/UI",
    color: "#E50914"
  }
];

const season2Data = [
  {
    title: "ChatiX: AI Architecture",
    role: "AI Architect & Founder",
    company: "ChatiX",
    date: "Jul 2018 - Present",
    description: (
      <>
        Founding <strong>ChatiX</strong> was the logical next step. As an <strong>AI Architect</strong>, I design and deliver complete GenAI solutions for enterprise and public-sector clients like <strong>KPN</strong>, and other MKB organizations. My work includes:
        <ul style={{ paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
          <li>RAG architectures</li>
          <li>Multi-agent orchestration</li>
          <li>Voice assistants</li>
          <li>Secure document retrieval pipelines</li>
          <li>Local LLMs</li>
          <li>Workflow automation systems</li>
          <li>Developer guidelines and prompt frameworks</li>
          <li>AI adoption programs for entire teams</li>
        </ul>
        I don't just build products. I help teams understand how to use them <strong>safely, effectively and with long-term vision</strong>.
      </>
    ),
    techStack: "RAG, Multi-agent Systems, Voice Assistants, Local LLMs, Python",
    color: "#E50914"
  },
  {
    title: "The Shift Toward AI",
    role: "IT & Business Manager",
    company: "SpeedyKoeriers",
    date: "May 2023 - Nov 2025",
    description: (
      <>
        When AI emerged, everything connected. My infrastructure background. My automation instincts. My creativity and marketing experience. My understanding of user behavior. <strong>AI felt like the natural evolution of everything I had been building toward.</strong>
        <br /><br />
        At <strong>SpeedyKoeriers</strong>, I rebuilt the company's digital backbone with AI at the center. I created a custom <strong>PostgreSQL CRM</strong> where every department used an <strong>AI agent</strong> for planning, communication, quality control and ride administration. I built a real-time management dashboard, optimized workflows and created a <strong>PostNL API integration</strong> that transformed the organization's data flow. I also introduced <strong>Llama-based AI models</strong> to automate document processing, planning and customer service.
        <br /><br />
        That project showed me something important: <strong>I could design AI-driven organizations, not just AI tools.</strong>
      </>
    ),
    techStack: "PostgreSQL, AI Agents, Llama, API Integration, CRM",
    color: "#B81D24"
  },
  {
    title: "Training & Leadership",
    role: "AI Trainer",
    company: "Capgemini / KPN / Rotterdam",
    date: "2025 - Present",
    description: (
      <>
        In 2025, my work expanded into <strong>national AI education</strong>. I trained teams at <strong>Capgemini, KPN and the Municipality of Rotterdam</strong> in topics like:
        <ul style={{ paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
          <li>RAG workflows</li>
          <li>Vector databases</li>
          <li>Copilot adoption</li>
          <li>Prompt engineering</li>
          <li>MCP developer pipelines</li>
          <li>AI productivity flows</li>
          <li>Safe and practical use of AI in daily work</li>
        </ul>
        These workshops blended my <strong>technical depth</strong>, <strong>creative communication style</strong> and years of hands-on industry experience.
      </>
    ),
    techStack: "AI Education, Prompt Engineering, Copilot, Vector DBs",
    color: "#221F1F"
  },
  {
    title: "Where I Stand Today",
    role: "AI Architect & Builder",
    company: "Outstandr & ChatiX",
    date: "Today",
    description: (
      <>
        Today, through <strong>Outstandr and ChatiX</strong>, I build:
        <ul style={{ paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
          <li>AI operating systems for companies</li>
          <li>Multi-agent AI ecosystems</li>
          <li>Voice-driven enterprise assistants</li>
          <li>Local-model solutions for privacy-first environments</li>
          <li>Automated workflows and copilots</li>
          <li>AI audits and full digital transformations</li>
          <li>Creative AI pipelines for content and media</li>
        </ul>
        My career is a story of evolution. From system engineer, to team lead, to consultant, to technical creator, to <strong>AI architect</strong>.
        <br /><br />
        I've spent more than twenty-five years learning how technology shapes organizations and how people shape technology. Now, I use that experience to build <strong>AI systems that make companies sharper, smarter and more resilient</strong>.
        <br /><br />
        <strong>And the story is still unfolding.</strong>
      </>
    ),
    techStack: "AI Operating Systems, Multi-agent Ecosystems, Digital Transformation",
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
          <span>2 Seasons</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>Biography</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>Tech</span>
          <span>HD</span>
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
            I didn't start my career in AI. I started in the <strong>engine room of technology</strong>. Servers, networks, datacenters, migrations. That world shaped my discipline and my way of thinking. When you manage systems that entire organizations depend on, you learn quickly that <strong>precision is not optional</strong>.
          </p>
        </div>
      </div>

      {/* Season 1: Classic Layout */}
      <div className="episodes-section season-1">
        <div className="episodes-header">
          <span className="episodes-title">Season 1: The Foundation</span>
        </div>

        <div className="episode-list">
          {season1Data.map((item, index) => (
            <div className="episode-item" key={`s1-${index}`}>
              <div className="episode-number">{index + 1}</div>
              <div className="episode-thumbnail">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${item.color} 0%, #000 100%)`
                }}>
                </div>
              </div>
              <div className="episode-info">
                <div className="episode-header">
                  <span className="episode-name">{item.title}</span>
                  <span className="episode-duration">{item.date}</span>
                </div>
                <div style={{ color: '#e5e5e5', fontWeight: '600', marginBottom: '10px', fontSize: '1rem' }}>
                  {item.role} at {item.company}
                </div>
                <div className="episode-desc">
                  {item.description}
                  <br />
                  <span style={{ color: '#777', fontSize: '0.85rem', marginTop: '12px', display: 'inline-block' }}>
                    Tech Stack: {item.techStack}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Season 2: Modern Timeline Layout */}
      <div className="episodes-section season-2">
        <div className="episodes-header">
          <span className="episodes-title">Season 2: The AI Revolution</span>
        </div>

        <div className="episode-list">
          {season2Data.map((item, index) => (
            <div className="episode-item" key={`s2-${index}`}>
              <div className="episode-number">{index + 1}</div>

              <div className="episode-content">
                <div className="episode-header">
                  <span className="episode-name">{item.title}</span>
                  <span className="episode-duration">{item.date}</span>
                </div>
                <div className="episode-role">
                  {item.role} at {item.company}
                </div>
                <div className="episode-desc">
                  {item.description}
                  <br />
                  <span style={{ color: '#999', fontSize: '0.85rem', marginTop: '12px', display: 'inline-block', fontStyle: 'italic' }}>
                    Tech Stack: {item.techStack}
                  </span>
                </div>
              </div>

              <div className="episode-thumbnail">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${item.color} 0%, #000 100%)`
                }}>
                </div>
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
