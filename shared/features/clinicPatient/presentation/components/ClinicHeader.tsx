'use client';
import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Clinic, ClinicImage } from '../../domain';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
// Import Swiper type
import type { Swiper as SwiperType } from 'swiper';

const ClinicHeader = ({ clinic }: { clinic: Clinic }) => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    _swiper: SwiperType,
    time: number,
    progress: number
  ): void => {
    progressCircle.current?.style.setProperty('--progress', `${1 - progress}`);
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col lg:flex-row gap-6">
      {/* LEFT: LOGO */}
      <div className="w-full lg:w-56 h-56 rounded-xl overflow-hidden border bg-gray-100 shrink-0">
        <img
          src={clinic?.logoUrl || '/placeholder.png'}
          alt={clinic.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* RIGHT: INFO */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            {clinic.name}
          </h1>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{clinic.location}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">(5.0)</span>
          </div>
        </div>
      </div>

      {/*IMAGE SLIDER */}
      <div className="flex-1 h-50  rounded-xl overflow-hidden">
        <Swiper
          spaceBetween={20}
          centeredSlides
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="rounded-xl"
        >
          {clinic.clinicImages.map((img: ClinicImage, i: number) => {
            // const fullImgUrl = `http://${img.imageUrl}`;
            return (
              <SwiperSlide key={i}>
                <img
                  src={img?.imageUrl || 'default.png'}
                  alt={`clinic-${i}`}
                  className="w-full h-40 object-contain"
                />
              </SwiperSlide>
            );
          })}

          {/* Progress Indicator */}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClinicHeader;
