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
  alt: string;
  positionClass: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'school-bus-fleet',
    name: 'School Bus Fleet',
    image: '/images/hero-school-bus-fleet.jpg?v=5',
    alt: 'Flash Transport Certified Yellow School Bus Fleet outside Headquarters',
    positionClass: 'object-[78%_center] sm:object-[84%_center] md:object-[88%_center] lg:object-[96%_center]'
  },
  {
    id: 'luxury-bus',
    name: 'Luxury Coach Bus',
    image: '/images/dubai-hero-luxury-coach.jpg',
    alt: 'Flash Transport Luxury Coach Bus with Dubai Skyline and Burj Khalifa at Sunset',
    positionClass: 'object-[62%_center]'
  },
  {
    id: 'cadillac-limousine',
    name: 'Cadillac / Limousine',
    image: '/images/hero-cadillac-limousine.jpg?v=2',
    alt: 'Flash Transport Black Cadillac Escalade Luxury SUV in Dubai at Sunset',
    positionClass: 'object-[center_right] sm:object-right'
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // Preload all 3 slide images on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
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

  return (
    <section
      className="relative bg-[#0F1115] text-white overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[800px] flex flex-col justify-between select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Flash Transport Hero Section"
    >
      {/* 1. LAYER: 3-Slide Cinematic Carousel (Smooth 1000ms Fade + Subtle Horizontal Shift) */}
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
              <img
                src={slide.image}
                alt={slide.alt}
                className={cn('w-full h-full object-cover', slide.positionClass)}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* 2. LAYER: Contrast Vignettes (Ensures 100% Crisp Header & Text Readability while preserving vehicle clarity) */}
        {/* Left Vignette for Headline & Body Text (tightened to fade out before covering the foreground bus) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/90 via-30% sm:via-35% lg:via-36% to-transparent to-55% lg:to-48% z-10 pointer-events-none" />

        {/* Top Header Protection Vignette: Soft gradient behind navbar leaving sky & building naturally bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/80 via-[#0F1115]/25 via-12% to-transparent to-25% z-10 pointer-events-none" />

        {/* Soft bottom vignette for ground depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/95 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* 3. LAYER: Bottom-Right Dynamic Aerodynamic Red Ribbon Graphic (Framing the Ground Cleanly away from Header/Logo) */}
      <div className="absolute bottom-0 right-0 z-20 pointer-events-none w-80 sm:w-[450px] lg:w-[580px] h-36 sm:h-52 overflow-hidden select-none">
        <svg
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          {/* Back dark red shadow curve */}
          <path
            d="M60 200C180 185 280 135 410 145C490 152 550 110 600 50V200H60Z"
            fill="url(#red-gradient-back)"
            opacity="0.7"
          />
          {/* Main dynamic crimson swoop */}
          <path
            d="M140 200C260 170 330 95 460 100C520 103 560 65 600 20V200H140Z"
            fill="url(#red-gradient-front)"
          />
          {/* Top highlight line */}
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

      {/* 5. LAYER: Main Content & Consistent Headline (Left Column - Clean Visual Balance Below Fixed Header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-[540px] lg:max-w-[560px] xl:max-w-[600px] text-left space-y-4 sm:space-y-5">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#D92332] inline-block rounded-full"></span>
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
              ABU DHABI'S PREMIER TRANSPORT PROVIDER
            </span>
          </div>

          {/* Main Headline — High-End Editorial Typography */}
          <h1 className="text-[clamp(2.35rem,4.4vw+0.35rem,3.85rem)] tracking-[-0.015em] leading-[1.1] text-white drop-shadow-sm">
            <span className="font-serif font-bold text-white block">
              Reliable Transport.
            </span>
            <span className="font-serif italic font-bold text-[#D92332] block mt-1 sm:mt-1.5">
              Exceptional Journeys.
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="font-body text-[14px] sm:text-[16px] text-white/85 max-w-[500px] leading-[1.65] font-normal">
            Professional bus rental, corporate staff transportation, certified school buses, and executive travel solutions across Abu Dhabi, Dubai, and the UAE.
          </p>

          {/* Pill CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1.5 sm:pt-2">
            {/* Primary Pill Button */}
            <Link
              to={ROUTES.REQUEST_QUOTE}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D92332] hover:bg-[#B91F2D] text-white font-sans font-semibold text-sm sm:text-[15px] shadow-lg shadow-[#D92332]/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Translucent Pill Button */}
            <Link
              to={ROUTES.FLEET}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-sm sm:text-[15px] border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
              </div>
              <span>Explore Our Fleet</span>
            </Link>
          </div>

          {/* 6. Certification Section (Bottom-Left Side by Side) */}
          <div className="pt-3 sm:pt-4">
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Badge 1: EIAC / EQCS Accreditation Card */}
              <div
                className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105 duration-300 h-[68px] sm:h-[76px] px-3.5 group"
                title="Emirates International Accreditation Centre (EIAC) & EQCS Triple ISO Certified"
              >
                <img
                  src="/images/cert-eiac-eqcs.jpg"
                  alt="EIAC and EQCS Triple ISO 9001, 14001, 45001 Certification"
                  className="h-full w-auto max-w-[190px] sm:max-w-[215px] object-contain"
                />
              </div>

              {/* Badge 2: In-Country Value (ICV) Certification Card */}
              <div
                className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/60 flex items-center justify-center transition-transform hover:scale-105 duration-300 h-[68px] sm:h-[76px] px-3.5 group"
                title="Certified In-Country Value (ICV) Program UAE Supplier"
              >
                <img
                  src="/images/cert-icv.jpg"
                  alt="In-Country Value (ICV) UAE Supplier Certificate"
                  className="h-full w-auto max-w-[95px] sm:max-w-[105px] object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 7. LAYER: Minimal Bottom-Center Carousel Controls (3 Dots) */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        {/* 3 Pagination Dots */}
        <div className="flex items-center gap-1.5 px-1">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
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

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </section>
  );
};
