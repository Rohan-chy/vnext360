import React, { useRef, useState } from 'react';

// Example articles data
export const ARTICLES = [
  {
    id: '1',
    title: 'Managing Diabetes in 2026',
    category: 'Health',
    image: 'https://picsum.photos/600/400?random=40',
  },
  {
    id: '2',
    title: 'Top 10 Superfoods for Immunity',
    category: 'Nutrition',
    image: 'https://picsum.photos/600/400?random=41',
  },
  {
    id: '3',
    title: 'The Future of Telemedicine',
    category: 'Technology',
    image: 'https://picsum.photos/600/400?random=42',
  },
  {
    id: '4',
    title: 'The Future of Telemedicine',
    category: 'Technology',
    image: 'https://picsum.photos/600/400?random=42',
  },
  {
    id: '5',
    title: 'The Future of Telemedicine',
    category: 'Technology',
    image: 'https://picsum.photos/600/400?random=42',
  },
];

const ArticlesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320; // scroll distance per arrow click

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1e293b' }}>
            Top Rated Articles
          </h2>
        </div>

        {/* Arrow buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={scrollLeft}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal slider */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          paddingBottom: 24,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: -16,
          marginRight: -16,
          scrollbarWidth: 'none', // Firefox
          scrollbarColor: '#cbd5e1 transparent', // Firefox
        }}
        className="articles-slider"
      >
        {ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Scrollbar styles */}
      <style>
        {`
          .articles-slider::-webkit-scrollbar {
            height: 8px;
          }
          .articles-slider::-webkit-scrollbar-track {
            background: transparent;
          }
          .articles-slider::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 4px;
          }
          .articles-slider::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
          }
        `}
      </style>
    </section>
  );
};

// Individual article card
const ArticleCard = ({ article }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minWidth: 300,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        overflow: 'hidden',
        flexShrink: 0, // ensures horizontal scroll
        cursor: 'pointer',
        boxShadow: hover
          ? '0 20px 30px rgba(0,0,0,0.12)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          height: 192,
          overflow: 'hidden',
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />
      </div>

      <div style={{ padding: 24 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            backgroundColor: '#224994',
            color: '#fff',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          {article.category}
        </span>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: hover ? '#224994' : '#1e293b',
            transition: 'color 0.3s ease',
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </h3>
      </div>
    </div>
  );
};

export default ArticlesSlider;
