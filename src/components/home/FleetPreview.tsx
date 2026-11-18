import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  CheckCircle2
} from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { cn } from '../../lib/utils';

export interface FleetShowcaseVehicle {
  id: string;
  name: string;
  tabLabel: string;
  category: string;
  capacity: string;
  tagline: string;
  image: string;
  specs: {
    seating: string;
    climate: string;
    luggage: string;
    feature: string;
  };
  slug: string;
}

export const FLEET_SHOWCASE_VEHICLES: FleetShowcaseVehicle[] = [
  {
    id: 'luxury-coach-50',
    name: '50 Seater Luxury Coach',
    tabLabel: 'Luxury Coach',
    category: 'Large Coaches',
    capacity: '50 Passengers',
    tagline: 'The Pinnacle of Intercity & Corporate Travel',
    image: '/images/fleet-luxury-coach-50-car.webp',
    specs: {
      seating: '50 Reclining Velvet Seats (2x2)',
      climate: 'Individual Tropicalized AC Vents',
      luggage: 'Massive Underfloor Cargo Bays',
      feature: 'WiFi & Onboard LCD Entertainment'
    },
    slug: '50-seater-luxury-bus'
  },
  {
    id: 'ashok-leyland-66',
    name: '66 Seater Ashok Leyland Bus',
    tabLabel: 'Ashok Leyland 66',
    category: 'Large Coaches',
    capacity: '66 Passengers',
    tagline: 'High-Capacity Heavy Commercial Staff & School Transport',
    image: '/images/fleet-ashok-leyland-66-car.webp',
    specs: {
      seating: '66 High-Back Safety Seats (3x2)',
      climate: 'Heavy-Duty Industrial Dual AC',
      luggage: 'Underfloor & Cabin Parcel Racks',
      feature: 'DoT & ADEK School Transit Certified'
    },
    slug: '66-seater-ashok-leyland-bus'
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade Platinum',
    tabLabel: 'Cadillac Escalade',
    category: 'Luxury Cars',
    capacity: '7 Passengers',
    tagline: 'The Benchmark of American VIP Luxury & Prestige',
    image: '/images/fleet-cadillac-escalade-car.webp',
    specs: {
      seating: '7 Passengers (Captain Chairs)',
      climate: 'Tri-Zone Automatic Climate',
      luggage: '4 Large Suitcases + Carry-ons',
      feature: 'Curved OLED & Massaging Seats'
    },
    slug: 'cadillac-escalade'
  },
  {
    id: 'gmc-denali',
    name: 'GMC Yukon Denali',
    tabLabel: 'GMC Denali',
    category: 'Luxury Cars',
    capacity: '7 Passengers',
    tagline: 'Commanding Power and Professional Elegance',
    image: '/images/fleet-gmc-denali-car.webp',
    specs: {
      seating: '7 Luxury Leather Seats',
      climate: 'Tri-Zone Climate Control',
      luggage: '4 Suitcases + Golf Bags',
      feature: 'Signature Denali Chrome & Air Suspension'
    },
    slug: 'gmc-denali'
  }
];

export const FleetPreview: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const touchStartX = useRef<number | null>(null);
  const isTransitioning = useRef(false);

  const total = FLEET_SHOWCASE_VEHICLES.length;
  const currentVehicle = FLEET_SHOWCASE_VEHICLES[activeIndex];
  const prevVehicleItem = FLEET_SHOWCASE_VEHICLES[(activeIndex - 1 + total) % total];
  const nextVehicleItem = FLEET_SHOWCASE_VEHICLES[(activeIndex + 1) % total];

  // Screen width detector for calibrated responsive positioning
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Preload vehicle images
  useEffect(() => {
    FLEET_SHOWCASE_VEHICLES.forEach((v) => {
      const img = new Image();
      img.src = v.image;
    });
  }, []);

  const goToSlide = useCallback((newIndex: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setActiveIndex((newIndex + total) % total);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 450);
  }, [total]);

  const nextVehicle = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevVehicle = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextVehicle();
      if (e.key === 'ArrowLeft') prevVehicle();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextVehicle, prevVehicle]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextVehicle();
      else prevVehicle();
    }
    touchStartX.current = null;
  };

  // Helper to calculate circular distance relative to activeIndex
  const getDistance = (index: number) => {
    let diff = index - activeIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  // 3D Coverflow positioning styles with 3 distinct non-overlapping zones
  const getCoverflowStyles = (distance: number): React.CSSProperties => {
    // 1. Center Active Vehicle: full scale (1.0), centered at 50%, elevated in Z
    if (distance === 0) {
      return {
        left: '50%',
        transform: 'translate3d(-50%, 0, 70px) rotateY(0deg) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(100%)',
        pointerEvents: 'auto',
        cursor: 'default'
      };
    }

    // 2. Left Preview Vehicle: scale(0.65), positioned on the left with dedicated horizontal spacing
    if (distance === -1) {
      if (isMobile) {
        return {
          left: '-35%',
          transform: 'translate3d(-50%, 0, -60px) scale(0.55)',
          zIndex: 10,
          opacity: 0,
          filter: 'brightness(70%)',
          pointerEvents: 'none'
        };
      }
      return {
        left: isTablet ? '14%' : '17%',
        transform: `translate3d(-50%, 0, -80px) rotateY(${isTablet ? '14deg' : '18deg'}) scale(${isTablet ? 0.62 : 0.65})`,
        zIndex: 15,
        opacity: 0.70,
        filter: 'brightness(80%)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    // 3. Right Preview Vehicle: scale(0.65), positioned on the right with dedicated horizontal spacing
    if (distance === 1) {
      if (isMobile) {
        return {
          left: '135%',
          transform: 'translate3d(-50%, 0, -60px) scale(0.55)',
          zIndex: 10,
          opacity: 0,
          filter: 'brightness(70%)',
          pointerEvents: 'none'
        };
      }
      return {
        left: isTablet ? '86%' : '83%',
        transform: `translate3d(-50%, 0, -80px) rotateY(${isTablet ? '-14deg' : '-18deg'}) scale(${isTablet ? 0.62 : 0.65})`,
        zIndex: 15,
        opacity: 0.70,
        filter: 'brightness(80%)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    // 4. Far / Hidden Vehicles: offscreen
    const isFarLeft = distance < 0;
    return {
      left: isFarLeft ? '-60%' : '160%',
      transform: isFarLeft
        ? 'translate3d(-50%, 0, -180px) rotateY(25deg) scale(0.4)'
        : 'translate3d(-50%, 0, -180px) rotateY(-25deg) scale(0.4)',
      zIndex: 5,
      opacity: 0,
      filter: 'brightness(40%)',
      pointerEvents: 'none',
      cursor: 'default'
    };
  };

  return (
    <section
      className="relative w-full bg-[#0B0C0E] select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Flash Transport Fleet Showcase"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. UPPER SECTION: LUXURY AUTOMOTIVE STAGE
          Dark charcoal / black leather with red double diagonal seams
         ───────────────────────────────────────────────────────────── */}
      <div className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
        
        {/* Luxury Automotive Black Leather Texture with Red Contrast Stitching */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="red-leather-stitching"
                width="140"
                height="140"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(28)"
              >
                {/* Diagonal seam shadow */}
                <line x1="0" y1="70" x2="140" y2="70" stroke="#000000" strokeWidth="6" opacity="0.8" />
                {/* Upper red dashed stitching line */}
                <line x1="0" y1="67" x2="140" y2="67" stroke="#D92332" strokeWidth="1.5" strokeDasharray="6,4" />
                {/* Lower red dashed stitching line */}
                <line x1="0" y1="73" x2="140" y2="73" stroke="#D92332" strokeWidth="1.5" strokeDasharray="6,4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#red-leather-stitching)" />
          </svg>
        </div>

        {/* Soft Radial Ambient Highlight on Active Vehicle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[760px] h-[380px] bg-gradient-to-r from-red-600/10 via-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Title matching Reference Graphic */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#D92332] block mb-2">
                EXCELLENCE ON EVERY ROAD
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-light text-white tracking-tight leading-tight">
                An extraordinary <span className="font-bold text-white">fleet range</span>
              </h2>
            </div>
            
            <Link
              to={ROUTES.FLEET}
              className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white inline-flex items-center gap-1.5 transition-colors group self-start md:self-auto"
            >
              <span>View All 20+ Vehicles</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D92332]" />
            </Link>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar pb-2 sm:pb-4 border-b border-white/10 mb-8 sm:mb-10">
            {FLEET_SHOWCASE_VEHICLES.map((vehicle, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => goToSlide(idx)}
                  className="flex-shrink-0 flex flex-col items-center cursor-pointer transition-all duration-300 group focus:outline-none"
                >
                  {/* Active White Horizontal Indicator Line above Model Name */}
                  <div
                    className={cn(
                      'h-[2px] transition-all duration-300 rounded-full mb-1.5',
                      isActive ? 'w-12 bg-white opacity-100' : 'w-0 bg-transparent opacity-0 group-hover:w-6 group-hover:bg-white/40'
                    )}
                  />
                  <span
                    className={cn(
                      'font-sans tracking-wide transition-all duration-300',
                      isActive
                        ? 'text-white font-bold text-sm sm:text-[16px]'
                        : 'text-neutral-400 hover:text-white text-xs sm:text-sm font-medium'
                    )}
                  >
                    {vehicle.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              3D COVERFLOW STAGE: THREE DISTINCT ZONES (NO OVERLAP)
             ───────────────────────────────────────────────────────────── */}
          <div className="relative w-full">
            {/* Left Circular Navigation Button (Elevated to z-50, outside 3D perspective to guarantee instant clickability) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevVehicle();
              }}
              className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-[#111827] shadow-[0_10px_35px_rgba(0,0,0,0.65)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group focus:outline-none pointer-events-auto select-none"
              aria-label="Previous Vehicle"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5 text-[#111827]" />
            </button>

            {/* Right Circular Navigation Button (Elevated to z-50, outside 3D perspective to guarantee instant clickability) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextVehicle();
              }}
              className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-[#111827] shadow-[0_10px_35px_rgba(0,0,0,0.65)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer group focus:outline-none pointer-events-auto select-none"
              aria-label="Next Vehicle"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5 text-[#111827]" />
            </button>

            {/* 3D Coverflow Stage */}
            <div
              className="relative h-[240px] sm:h-[310px] lg:h-[350px] w-full flex items-end justify-center"
              style={{
                perspective: '1400px',
                perspectiveOrigin: '50% 60%',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 3D Vehicle Track */}
              <div
                className="relative w-full h-full flex items-end"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {FLEET_SHOWCASE_VEHICLES.map((vehicle, index) => {
                  const distance = getDistance(index);
                  const isLeft = distance === -1;
                  const isRight = distance === 1;
                  const isCenter = distance === 0;

                  const style3D = getCoverflowStyles(distance);

                  return (
                    <div
                      key={vehicle.id}
                      onClick={() => {
                        if (isLeft) prevVehicle();
                        if (isRight) nextVehicle();
                      }}
                      className="absolute bottom-0 flex flex-col items-center justify-end will-change-transform"
                      style={{
                        width: isMobile ? '70vw' : isTablet ? '440px' : '520px',
                        transition:
                          'left 500ms cubic-bezier(0.25, 1, 0.5, 1), transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 450ms ease, filter 450ms ease',
                        ...style3D
                      }}
                    >
                      {/* Pure Vehicle Cutout (object-fit: contain, no clipping) */}
                      <div className="relative w-full flex items-end justify-center">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className={cn(
                            'w-full max-h-[220px] sm:max-h-[290px] lg:max-h-[330px] object-contain transition-all duration-500',
                            isCenter
                              ? 'drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]'
                              : 'drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]'
                          )}
                          loading={isCenter ? 'eager' : 'lazy'}
                        />
                      </div>

                      {/* Subtle Natural Tire Ground Shadow */}
                      <div className="w-[85%] h-3.5 sm:h-4 bg-black/60 rounded-[100%] blur-[6px] -mt-1 pointer-events-none" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              DEDICATED INFORMATION LABELS ROW (SEPARATE ROW BELOW VEHICLES)
              Alters nothing on vehicles, perfectly aligns under each zone
             ───────────────────────────────────────────────────────────── */}
          <div className="relative h-14 sm:h-16 mt-4 w-full flex items-center justify-center">
            
            {/* Left Label (Aligned beneath Left Vehicle) */}
            <div
              className={cn(
                'absolute hidden md:flex items-center transition-all duration-600 ease-out cursor-pointer',
                isTablet ? 'left-[14%]' : 'left-[17%]',
                '-translate-x-1/2'
              )}
              onClick={prevVehicle}
            >
              <div className="inline-flex items-center rounded-full bg-white/80 hover:bg-white border border-white/20 shadow-md overflow-hidden py-1 px-1 transition-all group scale-90 sm:scale-95">
                <span className="px-3.5 py-1 font-sans font-bold text-xs sm:text-[13px] text-[#111827] whitespace-nowrap">
                  {prevVehicleItem.name}
                </span>
                <span className="h-4 w-[1px] bg-neutral-300" />
                <span className="px-3 py-1 font-sans font-bold text-[11px] sm:text-xs text-white bg-[#D92332]/85 group-hover:bg-[#D92332] rounded-full flex items-center gap-1.5 whitespace-nowrap transition-colors">
                  <Users className="w-3 h-3" />
                  {prevVehicleItem.capacity}
                </span>
              </div>
            </div>

            {/* Center Label (Prominently aligned directly below Active Vehicle) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center z-30 transition-all duration-600 ease-out">
              <div className="inline-flex items-center rounded-full bg-white border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden py-1 px-1 sm:px-1.5">
                <span className="px-4 sm:px-6 py-1.5 font-sans font-extrabold text-sm sm:text-base text-[#111827] whitespace-nowrap tracking-tight">
                  {currentVehicle.name}
                </span>
                <span className="h-5 w-[1.5px] bg-neutral-200" />
                <span className="px-4 sm:px-5 py-1.5 font-sans font-bold text-xs sm:text-sm text-white bg-[#D92332] rounded-full flex items-center gap-2 whitespace-nowrap shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                  {currentVehicle.capacity}
                </span>
              </div>
            </div>

            {/* Right Label (Aligned beneath Right Vehicle) */}
            <div
              className={cn(
                'absolute hidden md:flex items-center transition-all duration-600 ease-out cursor-pointer',
                isTablet ? 'left-[86%]' : 'left-[83%]',
                '-translate-x-1/2'
              )}
              onClick={nextVehicle}
            >
              <div className="inline-flex items-center rounded-full bg-white/80 hover:bg-white border border-white/20 shadow-md overflow-hidden py-1 px-1 transition-all group scale-90 sm:scale-95">
                <span className="px-3.5 py-1 font-sans font-bold text-xs sm:text-[13px] text-[#111827] whitespace-nowrap">
                  {nextVehicleItem.name}
                </span>
                <span className="h-4 w-[1px] bg-neutral-300" />
                <span className="px-3 py-1 font-sans font-bold text-[11px] sm:text-xs text-white bg-[#D92332]/85 group-hover:bg-[#D92332] rounded-full flex items-center gap-1.5 whitespace-nowrap transition-colors">
                  <Users className="w-3 h-3" />
                  {nextVehicleItem.capacity}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. LOWER SECTION: PURE CRISP WHITE INFORMATION STAGE
          Maserati Model Details + CTA
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#E7E9ED] py-8 sm:py-10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            
            {/* Left: Dynamic Vehicle Title, Tagline & Specs */}
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider bg-[#FEECEE] text-[#D92332] px-3 py-1 rounded-full">
                  {currentVehicle.category}
                </span>
                <span className="font-sans text-xs text-[#686D75] font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D92332]" />
                  <span>{currentVehicle.capacity}</span>
                </span>
              </div>

              {/* Large Bold Vehicle Tagline / Name */}
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111827] tracking-tight leading-tight">
                {currentVehicle.name} — <span className="text-[#D92332] font-normal italic">{currentVehicle.tagline}</span>
              </h3>

              {/* Specs Pills Row */}
              <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-[13px] text-[#4B5563]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D92332]" />
                  {currentVehicle.specs.seating}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D92332]" />
                  {currentVehicle.specs.climate}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D92332]" />
                  {currentVehicle.specs.luggage}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D92332]" />
                  {currentVehicle.specs.feature}
                </span>
              </div>
            </div>

            {/* Right: High-Impact Call To Action Button (Maserati Style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <Link
                to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(currentVehicle.name)}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D92332] hover:bg-[#B91F2D] text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>Enquire For This Vehicle</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to={`/our-fleet/#${currentVehicle.slug}`}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 border border-[#E7E9ED] hover:border-[#111827] text-[#111827] hover:text-[#D92332] font-sans font-semibold text-xs sm:text-sm rounded-xl transition-all"
              >
                <span>Full Specifications</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
