'use client';
import { useRef } from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
  },
  uploadLabel: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    border: '2px dashed #0284c7',
    borderRadius: '12px',
    cursor: 'pointer',
    color: '#224994',
    fontSize: '14px',
    fontWeight: 700,
    transition: 'background-color 0.2s ease',
  },
  uploadLabelHover: {
    backgroundColor: '#f0f9ff', // sky-50
  },
  hiddenInput: {
    display: 'none',
  },
  button: {
    backgroundColor: '#224994',
    color: '#fff',
    padding: '12px 32px',
    borderRadius: '12px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(14, 165, 233, 0.25)',
    transition: 'all 0.2s ease',
  },
};

const UploadPrescription = () => {
  const labelRef = useRef<HTMLLabelElement>(null);

  return (
    <div style={styles.wrapper}>
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

      <button
        style={styles.button}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Search
      </button>
    </div>
  );
};

export default UploadPrescription;
