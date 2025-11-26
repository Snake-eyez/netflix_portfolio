import React, { useState } from 'react';
import { FaPlay, FaEnvelope } from 'react-icons/fa';
import './ProfileBanner.css';
import { ProfileType } from '../types';
import NewsletterModal from '../components/NewsletterModal';

interface ProfileBannerProps {
  profile: ProfileType;
}

const bannerConfig = {
  Professional: {
    headline: "Professional",
    description: "For clients, business partners, investors and serious results-oriented companies.",
    primaryCta: "Book Strategy",
    secondaryCta: "LinkedIn"
  },
  Creative: {
    headline: "Creative",
    description: "For collaborators, creative creators, spiritual seekers, metaphysical thinkers.",
    primaryCta: "Follow Substack",
    secondaryCta: "Instagram"
  },
  Explorer: {
    headline: "Explorer",
    description: "For curious minds, workshop participants, learners.",
    primaryCta: "Join Workshop",
    secondaryCta: "Download Kit"
  },
  Visionary: {
    headline: "Visionary",
    description: "For future clients, thinkers, and those who want inspiration + impact.",
    primaryCta: "Book a Talk",
    secondaryCta: "Consultation"
  }
};

const ProfileBanner: React.FC<ProfileBannerProps> = ({ profile }) => {
  const config = bannerConfig[profile];
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline">{config.headline}</h1>
        <p className="banner-description">
          {config.description}
        </p>
        <div className="banner-buttons">
          <button className="banner-button play-button">
            <FaPlay style={{ marginRight: '10px', fontSize: '1.2rem' }} /> {config.primaryCta}
          </button>
          <button className="banner-button info-button" onClick={() => setIsNewsletterOpen(true)}>
            <FaEnvelope style={{ marginRight: '10px', fontSize: '1.2rem' }} /> Sign Up for Newsletter
          </button>
        </div>
      </div>
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </div>
  );
};

export default ProfileBanner;
