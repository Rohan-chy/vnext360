import { useRef, useState } from 'react';

export const SERVICE_PROVIDERS = [
  {
    id: 1,
    name: 'Nobel Hospital',
    address: '123 Health Ave, New York, NY',
    rating: 4.5,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg',
  },
  {
    id: 2,
    name: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    rating: 4.7,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/32.jpg',
  },
  {
    id: 3,
    name: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    rating: 4.3,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
  },
  {
    id: 4,
    name: 'Nobel Hospital',
    address: '123 Health Ave, New York, NY',
    rating: 4.5,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg',
  },
  {
    id: 5,
    name: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    rating: 4.7,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/32.jpg',
  },
  {
    id: 6,
    name: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    rating: 4.3,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
  },
  {
    id: 7,
    name: 'Nobel Hospital',
    address: '123 Health Ave, New York, NY',
    rating: 4.5,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg',
  },
  {
    id: 8,
    name: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    rating: 4.7,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/32.jpg',
  },
  {
    id: 9,
    name: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    rating: 4.3,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
  },
];

const ServiceProviderSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // scroll 2 cards at a time
  const scrollAmount = 600;

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1e293b' }}>
          {/* Service Providers */}
        </h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={scrollLeft} style={arrowButtonStyle}>
            ←
          </button>
          <button onClick={scrollRight} style={arrowButtonStyle}>
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: 12,
          scrollbarWidth: 'none',
        }}
      >
        {SERVICE_PROVIDERS.map((provider) => (
          <Card key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
};

// arrow button shared style
const arrowButtonStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px solid #e2e8f0',
  background: '#fff',
  cursor: 'pointer',
};

const Card = ({ provider }: any) => {
  const [hover, setHover] = useState(false);

  const cardStyle: React.CSSProperties = {
    minWidth: 250,
    maxWidth: 300,
    height: 320, // increased height to fit image + text comfortably
    perspective: 1000,
    flex: '0 0 auto',
  };

  const innerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 24,
    transformStyle: 'preserve-3d',
    transition: 'transform 1s',
    transform: hover ? 'rotateY(180deg)' : 'rotateY(0deg)',
    boxShadow: hover
      ? '0 20px 30px rgba(0,0,0,0.12)'
      : '0 1px 3px rgba(0,0,0,0.08)',
    cursor: 'pointer',
  };

  const sideStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // align items at top
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: 16,
  };

  const frontStyle: React.CSSProperties = {
    ...sideStyle,
    backgroundColor: '#fff',
  };

  const backStyle: React.CSSProperties = {
    ...sideStyle,
    backgroundColor: '#224994',
    color: '#fff',
    transform: 'rotateY(180deg)',
    textAlign: 'center',
    fontSize: 14,
    justifyContent: 'center', // center back content
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={innerStyle}>
        {/* Front */}
        <div style={frontStyle}>
          <img
            src={provider.image}
            alt={provider.name}
            style={{
              width: '100%',
              height: 'auto', // let height adjust naturally
              borderRadius: 12,
              marginBottom: 12,
            }}
          />
          <h3
            style={{
              margin: 0,
              marginBottom: 6,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {provider.name}
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: '#64748b',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {provider.address}
          </p>
        </div>

        {/* Back */}
        <div style={backStyle}>
          <h3 style={{ marginBottom: 8 }}>{provider.name}</h3>
          <p>Rating: {provider.rating} ⭐</p>
          <p>20 year(s) of experience providing quality service</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSlider;
