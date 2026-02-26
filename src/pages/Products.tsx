import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Products.css';

import BackButton from '../components/BackButton';

const Products: React.FC = () => {
    const products = [
        {
            title: "The Consciousness Council Prompt",
            description: "There are questions too big for one mind to hold. The Council gathers wisdom from sages, generals, mystics, and scientists into one table. When you invoke the Consciousness Council, you're inviting five archetypal voices to speak across centuries, traditions, and disciplines.",
            features: [
                "Five archetypal voices debate your questions",
                "Perspective from multiple disciplines",
                "Clarity through contradiction and completion",
                "Includes Marcus Aurelius Expansion Pack"
            ],
            price: "Premium",
            link: "https://derrelwinter.gumroad.com/l/thecounsil",
            image: "/consciousness_council.jpg",
            tag: "AI Prompt"
        },
        {
            title: "Free ComfyUI Setup Guide",
            description: "A comprehensive, no-fluff guide to get started with ComfyUI—from zero to your first AI-generated image. Clear path, no gatekeeping.",
            features: [
                "Why ComfyUI matters and what makes it powerful",
                "Installation for Windows and macOS (Apple Silicon & Intel)",
                "How to handle models, custom nodes, and dependencies",
                "Load your first workflow and generate images",
                "Tips to avoid common mistakes"
            ],
            price: "Free",
            link: "https://derrelwinter.gumroad.com/l/comfyui",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            tag: "Free Guide"
        }
    ];

    return (
        <div className="products-container">
            <BackButton />

            <div className="products-hero">
                <h1 className="products-title">Digital Products</h1>
                <p className="products-subtitle">
                    Tools, prompts, and guides to accelerate your AI journey
                </p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                        <div className="product-image-container">
                            <img src={product.image} alt={product.title} className="product-image" loading="lazy" decoding="async" />
                            <div className="product-tag">{product.tag}</div>
                        </div>

                        <div className="product-content">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">{product.description}</p>

                            <div className="product-features">
                                <h3>What's Included:</h3>
                                <ul>
                                    {product.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-footer">
                                <div className="product-price">{product.price}</div>
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="product-btn"
                                >
                                    Get it Now <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="coffee-cta">
                <h2>Enjoying my content?</h2>
                <p>Support my work and buy me a coffee ☕</p>
                <a
                    href="https://derrelwinter.gumroad.com/coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coffee-cta-btn"
                >
                    ☕ Buy Me a Coffee
                </a>
            </div>
        </div>
    );
};

export default Products;
