'use client';
import { Clinic } from '@/shared/features/clinicPatient/domain';
import { useGetClinics } from '@/shared/features/clinicPatient/presentation/hooks';
import { useRef, useState } from 'react';

const ServiceProviderGreen = () => {
  const { data: SERVICE_PROVIDERS } = useGetClinics();
  // {
  //     id: 'c6951262-637c-450c-ad76-075f614e9f8d',
  //     name: 'Golchha Pvt. Ltd.',
  //     location: 'Biratnagar',
  //     type: 'Eye Hospital',
  //     pan: '123456789',
  //     contactNo: '12345678910',
  //     manager: 'Ramlal Golchha',
  //     registrationNumber: '123456',
  //     registrationDate: '2026-03-01T00:00:00',
  //     logoUrl:
  //       'http://192.168.1.22:5139/HospitalLogos/6c65d881-8c5f-4c13-a3b3-3fd94cbb22e4.jpg',
  //   },
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 260;

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        width: '100%',
        // maxWidth: 1280,
        margin: '0 auto',
        padding: '0 16px',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 16,
          gap: 10,
        }}
      >
        <ArrowButton direction="left" onClick={scrollLeft} />
        <ArrowButton direction="right" onClick={scrollRight} />
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
        {SERVICE_PROVIDERS?.map((provider: Clinic) => (
          <Card key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
};

const ArrowButton = ({ direction, onClick }: any) => (
  <button
    onClick={onClick}
    style={{
      width: 38,
      height: 38,
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

const Card = ({ provider }: { provider: Clinic }) => {
  const [hover, setHover] = useState(false);

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
    <a
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(`/client/hospitals/${provider.id}`);
      }}
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
      {/* Image Wrapper */}
      <div
        style={{
          padding: 12, // 👈 space around image
        }}
      >
        <div
          style={{
            height: 150,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 14, // 👈 rounded image
          }}
        >
          <img
            src={provider.logoUrl || undefined}
            alt={provider.name}
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
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#1e293b',
            margin: 0,
          }}
        >
          {provider.name}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: '#1e293b',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {provider.type}
        </p>
        <p
          style={{
            fontSize: 12,
            color: '#64748b',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {provider.location}
        </p>

        {/* <button
          style={{
            marginTop: 8,
            padding: '8px 0',
            borderRadius: 12,
            border: 'none',
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: hover ? '#0D6641' : '#f1f5f9',
            color: hover ? '#ffffff' : '#334155',
            transition: 'all 0.3s ease',
          }}
        >
          View Details
        </button> */}
      </div>
    </a>
  );
};

export default ServiceProviderGreen;
