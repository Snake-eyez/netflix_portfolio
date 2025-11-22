import React from 'react';
import { FaArrowLeft, FaMedium, FaDev, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';

const blogs = [
  {
    title: "Make Your Rails Console Look Better",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@chintusamala96/make-your-rails-console-look-better-510988d40566",
    description: "Learn tips to customize your Rails console for a better development experience. Enhance productivity with visual improvements and helpful configurations.",
    date: "2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
  },
  {
    title: "Docker Fundas - My Version",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@chintusamala96/docker-fundas-my-version-7b9262bd90d4",
    description: "An introductory guide to Docker fundamentals from my perspective. Understanding containers, images, and deployment workflows.",
    date: "2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800"
  },
  {
    title: "Grape Gem in Ruby on Rails: Handling User Model and API Endpoint",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/samalasumanth0262/grape-gem-in-ruby-on-rails-handling-user-model-and-api-endpoint-g6d",
    description: "A comprehensive guide to using the Grape gem for API development in Ruby on Rails. Build robust RESTful APIs with ease.",
    date: "2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800"
  },
];

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="blogs-page-container">
      <button onClick={() => navigate(-1)} className="btn-back-blogs">
        <FaArrowLeft /> Back
      </button>

      <div className="blogs-hero">
        <h1 className="blogs-page-title">Essays & Blogs</h1>
        <p className="blogs-page-subtitle">
          Thoughts, tutorials, and insights on software development, AI, and technology
        </p>
      </div>

      <div className="blogs-page-grid">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-page-card"
            style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
          >
            <div className="blog-page-image-container">
              <img src={blog.image} alt={blog.title} className="blog-page-image" />
              <div className="blog-page-platform-badge">
                {blog.icon}
                <span>{blog.platform}</span>
              </div>
            </div>

            <div className="blog-page-content">
              <div className="blog-page-meta">
                <span className="blog-page-date">{blog.date}</span>
                <span className="blog-page-separator">•</span>
                <span className="blog-page-read-time">{blog.readTime}</span>
              </div>

              <h2 className="blog-page-title-text">{blog.title}</h2>
              <p className="blog-page-description">{blog.description}</p>

              <div className="blog-page-read-more">
                Read Article <FaExternalLinkAlt />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="blogs-page-cta">
        <h2>Want to collaborate on content?</h2>
        <p>I'm always open to guest posts, interviews, and content partnerships</p>
        <button onClick={() => navigate('/contact-me')} className="blogs-cta-btn">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Blogs;
