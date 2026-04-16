'use client';
import React from 'react';

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

const styles = {
  container: {
    padding: '32px',
    backgroundColor: '#224994',
    fontFamily: "'Inter', sans-serif",
  },

  grid: {
    display: 'flex',
    marginBottom: '30px',
    alignItems: 'center',
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },

  logoImage: {
    width: '200px',
    height: 'auto',
    objectFit: 'contain' as const,
    display: 'block',
  },

  appDownload: {
    fontWeight: 700,
    textAlign: 'center' as const,
    color: '#ffffff',
    marginBottom: '8px',
  },

  buttonGroup: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
  },

  appButton: {
    // backgroundColor: '#065f46',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #ffffff',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },

  appButtonHover: {
    backgroundColor: '#047857',
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
  },

  socialRight: {
    marginLeft: 'auto',
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

const Footer1: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = React.useState<number | null>(null);

  return (
    <footer style={styles.container}>
      {/* Logo & App Download */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={styles.logoWrapper}>
          <img
            src="/logo/VnextSolutions_logo.png"
            alt="VNEXT360 Logo"
            style={styles.logoImage}
          />
        </div>

        <div>
          <p style={styles.appDownload}>App Download</p>
          <div style={styles.buttonGroup}>
            {FOOTER_LINKS?.app?.map((item, i) => {
              return (
                <button
                  key={i}
                  style={{
                    ...styles.appButton,
                    ...(hoveredBtn === i ? styles.appButtonHover : {}),
                  }}
                  onMouseEnter={() => setHoveredBtn(i)} // set index
                  onMouseLeave={() => setHoveredBtn(null)} // reset
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Links & Social */}
      <div style={styles.grid}>
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

        <div style={styles.socialRight}>
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
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} VNext360. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer1;
