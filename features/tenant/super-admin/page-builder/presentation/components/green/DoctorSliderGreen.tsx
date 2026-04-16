'use client';

import { useEffect, useRef, useState, memo, useCallback } from 'react';
import {
  UserRound,
  GraduationCap,
  Stethoscope,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';
import { primary_green } from '../../css/theme';
import { useGetDoctorSlider } from '../../../application/usecases/useGetDoctorSlider';
import { handleNavigation } from '@/utils/handleNavigation';

const CARD_WIDTH = 324;
const SLIDE_INTERVAL = 2000;

const DoctorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const { data } = useGetDoctorSlider();
  const doctorSliderData = data?.data || [];

  //  Auto slide with pause support
  useEffect(() => {
    if (isPaused || !doctorSliderData.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === doctorSliderData.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, doctorSliderData.length]);

  //  Sync scroll
  useEffect(() => {
    if (!sliderRef.current || !doctorSliderData.length) return;

    sliderRef.current.scrollTo({
      left: currentIndex * CARD_WIDTH,
      behavior: 'smooth',
    });
  }, [currentIndex, doctorSliderData.length]);

  return (
    <section
      style={{
        width: '100%',
        margin: '0 auto',
        padding: '0 16px',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          gap: 40,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: 12,
          scrollbarWidth: 'none',
        }}
      >
        {doctorSliderData.map((provider: any) => (
          <Card
            key={provider.id}
            provider={provider}
            setIsPaused={setIsPaused}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorSlider;

// ======================== CARD ========================

const Card = memo(({ provider, setIsPaused }: any) => {
  const [hover, setHover] = useState(false);

  // stable hover handlers
  const handleEnter = useCallback(() => {
    setHover(true);
    setIsPaused(true);
  }, [setIsPaused]);

  const handleLeave = useCallback(() => {
    setHover(false);
    setIsPaused(false);
  }, [setIsPaused]);

  const imageUrl =
    provider?.imageBaseAddress && provider?.imagePath
      ? `http://${provider.imageBaseAddress}${provider.imagePath}`
      : null;

  const getInitial = (name?: string) => {
    if (!name) return '?';
    const cleaned = name.replace(/^(dr|mr|mrs|ms)\.?\s+/i, '');
    return cleaned.charAt(0).toUpperCase();
  };

  const firstLetter = getInitial(provider?.doctorName);

  const cardStyle: React.CSSProperties = {
    minWidth: 300,
    maxWidth: 340,
    height: 400,
    perspective: 1000,
    flex: '0 0 auto',
  };

  const innerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 24,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s',
    transform: hover ? 'rotateY(180deg)' : 'rotateY(0deg)',
    boxShadow: hover
      ? '0 20px 30px rgba(0,0,0,0.12)'
      : '0 1px 3px rgba(0,0,0,0.08)',
    cursor: 'pointer',
  };

  const sideStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    boxSizing: 'border-box',
  };

  const frontStyle: React.CSSProperties = {
    ...sideStyle,
    backgroundColor: '#fff',
  };

  const backStyle: React.CSSProperties = {
    ...sideStyle,
    backgroundColor: '#fff',
    transform: 'rotateY(180deg)',
    justifyContent: 'center',
  };

  const infoRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 14,
    color: '#64748b',
    width: '100%',
  };

  return (
    <a
      href={`/client/doctors/${provider.id}`}
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(`/client/doctors/${provider.id}`);
      }}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        style={cardStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div style={innerStyle}>
          {/* FRONT */}
          <div style={frontStyle}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={provider.doctorName}
                style={{
                  width: '100%',
                  height: 250,
                  borderRadius: 12,
                  objectFit: 'cover',
                  marginBottom: 12,
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: 250,
                  borderRadius: 12,
                  marginBottom: 12,
                  background: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 48,
                  fontWeight: 700,
                  // color: '#64748b',
                }}
              >
                {firstLetter}
              </div>
            )}

            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>
              {provider.doctorName}
            </h3>

            <p style={{ margin: 0, fontSize: 14, color: '#64748b' }}>
              {provider.doctorSpeciality}
              {provider.doctorSubSpeciality &&
                ` • ${provider.doctorSubSpeciality}`}
            </p>

            <p style={{ margin: 0, fontSize: 14, color: '#64748b' }}>
              {provider.academicDegree}
            </p>

            {provider.yearsOfExperience && (
              <p style={{ margin: 0, fontSize: 14, color: '#64748b' }}>
                {provider.yearsOfExperience} year(s) experience
              </p>
            )}

            {provider.rating && provider.rating != 0 ? (
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: primary_green,
                  padding: '4px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  color: '#fff',
                }}
              >
                ⭐ {provider.rating}
              </div>
            ) : null}
          </div>

          {/* BACK */}
          <div style={backStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <h3 style={{ margin: 0 }}>{provider.doctorName}</h3>
                {provider.verified && <BadgeCheck size={16} color="green" />}
              </div>

              <div style={infoRow}>
                <UserRound size={16} color="#0D6641" />
                {provider.doctorSpeciality}
              </div>

              <div style={infoRow}>
                <GraduationCap size={16} color="#0D6641" />
                {provider.academicDegree}
              </div>

              <div style={infoRow}>
                <Stethoscope size={16} color="#0D6641" />
                {provider.doctorSubSpeciality}
              </div>

              {provider.yearsOfExperience && (
                <div style={infoRow}>
                  <Briefcase size={16} color="#0D6641" />
                  {provider.yearsOfExperience} years experience
                </div>
              )}

              <button
                style={{
                  marginTop: 10,
                  padding: '12px',
                  borderRadius: 12,
                  border: 'none',
                  background: hover ? primary_green : '#f1f5f9',
                  color: hover ? '#fff' : '#334155',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
});

Card.displayName = 'Card';
