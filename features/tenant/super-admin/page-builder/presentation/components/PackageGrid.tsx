import { useRef, useState } from 'react';

export const PACKAGES = [
  {
    id: 1,
    name: 'Comprehensive Health Check',
    provider: 'Nobel Hospital',
    address: '123 Health Ave, New York, NY',
    contact: '123-456-7890',
    fee: '$299',
  },
  {
    id: 2,
    name: 'Cardiac Care Package',
    provider: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    contact: '987-654-3210',
    fee: '$499',
  },
  {
    id: 3,
    name: 'Wellness & Immunity Plan',
    provider: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    contact: '555-123-4567',
    fee: '$199',
  },
  {
    id: 4,
    name: 'Diabetes Management Plan',
    provider: 'Lifeline Hospital',
    address: '210 Care Road, Seattle, WA',
    contact: '888-555-1212',
    fee: '$399',
  },
  {
    id: 5,
    name: 'Heart & Lung Screening',
    provider: 'Unity Health Center',
    address: '89 Harmony Lane, Chicago, IL',
    contact: '777-222-3344',
    fee: '$349',
  },
];

const PackageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320; // how much to scroll per arrow click

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
            Health Packages
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
          scrollbarWidth: 'none',
          paddingBottom: 24,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: -16,
          marginRight: -16,
        }}
      >
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

// Individual package card
const PackageCard = ({ pkg }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minWidth: 300,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        padding: 24,
        border: hover ? '1px solid #224994' : '1px solid #f1f5f9',
        boxShadow: hover
          ? '0 20px 30px rgba(0,0,0,0.12)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0, // ensures horizontal scroll
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#1e293b',
              lineHeight: 1.2,
            }}
          >
            {pkg.name}
          </h3>
          <span
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: '#224994',
            }}
          >
            {pkg.fee}
          </span>
        </div>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#64748b',
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: '#e0f2fe',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              🏢
            </span>
            <span>{pkg.provider}</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#64748b',
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: '#d1fae5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              📍
            </span>
            <span>{pkg.address}</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#64748b',
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: '#fef3c7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              📞
            </span>
            <span>{pkg.contact}</span>
          </div>
        </div>
      </div>

      {/* Action button */}
      <button
        style={{
          marginTop: 24,
          width: '100%',
          padding: '12px 0',
          borderRadius: 16,
          border: 'none',
          cursor: 'pointer',
          fontWeight: 700,
          backgroundColor: hover ? '#224994' : '#224994',
          color: hover ? '#ffffff' : '#fff',
          transition: 'all 0.3s ease',
        }}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default PackageSlider;
