'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type MenuItem = {
  title: string;
  link: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: 'Find Doctors', link: '/client/doctors' },
  { title: 'Hospitals', link: '/client/hospitals' },
  { title: 'Lab & Diagnostic Test', link: '/client/labAndDiagnosticTest' },
  { title: 'Surgeries', link: '/client/surgeries' },
  { title: 'Pharmacy', link: '/client/pharmacy' },
  { title: 'Ask a question', link: '/client/ask-question' },
];

const offers: MenuItem[] = [
  { title: 'Offers', link: '/client/offers' },
  { title: 'For Corporates', link: '/client/for-corporates' },
  {
    title: 'Register your practice',
    link: '#',
    submenu: [
      { title: 'Register as Doctor', link: '/doctor/login' },
      { title: 'Register your Organization', link: '/organization/login' },
    ],
  },
];

const Header1: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [offerHover, setOfferHover] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles: any = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      height: '72px',
      position: 'sticky',
      top: 0,
      backgroundColor: '#fff',
      zIndex: 1000,
      borderBottom: '1px solid #e5e7eb',
    },
    left: { display: 'flex', alignItems: 'center', gap: '16px' },
    logoImage: { height: '60px', cursor: 'pointer' },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '14px',
      cursor: 'pointer',
    },
    right: { display: 'flex', alignItems: 'center', gap: '12px' },
    loginButton: {
      padding: '8px 16px',
      borderRadius: '10px',
      border: '1px solid #0D6641',
      background: '#fff',
      color: '#0D6641',
      cursor: 'pointer',
      fontSize: '14px',
    },
    signupButton: {
      padding: '8px 18px',
      borderRadius: '10px',
      background: '#0D6641',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    offerItem: {
      padding: '6px 10px',
      borderRadius: '999px',
      color: '#0D6641',
      cursor: 'pointer',
      fontSize: '14px',
    },
    menuButton: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
    },
    menuBar: { width: '22px', height: '2px', backgroundColor: '#0D6641' },
    mobileMenu: {
      position: 'absolute',
      top: '72px',
      left: 0,
      width: '100%',
      backgroundColor: '#fff',
      padding: '16px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    mobileItem: {
      padding: '12px 0',
      borderBottom: '1px solid #f1f5f9',
      cursor: 'pointer',
      fontSize: '14px',
    },
    mobileSubItem: {
      paddingLeft: '20px',
      paddingTop: '6px',
      paddingBottom: '6px',
      fontSize: '14px',
      color: '#333',
      cursor: 'pointer',
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.container}>
        <div style={styles.left}>
          <Link href="/client">
            <img
              src="/logo/VnextSolutions_logo.png"
              alt="VNEXT360 Logo"
              style={styles.logoImage}
            />
          </Link>

          {!isMobile && (
            <ul style={styles.navLinks}>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={item.link || '#'}
                    style={{
                      color: hoveredIndex === index ? '#0D6641' : '#000',
                      textDecoration: 'none',
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isMobile ? (
          <div style={styles.right}>
            {offers.map((item, i) => (
              <div
                key={i}
                style={{ position: 'relative' }}
                onMouseEnter={() => setOfferHover(i)}
                onMouseLeave={() => setOfferHover(null)}
              >
                <Link
                  href={item.link || '#'}
                  style={{
                    ...styles.offerItem,
                    backgroundColor:
                      offerHover === i ? '#e0e7ff' : 'transparent',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  {item.title}
                </Link>

                {/* Dropdown */}
                {item.submenu && offerHover === i && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      minWidth: '220px',
                      zIndex: 10,
                    }}
                  >
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.link}
                        style={{
                          display: 'block',
                          padding: '10px 15px',
                          color: '#000',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = '#f0f4f8')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            'transparent')
                        }
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              style={styles.loginButton}
              onClick={() => router.push('/patient/login')}
            >
              Login
            </button>
            <button
              style={styles.signupButton}
              onClick={() => router.push('/patient/register')}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div style={styles.right}>
            <button style={styles.loginButton}>Login</button>
            <div
              style={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span style={styles.menuBar} />
              <span style={styles.menuBar} />
              <span style={styles.menuBar} />
            </div>
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {[...menuItems, ...offers].map((item, i) => (
            <div key={i}>
              <Link
                href={item.link || '#'}
                style={{
                  ...styles.mobileItem,
                  display: 'block',
                  textDecoration: 'none',
                  color: '#000',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>

              {/* Mobile Submenu */}
              {item.submenu &&
                item.submenu.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.link}
                    style={styles.mobileSubItem}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#f0f4f8')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.title}
                  </Link>
                ))}
            </div>
          ))}

          <button
            style={{ ...styles.signupButton, width: '100%', marginTop: '16px' }}
          >
            Sign Up
          </button>
        </div>
      )}
    </>
  );
};

export default Header1;
