import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaBook, FaMusic, FaHandsHelping, FaCode, FaLightbulb } from 'react-icons/fa';
import { ProfileType } from '../types';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  Professional: [
    { title: "Work Experience", color: "linear-gradient(135deg, #2E82FF 0%, #1a5bb5 100%)", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", color: "linear-gradient(135deg, #D4AF37 0%, #a68829 100%)", icon: <FaCertificate />, route: "/certifications" },
    { title: "Case Studies", color: "linear-gradient(135deg, #A83B2E 0%, #7a2b21 100%)", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Book Strategy", color: "linear-gradient(135deg, #C08A50 0%, #966b3e 100%)", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  Creative: [
    { title: "Essays & Blogs", color: "linear-gradient(135deg, #C08A50 0%, #966b3e 100%)", route: "/blogs", icon: <FaBook /> },
    { title: "Concept Projects", color: "linear-gradient(135deg, #2E82FF 0%, #1a5bb5 100%)", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Storytelling", color: "linear-gradient(135deg, #A83B2E 0%, #7a2b21 100%)", route: "/music", icon: <FaMusic /> },
    { title: "Design Portfolio", color: "linear-gradient(135deg, #D4AF37 0%, #a68829 100%)", route: "/projects", icon: <FaProjectDiagram /> }
  ],
  Explorer: [
    { title: "Workshops", color: "linear-gradient(135deg, #A83B2E 0%, #7a2b21 100%)", route: "/projects", icon: <FaHandsHelping /> },
    { title: "Interactive Learning", color: "linear-gradient(135deg, #2E82FF 0%, #1a5bb5 100%)", route: "/skills", icon: <FaCode /> },
    { title: "Resource Vault", color: "linear-gradient(135deg, #D4AF37 0%, #a68829 100%)", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Newsletter", color: "linear-gradient(135deg, #C08A50 0%, #966b3e 100%)", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  Visionary: [
    { title: "Speaking", color: "linear-gradient(135deg, #D4AF37 0%, #a68829 100%)", route: "/contact-me", icon: <FaMusic /> },
    { title: "Vision & Mission", color: "linear-gradient(135deg, #2E82FF 0%, #1a5bb5 100%)", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Ideas Lab", color: "linear-gradient(135deg, #C08A50 0%, #966b3e 100%)", route: "/blogs", icon: <FaLightbulb /> },
    { title: "Book Consultation", color: "linear-gradient(135deg, #A83B2E 0%, #7a2b21 100%)", route: "/contact-me", icon: <FaEnvelope /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{
              background: pick.color,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="card-content">
              <div className="pick-icon">{pick.icon}</div>
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
