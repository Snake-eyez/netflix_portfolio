import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { portfolioItems } from '../data/portfolioData';
import './Portfolio.css';

import BackButton from '../components/BackButton';

export default function Portfolio(): React.JSX.Element {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % portfolioItems.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + portfolioItems.length) % portfolioItems.length);
        }
    };

    return (
        <div className="portfolio-container nf-page nf-theme-creative">
            <BackButton />

            <div className="portfolio-hero nf-hero">
                <h1 className="portfolio-title">Creative Portfolio</h1>
                <p className="portfolio-subtitle">
                    Visual storytelling through photography and conceptual art
                </p>
            </div>

            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <div
                        className="portfolio-item"
                        key={item.id}
                        style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                        onClick={() => openLightbox(index)}
                    >
                        <div className="portfolio-image-wrapper">
                            <img src={item.image} alt={item.title} className="portfolio-image" loading="lazy" decoding="async" />
                            <div className="portfolio-overlay">
                                <span className="portfolio-category">{item.category}</span>
                                <h3 className="portfolio-item-title">{item.title}</h3>
                                <p className="portfolio-item-description">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <FaTimes />
                    </button>
                    <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        ‹
                    </button>
                    <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        ›
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={portfolioItems[selectedImage].image}
                            alt={portfolioItems[selectedImage].title}
                            className="lightbox-image"
                        />
                        <div className="lightbox-info">
                            <h2>{portfolioItems[selectedImage].title}</h2>
                            <p className="lightbox-category">{portfolioItems[selectedImage].category}</p>
                            <p className="lightbox-description">{portfolioItems[selectedImage].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

