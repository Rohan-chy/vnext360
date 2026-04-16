'use client';
import React, { useEffect, useState } from 'react';

// Footer links
export const FOOTER_LINKS = {
  company: [
    'About Us',
    'Careers',
    'Privacy Policy',
    'Data Security',
    'Help Center',
    'FAQs',
  ],
  social: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
  app: ['App Store', 'Google Play'],
};

const Footer1: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = React.useState<number | null>(null);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles: any = {
    container: {
      padding: '32px 24px',
      backgroundColor: '#0D6641',
      fontFamily: "'Inter', sans-serif",
      color: '#d1fae5',
    },

    topSection: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
      marginBottom: '32px',
    },

    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: '8px',
      flexShrink: 0,
    },

    logoImage: {
      width: windowWidth >= 768 ? '180px' : '100px',
      height: 'auto',
      objectFit: 'contain' as const,
      display: 'block',
    },

    appDownloadWrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      gap: '8px',
    },

    appDownload: {
      fontWeight: 700,
      fontSize: '14px',
    },

    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '8px',
    },

    appButton: {
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '8px',
      border: '1px solid #ffffff',
      fontSize: '12px',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      whiteSpace: 'nowrap',
    },

    appButtonHover: {
      backgroundColor: '#047857',
    },

    linksSection: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
    },

    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '16px',
    },

    link: {
      fontSize: '14px',
      color: '#d1fae5',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
    },

    linkHover: {
      color: '#34d399',
    },

    socialWrapper: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap' as const,
    },

    socialIcon: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#d1fae5',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },

    socialIconHover: {
      color: '#34d399',
      transform: 'translateY(-2px)',
    },

    bottomBar: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: '16px',
      marginTop: '24px',
      fontSize: '12px',
      color: '#a7f3d0',
      textAlign: 'center' as const,
      fontWeight: 500,
    },
  };

  return (
    <footer style={styles.container}>
      {/* Top Section: Logo + App Download */}
      <div style={styles.topSection}>
        <div style={styles.logoWrapper}>
          <img
            src="/logo/VnextSolutions_logo.png"
            alt="VNEXT360 Logo"
            style={styles.logoImage}
          />
        </div>

        <div style={styles.appDownloadWrapper}>
          <p style={styles.appDownload}>App Download</p>
          <div style={styles.buttonGroup}>
            {FOOTER_LINKS.app.map((item, i) => (
              <button
                key={i}
                style={{
                  ...styles.appButton,
                  ...(hoveredBtn === i ? styles.appButtonHover : {}),
                }}
                onMouseEnter={() => setHoveredBtn(i)}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Links & Social */}
      <div style={styles.linksSection}>
        <ul style={styles.linkList}>
          {FOOTER_LINKS.company.map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  ...styles.link,
                  ...(hoveredLink === link ? styles.linkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div style={styles.socialWrapper}>
          {FOOTER_LINKS.social.map((s) => (
            <span
              key={s}
              style={{
                ...styles.socialIcon,
                ...(hoveredSocial === s ? styles.socialIconHover : {}),
              }}
              onMouseEnter={() => setHoveredSocial(s)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} VNext360. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer1;
