import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { ServiceCard } from '../services/ServiceCard';

export const ServicesPreview: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Exact 6 services for the initial 3-column × 2-row showcase
  const initialCount = 6;
  const initialServices = SERVICES.slice(0, initialCount);
  const remainingServices = SERVICES.slice(initialCount);
  const hasMore = remainingServices.length > 0;

  const displayedServices = isExpanded ? SERVICES : initialServices;

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFB] border-b border-[#E7E9ED] relative overflow-hidden select-none">
      
      {/* 1. Background Decorative Element: Top-Left Subtle Flowing Waves (Soft, Organic & Tapered) */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none w-72 sm:w-[480px] lg:w-[620px] h-44 sm:h-56 lg:h-64 overflow-hidden select-none">
        <svg
          viewBox="0 0 620 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Soft outer translucent aura */}
          <path
            d="M0 0V220C60 210 130 170 220 130C320 85 430 75 540 25C580 14 605 4 620 0H0Z"
            fill="url(#red-service-wave-soft)"
            opacity="0.18"
          />
          {/* Mid organic wave */}
          <path
            d="M0 0V160C45 150 100 120 180 88C265 52 360 55 460 18C505 6 535 1 550 0H0Z"
            fill="url(#red-service-wave-mid)"
            opacity="0.25"
          />
          {/* Foreground corner accent */}
          <path
            d="M0 0V105C30 98 75 75 135 50C195 25 265 28 340 8C375 2 395 0 400 0H0Z"
            fill="url(#red-service-wave-front)"
            opacity="0.20"
          />
          <defs>
            <linearGradient id="red-service-wave-soft" x1="0" y1="0" x2="620" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D92332" />
              <stop offset="0.6" stopColor="#EA2637" stopOpacity="0.4" />
              <stop offset="1" stopColor="#D92332" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="red-service-wave-mid" x1="0" y1="0" x2="550" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA2637" />
              <stop offset="0.5" stopColor="#D92332" stopOpacity="0.6" />
              <stop offset="1" stopColor="#B91F2D" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="red-service-wave-front" x1="0" y1="0" x2="400" y2="105" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA2637" />
              <stop offset="0.7" stopColor="#D92332" stopOpacity="0.5" />
              <stop offset="1" stopColor="#D92332" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Background Decorative Element: Bottom-Right Flowing Red Swoop */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none w-72 sm:w-[480px] lg:w-[580px] h-32 sm:h-44 lg:h-52 overflow-hidden select-none">
        <svg
          viewBox="0 0 580 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Soft backdrop ribbon */}
          <path
            d="M60 200C160 170 260 120 380 135C450 142 510 100 580 40V200H60Z"
            fill="url(#red-service-bot-soft)"
            opacity="0.5"
          />
          {/* Main dynamic red sweep matching reference bottom right */}
          <path
            d="M140 200C230 165 310 90 420 95C480 98 530 60 580 15V200H140Z"
            fill="url(#red-service-bot-main)"
          />
          {/* Foreground crisp edge */}
          <path
            d="M260 200C340 175 400 120 480 115C525 112 555 85 580 50V200H260Z"
            fill="url(#red-service-bot-front)"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="red-service-bot-soft" x1="60" y1="200" x2="580" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D92332" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#B91F2D" stopOpacity="0.4" />
              <stop offset="1" stopColor="#7E121B" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="red-service-bot-main" x1="140" y1="200" x2="580" y2="15" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EA2637" stopOpacity="0.2" />
              <stop offset="0.4" stopColor="#D92332" />
              <stop offset="0.8" stopColor="#B91F2D" />
              <stop offset="1" stopColor="#8A141E" />
            </linearGradient>
            <linearGradient id="red-service-bot-front" x1="260" y1="200" x2="580" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D5E" stopOpacity="0.3" />
              <stop offset="0.5" stopColor="#EA2637" />
              <stop offset="1" stopColor="#D92332" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3. Section Heading matching Reference Image */}
        <div className="text-center mb-12 sm:mb-14">
          
          {/* Eyebrow: — TAILORED MOBILITY SOLUTIONS — with tapered flanking accent lines */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D92332] rounded-full inline-block" />
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D92332]">
              TAILORED MOBILITY SOLUTIONS
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D92332] rounded-full inline-block" />
          </div>

          {/* Main Heading: Comprehensive Transportation Services */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.18]">
            Comprehensive Transportation <span className="text-[#D92332]">Services</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 font-body text-sm sm:text-[15px] text-[#4B5563] max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-normal">
            From corporate employee bus networks to executive car rentals and cross-emirate tours, explore our specialized fleet solutions designed for the UAE.
          </p>

          {/* Small Center Red Accent Line */}
          <div className="w-12 h-[3px] bg-[#D92332] rounded-full mx-auto mt-4" />
        </div>

        {/* 4. Responsive 3-Column × 2-Row Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              className={
                index >= initialCount
                  ? 'animate-in fade-in slide-in-from-bottom-4 duration-500'
                  : undefined
              }
            />
          ))}
        </div>

        {/* 5. See More / View All Services Button (Clean Outlined Red Button with Arrow) */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#D92332] text-[#D92332] hover:bg-[#D92332] hover:text-white font-sans font-semibold text-sm sm:text-[15px] transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer active:scale-95"
            >
              <span>{isExpanded ? 'Show Less Services' : 'View All Services'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
