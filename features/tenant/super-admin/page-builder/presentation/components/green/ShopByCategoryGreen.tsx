'use client';
import React, { useRef, useState } from 'react';

export const SHOP_CATEGORIES = [
  {
    id: '1',
    name: 'Health Monitors',
    image:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=600&auto=format&fit=crop', // BP monitor / medical device
  },
  {
    id: '2',
    name: 'Ayurvedic Care',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Pain Relief',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop', // pain relief / physiotherapy
  },
  {
    id: '4',
    name: 'Baby Care',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop', // baby products
  },
  {
    id: '5',
    name: 'Nutritional Drinks',
    image:
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=600&auto=format&fit=crop', // protein shake
  },
  {
    id: '6',
    name: 'Adult Diapers',
    image:
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=600&auto=format&fit=crop', // caregiving / elderly care
  },
  {
    id: '7',
    name: 'Vitamins',
    image:
      'https://images.unsplash.com/photo-1580281658629-89d3cdd0b7c1?q=80&w=600&auto=format&fit=crop', // vitamin capsules
  },
  {
    id: '8',
    name: 'Protein Powders',
    image:
      'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=600&auto=format&fit=crop', // protein shake
  },
  {
    id: '9',
    name: 'Summer Essentials',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', // summer vibe (hydration/sun)
  },
  {
    id: '10',
    name: 'Medical Supplies',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop', // medical tools
  },
  {
    id: '11',
    name: 'Intimate Care',
    image:
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=600&auto=format&fit=crop', // hygiene products
  },
  {
    id: '12',
    name: 'Skin & Hair',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop', // skincare products
  },
];

const ShopByCategory: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 260;

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });

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
          Shop By Category ({SHOP_CATEGORIES.length})
        </h2>

        {/* Arrows */}
        <div style={{ display: 'flex', gap: 8 }}>
          <ArrowButton direction="left" onClick={scrollLeft} />
          <ArrowButton direction="right" onClick={scrollRight} />
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
          paddingBottom: 20,
        }}
      >
        {SHOP_CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            onClick={() =>
              handleNavigation(`/client/shop-by-category/${cat.name}`)
            }
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

const ArrowButton = ({ direction, onClick }: any) => (
  <button
    onClick={onClick}
    style={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid #e2e8f0',
      background: '#fff',
      cursor: 'pointer',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      transition: 'all 0.2s ease',
    }}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
);

const CategoryCard = ({ cat, onClick }: { cat: any; onClick: () => void }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        minWidth: 140,
        maxWidth: 160,
        flex: '0 0 auto',
        background: '#fff',
        borderRadius: 20,
        padding: 14,
        textAlign: 'center',
        border: '1px solid #e2e8f0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 14px 26px rgba(13,102,65,0.15)'
          : '0 4px 10px rgba(0,0,0,0.05)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        scrollSnapAlign: 'start',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div
        style={{
          height: 120,
          borderRadius: 16,
          overflow: 'hidden',
          marginBottom: 10,
        }}
      >
        <img
          src={cat.image}
          alt={cat.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hover ? 'scale(1.08)' : 'scale(1)',
          }}
        />
      </div>

      {/* Name */}
      <h4
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: '#1e293b',
          margin: 0,
        }}
      >
        {cat.name}
      </h4>
    </div>
  );
};

export default ShopByCategory;
