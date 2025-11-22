import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import {
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
  FaBook,
  FaMusic,
  FaHandsHelping,
  FaCode,
  FaLightbulb,
} from 'react-icons/fa';
import { ProfileType } from '../types';

interface TopPicksRowProps {
  profile: ProfileType;
}

interface Tile {
  title: string;
  color: string;
  icon: JSX.Element;
  route: string;
}

const topPicksConfig: Record<ProfileType, Tile[]> = {
  Professional: [
    { title: 'Work Experience', color: 'linear-gradient(135deg, #0047AB 0%, #2E82FF 50%, #66a3ff 100%)', icon: <FaBriefcase />, route: '/work-experience' },
    { title: 'Skillset', color: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4C430 100%)', icon: <FaCertificate />, route: '/skills' },
    { title: 'Case Studies', color: 'linear-gradient(135deg, #800000 0%, #A83B2E 50%, #D2691E 100%)', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Book Strategy', color: 'linear-gradient(135deg, #8B4513 0%, #C08A50 50%, #DEB887 100%)', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  Creative: [
    { title: 'Image/Video Portfolio', color: 'linear-gradient(135deg, #8B4513 0%, #C08A50 50%, #DEB887 100%)', icon: <FaProjectDiagram />, route: '/portfolio' },
    { title: 'Essays & Blogs', color: 'linear-gradient(135deg, #0047AB 0%, #2E82FF 50%, #66a3ff 100%)', icon: <FaBook />, route: '/blogs' },
    { title: 'Workshops', color: 'linear-gradient(135deg, #800000 0%, #A83B2E 50%, #D2691E 100%)', icon: <FaHandsHelping />, route: '/workshops' },
    { title: 'Concept Projects', color: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4C430 100%)', icon: <FaLightbulb />, route: '/coming-soon' },
  ],
  Explorer: [
    { title: 'Books', color: 'linear-gradient(135deg, #800000 0%, #A83B2E 50%, #D2691E 100%)', icon: <FaBook />, route: '/reading' },
    { title: 'Movies', color: 'linear-gradient(135deg, #0047AB 0%, #2E82FF 50%, #66a3ff 100%)', icon: <FaMusic />, route: '/movies' },
    { title: 'Resource Vault', color: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4C430 100%)', icon: <FaProjectDiagram />, route: '/resource-vault' },
    { title: 'Interactive Learning', color: 'linear-gradient(135deg, #8B4513 0%, #C08A50 50%, #DEB887 100%)', icon: <FaCode />, route: '/interactive-learning' },
  ],
  Visionary: [
    { title: "Vision & Mission", color: "linear-gradient(135deg, #0047AB 0%, #2E82FF 50%, #66a3ff 100%)", icon: <FaHandsHelping />, route: "/vision-mission" },
    { title: "Idea Lab", color: "linear-gradient(135deg, #8B4513 0%, #C08A50 50%, #DEB887 100%)", icon: <FaLightbulb />, route: "/idea-lab" },
    { title: "Speaking Events", color: "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4C430 100%)", icon: <FaMusic />, route: "/speaking" },
    { title: "Outstandr Vision", color: "linear-gradient(135deg, #800000 0%, #A83B2E 50%, #D2691E 100%)", icon: <FaProjectDiagram />, route: "/outstandr" },
  ],
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
            style={{ background: pick.color, animationDelay: `${index * 0.1}s` }}
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
