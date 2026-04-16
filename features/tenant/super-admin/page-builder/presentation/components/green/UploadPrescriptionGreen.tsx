'use client';
import { useRef, useEffect, useState } from 'react';

const styles = {
  wrapper: (isMobile: boolean) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    justifyContent: 'center',
    textAlign: isMobile ? 'center' : 'left',
  }),
  uploadLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '5px',
    border: '2px dashed #0D6641',
    borderRadius: '12px',
    cursor: 'pointer',
    color: '#0D6641',
    fontSize: '14px',
    fontWeight: 700,
    transition: 'background-color 0.2s ease',
  },
  uploadLabelHover: {
    backgroundColor: '#f0f9ff',
  },
  hiddenInput: {
    display: 'none',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#0D6641',
    margin: 0,
  },
};

const UploadPrescription = () => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint (md)
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.wrapper(isMobile)}>
      {/* Heading */}
      <label style={styles.heading}>How can we help you today?</label>

      <p
        style={{
          fontSize: '16px',
          fontWeight: 500,
          color: '#333',
          margin: 0,
        }}
      >
        Quick order with prescription
      </p>

      <label
        ref={labelRef}
        style={styles.uploadLabel}
        onMouseEnter={() =>
          Object.assign(labelRef.current!.style, styles.uploadLabelHover)
        }
        onMouseLeave={() =>
          (labelRef.current!.style.backgroundColor = 'transparent')
        }
      >
        <input type="file" style={styles.hiddenInput} />
        <span>Upload Prescription</span>
      </label>
    </div>
  );
};

export default UploadPrescription;
