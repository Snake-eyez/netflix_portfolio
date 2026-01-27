import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaFilm } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { movies } from '../data/moviesData';
import './Movies.css';

const genres = ['All', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Thriller', 'Animation', 'Adventure', 'Comedy', 'Romance', 'Biography', 'Horror'];

export default function Movies(): React.JSX.Element {
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState<string>('All');
    const [sortBy, setSortBy] = useState<'year' | 'rating' | 'title'>('year');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredMovies = movies
        .filter(movie => selectedGenre === 'All' || movie.genre === selectedGenre)
        .filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.director.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'year': return b.year - a.year;
                case 'rating': return b.personalRating - a.personalRating;
                case 'title': return a.title.localeCompare(b.title);
                default: return 0;
            }
        });

    const totalRuntime = movies.reduce((sum, movie) => sum + (movie.runtime || 0), 0);
    const avgRating = (movies.reduce((sum, movie) => sum + movie.personalRating, 0) / movies.length).toFixed(1);
    const highRatedCount = movies.filter(m => m.personalRating >= 9).length;

    return (
        <div className="movies-page-container">
            <button onClick={() => navigate(-1)} className="btn-back-movies">
                <FaArrowLeft /> Back
            </button>

            <div className="movies-header">
                <div className="movies-header-top">
                    <div className="movies-icon">
                        <FaFilm />
                    </div>
                    <div className="movies-header-info">
                        <h1 className="movies-page-title">My Movie Collection</h1>
                        <div className="movies-stats-inline">
                            <span>{movies.length} films</span>
                            <span className="stat-separator">•</span>
                            <span className="highlight">{totalRuntime} min total</span>
                        </div>
                    </div>
                </div>

                <p className="movies-page-subtitle">
                    My personal selection of the greatest films ever made. Each one has left a lasting impact and represents the pinnacle of cinematic artistry across different genres and eras.
                </p>

                <div className="movies-controls">
                    <div className="search-box">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="genre-filters">
                        {genres.map(genre => (
                            <button
                                key={genre}
                                className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                                onClick={() => setSelectedGenre(genre)}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>

                    <div className="sort-controls">
                        <button
                            className={`sort-btn ${sortBy === 'year' ? 'active' : ''}`}
                            onClick={() => setSortBy('year')}
                        >
                            Year
                        </button>
                        <button
                            className={`sort-btn ${sortBy === 'rating' ? 'active' : ''}`}
                            onClick={() => setSortBy('rating')}
                        >
                            Rating
                        </button>
                        <button
                            className={`sort-btn ${sortBy === 'title' ? 'active' : ''}`}
                            onClick={() => setSortBy('title')}
                        >
                            Title
                        </button>
                    </div>
                </div>
            </div>

            <div className="movies-grid">
                {filteredMovies.map((movie, index) => (
                    <div
                        key={index}
                        className="movie-card"
                        style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
                    >
                        <div className="movie-poster-wrapper">
                            <div className="movie-poster-placeholder">
                                <FaFilm />
                            </div>
                            <div className="movie-genre-badge">{movie.genre}</div>
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-director">by {movie.director}</p>
                            <div className="movie-meta">
                                <span>{movie.year}</span>
                                <span>•</span>
                                <span>{movie.country}</span>
                            </div>
                            {movie.runtime && (
                                <div className="movie-runtime">
                                    <span>⏱ {movie.runtime} min</span>
                                </div>
                            )}
                            <div className="movie-ratings">
                                <div className="movie-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < Math.floor(movie.personalRating / 2) ? 'star filled' : 'star'}>★</span>
                                    ))}
                                </div>
                                <span className="rating-score">{movie.personalRating}/10</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="movies-stats-section">
                <h2>🎯 Movie Statistics</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">{movies.length}</div>
                        <div className="stat-label">Total Movies</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{avgRating}/10</div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{highRatedCount}</div>
                        <div className="stat-label">9-10 Star Ratings</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{Math.round(totalRuntime / 60)}h</div>
                        <div className="stat-label">Total Watch Time</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
