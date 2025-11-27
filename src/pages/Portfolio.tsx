import React, { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio: React.FC = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const portfolioItems = [
        {
            id: 1,
            image: '/portfolio-1.jpg',
            title: 'Urban Nights',
            category: 'Photography',
            description: 'Capturing the essence of city life after dark'
        },
        {
            id: 2,
            image: '/portfolio-2.jpg',
            title: 'Natural Elegance',
            category: 'Product Photography',
            description: 'Jewelry and nature in perfect harmony'
        },
        {
            id: 3,
            image: '/portfolio-3.jpg',
            title: 'Human Connection',
            category: 'Portrait',
            description: 'Intimate moments between souls'
        },
        {
            id: 4,
            image: '/portfolio-4.jpg',
            title: 'Fashion Forward',
            category: 'Fashion',
            description: 'Modern aesthetics and timeless style'
        },
        {
            id: 5,
            image: '/portfolio-5.png',
            title: 'Conceptual Art',
            category: 'Concept',
            description: 'Exploring the boundaries of reality'
        },
        {
            id: 6,
            image: '/portfolio-6.png',
            title: 'Urban Motion',
            category: 'Street Photography',
            description: 'Movement and light in the urban landscape'
        },
        {
            id: 7,
            image: '/portfolio-7.jpg',
            title: 'Futuristic Vision',
            category: '3D Art',
            description: 'Surreal exploration of form and space'
        },
        {
            id: 8,
            image: '/portfolio-8.jpg',
            title: 'Digital Sanctuary',
            category: 'Concept Art',
            description: 'Where technology meets spirituality'
        },
        {
            id: 9,
            image: '/portfolio-9.jpg',
            title: 'Floral Fashion',
            category: 'Fashion Photography',
            description: 'Elegance blooming in nature\'s embrace'
        },
        {
            id: 10,
            image: '/portfolio-10.jpg',
            title: 'Geometric Elegance',
            category: 'Product Photography',
            description: 'Sacred geometry meets modern design'
        },
        {
            id: 11,
            image: '/portfolio-11.jpg',
            title: 'Crimson Energy',
            category: 'Artistic Portrait',
            description: 'Bold expression through vibrant color and texture'
        },
        {
            id: 12,
            image: '/portfolio-12.jpg',
            title: 'Golden Touch',
            category: 'Conceptual Art',
            description: 'The Midas touch in everyday moments'
        },
        {
            id: 13,
            image: '/portfolio-13.jpg',
            title: 'Chromatic Flow',
            category: 'Portrait Art',
            description: 'Liquid light painting human emotion'
        },
        {
            id: 14,
            image: '/portfolio-14.png',
            title: 'Miniature Sanctuary',
            category: 'Still Life',
            description: 'A peaceful world captured under glass'
        }
    ];

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
        <div className="portfolio-container">
            <button onClick={() => navigate(-1)} className="btn-back-portfolio">
                <FaArrowLeft /> Back
            </button>

            <div className="portfolio-hero">
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
                            <img src={item.image} alt={item.title} className="portfolio-image" />
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
};

export default Portfolio;
