import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaTimes } from 'react-icons/fa';
import './NewsletterModal.css';

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            await addDoc(collection(db, 'newsletter_subscribers'), {
                ...formData,
                createdAt: serverTimestamp()
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', phone: '' });
            }, 3000);
        } catch (error: any) {
            console.error("Error adding document: ", error);
            setStatus('error');
            // Check if it's a permission error (likely due to missing config)
            if (error.code === 'permission-denied' || error.code === 'unavailable') {
                setErrorMessage('Connection failed. Please check Firebase configuration.');
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className="newsletter-modal-overlay" onClick={onClose}>
            <div className="newsletter-modal-content" onClick={e => e.stopPropagation()}>
                <button className="newsletter-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>

                {status === 'success' ? (
                    <div className="success-message">
                        <h3>Welcome Aboard! 🚀</h3>
                        <p>You've successfully signed up for the newsletter.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="newsletter-title">Join the Inner Circle</h2>
                        <p className="newsletter-subtitle">Get exclusive insights on AI, Tech, and Leadership delivered to your inbox.</p>

                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+31 6 12345678"
                                />
                            </div>

                            {status === 'error' && <p className="error-message">{errorMessage}</p>}

                            <button type="submit" className="newsletter-submit-btn" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Signing Up...' : 'Sign Up Now'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsletterModal;
