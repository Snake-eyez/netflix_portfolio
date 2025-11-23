import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Reading.css';
import atomicHabits from '../images/atomic_habits.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import alchemist from '../images/alchemist.jpg';
import eatThatFrog from '../images/eat_that_frog.jpg';

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
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    imgSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800",
    description: "A controversial yet compelling guide to power dynamics.",
    rating: 5,
    genre: "Philosophy"
  },
  {
    title: "The Quran",
    author: "",
    imgSrc: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
    description: "The central religious text of Islam, a source of guidance.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "My Big Toe",
    author: "Thomas Campbell",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "A trilogy unifying philosophy, physics, and metaphysics.",
    rating: 5,
    genre: "Metaphysics"
  },
  {
    title: "$100M Offers",
    author: "Alex Hormozi",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "How to make offers so good people feel stupid saying no.",
    rating: 5,
    genre: "Business"
  },
  {
    title: "Psycho-Cybernetics",
    author: "Maxwell Maltz",
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "A classic on self-image psychology for personal success.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "God-Man: The Word Made Flesh",
    author: "George W. Carey",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "Esoteric interpretations of physiology and spirituality.",
    rating: 4,
    genre: "Esoteric"
  },
  {
    title: "The 50th Law",
    author: "50 Cent & Robert Greene",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "A guide to fearlessness and strategy.",
    rating: 5,
    genre: "Strategy"
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    imgSrc: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    description: "How to build habit-forming products that keep users engaged.",
    rating: 5,
    genre: "Business"
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "How great leaders inspire everyone to take action.",
    rating: 5,
    genre: "Leadership"
  },
  {
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    imgSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800",
    description: "Understanding people's drives and motivations to master social intelligence.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "Het Euro Evangelie Deel III",
    author: "Arno Wellens",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "Tijd om te kiezen - Aan de vooravond van de nieuwe crisis.",
    rating: 4,
    genre: "Economics"
  },
  {
    title: "Het Belasting Paradijs",
    author: "Martijn van Geest, Joost van Mees & Henk Willem Smits",
    imgSrc: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    description: "Waarom niemand hier belasting betaalt - behalve u.",
    rating: 4,
    genre: "Finance"
  },
  {
    title: "Elon Musk",
    author: "Ashlee Vance",
    imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    description: "Tesla, SpaceX, and the Quest for a Fantastic Future.",
    rating: 5,
    genre: "Biography"
  },
  {
    title: "David and Goliath",
    author: "Malcolm Gladwell",
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "Underdogs, Misfits and the Art of Battling Giants.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "Five Great Tragedies",
    author: "William Shakespeare",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "Romeo & Juliet, Julius Caesar, Macbeth, Hamlet, King Lear.",
    rating: 5,
    genre: "Classic Literature"
  },
  {
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "An Intimate History - exploring the past, present, and future of genetics.",
    rating: 5,
    genre: "Science"
  },
  {
    title: "The Art of Strategy",
    author: "Avinash K. Dixit & Barry J. Nalebuff",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "A Game Theorist's Guide to Success in Business and Life.",
    rating: 5,
    genre: "Strategy"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "A Counterintuitive Approach to Living a Good Life.",
    rating: 5,
    genre: "Self-Help"
  },
  {
    title: "Discipline Equals Freedom",
    author: "Jocko Willink",
    imgSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800",
    description: "Field Manual - A guide to mental toughness and self-discipline.",
    rating: 5,
    genre: "Self-Discipline"
  },
  {
    title: "The Power of Awareness",
    author: "Neville Goddard",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "Transform your future dream into present fact through the assumption of the feeling of the wish fulfilled.",
    rating: 5,
    genre: "Manifestation"
  },
  {
    title: "Gospel of Thomas",
    author: "Ancient Text",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "When you make the two one, you will say to the mountain move, and it will move.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "Gospel of the Lots of Mary",
    author: "Ancient Manuscript",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "1500-year-old oracle technology revealing the mechanics of prayer and manifestation.",
    rating: 5,
    genre: "Ancient Wisdom"
  },
  {
    title: "The Essene Gospel of Peace",
    author: "Essene Text",
    imgSrc: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
    description: "In the moment between inhalation and exhalation, all mysteries are hidden.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "The Bhagavad Gita",
    author: "Vyasa",
    imgSrc: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800",
    description: "Establish yourself in being before action - ancient wisdom on consciousness and manifestation.",
    rating: 5,
    genre: "Philosophy"
  },
  {
    title: "Gospel of Philip",
    author: "Gnostic Text",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "God is a dyer - you must completely dye yourself with the quality of what you desire to manifest.",
    rating: 5,
    genre: "Gnostic Wisdom"
  },
  {
    title: "Thunder Perfect Mind",
    author: "Nag Hammadi Library",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "I am the incomprehensible silence and the idea of frequent remembrance.",
    rating: 5,
    genre: "Ancient Wisdom"
  },
  {
    title: "The Bible",
    author: "Various Authors",
    imgSrc: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
    description: "The foundational text of Christianity and Western spirituality.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "The Lost Book of Natural Remedies",
    author: "Claude Davis",
    imgSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800",
    description: "Ancient healing wisdom and natural medicine practices.",
    rating: 5,
    genre: "Health"
  },
  {
    title: "Myths from Mesopotamia",
    author: "Stephanie Dalley",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Ancient creation stories and wisdom from the cradle of civilization.",
    rating: 5,
    genre: "Mythology"
  },
  {
    title: "2084: Artificial Intelligence and the Future of Humanity",
    author: "John C. Lennox",
    imgSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    description: "Exploring the intersection of AI, ethics, and human destiny.",
    rating: 5,
    genre: "Technology"
  },
  {
    title: "Creating Money",
    author: "Sanaya Roman & Duane Packer",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "Attracting abundance through spiritual principles and consciousness.",
    rating: 5,
    genre: "Abundance"
  },
  {
    title: "King, Warrior, Magician, Lover",
    author: "Robert Moore & Douglas Gillette",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "Rediscovering the archetypes of mature masculine psychology.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "The Richest Man Who Ever Lived",
    author: "Steven K. Scott",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "King Solomon's secrets to success, wealth, and happiness.",
    rating: 5,
    genre: "Finance"
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "Unlock the infinite power of your subconscious to transform your life.",
    rating: 5,
    genre: "Self-Help"
  },
  {
    title: "The Kybalion",
    author: "Three Initiates",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "Hermetic philosophy and the seven universal principles.",
    rating: 5,
    genre: "Hermetic"
  },
  {
    title: "The Emerald Tablet",
    author: "Hermes Trismegistus",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Ancient wisdom and the foundation of alchemy.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "The Book of Enoch",
    author: "R.H. Charles (Translator)",
    imgSrc: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
    description: "Ancient Jewish apocalyptic text revealing celestial mysteries.",
    rating: 5,
    genre: "Ancient Text"
  },
  {
    title: "The Book of Aquarius",
    author: "Anonymous",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "Alchemical secrets and the philosopher's stone revealed.",
    rating: 5,
    genre: "Alchemy"
  },
  {
    title: "The Way of the Orisa",
    author: "Philip John Neimark",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Empowering your life through the ancient African religion of Ifa.",
    rating: 5,
    genre: "African Spirituality"
  },
  {
    title: "Edgar Cayce on the Akashic Records",
    author: "Kevin J. Todeschi",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "The book of life and accessing universal consciousness.",
    rating: 5,
    genre: "Metaphysics"
  },
  {
    title: "The Master Key System",
    author: "Charles F. Haanel",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "The original guide to manifesting through mental power.",
    rating: 5,
    genre: "Manifestation"
  },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
    rating: 5,
    genre: "Spirituality"
  },
  {
    title: "Gods of Eden",
    author: "William Bramley",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "The chilling truth about extraterrestrial infiltration and human history.",
    rating: 4,
    genre: "Alternative History"
  },
  {
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "52 shortcuts to better decisions and avoiding cognitive biases.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "Knowledge of Self",
    author: "Supreme Understanding",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "A collection of wisdom on Black consciousness and empowerment.",
    rating: 5,
    genre: "Black Consciousness"
  },
  {
    title: "When the World Was Black",
    author: "Supreme Understanding",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "The untold history of the world's first civilizations.",
    rating: 5,
    genre: "History"
  },
  {
    title: "Beyond Bitcoin",
    author: "Erik Townsend",
    imgSrc: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800",
    description: "The future of cryptocurrency and decentralized finance.",
    rating: 4,
    genre: "Cryptocurrency"
  },
  {
    title: "Numbers and You",
    author: "Lloyd Strayhorn",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "A numerology guide for everyday living and personal insight.",
    rating: 4,
    genre: "Numerology"
  },
  {
    title: "Trade Your Way to Financial Freedom",
    author: "Van K. Tharp",
    imgSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    description: "Proven strategies for developing winning trading systems.",
    rating: 5,
    genre: "Trading"
  },
  {
    title: "Your Next Five Moves",
    author: "Patrick Bet-David",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "Master the art of business strategy like a chess grandmaster.",
    rating: 5,
    genre: "Business"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    imgSrc: "https://images.unsplash.com/photo-1507842217121-9d71d5d683c5?w=800",
    description: "The modern Prometheus - a gothic masterpiece on creation and responsibility.",
    rating: 5,
    genre: "Classic Literature"
  },
  {
    title: "The Isis Papers",
    author: "Dr. Frances Cress Welsing",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "The keys to the colors - analyzing racism and white supremacy.",
    rating: 5,
    genre: "Social Commentary"
  },
  {
    title: "The Rational Male",
    author: "Rollo Tomassi",
    imgSrc: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
    description: "Positive masculinity and intersexual dynamics.",
    rating: 4,
    genre: "Relationships"
  },
  {
    title: "The Ten Tribes of Israel",
    author: "Timothy R. Jenkins",
    imgSrc: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800",
    description: "The history and identity of the lost tribes of Israel.",
    rating: 4,
    genre: "History"
  },
  {
    title: "The Color of Solomon",
    author: "Bishop Benjamin Tucker Tanner",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "What color was Solomon? Examining Biblical history and African heritage.",
    rating: 5,
    genre: "Biblical History"
  },
  {
    title: "African Dominion",
    author: "Michael A. Gomez",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "A new history of empire in early and medieval West Africa.",
    rating: 5,
    genre: "African History"
  },
  {
    title: "Post Traumatic Slave Syndrome",
    author: "Dr. Joy DeGruy",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "America's legacy of enduring injury and healing.",
    rating: 5,
    genre: "Psychology"
  },
  {
    title: "They Came Before Columbus",
    author: "Ivan Van Sertima",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "The African presence in ancient America.",
    rating: 5,
    genre: "History"
  },
  {
    title: "When We Ruled",
    author: "Robin Walker",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "The ancient and medieval history of Black civilizations.",
    rating: 5,
    genre: "African History"
  },
  {
    title: "So You Want to Be the Master?",
    author: "Maponga Joshua III",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Vhudzijena - A guide to self-mastery and leadership.",
    rating: 5,
    genre: "Empowerment"
  },
  {
    title: "48 Laws of Black Empowerment",
    author: "Dante Fortson",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Strategies for Black economic and social advancement.",
    rating: 5,
    genre: "Empowerment"
  },
  {
    title: "World's Great Men of Color",
    author: "J.A. Rogers",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "3000 B.C. to the present - celebrating Black excellence throughout history.",
    rating: 5,
    genre: "Biography"
  },
  {
    title: "The African Origin of Civilization",
    author: "Cheikh Anta Diop",
    imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800",
    description: "Myth or reality - proving Africa's foundational role in human civilization.",
    rating: 5,
    genre: "History"
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
              <div className="unified-book-cover">
                <div className="unified-cover-content">
                  <span className="unified-cover-title">{book.title}</span>
                  <span className="unified-cover-author">{book.author}</span>
                </div>
                <div className="unified-cover-decoration"></div>
              </div>
              <div className="book-genre-badge">{book.genre}</div>
            </div>
            <div className="book-page-info">
              <div className="book-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < (book.rating || 0) ? 'star filled' : 'star'}>
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
