'use client';
import React, { useState } from 'react';

const menuItems = [
  'Find Doctors',
  'Hospitals',
  'Lab & Diagnostic Test',
  'Surgeries',
  'Pharmacy',
  'Ask a question',
];

const offers = ['Offers', 'For Corporates', 'Register your practice'];

const Header1: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [offerHover, setOfferHover] = useState<number | null>(null);
  const [loginHover, setLoginHover] = useState(false);
  const [signupHover, setSignupHover] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      position: 'sticky' as const,
      top: 0,
      backgroundColor: '#ffffff',
      zIndex: 1000,
      fontFamily: "'Inter', sans-serif",
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    left: { display: 'flex', alignItems: 'center', gap: '16px' },
    logoImage: {
      height: '72px',
      objectFit: 'contain' as const,
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer',
    },
    navItem: { transition: 'color 0.2s ease' },
    navItemHover: { color: '#224994' },
    right: { display: 'flex', alignItems: 'center', gap: '16px' },
    offerLinks: { display: 'flex', gap: '8px', fontSize: '14px' },
    offerItem: {
      padding: '6px 8px',
      borderRadius: '999px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#224994',
    },
    authButtons: { display: 'flex', gap: '10px' },
    loginButton: {
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '10px',
      border: '1px solid #224994',
      backgroundColor: '#ffffff',
      color: '#224994',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    loginButtonHover: {
      backgroundColor: '#224994',
      color: '#ffffff',
    },
    signupButton: {
      padding: '8px 18px',
      fontSize: '14px',
      borderRadius: '10px',
      border: 'none',
      backgroundColor: '#224994',
      color: '#ffffff',
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.2s ease',
    },
    signupButtonHover: {
      backgroundColor: '#1a357d',
    },
  };

  return (
    <nav style={styles.container}>
      {/* LEFT */}
      <div style={styles.left}>
        <img
          src="/logo/VnextSolutions_logo.png"
          alt="VNEXT360 Logo"
          style={styles.logoImage}
        />
        <ul style={styles.navLinks}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={{
                ...styles.navItem,
                ...(hoveredIndex === index ? styles.navItemHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        {/* Offer Links */}
        <div style={styles.offerLinks}>
          {offers.map((item, i) => (
            <span
              key={i}
              style={{
                ...styles.offerItem,
                backgroundColor: offerHover === i ? '#e0e7ff' : 'transparent',
              }}
              onMouseEnter={() => setOfferHover(i)}
              onMouseLeave={() => setOfferHover(null)}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={styles.authButtons}>
          <button
            style={{
              ...styles.loginButton,
              ...(loginHover ? styles.loginButtonHover : {}),
            }}
            onMouseEnter={() => setLoginHover(true)}
            onMouseLeave={() => setLoginHover(false)}
          >
            Login
          </button>
          <button
            style={{
              ...styles.signupButton,
              ...(signupHover ? styles.signupButtonHover : {}),
            }}
            onMouseEnter={() => setSignupHover(true)}
            onMouseLeave={() => setSignupHover(false)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
