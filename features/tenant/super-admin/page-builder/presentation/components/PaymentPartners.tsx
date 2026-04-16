'use client';
import React from 'react';

// Payment partners data
export const PAYMENT_PARTNERS = [
  { id: '1', name: 'GPay' },
  { id: '2', name: 'Paytm' },
  { id: '3', name: 'PhonePe' },
  { id: '4', name: 'Amazon Pay' },
  { id: '5', name: 'Mastercard' },
  { id: '6', name: 'Visa' },
  { id: '7', name: 'Rupay' },
];

const styles = {
  container: {
    backgroundColor: 'rgba(241,245,249,0.5)', // bg-slate-100/50
    padding: '20px',
    borderRadius: '32px',
    border: '1px solid #f1f5f9',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '18px',
    fontFamily: "'Inter', sans-serif",
  },
  title: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#64748b',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
  },
  partnersWrapper: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    filter: 'grayscale(100%)',
    opacity: 0.6,
  },
  partner: {
    fontSize: '20px',
    fontWeight: 700,
  },
};

const TrustedPaymentPartners: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>Our Trusted Payment Partners</p>
      <div style={styles.partnersWrapper}>
        {PAYMENT_PARTNERS.map((partner) => (
          <span key={partner.id} style={styles.partner}>
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustedPaymentPartners;
