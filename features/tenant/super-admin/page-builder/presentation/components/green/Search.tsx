// import { MapPin, Search } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
// import UploadPrescription from './UploadPrescriptionGreen';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
  },
  locationBox: {
    position: 'relative' as const,
    width: '260px',
  },
  serviceBox: {
    position: 'relative' as const,
    width: '600px',
  },
  icon: {
    position: 'absolute' as const,
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    borderRadius: '30px',
    outline: 'none',
    fontSize: '14px',
    transition: '0.2s ease',
    border: '1px solid #e5e7eb',
    backgroundColor: '#fff',
  },
  dropdown: {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    marginTop: '4px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    zIndex: 10,
  },
  groupTitle: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 10px',
    color: '#666',
  },
  item: {
    padding: '8px 10px',
    cursor: 'pointer',
  },
  button: {
    position: 'absolute' as const,
    right: '3px',
    top: '5%',
    backgroundColor: '#0D6641',
    color: '#fff',
    padding: '8px 18px',
    borderRadius: '24px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(14, 165, 233, 0.25)',
    transition: 'all 0.2s ease',
  },
};

const Search = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div>
      <div style={styles.container}>
        {/* Location Search */}
        <div style={styles.locationBox}>
          <span style={styles.icon}>
            <MapPin size={18} strokeWidth={1.5} />
          </span>
          <input
            style={styles.input}
            placeholder="Set location"
            onFocus={() => setLocationOpen(true)}
            onBlur={() => setTimeout(() => setLocationOpen(false), 150)}
            value="Biratnagar"
          />

          {locationOpen && (
            <div style={styles.dropdown}>
              <div style={styles.groupTitle}>Suggestions</div>
              <div
                style={styles.item}
                onMouseDown={() => console.log('Kathmandu')}
              >
                Kathmandu
              </div>
              <div
                style={styles.item}
                onMouseDown={() => console.log('Pokhara')}
              >
                Pokhara
              </div>
              <div
                style={styles.item}
                onMouseDown={() => console.log('Biratnagar')}
              >
                Biratnagar
              </div>
            </div>
          )}
        </div>

        {/* Doctor / Hospital Search */}
        <div style={styles.serviceBox}>
          <span style={styles.icon}>
            <Search />
          </span>
          <input
            style={styles.input}
            placeholder="Search products, doctor, clinics, hospitals etc."
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
          />
          <button
            style={styles.button}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = 'scale(0.95)')
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Search
          </button>

          {searchOpen && (
            <div style={styles.dropdown}>
              <div style={styles.groupTitle}>Hospital Suggestions</div>
              <div style={styles.item}>Nobel Hospital</div>
              <div style={styles.item}>Birat Medical</div>
              <div style={styles.item}>Koshi Hospital</div>

              <div style={styles.groupTitle}>Doctor Suggestions</div>
              <div style={styles.item}>Dr. Rohan</div>
              <div style={styles.item}>Dr. Arjun</div>
              <div style={styles.item}>Dr. Ajay</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
