import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { cn } from '../../lib/utils';

export interface HeroSlide {
  id: string;
  name: string;
  image: string;
  mobileImage?: string;
  alt: string;
  positionClass: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'school-bus-fleet',
    name: 'School Bus Fleet',
    image: '/images/hero-school-bus-fleet.webp?v=6',
    mobileImage: '/images/hero-mobile-school-bus.webp',
    alt: 'Flash Transport Certified Modern School Bus on Abu Dhabi Corniche',
    positionClass: 'object-center lg:object-[82%_center]'
  },
  {
    id: 'cadillac-limousine',
    name: 'Cadillac Escalade',
    image: '/images/hero-cadillac-limousine.webp?v=2',
    mobileImage: '/images/hero-mobile-cadillac-escalade.webp',
    alt: 'Flash Transport Black Cadillac Escalade Luxury SUV in Abu Dhabi at Sunset',
    positionClass: 'object-[center_right] sm:object-right'
  },
  {
    id: 'luxury-bus',
    name: 'Luxury Coach Bus',
    image: '/images/dubai-hero-luxury-coach.webp',
    mobileImage: '/images/hero-mobile-luxury-coach.webp',
    alt: 'Flash Transport Luxury Coach Bus with Dubai Skyline and Burj Khalifa at Sunset',
    positionClass: 'object-[62%_center]'
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // Preload all 3 slide images (both desktop & mobile) on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      if (slide.mobileImage) {
        const mImg = new Image();
        mImg.src = slide.mobileImage;
      }
    });
  }, []);

  // Continuous auto-play timer (transitions every 4.5 seconds)
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);
  }, [totalSlides]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    startTimer();
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    startTimer();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  // Red swoop SVG element reusable for mobile and desktop
  const renderRedRibbon = (extraClasses: string) => (
    <div className={cn("absolute bottom-0 right-0 z-20 pointer-events-none overflow-hidden select-none", extraClasses)}>
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <path
          d="M60 200C180 185 280 135 410 145C490 152 550 110 600 50V200H60Z"
          fill="url(#red-gradient-back)"
          opacity="0.7"
        />
        <path
          d="M140 200C260 170 330 95 460 100C520 103 560 65 600 20V200H140Z"
          fill="url(#red-gradient-front)"
        />
        <path
          d="M140 200C260 170 330 95 460 100C520 103 560 65 600 20"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="red-gradient-back" x1="60" y1="200" x2="600" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7E121B" />
            <stop offset="1" stopColor="#B91F2D" />
          </linearGradient>
          <linearGradient id="red-gradient-front" x1="140" y1="200" x2="600" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B91F2D" />
            <stop offset="0.5" stopColor="#D92332" />
            <stop offset="1" stopColor="#EA2637" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  return (
    <section
      className="relative bg-[#0F1115] text-white overflow-hidden min-h-[680px] xs:min-h-[720px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[800px] flex flex-col justify-between select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Flash Transport Hero Section"
    >
      {/* 1. LAYER: 3-Slide Cinematic Carousel (Full-Length Edge-to-Edge Background on Both Mobile & Desktop) */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0 transition-all duration-1000 ease-in-out',
                isActive
                  ? 'opacity-100 translate-x-0 z-10'
                  : 'opacity-0 -translate-x-2 z-0 pointer-events-none'
              )}
              aria-hidden={!isActive}
            >
              {/* Mobile View: Dedicated Vertical Full-Length Portrait Image (Zero Black Spaces) */}
              <img
                src={slide.mobileImage || slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center sm:hidden"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Tablet & Desktop View: Landscape High-Res Hero Banner */}
              <img
                src={slide.image}
                alt={slide.alt}
                className={cn('w-full h-full object-cover hidden sm:block', slide.positionClass)}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Mobile: Ultra-subtle natural top gradient for pristine text readability over dusk sky (fades out by 42% height, vehicle is 100% clear) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/75 via-[#0F1115]/25 via-38% to-transparent sm:hidden z-10 pointer-events-none" />

        {/* Desktop Left Vignette for Headline & Body Text */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0F1115] via-[#0F1115]/90 via-36% to-transparent to-48% z-10 pointer-events-none" />

        {/* Top Header Protection Vignette (Desktop/Tablet) */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-b from-[#0F1115]/80 via-[#0F1115]/25 via-12% to-transparent to-25% z-10 pointer-events-none" />

        {/* Soft bottom vignette for ground depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/85 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* 2. LAYER: Bottom-Right Dynamic Aerodynamic Red Ribbon Graphic */}
      {renderRedRibbon("w-44 sm:w-[450px] lg:w-[580px] h-16 sm:h-52")}

      {/* 3. LAYER: Main Content & Headline (Upper Half on Mobile, Left Column on Desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 min-[360px]:pt-28 min-[390px]:pt-32 sm:pt-24 lg:pt-28 pb-80 sm:pb-24 lg:pb-28 relative z-20 w-full flex-1 flex flex-col justify-start sm:justify-center">
        <div className="max-w-[540px] lg:max-w-[560px] xl:max-w-[600px] text-left space-y-3 sm:space-y-5">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-5 sm:w-6 h-[2px] bg-[#E51E32] inline-block rounded-full"></span>
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              ABU DHABI'S PREMIER TRANSPORT PROVIDER
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[28px] min-[360px]:text-[32px] sm:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.12] sm:leading-[1.1] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            <span className="font-serif font-bold text-white block">
              Reliable Transport.
            </span>
            <span className="font-serif italic font-bold text-[#E51E32] block mt-0.5 sm:mt-1.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Exceptional Journeys.
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="font-body text-[12.5px] min-[360px]:text-[13px] sm:text-[16px] text-white/95 max-w-[340px] sm:max-w-[500px] leading-[1.55] sm:leading-[1.65] font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Professional bus rental, corporate staff transportation, certified school buses, and executive travel solutions across Abu Dhabi, Dubai, and the UAE.
          </p>

          {/* Pill CTA Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <Link
              to={ROUTES.REQUEST_QUOTE}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#E51E32] hover:bg-[#C91829] text-white font-sans font-bold text-xs sm:text-[15px] shadow-lg shadow-[#E51E32]/35 transition-all duration-200 active:scale-95 flex-shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>

            <Link
              to={ROUTES.FLEET}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-xs sm:text-[15px] border border-white/25 backdrop-blur-md transition-all duration-200 active:scale-95 flex-shrink-0"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/80 flex items-center justify-center flex-shrink-0">
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white text-white ml-0.5" />
              </div>
              <span>Explore Our Fleet</span>
            </Link>
          </div>

          {/* Certification Badges */}
          <div className="pt-1 sm:pt-4">
            <div className="flex items-center gap-2.5 sm:gap-4">
              <div
                className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105 duration-300 h-[46px] sm:h-[68px] lg:h-[76px] px-2.5 sm:px-3.5 group"
                title="Emirates International Accreditation Centre (EIAC) & EQCS Triple ISO Certified"
              >
                <img
                  src="/images/cert-eiac-eqcs.webp"
                  alt="EIAC and EQCS Triple ISO 9001, 14001, 45001 Certification"
                  className="h-full w-auto max-w-[125px] sm:max-w-[190px] lg:max-w-[215px] object-contain"
                />
              </div>

              <div
                className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105 duration-300 h-[46px] sm:h-[68px] lg:h-[76px] px-2.5 sm:px-3.5 group"
                title="Certified In-Country Value (ICV) Program UAE Supplier"
              >
                <img
                  src="/images/cert-icv.webp"
                  alt="In-Country Value (ICV) UAE Supplier Certificate"
                  className="h-full w-auto max-w-[60px] sm:max-w-[95px] lg:max-w-[105px] object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. LAYER: Bottom Carousel Controls (Centered on Both Mobile & Desktop) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </button>

        <div className="flex items-center gap-1.5 px-1">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={`dot-${slide.id}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.name}`}
                className={cn(
                  'transition-all duration-300 rounded-full cursor-pointer',
                  isActive
                    ? 'w-6 h-2 bg-[#D92332] shadow-sm shadow-[#D92332]/60'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                )}
              />
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </button>
      </div>
    </section>
  );
};
