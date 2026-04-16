import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState(false);

  const slides = [
    {
      title: 'Advanced Health Checkups',
      subtitle: 'Experience 2026 Medical Standards',
      cta: 'Book Now',
      image: 'https://picsum.photos/800/400?random=50',
    },
    {
      title: 'Fastest Medicine Delivery',
      subtitle: 'Medicines at your doorstep in 2 hours',
      cta: 'Order Now',
      image: 'https://picsum.photos/800/400?random=51',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      style={{
        position: 'relative',
        height: 400,
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: hover
          ? '0 30px 50px rgba(0,0,0,0.25)'
          : '0 10px 25px rgba(0,0,0,0.15)',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentSlide === idx ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 1s ease',
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25), transparent)',
              display: 'flex',
              alignItems: 'center',
              padding: 48,
            }}
          >
            <div style={{ maxWidth: 480, color: '#fff' }}>
              <span
                style={{
                  display: 'inline-block',
                  marginBottom: 16,
                  padding: '6px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  borderRadius: 999,
                  backgroundColor: 'rgba(14,165,233,0.85)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                SPECIAL OFFER
              </span>

              <h2
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                {slide.title}
              </h2>

              <p
                style={{
                  fontSize: 18,
                  opacity: 0.9,
                  marginBottom: 32,
                }}
              >
                {slide.subtitle}
              </p>

              <button
                style={{
                  padding: '14px 32px',
                  borderRadius: 999,
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                  transition: 'all 0.3s ease',
                }}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
        }}
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? 28 : 8,
              height: 8,
              borderRadius: 999,
              backgroundColor:
                currentSlide === idx ? '#ffffff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
