import { useRef } from 'react';

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
];

const FeedbackSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320;

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
            What Our Clients Are Saying
          </h2>
          {/* <p style={{ color: '#64748b', marginTop: 4 }}>
            Real feedback from our audience
          </p> */}
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
          scrollbarWidth: 'none',
          paddingBottom: 24,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: -16,
          marginRight: -16,
        }}
      >
        {TESTIMONIALS.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>
    </section>
  );
};

// Individual testimonial card
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      style={{
        maxWidth: 300,
        backgroundColor: '#f1f5f9',
        borderRadius: 24,
        padding: 24,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0,
        transition: 'all 0.3s ease',
      }}
    >
      <div>
        <p
          style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 12,
            color: '#1e293b',
            textAlign: 'center',
          }}
        >
          {testimonial.name}
        </p>

        <p
          style={{
            fontStyle: 'italic',
            color: '#475569',
            lineHeight: 1.6,
          }}
        >
          “{testimonial.message}”
        </p>
      </div>

      {/* Rating */}
      <div style={{ color: '#facc15', fontSize: 16, textAlign: 'center' }}>
        {'★'.repeat(testimonial.rating)}
      </div>
    </div>
  );
};

export default FeedbackSlider;
