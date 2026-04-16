'use client';
import { useRef, useState } from 'react';
import { primary_blue, primary_green } from '../../css/theme';

type Package = {
  id: number;
  name: string;
  provider: string;
  address: string;
  contact: string;
  fee: string; // discounted price e.g., "$299"
  originalFee?: string; // original price e.g., "$399"
  discountPercent?: number; // e.g., 25
};

export const PACKAGES: Package[] = [
  {
    id: 1,
    name: 'Comprehensive Health Check',
    provider: 'Nobel Hospital',
    address: '123 Health Ave, New York, NY',
    contact: '123-456-7890',
    fee: '$299',
    originalFee: '$399',
    discountPercent: 25,
  },
  {
    id: 2,
    name: 'Cardiac Care Package',
    provider: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    contact: '987-654-3210',
    fee: '$449',
    originalFee: '$599',
    discountPercent: 25,
  },
  {
    id: 3,
    name: 'Wellness & Immunity Plan',
    provider: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    contact: '555-123-4567',
    fee: '$179',
    originalFee: '$249',
    discountPercent: 28,
  },
  {
    id: 4,
    name: 'Diabetes Management Plan',
    provider: 'Lifeline Hospital',
    address: '210 Care Road, Seattle, WA',
    contact: '888-555-1212',
    fee: '$319',
    originalFee: '$399',
    discountPercent: 20,
  },
  {
    id: 5,
    name: 'Heart & Lung Screening',
    provider: 'Unity Health Center',
    address: '89 Harmony Lane, Chicago, IL',
    contact: '777-222-3344',
    fee: '$329',
    originalFee: '$459',
    discountPercent: 28,
  },
  {
    id: 6,
    name: 'Kidney Function Test',
    provider: 'Healthy Life Lab',
    address: '12 Wellness St, Denver, CO',
    contact: '555-987-6543',
    fee: '$149',
    originalFee: '$199',
    discountPercent: 25,
  },
  {
    id: 7,
    name: 'Full Body Checkup',
    provider: 'Prime Health Center',
    address: '34 Vitality Rd, Miami, FL',
    contact: '444-555-6666',
    fee: '$379',
    originalFee: '$499',
    discountPercent: 24,
  },
  {
    id: 8,
    name: 'Bone Density Test',
    provider: 'Wellness Clinic',
    address: '67 Health Ave, Boston, MA',
    contact: '333-222-1111',
    fee: '$129',
    originalFee: '$179',
    discountPercent: 28,
  },
  {
    id: 9,
    name: 'Liver Function Test',
    provider: 'CarePlus Medical Center',
    address: '45 Wellness Blvd, San Francisco, CA',
    contact: '987-654-3210',
    fee: '$199',
    originalFee: '$249',
    discountPercent: 20,
  },
  {
    id: 10,
    name: 'Thyroid Screening',
    provider: 'St. Mary’s Clinic',
    address: '78 Healing St, Austin, TX',
    contact: '555-123-4567',
    fee: '$159',
    originalFee: '$199',
    discountPercent: 20,
  },
];

const PackageSlider = () => {
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
          Health Packages
        </h2>
        <button
          onClick={() => handleNavigation('/client/offers')}
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

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 40,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          paddingBottom: 24,
        }}
        className="hide-scrollbar"
      >
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </section>
  );
};

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      style={{
        minWidth: 220,
        maxWidth: 260,
        flex: '0 0 auto',
        background: '#fff',
        borderRadius: 18,
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 16px 28px rgba(13,102,65,0.15)'
          : '0 4px 12px rgba(0,0,0,0.05)',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'pointer',
        scrollSnapAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'space-between',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Package Name */}
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: '#1e293b',
          marginTop: 4,
          marginBottom: 8,
        }}
      >
        {pkg.name}
      </h3>

      {/* Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <DetailItem
          icon="🏢"
          text={pkg.provider}
          color="#e0f2fe"
          iconSize={20}
        />
        <DetailItem
          icon="📍"
          text={pkg.address}
          color="#d1fae5"
          iconSize={20}
        />
        <DetailItem
          icon="📞"
          text={pkg.contact}
          color="#fef3c7"
          iconSize={20}
        />
      </div>

      {/* Fee with discount */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginTop: 10,
          flexWrap: 'wrap',
        }}
      >
        {pkg.originalFee && pkg.discountPercent ? (
          <>
            <span
              style={{ fontSize: 14, fontWeight: 700, color: primary_green }}
            >
              {pkg.fee}
            </span>
            <span
              style={{
                fontSize: 12,
                color: '#64748b',
                textDecoration: 'line-through',
              }}
            >
              {pkg.originalFee}
            </span>
            <span
              style={{
                fontSize: 12,
                color: '#ffffff',
                backgroundColor: primary_green,
                padding: '2px 6px',
                borderRadius: 6,
              }}
            >
              {pkg.discountPercent}% OFF
            </span>
          </>
        ) : (
          <span style={{ fontSize: 14, fontWeight: 700, color: primary_blue }}>
            {pkg.fee}
          </span>
        )}
      </div>

      {/* Action Button (Smaller) */}
      <button
        style={{
          marginTop: 10,
          width: '100%',
          padding: '8px 0', // reduced from 10-12px
          borderRadius: 10,
          border: '1px solid #0D6641',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: 13, // smaller font
          background: hover ? primary_green : '#fff',
          color: hover ? '#fff' : primary_green,
          transition: 'all 0.3s ease',
        }}
      >
        Add to Cart
      </button>
    </a>
  );
};

// Updated DetailItem to accept iconSize
const DetailItem = ({
  icon,
  text,
  color,
  iconSize = 32,
}: {
  icon: string;
  text: string;
  color: string;
  iconSize?: number;
}) => (
  <div
    style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b' }}
  >
    <span
      style={{
        width: iconSize,
        height: iconSize,
        borderRadius: 6,
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: iconSize * 0.6, // scale emoji to icon size
      }}
    >
      {icon}
    </span>
    <span style={{ fontSize: 13 }}>{text}</span>
  </div>
);

export default PackageSlider;
