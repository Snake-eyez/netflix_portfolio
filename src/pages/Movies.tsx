import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaFilm } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Movies.css';

interface Movie {
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: number;
    personalRating: number;
    country: string;
    runtime?: number;
}

const movies: Movie[] = [
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994, genre: 'Drama', rating: 9.3, personalRating: 10, country: 'USA', runtime: 142 },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, genre: 'Crime', rating: 9.2, personalRating: 10, country: 'USA', runtime: 175 },
    { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, genre: 'Action', rating: 9.0, personalRating: 9, country: 'USA', runtime: 152 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994, genre: 'Crime', rating: 8.9, personalRating: 9, country: 'USA', runtime: 154 },
    { title: 'American Gangster', director: 'Ridley Scott', year: 2007, genre: 'Crime', rating: 7.8, personalRating: 8, country: 'USA', runtime: 157 },
    { title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994, genre: 'Drama', rating: 8.8, personalRating: 9, country: 'USA', runtime: 142 },
    { title: 'Inception', director: 'Christopher Nolan', year: 2010, genre: 'Sci-Fi', rating: 8.8, personalRating: 9, country: 'USA', runtime: 148 },
    { title: 'The Matrix', director: 'The Wachowskis', year: 1999, genre: 'Sci-Fi', rating: 8.7, personalRating: 9, country: 'USA', runtime: 136 },
    { title: 'Goodfellas', director: 'Martin Scorsese', year: 1990, genre: 'Crime', rating: 8.7, personalRating: 9, country: 'USA', runtime: 145 },
    { title: 'Interstellar', director: 'Christopher Nolan', year: 2014, genre: 'Sci-Fi', rating: 8.6, personalRating: 10, country: 'USA', runtime: 169 },
    { title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991, genre: 'Thriller', rating: 8.6, personalRating: 8, country: 'USA', runtime: 118 },
    { title: 'Everything Everywhere All at Once', director: 'Daniels', year: 2022, genre: 'Sci-Fi', rating: 7.8, personalRating: 9, country: 'USA', runtime: 139 },
    { title: 'Deja Vu', director: 'Tony Scott', year: 2006, genre: 'Thriller', rating: 7.1, personalRating: 7, country: 'USA', runtime: 126 },
    { title: 'Spirited Away', director: 'Hayao Miyazaki', year: 2001, genre: 'Animation', rating: 8.6, personalRating: 9, country: 'Japan', runtime: 125 },
    { title: 'Seven Samurai', director: 'Akira Kurosawa', year: 1954, genre: 'Adventure', rating: 8.6, personalRating: 8, country: 'Japan', runtime: 207 },
    { title: 'The Banker', director: 'George Nolfi', year: 2020, genre: 'Drama', rating: 7.3, personalRating: 8, country: 'USA', runtime: 120 },
    { title: 'The Departed', director: 'Martin Scorsese', year: 2006, genre: 'Crime', rating: 8.5, personalRating: 8, country: 'USA', runtime: 151 },
    { title: 'Blade Runner 2049', director: 'Denis Villeneuve', year: 2017, genre: 'Sci-Fi', rating: 8.0, personalRating: 9, country: 'USA', runtime: 164 },
    { title: 'Friday', director: 'F. Gary Gray', year: 1995, genre: 'Comedy', rating: 7.3, personalRating: 8, country: 'USA', runtime: 91 },
    { title: 'Her', director: 'Spike Jonze', year: 2013, genre: 'Romance', rating: 8.0, personalRating: 8, country: 'USA', runtime: 126 },
    { title: '3 Ninjas', director: 'Jon Turteltaub', year: 1992, genre: 'Action', rating: 5.3, personalRating: 6, country: 'USA', runtime: 84 },
    { title: 'They Live', director: 'John Carpenter', year: 1988, genre: 'Sci-Fi', rating: 7.3, personalRating: 8, country: 'USA', runtime: 93 },
    { title: 'I, Robot', director: 'Alex Proyas', year: 2004, genre: 'Sci-Fi', rating: 7.1, personalRating: 7, country: 'USA', runtime: 115 },
    { title: 'Avengers: Endgame', director: 'Anthony & Joe Russo', year: 2019, genre: 'Action', rating: 8.4, personalRating: 9, country: 'USA', runtime: 181 },
    { title: 'The Wolf of Wall Street', director: 'Martin Scorsese', year: 2013, genre: 'Biography', rating: 8.2, personalRating: 9, country: 'USA', runtime: 180 },
    { title: 'Margin Call', director: 'J.C. Chandor', year: 2011, genre: 'Drama', rating: 7.1, personalRating: 8, country: 'USA', runtime: 107 },
    { title: 'Die Hard', director: 'John McTiernan', year: 1988, genre: 'Action', rating: 8.2, personalRating: 9, country: 'USA', runtime: 132 },
    { title: 'The Fifth Element', director: 'Luc Besson', year: 1997, genre: 'Sci-Fi', rating: 7.7, personalRating: 8, country: 'France', runtime: 126 },
    { title: 'Enter the Dragon', director: 'Robert Clouse', year: 1973, genre: 'Action', rating: 7.7, personalRating: 8, country: 'Hong Kong', runtime: 102 },
    { title: 'War Room', director: 'Alex Kendrick', year: 2015, genre: 'Drama', rating: 5.7, personalRating: 7, country: 'USA', runtime: 120 },
    { title: 'Powder', director: 'Victor Salva', year: 1995, genre: 'Drama', rating: 6.6, personalRating: 7, country: 'USA', runtime: 111 },
    { title: 'Life of Pi', director: 'Ang Lee', year: 2012, genre: 'Adventure', rating: 7.9, personalRating: 8, country: 'USA', runtime: 127 },
    { title: 'Cast Away', director: 'Robert Zemeckis', year: 2000, genre: 'Drama', rating: 7.8, personalRating: 9, country: 'USA', runtime: 143 },
    { title: 'The Truman Show', director: 'Peter Weir', year: 1998, genre: 'Drama', rating: 8.2, personalRating: 9, country: 'USA', runtime: 103 },
    { title: 'Minority Report', director: 'Steven Spielberg', year: 2002, genre: 'Sci-Fi', rating: 7.6, personalRating: 8, country: 'USA', runtime: 145 },
    { title: 'Edge of Tomorrow', director: 'Doug Liman', year: 2014, genre: 'Action', rating: 7.9, personalRating: 8, country: 'USA', runtime: 113 },
    { title: 'Sinners', director: 'Ryan Coogler', year: 2025, genre: 'Thriller', rating: 7.5, personalRating: 8, country: 'USA', runtime: 120 },
    { title: 'The Next Three Days', director: 'Paul Haggis', year: 2010, genre: 'Thriller', rating: 7.3, personalRating: 8, country: 'USA', runtime: 133 },
    { title: 'The Big Short', director: 'Adam McKay', year: 2015, genre: 'Comedy', rating: 7.8, personalRating: 9, country: 'USA', runtime: 130 },
    { title: 'Get Out', director: 'Jordan Peele', year: 2017, genre: 'Horror', rating: 7.7, personalRating: 9, country: 'USA', runtime: 104 },
    { title: 'Annihilation', director: 'Alex Garland', year: 2018, genre: 'Sci-Fi', rating: 6.8, personalRating: 8, country: 'USA', runtime: 115 },
    { title: 'Soul', director: 'Pete Docter', year: 2020, genre: 'Animation', rating: 8.0, personalRating: 9, country: 'USA', runtime: 100 },
];

const genres = ['All', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Thriller', 'Animation', 'Adventure', 'Comedy', 'Romance', 'Biography', 'Horror'];

const Movies: React.FC = () => {
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [sortBy, setSortBy] = useState<'year' | 'rating' | 'title'>('year');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredMovies = movies
        .filter(movie => selectedGenre === 'All' || movie.genre === selectedGenre)
        .filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.director.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'year') return b.year - a.year;
            if (sortBy === 'rating') return b.personalRating - a.personalRating;
            return a.title.localeCompare(b.title);
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
};

export default Movies;
