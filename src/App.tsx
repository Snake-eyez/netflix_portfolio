import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import './pages/NonProfessionalTheme.css';

const NetflixTitle = lazy(() => import('./NetflixTitle'));
const ProfilePage = lazy(() => import('./profilePage/profilePage'));
const Browse = lazy(() => import('./browse/browse'));
const WorkPermit = lazy(() => import('./pages/WorkPermit'));
const WorkExperience = lazy(() => import('./pages/WorkExperience'));
const Recommendations = lazy(() => import('./pages/Recommendations'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const ContactMe = lazy(() => import('./pages/ContactMe'));
const Music = lazy(() => import('./pages/Music'));
const Reading = lazy(() => import('./pages/Reading'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Certifications = lazy(() => import('./pages/Certifications'));
const ConstructAICaseStudy = lazy(() => import('./pages/ConstructAICaseStudy'));
const LeaseScanCaseStudy = lazy(() => import('./pages/LeaseScanCaseStudy'));
const AIAvatarCaseStudy = lazy(() => import('./pages/AIAvatarCaseStudy'));
const Products = lazy(() => import('./pages/Products'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Workshops = lazy(() => import('./pages/Workshops'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const Movies = lazy(() => import('./pages/Movies'));
const ResourceVault = lazy(() => import('./pages/ResourceVault'));
const InteractiveLearning = lazy(() => import('./pages/InteractiveLearning'));
const VisionMission = lazy(() => import('./pages/VisionMission'));
const IdeaLab = lazy(() => import('./pages/IdeaLab'));
const Methodology = lazy(() => import('./pages/Methodology'));
const Outstandr = lazy(() => import('./pages/Outstandr'));
const Speaking = lazy(() => import('./pages/Speaking'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="route-loading">Loading page...</div>}>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
        <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
        <Route path="/music" element={<Layout><Music /></Layout>} />
        <Route path="/reading" element={<Layout><Reading /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
        <Route path="/case-study/constructai" element={<Layout><ConstructAICaseStudy /></Layout>} />
        <Route path="/case-study/leasescan" element={<Layout><LeaseScanCaseStudy /></Layout>} />
        <Route path="/case-study/ai-avatar" element={<Layout><AIAvatarCaseStudy /></Layout>} />
        <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
        <Route path="/workshops" element={<Layout><Workshops /></Layout>} />
        <Route path="/coming-soon" element={<Layout><ComingSoon /></Layout>} />
        <Route path="/movies" element={<Layout><Movies /></Layout>} />
        <Route path="/resource-vault" element={<Layout><ResourceVault /></Layout>} />
        <Route path="/interactive-learning" element={<Layout><InteractiveLearning /></Layout>} />
        <Route path="/vision-mission" element={<Layout><VisionMission /></Layout>} />
        <Route path="/idea-lab" element={<Layout><IdeaLab /></Layout>} />
        <Route path="/methodology" element={<Layout><Methodology /></Layout>} />
        <Route path="/speaking" element={<Layout><Speaking /></Layout>} />
        <Route path="/outstandr" element={<Layout><Outstandr /></Layout>} />
      </Routes>
    </Suspense>
  );
};

export default App;
