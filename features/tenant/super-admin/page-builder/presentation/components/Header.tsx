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

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleOpen = () => setOpen(true);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 500,
      // borderBottom: '1px solid #e5e7eb',
      // boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      backgroundColor: '#ffffff',
      zIndex: 1000,
      fontFamily: "'Inter', sans-serif",
    },
    left: {
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      // flexWrap: 'wrap'
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      cursor: 'pointer',
    },

    logoImage: {
      // width: '100px',
      height: '80px',
      borderRadius: '10px',
      objectFit: 'contain',
    },
    navLinks: {
      display: 'flex',
      flexWrap: 'wrap', // allows wrapping
      alignItems: 'center',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      maxWidth: '100%',
      fontSize: '14px', // prevents overflow
      cursor: 'pointer',
    },
    right: {
      width: '30%',
      // display: 'flex',
      // alignItems: 'center',
      // gap: '8px',
    },
    button: {
      padding: '8px',
      fontSize: '14px',
      fontWeight: 700,
      borderRadius: '12px',
      border: '1px solid #224994',
      backgroundColor: '#224994',
      color: '#fff',
      cursor: 'pointer',
      width: '50%',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'between',
      alignItems: 'center',
      gap: '4px',
    },
    // p: {
    //     border: '1px solid #224994',
    //     padding: "6px",
    //     borderRadius: '10px',
    //     cursor: 'pointer',
    //     fontSize: '14px',
    //     backgroundColor: offerHover ? '#224994' : '#f0f9ff',
    //     color: offerHover ? '#ffffff' : '#475569',
    // },

    navItem: {
      transition: 'color 0.2s ease',
    },

    navItemHover: {
      color: '#224994', // hover text color
    },
  };

  return (
    <nav style={styles.container}>
      <div style={styles.left}>
        <a href="http://localhost:3000/" style={styles.logoWrapper}>
          <img
            src="/logo/VnextSolutions_logo.png"
            alt="VNEXT360 Logo"
            style={styles.logoImage}
          />
        </a>
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

      <div style={styles.right}>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={handleOpen}>
            Sign Up
          </button>
          <button style={styles.button}>Login</button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {offers?.map((item, i) => {
            const [offerHover, setOfferHover] = useState<number | null>(null);
            return (
              <p
                key={i}
                style={{
                  border: '1px solid #224994',
                  padding: '6px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  backgroundColor: offerHover != null ? '#224994' : '#f0f9ff',
                  color: offerHover != null ? '#ffffff' : '#475569',
                }}
                onMouseEnter={() => setOfferHover(i)}
                onMouseLeave={() => setOfferHover(null)}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
