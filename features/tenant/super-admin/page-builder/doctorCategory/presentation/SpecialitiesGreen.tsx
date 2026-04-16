'use client';
import React, { useRef, useState } from 'react';
import { DoctorCategory } from '../domain';
import { useGetDoctorCategories } from './hooks/useGetDoctorCategories';
import { SpecialitiesSliderSkeleton } from './component/skeleton/SpecialitiesSliderSkeleton';

const SpecialitiesSlider: React.FC = () => {
  const { data: categories, isPending, error } = useGetDoctorCategories();
  const colors = ['#e0f2fe', '#fef9c3', '#fee2e2', '#dcfce7'];

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 220;
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const isInsideIframe =
    typeof window !== 'undefined' && window.self !== window.top;

  const handleNavigation = (url: string) => {
    if (isInsideIframe) {
      window.parent.location.href = url;
    } else {
      window.location.href = url;
    }
  };
  if (isPending) {
    return <SpecialitiesSliderSkeleton />;
  }
  if (categories && categories.length === 0) {
    return (
      <section>
        <h2>Specialities</h2>
        <p>No specialities available</p>
      </section>
    );
  }
  if (error) {
    console.log('trigger');
    return (
      <section style={{ padding: '0 16px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Specialities</h2>
        <p style={{ color: '#94a3b8' }}>
          Unable to load specialities right now.
        </p>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: '0 16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#1e293b',
          }}
        >
          Specialities
        </h2>

        <div style={{ display: 'flex', gap: 10 }}>
          <ArrowButton direction="left" onClick={scrollLeft} />
          <ArrowButton direction="right" onClick={scrollRight} />
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 40,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
        }}
      >
        {categories &&
          categories.map((item: DoctorCategory, index: number) => {
            const isHover = hovered === item.id;

            return (
              <a
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(`/client/doctorCategory/${item.id}`);
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  minWidth: 180,
                  flex: '0 0 auto',
                  borderRadius: 20,
                  padding: 20,
                  background: `linear-gradient(135deg, ${colors[index % colors.length]}, #ffffff)`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isHover
                    ? '0 16px 28px #33CCCC'
                    : '0 4px 12px rgba(0,0,0,0.05)',
                  transform: isHover ? 'translateY(-6px)' : 'translateY(0)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#1e293b',
                    }}
                  >
                    {item.categoryName}
                  </span>

                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      transition: 'transform 0.4s ease',
                      transform: isHover ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.categoryName}
                        style={{ width: 24, height: 24, objectFit: 'contain' }}
                      />
                    ) : (
                      <span style={{ font: 'icon' }}>
                        {item.categoryName?.[0]}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
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
      background: '#ffffff',
      cursor: 'pointer',
      fontSize: 16,
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    }}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
);

export default SpecialitiesSlider;
