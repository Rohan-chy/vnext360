'use client';
import React from 'react';

export const PAYMENT_PARTNERS = [
  { id: '1', name: 'GPay' },
  { id: '2', name: 'Paytm' },
  { id: '3', name: 'PhonePe' },
  { id: '4', name: 'Amazon Pay' },
  { id: '5', name: 'Mastercard' },
  { id: '6', name: 'Visa' },
  { id: '7', name: 'Rupay' },
];

const TrustedPaymentPartners: React.FC = () => {
  return (
    <section
      style={{
        fontFamily: "'Inter', sans-serif",
        padding: '24px 16px', // reduced outer spacing
      }}
    >
      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: '18px 16px', // reduced padding
          borderRadius: 18, // consistent radius
          border: '1px solid #e2e8f0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#64748b',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 14, // reduced spacing
          }}
        >
          Trusted Payment Partners
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 40,
            opacity: 0.7,
          }}
        >
          {PAYMENT_PARTNERS.map((partner) => (
            <span
              key={partner.id}
              style={{
                fontSize: 16, // reduced size
                fontWeight: 600,
                color: '#1e293b',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = '#0D6641';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.color = '#1e293b';
              }}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPaymentPartners;
