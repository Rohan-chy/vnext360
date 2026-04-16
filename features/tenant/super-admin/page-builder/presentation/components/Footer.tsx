'use client';
import React from 'react';

// Footer links
export const FOOTER_LINKS = {
  explore: [
    'Find Doctors',
    'Hospitals',
    'Lab Tests',
    'Health Insurance',
    'Pharmacy',
    'Surgeries',
  ],
  company: [
    'About Us',
    'Careers',
    'Privacy Policy',
    'Data Security',
    'Help Center',
    'FAQs',
  ],
  social: ['Facebook', 'Twitter', 'Instagram', 'Youtube'],
};

const styles = {
  footer: {
    backgroundColor: '#ffffff',
    // borderTop: '1px solid #f1f5f9',
    paddingTop: '40px',
    paddingBottom: '40px',
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
    // padding: '0 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    marginBottom: '80px',
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
  logoText: { fontSize: '20px', fontWeight: 900, color: '#224994' },
  logoHighlight: { color: '#0284c7' },
  description: {
    color: '#64748b',
    fontSize: '14px',
    lineHeight: 1.6,
    marginBottom: '32px',
  },
  buttonGroup: { display: 'flex', gap: '8px', marginTop: '16px' },
  appButton: {
    backgroundColor: '#224994',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  sectionTitle: { fontWeight: 700, color: '#224994', marginBottom: '24px' },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  link: {
    fontSize: '14px',
    color: '#64748b',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  socialWrapper: { display: 'flex', gap: '16px' },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #f1f5f9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 700,
    color: '#94a3b8',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  newsletter: { marginTop: '40px' },
  newsletterInputWrapper: { display: 'flex', gap: '8px' },
  newsletterInput: {
    flex: 1,
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
  },
  newsletterButton: {
    backgroundColor: '#0284c7',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  bottomBar: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    fontSize: '12px',
    color: '#94a3b8',
    fontWeight: 500,
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  bottomLinks: { display: 'flex', gap: '24px' },
  gridResponsive: {
    gridTemplateColumns: '1fr',
  },
};

// Responsive breakpoints
const getGridColumns = () => {
  if (typeof window === 'undefined') return '1fr';
  const width = window.innerWidth;
  if (width >= 1024) return 'repeat(4, 1fr)';
  if (width >= 768) return 'repeat(2, 1fr)';
  return '1fr';
};

const FooterSection: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{ ...styles.grid, gridTemplateColumns: getGridColumns() }}>
          {/* Logo & App */}
          <div>
            <div style={styles.logoWrapper}>
              <img
                src="/logo/VnextSolutions_logo.png"
                alt="VNEXT360 Logo"
                style={styles.logoImage}
              />
            </div>
            {/* <p style={styles.description}>
              Revolutionizing healthcare accessibility since 2024. Providing the
              world's most advanced digital medical hub.
            </p> */}
            <div style={styles.buttonGroup}>
              <button style={styles.appButton}>App Store</button>
              <button style={styles.appButton}>Google Play</button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={styles.sectionTitle}>Explore</h4>
            <ul style={styles.linkList}>
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link}>
                  <a style={styles.link} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={styles.sectionTitle}>Company</h4>
            <ul style={styles.linkList}>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link}>
                  <a style={styles.link} href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 style={styles.sectionTitle}>Social</h4>
            <div style={styles.socialWrapper}>
              {FOOTER_LINKS.social.map((s) => (
                <a key={s} style={styles.socialIcon} href="#">
                  {s[0]}
                </a>
              ))}
            </div>

            {/* <div style={styles.newsletter}>
              <p style={{ fontWeight: 700, marginBottom: '16px' }}>
                Newsletter
              </p>
              <div style={styles.newsletterInputWrapper}>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={styles.newsletterInput}
                />
                <button style={styles.newsletterButton}>→</button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>Copyright (c) VNext360 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
