import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPlay } from 'react-icons/fa';
import { ProfileType } from '../types';
import { dashboardData } from '../data/dashboardData';

interface TopPicksRowProps {
  profile: ProfileType;
}

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = dashboardData[profile] || [];

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
              background: pick.image
                ? `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url(${pick.image})`
                : pick.color,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="card-content">
              <span className="pick-label">{pick.label}</span>
              <h3 className="pick-title">{pick.title}</h3>
            </div>

            <div className="play-button-overlay">
              <div className="play-circle">
                <FaPlay className="play-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
