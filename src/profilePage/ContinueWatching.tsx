import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { ProfileType } from '../types';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  Professional: [
    { title: "Recent Projects", color: "var(--accent-color-2)", link: "/projects" },
    { title: "Latest Blog", color: "var(--secondary-color)", link: "/blogs" },
    { title: "Contact", color: "var(--emphasis-color)", link: "/contact-me" },
    { title: "LinkedIn", color: "var(--accent-color-1)", link: "/contact-me" }
  ],
  Creative: [
    { title: "Music", color: "var(--emphasis-color)", link: "/music" },
    { title: "Reading List", color: "var(--accent-color-1)", link: "/reading" },
    { title: "Inspiration", color: "var(--secondary-color)", link: "/blogs" },
    { title: "Gallery", color: "var(--accent-color-2)", link: "/projects" }
  ],
  Explorer: [
    { title: "Workshops", color: "var(--accent-color-1)", link: "/projects" },
    { title: "Resources", color: "var(--emphasis-color)", link: "/skills" },
    { title: "Newsletter", color: "var(--secondary-color)", link: "/contact-me" },
    { title: "Community", color: "var(--accent-color-2)", link: "/contact-me" }
  ],
  Visionary: [
    { title: "Vision", color: "var(--secondary-color)", link: "/recommendations" },
    { title: "Ideas", color: "var(--accent-color-2)", link: "/blogs" },
    { title: "Connect", color: "var(--emphasis-color)", link: "/contact-me" },
    { title: "Future", color: "var(--accent-color-1)", link: "/projects" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link
            to={pick.link}
            key={index}
            className="pick-card"
            style={{
              backgroundColor: pick.color,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="card-content">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
