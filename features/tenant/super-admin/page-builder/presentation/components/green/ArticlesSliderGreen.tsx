'use client';
import React, { useRef, useState } from 'react';
import { primary_green } from '../../css/theme';

// Example articles data
export const ARTICLES = [
  {
    id: '1',
    title: 'Managing Diabetes: Symptoms, Diet & Daily Care',
    category: 'Chronic Care',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Top Immunity Boosting Foods You Should Eat Daily',
    category: 'Nutrition',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Telemedicine: How Online Doctor Consultation Works',
    category: 'Digital Health',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Common Heart Disease Warning Signs You Shouldn’t Ignore',
    category: 'Cardiology',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Mental Health Matters: Managing Stress & Anxiety',
    category: 'Mental Health',
    image:
      'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Child Care Basics: Keeping Your Baby Healthy',
    category: 'Pediatrics',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
  },
];

const ArticlesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isInsideIframe =
    typeof window !== 'undefined' && window.self !== window.top;

  const handleNavigation = (url: string) => {
    if (isInsideIframe) {
      window.parent.location.href = url;
    } else {
      window.location.href = url;
    }
  };

  return (
    <section style={{ fontFamily: "'Inter', sans-serif'", padding: '0 16px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b' }}>
          Top Rated Articles
        </h2>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            onClick={() => handleNavigation('/client/articles')}
            style={{
              background: primary_green,
              border: 'none',
              padding: '8px 14px',
              borderRadius: 20,
              color: '#fff',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            View All
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: 40,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          paddingBottom: 24,
        }}
      >
        {ARTICLES.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => handleNavigation(`/client/articles/${article.id}`)}
          />
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
};

const ArticleCard = ({
  article,
  onClick,
}: {
  article: any;
  onClick: () => void;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        minWidth: 220,
        maxWidth: 260,
        flex: '0 0 auto',
        backgroundColor: '#ffffff',
        borderRadius: 18,
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 16px 28px rgba(13,102,65,0.15)'
          : '0 4px 12px rgba(0,0,0,0.05)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image wrapper (same structure as provider card) */}
      <div style={{ padding: 12 }}>
        <div
          style={{
            height: 150,
            overflow: 'hidden',
            borderRadius: 14,
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
              transform: hover ? 'scale(1.08)' : 'scale(1)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: primary_green,
          }}
        >
          {article.category}
        </span>

        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#1e293b',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {article.title}
        </h3>
      </div>
    </div>
  );
};

export default ArticlesSlider;
