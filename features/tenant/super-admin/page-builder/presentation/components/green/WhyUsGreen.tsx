'use client';
import React, { useState } from 'react';
import { primary_green } from '../../css/theme';

export const STATS = [
  { id: '1', value: '51M+', label: 'Registered Users', icon: '⭐' },
  { id: '2', value: '71M+', label: 'Successful Orders', icon: '📦' },
  { id: '3', value: '60K+', label: 'Unique Items Sold', icon: '💊' },
  { id: '4', value: '19K+', label: 'Pin Codes Serviced', icon: '📍' },
];

const WhyUs: React.FC = () => {
  return (
    <section
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: '8px 12px', // reduced section padding
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: '#1e293b',
          textAlign: 'center',
          marginBottom: 20, // reduced margin
        }}
      >
        Why Choose Us?
      </h2>

      <div
        style={{
          display: 'grid',
          gap: 40, // reduced grid gap
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        {STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ stat }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#ffffff',
        borderRadius: 18,
        padding: '20px 16px', // reduced card padding
        textAlign: 'center',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        boxShadow: hover
          ? '0 12px 20px rgba(13,102,65,0.12)'
          : '0 2px 6px rgba(0,0,0,0.05)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8, // reduced internal spacing
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          background: '#e6f4ef',
          color: primary_green,
        }}
      >
        {stat.icon}
      </div>

      {/* Value */}
      <h3
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: primary_green,
          margin: 0,
        }}
      >
        {stat.value}
      </h3>

      {/* Label */}
      <p
        style={{
          fontSize: 13,
          color: '#64748b',
          margin: 0,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
};

export default WhyUs;
