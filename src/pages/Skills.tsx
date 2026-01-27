import React from 'react';
import { FaArrowLeft, FaPython, FaJs, FaAws, FaDocker, FaDatabase, FaServer, FaCode, FaBrain, FaNetworkWired, FaUsers, FaLightbulb, FaChalkboardTeacher, FaComments, FaSitemap } from 'react-icons/fa';
import { SiTypescript, SiTerraform, SiKubernetes, SiPostgresql, SiMongodb, SiVmware, SiOpenai, SiPytorch, SiTensorflow, SiLangchain } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

const skillsData = {
  aiSkills: [
    { name: "Prompt Engineering", level: "Expert", years: "3+", icon: <FaBrain /> },
    { name: "RAG Architecture", level: "Advanced", years: "2+", icon: <SiLangchain /> },
    { name: "Multi-Agent Systems", level: "Advanced", years: "2+", icon: <FaNetworkWired /> },
    { name: "Local LLM Deployment", level: "Advanced", years: "2+", icon: <SiOpenai /> },
    { name: "AI Integration", level: "Expert", years: "3+", icon: <FaCode /> },
    { name: "AI Training", level: "Expert", years: "2+", icon: <FaChalkboardTeacher /> }
  ],
  itSkills: [
    { name: "Python Development", level: "Advanced", years: "3+", icon: <FaPython /> },
    { name: "JavaScript/TypeScript", level: "Advanced", years: "5+", icon: <SiTypescript /> },
    { name: "Cloud Architecture", level: "Expert", years: "7+", icon: <FaAws /> },
    { name: "VMware & Virtualization", level: "Expert", years: "10+", icon: <SiVmware /> },
    { name: "DevOps & CI/CD", level: "Advanced", years: "5+", icon: <FaDocker /> },
    { name: "Database Management", level: "Advanced", years: "8+", icon: <FaDatabase /> },
    { name: "System Admin", level: "Expert", years: "15+", icon: <FaServer /> },
    { name: "API Development", level: "Advanced", years: "5+", icon: <FaCode /> }
  ],
  personalSkills: [
    { name: "Team Leadership", level: "Expert", years: "10+", icon: <FaUsers /> },
    { name: "Technical Storytelling", level: "Expert", years: "8+", icon: <FaComments /> },
    { name: "Problem Solving", level: "Expert", years: "20+", icon: <FaLightbulb /> },
    { name: "Client Consultation", level: "Expert", years: "10+", icon: <FaUsers /> },
    { name: "Workshop Facilitation", level: "Advanced", years: "3+", icon: <FaChalkboardTeacher /> },
    { name: "Strategic Planning", level: "Advanced", years: "8+", icon: <FaSitemap /> },
    { name: "Cross-Functional Comms", level: "Expert", years: "15+", icon: <FaComments /> }
  ]
};

const Skills: React.FC = () => {
  const navigate = useNavigate();

  const renderSkillSection = (title: string, skills: any[]) => (
    <div className="skill-section">
      <h3 className="section-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="premium-skill-card" key={index} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <div className="card-bg-glow"></div>
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <div className="skill-info">
              <div className="skill-header-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-years">{skill.years}</span>
              </div>
              <div className="skill-level-bar">
                <div
                  className="skill-fill"
                  data-level={skill.level}
                  style={{ width: skill.level === 'Expert' ? '98%' : '85%' }}
                ></div>
              </div>
              <span className="skill-level-text">{skill.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-page-container">
      <div className="skills-hero">
        <div className="hero-content">
          <button onClick={() => navigate('/profile/Professional')} className="back-button">
            <FaArrowLeft /> Back to Profile
          </button>
          <h1 className="page-title">Technical Expertise <span className="title-dot">.</span></h1>
          <p className="page-subtitle">A deep dive into my capabilities across AI, Engineering, and Leadership.</p>
        </div>
      </div>

      <div className="skills-content-wrapper">
        {renderSkillSection("AI & Machine Learning", skillsData.aiSkills)}
        {renderSkillSection("Engineering & Infrastructure", skillsData.itSkills)}
        {renderSkillSection("Leadership & Strategy", skillsData.personalSkills)}
      </div>
    </div>
  );
};

export default Skills;
