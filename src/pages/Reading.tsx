import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Reading.css';

interface Book {
  title: string;
  author: string;
  genre: string;
  rating: number;
  yearRead?: number;
  pages?: number;
}

const books: Book[] = [
  // Original 57 books from user's list
  { title: 'The Clean Coder', author: 'Robert C. Martin', genre: 'Programming', rating: 5, yearRead: 2024, pages: 256 },
  { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Improvement', rating: 5, yearRead: 2023, pages: 320 },
  { title: 'Deep Work', author: 'Cal Newport', genre: 'Productivity', rating: 4, yearRead: 2023, pages: 304 },
  { title: 'The Psychology of Money', author: 'Morgan Housel', genre: 'Finance', rating: 4, yearRead: 2024, pages: 256 },
  { title: 'System Design Interview', author: 'Alex Xu', genre: 'Technology', rating: 5, yearRead: 2024, pages: 322 },
  { title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt', genre: 'Programming', rating: 5, yearRead: 2023, pages: 352 },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', genre: 'Finance', rating: 5, yearRead: 2023, pages: 336 },
  { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Philosophy', rating: 5, yearRead: 2022, pages: 208 },
  { title: 'The Art of War', author: 'Sun Tzu', genre: 'Strategy', rating: 4, yearRead: 2023, pages: 256 },
  { title: '48 Laws of Power', author: 'Robert Greene', genre: 'Psychology', rating: 4, yearRead: 2024, pages: 496 },
  { title: 'Outwitting the Devil', author: 'Napoleon Hill', genre: 'Self-Improvement', rating: 5, yearRead: 2024, pages: 256 },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', genre: 'Finance', rating: 4, yearRead: 2023, pages: 144 },
  { title: 'Natural Remedies Encyclopedia', author: 'Various Authors', genre: 'Health', rating: 4, yearRead: 2024, pages: 512 },
  { title: 'The Book of Enoch', author: 'Ancient Text', genre: 'Spirituality', rating: 4, yearRead: 2022, pages: 200 },
  { title: 'The Way of the Superior Man', author: 'David Deida', genre: 'Relationships', rating: 4, yearRead: 2023, pages: 192 },
  { title: 'Beyond Bitcoin', author: 'Erik Townsend', genre: 'Technology', rating: 4, yearRead: 2024, pages: 320 },
  { title: 'The Rational Male', author: 'Rollo Tomassi', genre: 'Psychology', rating: 4, yearRead: 2023, pages: 302 },
  { title: 'The Book of Five Rings', author: 'Miyamoto Musashi', genre: 'Philosophy', rating: 4, yearRead: 2023, pages: 180 },
  { title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'Political Science', rating: 4, yearRead: 2022, pages: 140 },
  { title: 'Never Split the Difference', author: 'Chris Voss', genre: 'Business', rating: 5, yearRead: 2024, pages: 288 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'History', rating: 5, yearRead: 2023, pages: 464 },
  { title: 'The Bible', author: 'Various', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 1200 },
  { title: 'The Quran', author: 'Various', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 604 },
  { title: 'The Bhagavad Gita', author: 'Ancient Hindu Text', genre: 'Philosophy', rating: 5, yearRead: 2023, pages: 200 },
  { title: 'Writing Tools', author: 'Roy Peter Clark', genre: 'Writing', rating: 5, yearRead: 2024, pages: 272 },
  { title: 'Expert Secrets', author: 'Russell Brunson', genre: 'Business', rating: 5, yearRead: 2024, pages: 352 },
  { title: 'The Master Key System', author: 'Charles F. Haanel', genre: 'Self-Improvement', rating: 5, yearRead: 2023, pages: 208 },
  { title: 'The Book of Aquarius', author: 'Anonymous', genre: 'Alchemy', rating: 4, yearRead: 2023, pages: 164 },
  { title: 'God-Man: The Word Made Flesh', author: 'George W. Carey', genre: 'Spirituality', rating: 4, yearRead: 2022, pages: 176 },
  { title: '21 Irrefutable Laws of Leadership', author: 'John C. Maxwell', genre: 'Leadership', rating: 5, yearRead: 2024, pages: 352 },
  { title: 'Myths from Mesopotamia', author: 'Stephanie Dalley', genre: 'Mythology', rating: 4, yearRead: 2023, pages: 352 },
  { title: '2084: Artificial Intelligence and the Future of Humanity', author: 'John C. Lennox', genre: 'Technology', rating: 5, yearRead: 2024, pages: 240 },
  { title: 'King, Warrior, Magician, Lover', author: 'Robert Moore & Douglas Gillette', genre: 'Psychology', rating: 5, yearRead: 2023, pages: 192 },
  { title: 'Psycho-Cybernetics Deluxe', author: 'Maxwell Maltz', genre: 'Self-Improvement', rating: 5, yearRead: 2023, pages: 288 },
  { title: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy', genre: 'Self-Improvement', rating: 5, yearRead: 2022, pages: 304 },
  { title: 'The Kybalion', author: 'Three Initiates', genre: 'Philosophy', rating: 5, yearRead: 2023, pages: 224 },
  { title: 'African Spirituality: Beliefs and Practices', author: 'Jacob K. Olupona', genre: 'Spirituality', rating: 4, yearRead: 2023, pages: 288 },
  { title: 'The Egyptian Book of the Dead Deluxe Silkbound Edition', author: 'E.A. Wallis Budge', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 400 },
  { title: 'The Way of the Orisa', author: 'Philip John Neimark', genre: 'Spirituality', rating: 4, yearRead: 2023, pages: 272 },
  { title: 'Edgar Cayce on the Akashic Records: The Book of Life', author: 'Kevin J. Todeschi', genre: 'Spirituality', rating: 4, yearRead: 2023, pages: 256 },
  { title: 'The Four Agreements', author: 'Don Miguel Ruiz', genre: 'Self-Improvement', rating: 5, yearRead: 2022, pages: 160 },
  { title: 'The Gods of Eden', author: 'William Bramley', genre: 'History', rating: 4, yearRead: 2023, pages: 496 },
  { title: 'The Art of Thinking Clearly', author: 'Rolf Dobelli', genre: 'Psychology', rating: 5, yearRead: 2024, pages: 384 },
  { title: 'Numbers and You', author: 'Lloyd Strayhorn', genre: 'Numerology', rating: 4, yearRead: 2022, pages: 288 },
  { title: 'Your Next Five Moves', author: 'Patrick Bet-David', genre: 'Business', rating: 5, yearRead: 2024, pages: 320 },
  { title: 'True Wealth Formula', author: 'James Whittaker', genre: 'Finance', rating: 4, yearRead: 2024, pages: 256 },
  { title: 'Frankenstein', author: 'Mary Shelley', genre: 'Literature', rating: 5, yearRead: 2022, pages: 280 },
  { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', genre: 'Business', rating: 5, yearRead: 2024, pages: 242 },
  { title: 'The Fortunes of Africa', author: 'Martin Meredith', genre: 'History', rating: 4, yearRead: 2023, pages: 784 },
  { title: 'The Willie Lynch Letter and the Making of a Slave', author: 'Willie Lynch', genre: 'History', rating: 4, yearRead: 2022, pages: 48 },
  { title: 'Message to the Blackman in America', author: 'Elijah Muhammad', genre: 'History', rating: 5, yearRead: 2023, pages: 368 },
  { title: 'Post Traumatic Slave Syndrome', author: 'Joy DeGruy', genre: 'Psychology', rating: 5, yearRead: 2024, pages: 256 },
  { title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', genre: 'Biography', rating: 5, yearRead: 2024, pages: 416 },
  { title: 'Sam Walton: Made In America', author: 'Sam Walton', genre: 'Biography', rating: 5, yearRead: 2023, pages: 256 },
  { title: 'Grinding It Out: The Making of McDonald\'s', author: 'Ray Kroc', genre: 'Biography', rating: 5, yearRead: 2023, pages: 208 },
  { title: 'Shoe Dog', author: 'Phil Knight', genre: 'Biography', rating: 5, yearRead: 2024, pages: 400 },
  { title: 'Poor Charlie\'s Almanack: The Essential Wit and Wisdom of Charles T. Munger', author: 'Charles T. Munger', genre: 'Business', rating: 5, yearRead: 2024, pages: 544 },

  // Additional books from original list
  { title: 'Eat That Frog', author: 'Brian Tracy', genre: 'Productivity', rating: 4, yearRead: 2023, pages: 224 },
  { title: 'My Big Toe', author: 'Thomas Campbell', genre: 'Metaphysics', rating: 5, yearRead: 2022, pages: 800 },
  { title: '$100M Offers', author: 'Alex Hormozi', genre: 'Business', rating: 5, yearRead: 2024, pages: 208 },
  { title: 'The 50th Law', author: '50 Cent & Robert Greene', genre: 'Strategy', rating: 5, yearRead: 2023, pages: 304 },
  { title: 'Hooked', author: 'Nir Eyal', genre: 'Business', rating: 5, yearRead: 2024, pages: 256 },
  { title: 'Start with Why', author: 'Simon Sinek', genre: 'Leadership', rating: 5, yearRead: 2023, pages: 256 },
  { title: 'The Laws of Human Nature', author: 'Robert Greene', genre: 'Psychology', rating: 5, yearRead: 2024, pages: 624 },
  { title: 'Het Euro Evangelie Deel III', author: 'Arno Wellens', genre: 'Economics', rating: 4, yearRead: 2023, pages: 320 },
  { title: 'Het Belasting Paradijs', author: 'Martijn van Geest, Joost van Mees & Henk Willem Smits', genre: 'Finance', rating: 4, yearRead: 2023, pages: 256 },
  { title: 'David and Goliath', author: 'Malcolm Gladwell', genre: 'Psychology', rating: 5, yearRead: 2023, pages: 320 },
  { title: 'Five Great Tragedies', author: 'William Shakespeare', genre: 'Classic Literature', rating: 5, yearRead: 2022, pages: 400 },
  { title: 'The Gene', author: 'Siddhartha Mukherjee', genre: 'Science', rating: 5, yearRead: 2023, pages: 608 },
  { title: 'The Art of Strategy', author: 'Avinash K. Dixit & Barry J. Nalebuff', genre: 'Strategy', rating: 5, yearRead: 2023, pages: 512 },
  { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', genre: 'Self-Help', rating: 5, yearRead: 2023, pages: 224 },
  { title: 'Discipline Equals Freedom', author: 'Jocko Willink', genre: 'Self-Discipline', rating: 5, yearRead: 2024, pages: 208 },
  { title: 'The Power of Awareness', author: 'Neville Goddard', genre: 'Manifestation', rating: 5, yearRead: 2022, pages: 160 },
  { title: 'Gospel of Thomas', author: 'Ancient Text', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 120 },
  { title: 'Gospel of the Lots of Mary', author: 'Ancient Manuscript', genre: 'Ancient Wisdom', rating: 5, yearRead: 2022, pages: 100 },
  { title: 'The Essene Gospel of Peace', author: 'Essene Text', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 96 },
  { title: 'Gospel of Philip', author: 'Gnostic Text', genre: 'Gnostic Wisdom', rating: 5, yearRead: 2022, pages: 80 },
  { title: 'Thunder Perfect Mind', author: 'Nag Hammadi Library', genre: 'Ancient Wisdom', rating: 5, yearRead: 2022, pages: 64 },
  { title: 'The Lost Book of Natural Remedies', author: 'Claude Davis', genre: 'Health', rating: 5, yearRead: 2023, pages: 304 },
  { title: 'Creating Money', author: 'Sanaya Roman & Duane Packer', genre: 'Abundance', rating: 5, yearRead: 2023, pages: 288 },
  { title: 'The Richest Man Who Ever Lived', author: 'Steven K. Scott', genre: 'Finance', rating: 5, yearRead: 2023, pages: 256 },
  { title: 'The Emerald Tablet', author: 'Hermes Trismegistus', genre: 'Spirituality', rating: 5, yearRead: 2022, pages: 48 },
  { title: 'Knowledge of Self', author: 'Supreme Understanding', genre: 'Black Consciousness', rating: 5, yearRead: 2023, pages: 400 },
  { title: 'When the World Was Black', author: 'Supreme Understanding', genre: 'History', rating: 5, yearRead: 2023, pages: 600 },
  { title: 'Trade Your Way to Financial Freedom', author: 'Van K. Tharp', genre: 'Trading', rating: 5, yearRead: 2024, pages: 368 },
  { title: 'The Isis Papers', author: 'Dr. Frances Cress Welsing', genre: 'Social Commentary', rating: 5, yearRead: 2023, pages: 320 },
  { title: 'The Ten Tribes of Israel', author: 'Timothy R. Jenkins', genre: 'History', rating: 4, yearRead: 2022, pages: 256 },
  { title: 'The Color of Solomon', author: 'Bishop Benjamin Tucker Tanner', genre: 'Biblical History', rating: 5, yearRead: 2022, pages: 192 },
  { title: 'African Dominion', author: 'Michael A. Gomez', genre: 'African History', rating: 5, yearRead: 2023, pages: 544 },
  { title: 'They Came Before Columbus', author: 'Ivan Van Sertima', genre: 'History', rating: 5, yearRead: 2023, pages: 288 },
  { title: 'When We Ruled', author: 'Robin Walker', genre: 'African History', rating: 5, yearRead: 2023, pages: 480 },
  { title: 'So You Want to Be the Master?', author: 'Maponga Joshua III', genre: 'Empowerment', rating: 5, yearRead: 2023, pages: 256 },
  { title: '48 Laws of Black Empowerment', author: 'Dante Fortson', genre: 'Empowerment', rating: 5, yearRead: 2023, pages: 320 },
  { title: 'World\'s Great Men of Color', author: 'J.A. Rogers', genre: 'Biography', rating: 5, yearRead: 2023, pages: 704 },
  { title: 'The African Origin of Civilization', author: 'Cheikh Anta Diop', genre: 'History', rating: 5, yearRead: 2023, pages: 320 },
  { title: 'Monas Hieroglyphica', author: 'John Dee', genre: 'Spirituality', rating: 5, yearRead: 2025, pages: 112 },
];

const genres = ['All', 'Self-Improvement', 'Business', 'Spirituality', 'Psychology', 'History', 'Biography', 'Finance', 'Technology', 'Philosophy', 'Programming', 'Leadership', 'Strategy', 'Productivity', 'Science', 'Literature', 'Mythology'];

const Reading: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState<'year' | 'rating' | 'title'>('year');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books
    .filter(book => selectedGenre === 'All' || book.genre === selectedGenre)
    .filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'year') return (b.yearRead || 2020) - (a.yearRead || 2020);
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  const totalPages = books.reduce((sum, book) => sum + (book.pages || 0), 0);
  const avgRating = (books.reduce((sum, book) => sum + book.rating, 0) / books.length).toFixed(1);
  const fiveStarCount = books.filter(b => b.rating === 5).length;

  return (
    <div className="reading-page-container">
      <button onClick={() => navigate(-1)} className="btn-back-reading">
        <FaArrowLeft /> Back
      </button>

      <div className="reading-header">
        <div className="reading-header-top">
          <div className="reading-icon">
            <FaBook />
          </div>
          <div className="reading-header-info">
            <h1 className="reading-page-title">My Book Library</h1>
            <div className="reading-stats-inline">
              <span>{books.length} books</span>
              <span className="stat-separator">•</span>
              <span className="highlight">{totalPages.toLocaleString()} pages read</span>
            </div>
          </div>
        </div>

        <p className="reading-page-subtitle">
          A curated collection of books that have shaped my thinking, expanded my knowledge, and transformed my perspective across diverse fields of study.
        </p>

        <div className="reading-controls">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search books..."
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

      <div className="books-grid">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="book-card"
            style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
          >
            <div className="book-cover-wrapper">
              <div className="book-cover-placeholder">
                <div className="book-spine"></div>
                <div className="book-cover-content">
                  <div className="book-cover-title">{book.title}</div>
                  <div className="book-cover-author">{book.author}</div>
                </div>
              </div>
              <div className="book-genre-badge">{book.genre}</div>
            </div>
            <div className="book-info">
              <div className="book-meta">
                <span>{book.yearRead || '2022'}</span>
                <span>•</span>
                <span>{book.pages || 200} pages</span>
              </div>
              <div className="book-ratings">
                <div className="book-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < book.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
                <span className="rating-score">{book.rating}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reading-stats-section">
        <h2>📊 Reading Statistics</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{books.length}</div>
            <div className="stat-label">Total Books</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{avgRating}/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{fiveStarCount}</div>
            <div className="stat-label">5-Star Ratings</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{(totalPages / 1000).toFixed(1)}k</div>
            <div className="stat-label">Pages Read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
