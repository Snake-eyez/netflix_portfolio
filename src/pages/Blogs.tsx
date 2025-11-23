import React from 'react';
import { FaArrowLeft, FaMedium, FaDev, FaExternalLinkAlt, FaPenNib } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';

const blogs = [
  {
    title: "Google’s Quiet Coup",
    platform: "Substack",
    icon: <FaPenNib />,
    link: "https://derrelwinter.substack.com/p/googles-quiet-coup",
    description: "An analysis of Google's strategic shifts and what they mean for the future of search and AI.",
    date: "Recent",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800"
  },
  {
    title: "Derrel Winter on Substack",
    platform: "Substack",
    icon: <FaPenNib />,
    link: "https://substack.com/@derrelwinter",
    description: "Explore my latest essays, thoughts on AI, and future tech trends directly on Substack. Join the conversation.",
    date: "Weekly",
    readTime: "Newsletter",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
  }
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
