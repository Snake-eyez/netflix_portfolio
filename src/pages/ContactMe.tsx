import React, { useState } from 'react';
import { FaArrowLeft, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';

const ContactMe: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <button onClick={() => navigate(-1)} className="btn-back-contact">
        <FaArrowLeft /> Back
      </button>

      <div className="contact-split">
        {/* Left Side - Contact Form */}
        <div className="contact-left">
          <div className="contact-content">
            <h1 className="contact-title">Let's Work Together</h1>
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Whether you need AI solutions, full-stack development,
              or strategic consulting—let's connect.
            </p>

            <div className="contact-info-block">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <div className="info-label">Email</div>
                  <a href="mailto:hello@derrelwinter.com" className="info-value">
                    hello@derrelwinter.com
                  </a>
                </div>
              </div>
            </div>

            <div className="coffee-section">
              <p className="coffee-text">Or catch up over a coffee ☕</p>
              <a
                href="https://derrelwinter.gumroad.com/coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="coffee-btn"
              >
                ☕ Buy Me a Coffee
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="contact-right">
          <div className="photo-container">
            <img
              src="/contact-photo.jpg"
              alt="Derrel Winter"
              className="contact-photo"
            />
            <div className="photo-overlay">
              <div className="overlay-text">
                <h2>Derrel Winter</h2>
                <p>AI Architect & Thought Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
