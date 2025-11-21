import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileType } from '../types';

interface ProfileBannerProps {
  profile: ProfileType;
}

const bannerConfig = {
  Professional: {
    headline: "Professional",
    description: "For clients, business partners, investors — serious, results-oriented.",
    primaryCta: "Book Strategy",
    secondaryCta: "LinkedIn"
  },
  Creative: {
    headline: "Creative",
    description: "For collaborators, creators, spiritual seekers, metaphysical thinkers.",
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

  const handlePrimaryClick = () => {
    // Navigate or open link based on profile
    console.log(`Clicked Primary for ${profile}`);
  };

  const handleSecondaryClick = () => {
    // Navigate or open link based on profile
    console.log(`Clicked Secondary for ${profile}`);
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{config.headline}</h1>
        <p className="banner-description">
          {config.description}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePrimaryClick} label={config.primaryCta} />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
