import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { ROUTES } from '../../config/routes';

// =============================================================================
// ACCURATE CUSTOM SVG ICONS MATCHING THE REFERENCE DESIGN
// =============================================================================

// 1. Shield Checkmark Icon (Uncompromising Passenger Safety)
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M24 6 L 38 11 V 22 C 38 31 32 38.5 24 42 C 16 38.5 10 31 10 22 V 11 Z" />
    <path d="M17 23 L 22 28 L 31 18" strokeWidth="2.8" />
  </svg>
);

// 2. Chauffeur in Peaked Cap & Uniform Icon (Licensed Professional Chauffeurs)
const ChauffeurIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Cap Crown & Cockade */}
    <path d="M15 17.5 C 15 12, 33 12, 33 17.5 Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M13 19.5 Q 24 15.5 35 19.5" />
    <path d="M16 16.5 Q 24 10 32 16.5" />
    <circle cx="24" cy="13.5" r="1.5" fill="currentColor" />
    {/* Head Contour */}
    <path d="M17 19.5 V 24.5 C 17 28.5 20 31.5 24 31.5 C 28 31.5 31 28.5 31 24.5 V 19.5" />
    {/* Collar & Tie */}
    <path d="M20 31.5 L 24 36.5 L 28 31.5" />
    <path d="M23 36.5 L 24 43 L 25 36.5 Z" fill="currentColor" />
    {/* Shoulders */}
    <path d="M10 44 C 10 37 16 34.5 20 33.5" />
    <path d="M38 44 C 38 37 32 34.5 28 33.5" />
  </svg>
);

// 3. Side Profile Bus Icon (20+ Years Operational Punctuality)
const BusSideIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main Coach Body */}
    <rect x="7" y="14" width="34" height="19" rx="3.5" />
    {/* Window Dividing Horizontal Line */}
    <path d="M7 21.5 H 41" />
    {/* Window Vertical Dividers */}
    <path d="M15.5 14 V 21.5" />
    <path d="M24 14 V 21.5" />
    <path d="M32.5 14 V 21.5" />
    {/* Headlight & Taillight Accents */}
    <path d="M7 27 H 10" />
    <path d="M38 27 H 41" />
    {/* Wheels */}
    <circle cx="15" cy="33.5" r="3.2" fill="white" strokeWidth="2.4" />
    <circle cx="33" cy="33.5" r="3.2" fill="white" strokeWidth="2.4" />
  </svg>
);

// 4. Rosette Ribbon Award Medal (ISO Triple Quality Management)
const AwardMedalIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Rosette Circle */}
    <circle cx="24" cy="19" r="10.5" />
    {/* Star in Center */}
    <path
      d="M24 12.5 L 25.6 16.5 L 29.8 17.1 L 26.8 20 L 27.5 24.2 L 24 22.2 L 20.5 24.2 L 21.2 20 L 18.2 17.1 L 22.4 16.5 Z"
      fill="currentColor"
      stroke="none"
    />
    {/* Ribbon Tails */}
    <path d="M18.5 28 L 15.5 40 L 21.5 36.5 L 24 37.5" />
    <path d="M29.5 28 L 32.5 40 L 26.5 36.5 L 24 37.5" />
  </svg>
);

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      id: 'safety',
      title: 'Uncompromising Passenger Safety',
      description:
        'Equipped with electronic speed limiters, automatic engine fire suppression systems, and strict preventive maintenance protocols.',
      Icon: ShieldCheckIcon
    },
    {
      id: 'chauffeurs',
      title: 'Licensed Professional Chauffeurs',
      description:
        'Fully certified by Abu Dhabi DoT & RTA, background-checked, and regularly trained in defensive driving and courteous passenger protocol.',
      Icon: ChauffeurIcon
    },
    {
      id: 'punctuality',
      title: '20+ Years Operational Punctuality',
      description:
        'State-of-the-art GPS route optimization ensuring 99.8% on-time arrival across corporate workforce and educational transport routes.',
      Icon: BusSideIcon
    },
    {
      id: 'quality',
      title: 'ISO Triple Quality Management',
      description:
        'Certified under ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 with accredited EIAC standards (CB-QMS/EMS/OHSMS-084).',
      Icon: AwardMedalIcon
    }
  ];

  return (
    <section className="relative bg-[#F7F8FA] border-y border-[#E8EAF0] text-[#171B23] overflow-hidden py-16 sm:py-20 lg:py-24 select-none">
      
      {/* =========================================================================
          1. BACKGROUND ACCENTS (Top-Left Dynamic Red Wave & Top-Right UAE Skyline)
         ========================================================================= */}
      
      {/* Top-Left Dynamic Brand Red Wave Accent */}
      <div className="absolute top-0 left-0 pointer-events-none select-none w-72 sm:w-96 lg:w-[480px] h-48 sm:h-64 lg:h-80 overflow-hidden z-0">
        <svg
          viewBox="0 0 480 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Outer Deep Red Shadow Wave */}
          <path
            d="M0 0 H260 C 205 50, 115 135, 70 230 C 35 285, 12 315, 0 320 Z"
            fill="url(#why-curve-dark)"
            opacity="0.95"
          />
          {/* Main Primary Red Wave */}
          <path
            d="M0 0 H195 C 145 42, 75 115, 42 195 C 18 245, 5 290, 0 300 Z"
            fill="#E31E2B"
          />
          <defs>
            <linearGradient id="why-curve-dark" x1="0" y1="0" x2="260" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8E0B16" />
              <stop offset="0.6" stopColor="#B51220" />
              <stop offset="1" stopColor="#E31E2B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top-Right UAE Skyline Watermark (Burj Khalifa & Modern Skyscrapers Silhouette) */}
      <div className="absolute top-0 right-0 pointer-events-none select-none w-72 sm:w-[500px] lg:w-[760px] h-48 sm:h-64 lg:h-80 overflow-hidden z-0 opacity-[0.22]">
        <svg
          viewBox="0 0 760 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-right-top text-[#64748B]"
        >
          <defs>
            <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="260" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" stopOpacity="0.45" />
              <stop offset="0.7" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="url(#skyline-fade)" stroke="currentColor" strokeWidth="1">
            <path d="M10 260 V 220 H 30 V 260 M 35 260 V 205 H 55 V 260 M 60 260 V 190 H 75 V 175 H 90 V 260 M 95 260 V 215 H 120 V 260 M 125 260 V 180 H 145 V 160 H 160 V 260 M 165 260 V 200 H 190 V 260 M 195 260 V 150 H 220 V 260 M 225 260 V 190 H 250 V 260 M 255 260 V 170 H 280 V 260 M 285 260 V 210 H 310 V 260 M 315 260 V 160 H 340 V 260 M 345 260 V 180 H 375 V 260 M 380 260 V 140 H 405 V 260 M 410 260 V 200 H 435 V 260 M 440 260 V 155 H 465 V 260 M 470 260 V 185 H 495 V 260" />
            <path d="M510 260 V 110 L 525 90 V 260 Z" />
            <path d="M532 260 V 125 L 545 105 V 260 Z" />
            <path d="M575 260 V 130 L 580 120 V 90 L 583 80 V 50 L 584 30 V 8 L 586 8 V 30 L 587 50 V 80 L 590 90 V 120 L 595 130 V 260 Z" fillOpacity="0.55" />
            <path d="M605 260 V 150 H 628 V 260 M 633 260 V 120 H 652 V 105 L 662 90 L 672 105 V 120 H 682 V 260 M 687 260 V 145 H 708 V 260 M 713 260 V 170 H 745 V 260" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            2. SECTION HEADER (Centered with Flanking Red Lines & Underline Brush)
           ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          
          {/* Eyebrow with horizontal red flanking lines and center bullet */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#E31E2B] rounded-full" />
            <span className="flex items-center gap-2 text-xs sm:text-[13px] font-sans font-bold uppercase tracking-[0.2em] text-[#E31E2B]">
              <span className="w-2 h-2 rounded-full bg-[#E31E2B]" />
              THE FLASH TRANSPORT ADVANTAGE
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#E31E2B] rounded-full" />
          </div>

          {/* Main Heading: Bold Dark Charcoal with Red Brand Highlight & Underline Wave */}
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.02em] text-[#171B23] leading-[1.16]">
            Why Leading UAE Organizations Choose{' '}
            <span className="text-[#E31E2B] relative inline-block">
              Flash Transport
              <svg
                viewBox="0 0 240 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2.5 left-0 w-full h-3 text-[#E31E2B] pointer-events-none"
              >
                <path
                  d="M4 12 C 60 4, 180 4, 236 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="mt-4 font-body text-base sm:text-[17px] text-[#555E6D] max-w-3xl mx-auto leading-[1.65] font-normal">
            Combining two decades of operational experience with cutting-edge fleet management to deliver unmatched safety, value, and dependability.
          </p>
        </div>

        {/* =========================================================================
            3. FOUR ADVANTAGE ITEMS – TIMELINE DESIGN (No Square Cards)
           ========================================================================= */}
        <div className="relative mb-10 sm:mb-12 lg:mb-14">
          
          {/* Horizontal Connecting Timeline Track with Midpoint Red Dots (Desktop Only) */}
          <div className="hidden lg:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#FFD2D6] via-[#E31E2B]/40 to-[#FFD2D6] pointer-events-none z-0">
            {/* Small Red Connector Dots between Badges (Midpoints) */}
            <div className="absolute top-1/2 left-[16.67%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E31E2B] ring-4 ring-[#FFF0F1]" />
            <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E31E2B] ring-4 ring-[#FFF0F1]" />
            <div className="absolute top-1/2 left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E31E2B] ring-4 ring-[#FFF0F1]" />
          </div>

          {/* 4-Item Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5 relative z-10">
            {advantages.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center text-center px-3 sm:px-4 group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Circular Badge: ~96px White Background, Thin Red Double Outline & Pale-Red Glow */}
                <div className="w-[96px] h-[96px] rounded-full bg-white border-2 border-[#E31E2B] ring-8 ring-[#FFF0F1] shadow-[0_4px_24px_rgba(227,30,43,0.12)] flex items-center justify-center text-[#E31E2B] mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(227,30,43,0.22)] group-hover:ring-[#FFE0E3] z-10">
                  <item.Icon className="w-9 h-9" />
                </div>

                {/* Advantage Title: ~20px Bold */}
                <h3 className="font-sans text-[19px] lg:text-[20px] font-bold text-[#171B23] tracking-tight leading-snug mb-2.5 group-hover:text-[#E31E2B] transition-colors">
                  {item.title}
                </h3>

                {/* Advantage Description: Clean Grey Text */}
                <p className="font-body text-[14px] text-[#555E6D] leading-[1.6] max-w-[270px] mx-auto font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            4. BOTTOM TWO FEATURE BANNERS (Exact Proportions & Diagonal Joint of Image 2)
           ========================================================================= */}
        <div className="relative flex flex-col lg:flex-row items-stretch filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          
          {/* -----------------------------------------------------------------------
              BANNER 1: CORPORATE STAFF SOLUTIONS (Deep Red Gradient + Luxury Coach)
             ----------------------------------------------------------------------- */}
          <div className="w-full lg:w-[50.5%] relative overflow-hidden bg-gradient-to-r from-[#980C19] via-[#B81120] to-[#E31E2B] text-white rounded-[24px] lg:rounded-r-none lg:rounded-l-[26px] lg:[clip-path:polygon(0_0,100%_0,calc(100%-36px)_100%,0_100%)] min-h-[250px] lg:h-[260px] flex flex-col justify-between p-6 sm:p-7 z-10 group">
            
            {/* Right Bus Photo Integration with Soft Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[58%] lg:w-[56%] overflow-hidden z-0 pointer-events-none select-none">
              <img
                src="/images/about-hero-banner.webp"
                alt="Flash Transport Corporate Luxury Coach Fleet"
                className="w-full h-full object-cover object-[70%_center] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient Mask Blending with Red Panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#980C19] via-[#980C19]/80 via-10% to-transparent to-55%" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#980C19]/75 via-transparent to-black/10" />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 max-w-[280px] sm:max-w-xs w-full">
              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-white text-[10.5px] font-bold tracking-wider uppercase mb-2.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>CORPORATE STAFF SOLUTIONS</span>
              </div>

              {/* Banner Heading */}
              <h3 className="font-sans text-[22px] sm:text-[25px] lg:text-[26px] font-extrabold text-white leading-[1.12] tracking-tight">
                Reliable Workforce<br />
                Transportation for<br />
                Businesses
              </h3>
            </div>

            {/* Bottom Actions Row */}
            <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4 mt-auto">
              {/* Primary White Pill Button with Circular Red Arrow */}
              <Link
                to={ROUTES.SERVICE_STAFF_TRANSPORT}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#980C19] hover:bg-neutral-100 font-sans font-bold text-xs shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group/btn"
              >
                <div className="w-5 h-5 rounded-full bg-[#980C19] text-white flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </div>
                <span>Staff Transit Details</span>
              </Link>

              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-4 bg-white/30" />

              {/* Secondary Clean White Text Link */}
              <Link
                to={`${ROUTES.REQUEST_QUOTE}?service=staff-transportation-services-abudhabi`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-white/95 hover:text-white transition-colors"
              >
                <span>Get Corporate Rates</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BANNER 2: STUDENT SAFETY FIRST (Pure White + Yellow Bus + Corner Swoop)
             ----------------------------------------------------------------------- */}
          <div className="w-full lg:w-[51%] lg:-ml-[28px] mt-4 lg:mt-0 relative overflow-hidden bg-white text-[#171B23] border border-[#E8EAF0] lg:border-l-0 rounded-[24px] lg:rounded-l-none lg:rounded-r-[26px] lg:[clip-path:polygon(36px_0,100%_0,100%_100%,0_100%)] min-h-[250px] lg:h-[260px] flex flex-col justify-between p-6 sm:p-7 pl-6 lg:pl-12 z-20 group">
            
            {/* Bottom-Right Dynamic Red Corner Accent (Matching Mockup) */}
            <div className="absolute bottom-0 right-0 w-44 sm:w-56 h-12 pointer-events-none select-none z-10 overflow-hidden rounded-br-[26px]">
              <svg viewBox="0 0 220 60" fill="none" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 60 C 60 55, 130 20, 220 0 V 60 H 0 Z" fill="#E31E2B" />
              </svg>
            </div>

            {/* Right School Bus Photo Integration */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[58%] lg:w-[56%] overflow-hidden z-0 pointer-events-none select-none">
              <img
                src="/images/hero-school-bus-fleet.webp"
                alt="Flash Transport ADEK Certified School Bus Fleet"
                className="w-full h-full object-cover object-[80%_center] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Soft Gradient Mask Blending with White Panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-12% to-transparent to-55%" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 max-w-[280px] sm:max-w-xs w-full">
              {/* Category Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F1] border border-[#FFCCD1] text-[#E31E2B] text-[10.5px] font-bold tracking-wider uppercase mb-2.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>STUDENT SAFETY FIRST</span>
              </div>

              {/* Banner Heading */}
              <h3 className="font-sans text-[22px] sm:text-[25px] lg:text-[26px] font-extrabold text-[#171B23] leading-[1.12] tracking-tight">
                ADEK-Compliant<br />
                School &amp; College<br />
                Bus Operations
              </h3>
            </div>

            {/* Bottom Actions Row */}
            <div className="relative z-10 pt-3 border-t border-[#E8EAF0] flex flex-wrap items-center gap-3 sm:gap-4 mt-auto">
              {/* Primary Red Pill Button with Circular White Arrow */}
              <Link
                to={ROUTES.SERVICE_SCHOOL_BUS}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31E2B] hover:bg-[#B51220] text-white font-sans font-bold text-xs shadow-md shadow-[#E31E2B]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group/btn"
              >
                <div className="w-5 h-5 rounded-full bg-white text-[#E31E2B] flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </div>
                <span>School Transit Details</span>
              </Link>

              {/* Secondary Red Text Link */}
              <Link
                to={`${ROUTES.REQUEST_QUOTE}?service=school-college-transportation-abu-dabi`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#E31E2B] hover:text-[#B51220] transition-colors"
              >
                <span>Institutional Inquiries</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
