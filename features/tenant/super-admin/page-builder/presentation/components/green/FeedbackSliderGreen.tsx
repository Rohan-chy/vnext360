'use client';
import { useRef, useState } from 'react';

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Doe',
    message:
      'This podcast is amazing! The storytelling and production quality are top-notch.',
    rating: 3,
  },
  {
    id: 2,
    name: 'Jane Smith',
    message:
      'This podcast kept me on the edge of my seat. A must-listen for true crime fans!',
    rating: 3,
  },
  {
    id: 3,
    name: 'Emily Johnson',
    message:
      "I can't get enough of this podcast! The host’s voice is so soothing.",
    rating: 3,
  },
  {
    id: 4,
    name: 'Michael Brown',
    message: 'Incredible stories and excellent narration. Highly recommended!',
    rating: 3,
  },
  {
    id: 5,
    name: 'John Cena',
    message: 'Incredible stories and excellent narration. Highly recommended!',
    rating: 4,
  },
];

const FeedbackSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 260;

  const scrollLeft = () =>
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

  const scrollRight = () =>
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });

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
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b' }}>
          What Our Clients Are Saying
        </h2>

        <div style={{ display: 'flex', gap: 10 }}></div>
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
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
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

// Card
const TestimonialCard = ({ testimonial }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minWidth: 220,
        maxWidth: 260,
        flex: '0 0 auto',
        backgroundColor: '#ffffff',
        borderRadius: 18,
        border: '1px solid #e2e8f0',
        padding: '8px 18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        scrollSnapAlign: 'start',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 16px 28px rgba(13,102,65,0.15)'
          : '0 4px 12px rgba(0,0,0,0.05)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'default',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Message */}
      <div>
        <p
          style={{
            fontSize: 13,
            color: '#475569',
            lineHeight: 1.6,
          }}
        >
          “{testimonial.message}”
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid #f1f5f9',
          paddingTop: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#1e293b',
          }}
        >
          {testimonial.name}
        </span>

        {/* Rating */}
        <div style={{ fontSize: 14, color: '#facc15' }}>
          {'★'.repeat(testimonial.rating)}
          <span style={{ color: '#e2e8f0' }}>
            {'★'.repeat(5 - testimonial.rating)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
