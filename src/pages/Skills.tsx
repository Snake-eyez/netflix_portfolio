import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

const skillsData = {
  aiSkills: [
    {
      name: "Prompt Engineering",
      description: "Expert in crafting effective prompts for OpenAI, Gemini, Claude, and open-source models. Specializing in context optimization and output refinement.",
      level: "Expert",
      years: "3+"
    },
    {
      name: "RAG Architecture",
      description: "Designing and implementing Retrieval-Augmented Generation systems with vector databases, embeddings, and secure document access.",
      level: "Advanced",
      years: "2+"
    },
    {
      name: "Multi-Agent Systems",
      description: "Building complex AI workflows with multiple specialized agents for voice assistants, automation, and decision-making processes.",
      level: "Advanced",
      years: "2+"
    },
    {
      name: "Local LLM Deployment",
      description: "Setting up and optimizing Mistral, Llama, and other open-source models for on-premise and edge deployments.",
      level: "Advanced",
      years: "2+"
    },
    {
      name: "AI Integration & Automation",
      description: "Integrating AI capabilities into existing systems using Copilot Studio, Power Automate, and custom API solutions.",
      level: "Expert",
      years: "3+"
    },
    {
      name: "AI Training & Enablement",
      description: "Delivering workshops and training programs for developers and business users on AI adoption and best practices.",
      level: "Expert",
      years: "2+"
    }
  ],
  itSkills: [
    {
      name: "Python Development",
      description: "Full-stack Python development for AI applications, automation scripts, and backend services.",
      level: "Advanced",
      years: "3+"
    },
    {
      name: "JavaScript/TypeScript",
      description: "Modern web development with React, Node.js, and TypeScript for scalable applications.",
      level: "Advanced",
      years: "5+"
    },
    {
      name: "Cloud Architecture (Azure/GCP)",
      description: "Designing and managing cloud infrastructure on Azure and Google Cloud Platform.",
      level: "Expert",
      years: "7+"
    },
    {
      name: "VMware & Virtualization",
      description: "Enterprise virtualization with VMware NSX, vSphere, Aria, and datacenter design.",
      level: "Expert",
      years: "10+"
    },
    {
      name: "DevOps & CI/CD",
      description: "Implementing automated pipelines, containerization with Docker, and infrastructure as code.",
      level: "Advanced",
      years: "5+"
    },
    {
      name: "Database Management",
      description: "PostgreSQL, MySQL, and vector databases for AI applications and enterprise systems.",
      level: "Advanced",
      years: "8+"
    },
    {
      name: "System Administration",
      description: "Windows Server, Linux, Active Directory, and enterprise IT infrastructure management.",
      level: "Expert",
      years: "15+"
    },
    {
      name: "API Development & Integration",
      description: "Building and integrating RESTful APIs, webhooks, and third-party service connections.",
      level: "Advanced",
      years: "5+"
    }
  ],
  personalSkills: [
    {
      name: "Team Leadership",
      description: "Leading technical teams, mentoring developers, and driving strategic initiatives across organizations.",
      level: "Expert",
      years: "10+"
    },
    {
      name: "Technical Storytelling",
      description: "Translating complex technical concepts into compelling narratives for diverse audiences.",
      level: "Expert",
      years: "8+"
    },
    {
      name: "Problem Solving",
      description: "Analytical thinking and creative solutions for complex technical and business challenges.",
      level: "Expert",
      years: "20+"
    },
    {
      name: "Client Consultation",
      description: "Understanding business needs and delivering tailored technical solutions that drive results.",
      level: "Expert",
      years: "10+"
    },
    {
      name: "Workshop Facilitation",
      description: "Designing and delivering engaging technical workshops for groups of 60+ participants.",
      level: "Advanced",
      years: "3+"
    },
    {
      name: "Self-Directed Learning",
      description: "Continuously adapting to new technologies and staying ahead of industry trends.",
      level: "Expert",
      years: "25+"
    },
    {
      name: "Strategic Planning",
      description: "Aligning technology initiatives with business goals and long-term vision.",
      level: "Advanced",
      years: "8+"
    },
    {
      name: "Cross-Functional Communication",
      description: "Bridging the gap between developers, managers, and end-users with clear, effective communication.",
      level: "Expert",
      years: "15+"
    }
  ]
};

const Skills: React.FC = () => {
  const navigate = useNavigate();

  const renderSkillCategory = (title: string, skills: any[]) => (
    <div className="skill-category-section">
      <div className="category-header">
        <h2 className="category-title">{title}</h2>
        <span className="skill-count">{skills.length} Skills</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-tile" key={index}>
            <div className="skill-tile-image" style={{
              background: `linear-gradient(135deg, ${index % 3 === 0 ? '#B81D24' : index % 3 === 1 ? '#221F1F' : '#E50914'} 0%, #000 100%)`
            }}>
              <div className="skill-level-badge">{skill.level}</div>
            </div>
            <div className="skill-tile-content">
              <h3 className="skill-tile-name">{skill.name}</h3>
              <p className="skill-tile-years">{skill.years} experience</p>
              <p className="skill-tile-desc">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-page-container">
      {/* Hero Section */}
      <div className="skills-hero">
        <h1 className="skills-title">Derrel's Skillset</h1>
        <div className="skills-meta">
          <span className="match-score">100% Match</span>
          <span>25+ Years Experience</span>
          <span style={{ border: '1px solid #a3a3a3', padding: '0 5px', fontSize: '0.8rem' }}>Professional</span>
          <span>3 Categories</span>
        </div>

        <div className="skills-actions">
          <button onClick={() => navigate('/profile/Professional')} className="btn-primary">
            <FaArrowLeft /> Back to Professional
          </button>
        </div>

        <p style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', marginTop: '20px' }}>
          A comprehensive overview of technical expertise spanning AI architecture, enterprise IT infrastructure,
          and leadership capabilities developed over 25+ years in the field.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="skills-categories">
        {renderSkillCategory("Leadership & Soft Skills", skillsData.personalSkills)}
        {renderSkillCategory("AI & Machine Learning", skillsData.aiSkills)}
        {renderSkillCategory("IT & Infrastructure", skillsData.itSkills)}
      </div>
    </div>
  );
};

export default Skills;
