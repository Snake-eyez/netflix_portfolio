import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Movies.css';
import inception from '../images/inception.jpg';
import interstellar from '../images/interstellar.jpg';
import theMatrix from '../images/the_matrix.jpg';
import theGodfather from '../images/the_godfather.jpg';
import shawshank from '../images/shawshank_redemption.jpg';

const movies = [
    {
        title: 'Inception',
        year: 2010,
        genre: 'Sci-Fi',
        imgSrc: inception,
        description: 'A mind‑bending thriller about dreams within dreams.',
        rating: 5
    },
    {
        title: 'Interstellar',
        year: 2014,
        genre: 'Sci-Fi',
        imgSrc: interstellar,
        description: 'An epic journey through space and time to save humanity.',
        rating: 5
    },
    {
        title: 'The Matrix',
        year: 1999,
        genre: 'Action',
        imgSrc: theMatrix,
        description: 'Neo discovers the truth about the simulated reality he lives in.',
        rating: 5
    },
    {
        title: 'The Godfather',
        year: 1972,
        genre: 'Crime',
        imgSrc: theGodfather,
        description: 'The saga of a mafia family and the rise of Michael Corleone.',
        rating: 5
    },
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        genre: 'Drama',
        imgSrc: shawshank,
        description: 'Hope and friendship thrive behind prison walls.',
        rating: 5
    }
];

const Movies: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="movies-page-container">
            <button onClick={() => navigate(-1)} className="btn-back-movies">
                <FaArrowLeft /> Back
            </button>

            <div className="movies-hero">
                <h1 className="movies-page-title">Movies I've Watched</h1>
                <p className="movies-page-subtitle">
                    A curated list of films that left a lasting impression.
                </p>
            </div>

            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <div
                        key={index}
                        className="movie-card"
                        style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                    >
                        <div className="movie-poster-wrapper">
                            <img src={movie.imgSrc} alt={movie.title} className="movie-poster" />
                            <div className="movie-genre-badge">{movie.genre}</div>
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title} ({movie.year})</h3>
                            <div className="movie-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < movie.rating ? 'star filled' : 'star'}>★</span>
                                ))}
                            </div>
                            <p className="movie-description">{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="movies-cta">
                <h2>Got a film suggestion?</h2>
                <p>I'm always looking for new movies to add to my watchlist.</p>
                <button onClick={() => navigate('/contact-me')} className="movies-cta-btn">
                    Share Your Recommendation
                </button>
            </div>
        </div>
    );
};

export default Movies;
