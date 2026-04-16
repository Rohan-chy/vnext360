'use client';
import React from 'react';

// Data array
export const STATS = [
  {
    id: '1',
    value: '51 Million+',
    label: 'Registered users',
    color: 'bg-amber-100 text-amber-700',
    icon: '⭐',
  },
  {
    id: '2',
    value: '71 Million+',
    label: 'Successful orders',
    color: 'bg-emerald-100 text-emerald-700',
    icon: '📦',
  },
  {
    id: '3',
    value: '60000+',
    label: 'Unique items sold',
    color: 'bg-sky-100 text-sky-700',
    icon: '💊',
  },
  {
    id: '4',
    value: '19000+',
    label: 'Pin codes serviced',
    color: 'bg-rose-100 text-rose-700',
    icon: '📍',
  },
];

const styles = {
  section: {
    fontFamily: "'Inter', sans-serif",
    padding: '32px 0',
    boxSizing: 'border-box' as const,
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#1e293b',
    textAlign: 'center' as const,
    marginBottom: '32px',
  },
  grid: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // responsive
    justifyItems: 'center',
    backgroundColor: 'black',
    padding: 0,
    margin: 0,
  },
  card: {
    background: '#fff',
    borderRadius: '32px',
    padding: '32px 24px',
    textAlign: 'center' as const,
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    maxWidth: '240px', // prevents overlapping
    width: '100%', // allows card to shrink in smaller screens
    boxSizing: 'border-box' as const,
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  },
  value: {
    fontSize: '24px',
    fontWeight: 900,
    color: '#224994',
    marginBottom: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#64748b',
  },
};

const WhyUs: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Why Choose Us?</h2>
      <div style={styles.grid}>
        {STATS.map((stat) => (
          <div
            key={stat.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
            }}
          >
            <div
              style={{
                ...styles.iconWrapper,
                backgroundColor: stat.color.includes('bg-amber')
                  ? '#fef3c7'
                  : stat.color.includes('bg-emerald')
                    ? '#d1fae5'
                    : stat.color.includes('bg-sky')
                      ? '#e0f2fe'
                      : '#ffe4e6',
                color: stat.color.includes('text-amber')
                  ? '#b45309'
                  : stat.color.includes('text-emerald')
                    ? '#059669'
                    : stat.color.includes('text-sky')
                      ? '#0284c7'
                      : '#be123c',
              }}
            >
              {stat.icon}
            </div>
            <h3 style={styles.value}>{stat.value}</h3>
            <p style={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
