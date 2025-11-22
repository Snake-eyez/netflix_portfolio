import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';
import vijayanikiAidhuMetlu from '../images/vijayaniki_aidu_metlu.jpg';
import venneloAdapilla from '../images/vennelo_adapilla.jpeg';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description: "A practical guide to building good habits and breaking bad ones.",
    rating: 5,
    genre: "Self-Help"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy.",
    rating: 5,
    genre: "Finance"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical journey of following one's dreams.",
    rating: 5,
    genre: "Fiction"
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: eatThatFrog,
    description: "A motivational book on overcoming procrastination.",
    rating: 4,
    genre: "Productivity"
  },
  {
    title: "Vijayaniki Aidhu Metlu",
    author: "Yandamoori Veerendranath",
    imgSrc: vijayanikiAidhuMetlu,
    description: "An inspirational Telugu book for personal growth.",
    rating: 5,
    genre: "Personal Growth"
  },
  {
    title: "Vennelo Adapilla",
    author: "Yandamoori Veerendranath",
    imgSrc: venneloAdapilla,
    description: "A classic Telugu romantic novel that touches the heart.",
    rating: 5,
    genre: "Romance"
  }
];

const Reading: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="reading-page-container">
      <button onClick={() => navigate(-1)} className="btn-back-reading">
        <FaArrowLeft /> Back
      </button>

      <div className="reading-hero">
        <h1 className="reading-page-title">Books That Shaped My Journey</h1>
        <p className="reading-page-subtitle">
          These books have influenced my perspectives, motivation, and personal growth
        </p>
      </div>

      <div className="books-page-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-page-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="book-cover-container">
              <img src={book.imgSrc} alt={book.title} className="book-cover-image" />
              <div className="book-genre-badge">{book.genre}</div>
            </div>
            <div className="book-page-info">
              <h3 className="book-page-title">{book.title}</h3>
              <h4 className="book-page-author">by {book.author}</h4>
              <div className="book-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < book.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="book-page-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reading-cta">
        <h2>Have a book recommendation?</h2>
        <p>I'm always looking for my next great read</p>
        <button onClick={() => navigate('/contact-me')} className="reading-cta-btn">
          Share Your Recommendation
        </button>
      </div>
    </div>
  );
};

export default Reading;
