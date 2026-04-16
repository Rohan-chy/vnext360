'use client';

import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useSearchGlobal } from './presentation/hooks/useSearchGlobal';
import { useDebounce } from '@/utils/useDebounce';
import { handleNavigation } from '@/utils/handleNavigation';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
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
    border: '1px solid #e5e7eb',
    outline: 'none',
  },
  dropdown: {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginTop: '6px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    zIndex: 50,
    maxHeight: '300px',
    overflowY: 'auto' as const,
  },
  groupTitle: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '8px 12px',
    color: '#888',
  },
  item: {
    padding: '10px 12px',
    cursor: 'pointer',
  },
};

const ServiceSearch = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading } = useSearchGlobal(debouncedQuery);

  const hasResults =
    data && (data.doctors.length > 0 || data.clinics.length > 0);

  return (
    <div style={styles.container}>
      <div style={styles.serviceBox}>
        <span style={styles.icon}>
          <Search size={18} strokeWidth={1.5} />
        </span>

        {/* Input */}
        <input
          style={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search doctors, clinics..."
        />

        {/* Dropdown */}
        {debouncedQuery && (
          <div style={styles.dropdown}>
            {isLoading && <div style={styles.item}>Searching...</div>}

            {/* Doctors */}
            {data && data?.doctors.length > 0 && (
              <>
                <div style={styles.groupTitle}>Doctors</div>
                {data.doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    style={styles.item}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(`/client/doctors/${doctor.id}`);
                    }}
                  >
                    {doctor.fullName}
                    {doctor.category && (
                      <span className="text-gray-400 text-sm ml-2">
                        ({doctor.category})
                      </span>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* Clinics */}
            {data && data?.clinics.length > 0 && (
              <>
                <div style={styles.groupTitle}>Clinics</div>
                {data.clinics.map((clinic) => (
                  <div
                    key={clinic.id}
                    style={styles.item}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(`/client/hospitals/${clinic.id}`);
                    }}
                  >
                    {clinic.name}
                    <span className="text-gray-400 text-sm ml-2">
                      ({clinic.location})
                    </span>
                  </div>
                ))}
              </>
            )}

            {/* No Results */}
            {!isLoading && !hasResults && (
              <div style={styles.item}>No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSearch;
