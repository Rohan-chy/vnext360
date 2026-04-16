import { useEffect, useRef, useState } from 'react';
export const Doctors = [
  {
    id: 1,
    name: 'Som Shah',
    experience: '10 year(s) of experience of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Specialized in Cornea',
    rating: 4.5,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg',
  },
  {
    id: 2,
    name: 'Dilli Shrestha',
    experience: '15 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.7,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/32.jpg',
  },
  {
    id: 3,
    name: 'Parbat Jha',
    experience: '8 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.3,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
  },
  {
    id: 4,
    name: 'Bishal Jimee',
    experience: '20 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.6,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg',
  },
  {
    id: 5,
    name: 'Arjun Shah',
    experience: '12 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.4,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg',
  },
  {
    id: 6,
    name: 'Parbat Jha',
    experience: '8 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.3,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/45.jpg',
  },
  {
    id: 7,
    name: 'Bishal Jimee',
    experience: '20 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.6,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg',
  },
  {
    id: 8,
    name: 'Arjun Shah',
    experience: '12 year(s) of experience',
    designation: 'Senior Opthalmologist',
    academicQualification: 'MD Opthalmology',
    subDepartmnt: 'Specialized in Cornea',
    rating: 4.4,
    image:
      'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg',
  },
];

const DoctorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentHover, setParentHover] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320; // how much to scroll per arrow click

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Doctors.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Slide every 1 seconds

    // Cleanup to prevent memory leaks in the editor
    return () => clearInterval(interval);
  }, []);

  // Sync scroll position when index changes
  useEffect(() => {
    if (sliderRef.current && !parentHover) {
      const cardWidth = 324; // 300px minWidth + 24px gap
      // @ts-ignore
      sliderRef.current?.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        maxWidth: '100vw',
        overflowX: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1e293b' }}>
            Highlighted Doctors
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={scrollLeft}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
            }}
          >
            →
          </button>
        </div>
      </div> */}

      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 24,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {Doctors.map((provider) => (
          <Card
            key={provider.id}
            provider={provider}
            setParentHover={setParentHover}
          />
        ))}
      </div>
    </section>
  );
};

// @ts-ignore
const Card = ({ provider, setParentHover }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      setParentHover(true);
    } else {
      setParentHover(false);
    }
  }, [hover]);

  return (
    <div
      style={{
        minWidth: 300,
        backgroundColor: '#ffffff',
        borderRadius: 24,
        overflow: 'hidden',
        border: '1px solid #f1f5f9',
        boxShadow: hover
          ? '0 20px 30px rgba(0,0,0,0.12)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div
        style={{
          height: 192,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={provider.image}
          alt={provider.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.7s ease',
          }}
        />

        {/* Rating */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: '#224994',
            backdropFilter: 'blur(8px)',
            padding: '4px 12px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            color: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          ⭐ {provider.rating}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#1e293b',
            margin: 0,
          }}
        >
          {provider.name}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: '#64748b',
            margin: 0,
          }}
        >
          {provider.designation}
        </p>

        <p
          style={{
            fontSize: 14,
            color: '#64748b',
            margin: 0,
          }}
        >
          {provider.academicQualification}
        </p>

        <p
          style={{
            fontSize: 14,
            color: '#64748b',
            margin: 0,
          }}
        >
          {provider.subDepartmnt}
        </p>

        <p
          style={{
            fontSize: 14,
            color: '#64748b',
            margin: 0,
          }}
        >
          {provider.experience}
        </p>

        <button
          style={{
            margin: 0,
            width: '100%',
            padding: '12px 0',
            backgroundColor: hover ? '#224994' : '#f0f9ff',
            color: hover ? '#ffffff' : '#475569',
            fontWeight: 700,
            borderRadius: 16,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorSlider;
