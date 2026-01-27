import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaRobot } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiTypescript, SiTailwindcss, SiSupabase } from 'react-icons/si';
import { Project } from '../types';
import { mockProjects } from '../data/mockData';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: React.ReactNode } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'TypeScript': <SiTypescript />,
  'Supabase': <SiSupabase />,
};

const featuredProjects = [
  {
    title: "ConstructAI Management System",
    description: "AI-powered construction management platform with predictive scheduling, automated invoice processing, and real-time collaboration tools.",
    techUsed: "React, TypeScript, Tailwind CSS, Supabase, PostgreSQL",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    route: "/case-study/constructai"
  },
  {
    title: "LeaseScan MVP",
    description: "3D vehicle inspection app using ARKit and AI to eliminate disputes in lease returns through automated damage detection and cost estimation.",
    techUsed: "Swift, ARKit, Python, YOLOv8, Core ML",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    route: "/case-study/leasescan"
  },
  {
    title: "AI Avatar IT Support Agent",
    description: "Conversational AI avatar with screen-sharing capabilities that provides 24/7 IT support, visual problem diagnosis, and autonomous issue resolution.",
    techUsed: "Python, LiveKit, OpenAI GPT-4, React",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
    route: "/case-study/ai-avatar"
  }
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const projects = mockProjects;

  return (
    <div className="projects-container">
      {/* Featured Case Studies */}
      <div className="featured-section">
        <h2 className="section-title">Featured Case Studies</h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="featured-project-card"
              onClick={() => navigate(project.route)}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="featured-image-container">
                <img src={project.image} alt={project.title} className="featured-image" />
                <div className="featured-overlay">
                  <span className="featured-badge"><FaRobot /> AI-Powered</span>
                </div>
              </div>
              <div className="featured-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-used">
                  {project.techUsed.split(', ').map((tech: string, i: number) => (
                    <span key={i} className="tech-badge">
                      {techIcons[tech] || "🔧"} {tech}
                    </span>
                  ))}
                </div>
                <button className="view-case-study-btn">View Full Case Study →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {projects.length > 0 && (
        <>
          <h2 className="section-title" style={{ marginTop: '60px' }}>Other Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{ '--delay': `${(index + 1) * 0.1}s` } as React.CSSProperties}
              >
                <img src={project.image.url} alt={project.title} className="project-image" />
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-used">
                    {project.techUsed.split(', ').map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {techIcons[tech] || "🔧"} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
