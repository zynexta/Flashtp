import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICES, SERVICE_MAP } from '../data/services';
import { getAssetUrl } from '../data/assets';
import { ROUTES } from '../config/routes';
import { COMPANY_CONTACT } from '../data/company';
import {
  CheckCircle2,
  ShieldCheck,
  Bus,
  Users,
  ArrowRight,
  ChevronDown,
  Phone,
  HelpCircle,
  Clock,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  MessageCircle,
  Check,
  ChevronRight,
  ShieldAlert,
  FileCheck2,
  Navigation,
  Home
} from 'lucide-react';
import { cn } from '../lib/utils';
import { NotFound } from './NotFound';

// =============================================================================
// SERVICE-SPECIFIC HERO VIEWPORT & IMAGE FOCAL CONFIGURATIONS
// =============================================================================
interface ServiceHeroConfig {
  desktopObjectPos: string;
  mobileObjectPos: string;
  categoryBadge: string;
  titlePrefix: string;
  titleHighlight: string;
  gradientLeftOpacity: string;
  gradientMidOpacity: string;
  gradientRightOpacity: string;
}

const SERVICE_HERO_CONFIGS: Record<string, ServiceHeroConfig> = {
  'school-bus': {
    desktopObjectPos: 'lg:object-[84%_center]',
    mobileObjectPos: 'object-[80%_center]',
    categoryBadge: 'ADEK Compliant • Student Safety Mobility',
    titlePrefix: 'School & College',
    titleHighlight: 'Transportation',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.06)'
  },
  'staff-transport': {
    desktopObjectPos: 'lg:object-[80%_center]',
    mobileObjectPos: 'object-[75%_center]',
    categoryBadge: 'Corporate Workforce Transit • Abu Dhabi & ICAD',
    titlePrefix: 'Staff Transportation',
    titleHighlight: 'Services',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
  },
  'rent-a-car': {
    desktopObjectPos: 'lg:object-[82%_center]',
    mobileObjectPos: 'object-[78%_center]',
    categoryBadge: 'VIP Chauffeur & Luxury Car Rental • UAE',
    titlePrefix: 'Executive Car &',
    titleHighlight: 'Limousine Services',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
  },
  'inter-city-tour': {
    desktopObjectPos: 'lg:object-[80%_center]',
    mobileObjectPos: 'object-[75%_center]',
    categoryBadge: 'Cross-Emirate Sightseeing • Private Charter',
    titlePrefix: 'Tour & Excursion',
    titleHighlight: 'Transport',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
  },
  'group-pick-drop': {
    desktopObjectPos: 'lg:object-[80%_center]',
    mobileObjectPos: 'object-[75%_center]',
    categoryBadge: 'Airport Meet & Greet • Event Transit',
    titlePrefix: 'Airport Transfer',
    titleHighlight: 'Services',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
  },
  'daily-bus': {
    desktopObjectPos: 'lg:object-[82%_center]',
    mobileObjectPos: 'object-[78%_center]',
    categoryBadge: 'Scheduled Commuter Routes • Fixed Timetables',
    titlePrefix: 'Daily Bus Services in',
    titleHighlight: 'Abu Dhabi',
    gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
    gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
    gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
  }
};

const DEFAULT_HERO_CONFIG: ServiceHeroConfig = {
  desktopObjectPos: 'lg:object-[80%_center]',
  mobileObjectPos: 'object-[75%_center]',
  categoryBadge: 'UAE Certified Mobility • Abu Dhabi & Dubai',
  titlePrefix: '',
  titleHighlight: '',
  gradientLeftOpacity: 'rgba(10, 15, 25, 0.90)',
  gradientMidOpacity: 'rgba(10, 15, 25, 0.45)',
  gradientRightOpacity: 'rgba(10, 15, 25, 0.08)'
};

const SERVICE_MOBILE_HERO_IMAGES: Record<string, string> = {
  'staff-transport': '/images/service-bg-staff-transport-mobile.jpg',
  'school-bus': '/images/service-bg-school-bus-mobile.jpg',
  'rent-a-car': '/images/service-bg-rent-a-car-mobile.jpg',
  'inter-city-tour': '/images/service-bg-inter-city-tour-mobile.jpg',
  'group-pick-drop': '/images/service-bg-airport-transfer-mobile.jpg',
  'daily-bus': '/images/service-bg-daily-bus-mobile.jpg'
};

export const ServiceDetail: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Extract slug from current pathname (e.g. /school-college-transportation-abu-dabi/)
  const cleanSlug = pathname.replace(/^\/+|\/+$/g, '');
  const service = SERVICE_MAP[cleanSlug] || SERVICES.find((s) => s.slug === cleanSlug);

  useEffect(() => {
    if (service) {
      document.title = `${service.metaTitle || service.title} | Flash Transport Abu Dhabi`;
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  const config = SERVICE_HERO_CONFIGS[service.id] || DEFAULT_HERO_CONFIG;
  const imgUrl = getAssetUrl(service.imageKey);
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  // Split title if it contains "&" for visual styling
  const hasAmpersand = service.title.includes('&');
  const titleParts = hasAmpersand ? service.title.split('&') : [service.title];

  return (
    <div className="bg-[#FAFAFB] text-[#111827] min-h-screen">
      
      {/* =========================================================================
          1A. MOBILE HERO SECTION: Full-Height Cinematic Luxury Composition (Matching Target Design)
         ========================================================================= */}
      <section className="lg:hidden relative w-full min-h-[100svh] min-[400px]:min-h-[820px] flex flex-col justify-between overflow-hidden select-none">
        
        {/* 1. Cinematic Full-Height Background Scenery */}
        <div className="absolute inset-0 z-0">
          <img
            src={SERVICE_MOBILE_HERO_IMAGES[service.id] || imgUrl}
            alt={`${service.title} Flash Transport Fleet`}
            className="w-full h-full object-cover object-[center_top] pointer-events-none select-none"
            loading="eager"
          />
          {/* Layered Top & Bottom Gradients for Text and Button Contrast */}
          <div className="absolute inset-x-0 top-0 h-[440px] bg-gradient-to-b from-black/85 via-black/55 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />
        </div>

        {/* TOP SECTION: Category Badge, Heading, Description & Accent Line */}
        <div className="relative z-20 w-full pt-20 min-[360px]:pt-24 xs:pt-28 px-4 xs:px-5 sm:px-6 flex flex-col items-center text-center">
          
          {/* Category Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white text-[10px] min-[360px]:text-[11px] font-bold tracking-widest uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E2B] animate-pulse flex-shrink-0" />
            <span>{config.categoryBadge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E2B] animate-pulse flex-shrink-0" />
          </div>

          {/* Main Service Heading in Elegant Serif Typography */}
          <h1 className="mt-3.5 min-[360px]:mt-4 font-serif text-[28px] min-[360px]:text-[32px] xs:text-[36px] font-bold text-white tracking-normal leading-[1.14] text-center drop-shadow-md">
            {config.titlePrefix ? (
              <>
                <span className="block">{config.titlePrefix}</span>
                <span className="text-[#E31E2B] block">{config.titleHighlight}</span>
              </>
            ) : hasAmpersand ? (
              <>
                <span className="block">{titleParts[0].trim()}</span>
                <span className="text-[#E31E2B] block">&amp; {titleParts[1].trim()}</span>
              </>
            ) : (
              <span>{service.title}</span>
            )}
          </h1>

          {/* Service Description */}
          <p className="mt-3 font-body text-[13px] min-[360px]:text-[13.5px] xs:text-[14px] text-white/90 leading-[1.55] font-normal text-center max-w-[380px] drop-shadow-sm">
            {service.shortDescription}
          </p>

          {/* Subtle Red Accent Line */}
          <div className="w-12 h-0.5 bg-[#E31E2B] mx-auto mt-3.5 rounded-full" />
        </div>

        {/* MIDDLE SECTION: Open Viewing Window for Vehicle */}
        <div className="flex-1 min-h-[160px] xs:min-h-[200px] pointer-events-none" />

        {/* BOTTOM SECTION: Primary & Secondary CTAs */}
        <div className="relative z-20 w-full px-4 xs:px-5 sm:px-6 pb-7 pt-3 space-y-2.5">
          <Link
            to={`${ROUTES.REQUEST_QUOTE}?service=${service.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E31E2B] hover:bg-[#B51220] text-white font-bold text-sm min-[360px]:text-[15px] shadow-xl shadow-black/30 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Request a Quote for This Service</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <a
            href={`tel:${COMPANY_CONTACT.phone}`}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 text-white font-semibold text-sm min-[360px]:text-[15px] border border-white/80 shadow-lg shadow-black/20 transition-all duration-200 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-[#E31E2B] mr-1" />
            <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* Trust Credentials Information Panel on Mobile (Positioned cleanly below Cinematic Hero) */}
      <div className="lg:hidden px-4 xs:px-5 sm:px-6 relative -mt-3 z-30 pb-4">
        <div className="bg-white rounded-2xl shadow-xl shadow-black/8 border border-[#E8EAF0] p-3.5 min-[360px]:p-4 sm:p-5">
          <div className="grid grid-cols-3 divide-x divide-[#E8EAF0] text-center">
            
            {/* Item 1: Abu Dhabi DoT & ADEK Approved */}
            <div className="px-1.5 xs:px-2 flex flex-col items-center justify-start">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-sans text-[10px] min-[360px]:text-[11px] font-bold text-[#171B23] leading-tight">
                Abu Dhabi<br />DoT &amp; ADEK<br />Approved
              </span>
            </div>

            {/* Item 2: Triple ISO */}
            <div className="px-1.5 xs:px-2 flex flex-col items-center justify-start">
              <div className="w-8 h-8 rounded-full bg-[#FEECEE] text-[#E31E2B] flex items-center justify-center mb-1.5 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-sans text-[10px] min-[360px]:text-[11px] font-bold text-[#171B23] leading-tight">
                Triple ISO<br />9001 / 14001 /<br />45001
              </span>
            </div>

            {/* Item 3: Live GPS Telematics */}
            <div className="px-1.5 xs:px-2 flex flex-col items-center justify-start">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-1.5 flex-shrink-0">
                <Navigation className="w-4 h-4 transform rotate-45" />
              </div>
              <span className="font-sans text-[10px] min-[360px]:text-[11px] font-bold text-[#171B23] leading-tight">
                Live GPS<br />Telematics<br />Monitored
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          1B. DESKTOP HERO SECTION: Global Premium Red & White Corporate Hero Architecture (Preserved 100%)
         ========================================================================= */}
      <section className="hidden lg:flex relative bg-[#0A0F19] text-white min-h-[680px] sm:min-h-[700px] lg:min-h-[720px] xl:min-h-[740px] items-center overflow-hidden select-none">
        
        {/* Background Image Layer with Service-Specific Focal Positioning */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={imgUrl}
            alt={service.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 ease-out",
              config.mobileObjectPos,
              config.desktopObjectPos
            )}
          />
          
          {/* Layered Gradient Readability System (Desktop: Left-to-Right) */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${config.gradientLeftOpacity} 0%, rgba(10, 15, 25, 0.88) 35%, ${config.gradientMidOpacity} 56%, rgba(10, 15, 25, 0.16) 78%, ${config.gradientRightOpacity} 100%)`
            }}
          />

          {/* Layered Gradient Readability System (Mobile/Tablet: Top-to-Bottom) */}
          <div
            className="lg:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(10, 15, 25, 0.92) 0%, rgba(10, 15, 25, 0.86) 42%, rgba(10, 15, 25, 0.58) 75%, rgba(10, 15, 25, 0.30) 100%)'
            }}
          />

          {/* Seamless Top & Bottom Edge Vignettes */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0F19]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0F19] to-transparent pointer-events-none" />

          {/* Subtle Brand Red Glow Accent on Top-Left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E31E2B]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container (Constrained strictly to 45-48% width on desktop) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-36 lg:pb-24">
          <div className="w-full lg:max-w-[580px] xl:max-w-[640px] space-y-6">
            
            {/* 1. Breadcrumb Navigation */}
            <div className="mb-2">
              <Breadcrumbs
                items={[
                  { label: 'Our Services', href: ROUTES.SERVICES },
                  { label: service.title }
                ]}
                className="text-white/80 text-[13px] sm:text-sm font-medium"
              />
            </div>

            {/* 2. Service Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E31E2B] animate-pulse" />
              <span>{config.categoryBadge}</span>
            </div>

            {/* 3. Main Service Heading (48-60px desktop) with Red Brand Accent */}
            <h1 className="font-sans text-2xl xs:text-3xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-sm">
              {config.titlePrefix ? (
                <>
                  <span>{config.titlePrefix} </span>
                  <span className="text-[#E31E2B]">{config.titleHighlight}</span>
                </>
              ) : hasAmpersand ? (
                <>
                  <span>{titleParts[0].trim()}</span>
                  <span className="text-[#E31E2B] font-serif italic mx-2.5">&amp;</span>
                  <span>{titleParts[1].trim()}</span>
                </>
              ) : (
                <span>{service.title}</span>
              )}
            </h1>

            {/* 4. Service Description (17-19px desktop) */}
            <p className="font-body text-base sm:text-[17px] lg:text-[18px] text-white/90 leading-[1.65] font-normal max-w-xl">
              {service.shortDescription}
            </p>

            {/* 5. CTA Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to={`${ROUTES.REQUEST_QUOTE}?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#E31E2B] hover:bg-[#B51220] text-white font-bold text-sm sm:text-[15px] shadow-lg shadow-[#E31E2B]/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Quote for This Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 text-white font-semibold text-sm sm:text-[15px] border border-white/25 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#E31E2B]" />
                <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* 6. Service Certification and Feature Indicators */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs sm:text-[13px] text-neutral-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Abu Dhabi DoT &amp; ADEK Approved
              </span>
              <span className="text-neutral-500 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#E31E2B]" />
                Triple ISO 9001 / 14001 / 45001
              </span>
              <span className="text-neutral-500 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-400" />
                Live GPS Telematics Monitored
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CONTENT & SIDEBAR: 2-Column Responsive Layout
         ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ------------------------------------------------------------------
                LEFT COLUMN: Main Service Content (8 Cols)
               ------------------------------------------------------------------ */}
            <div className="lg:col-span-8 space-y-16 sm:space-y-20">
              
              {/* 1. Visually Prominent Service Fleet Image Spotlight */}
              <div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E7E9ED] bg-white group aspect-[16/9] sm:aspect-[16/10]">
                  <img
                    src={imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* 2. Overview & Institutional Capabilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31E2B]">
                  <span>— TAILORED MOBILITY SOLUTIONS —</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                  Overview &amp; Capabilities
                </h2>
                <div className="w-12 h-1 bg-[#E31E2B] rounded-full" />
                <p className="pt-2 text-base sm:text-lg text-[#4B5563] leading-[1.8] font-normal">
                  {service.longDescription}
                </p>

                {/* Suitable For & Institutional Target Groups */}
                {service.suitableFor && service.suitableFor.length > 0 && (
                  <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-[#E7E9ED] shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-3.5 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#E31E2B]" />
                      <span>Suitable For &amp; Key Institutional Segments</span>
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {service.suitableFor.map((item, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAFAFB] border border-[#E7E9ED] text-xs font-semibold text-[#111827] hover:border-[#E31E2B]/40 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E31E2B]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Key Benefits (Desktop: Image 2 Split Layout with Vehicle / Mobile: Image 3 Clean Card) */}
              <div className="bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border border-[#ECEFF3] shadow-lg shadow-black/[0.03] relative overflow-hidden">
                
                {/* Top-Left Red Corner Hook (Matching Image 2 & Image 3) */}
                <div className="absolute top-0 left-0 w-20 sm:w-28 h-16 sm:h-20 pointer-events-none z-20 overflow-hidden rounded-tl-[28px] sm:rounded-tl-[32px]">
                  <div className="w-full h-full border-t-[4px] border-l-[4px] border-[#E31E2B] rounded-tl-[28px] sm:rounded-tl-[32px]" />
                </div>

                {/* Bottom-Right Red Corner Hook (Matching Image 2 & Image 3) */}
                <div className="absolute bottom-0 right-0 w-20 sm:w-28 h-16 sm:h-20 pointer-events-none z-20 overflow-hidden rounded-br-[28px] sm:rounded-br-[32px]">
                  <div className="w-full h-full border-b-[4px] border-r-[4px] border-[#E31E2B] rounded-br-[28px] sm:rounded-br-[32px]" />
                </div>

                {/* Subtle Ambient Red Glows in background */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#E31E2B]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#E31E2B]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Card Interior Layout: Flex row on desktop (Image 2), Single column on mobile (Image 3) */}
                <div className="flex flex-col md:flex-row items-stretch gap-6 lg:gap-8 relative z-10">
                  
                  {/* Left Vehicle Image (Desktop Only, matching Image 2) */}
                  <div className="hidden md:block w-60 lg:w-64 xl:w-72 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-sm border border-[#ECEFF3]">
                    <img
                      src={SERVICE_MOBILE_HERO_IMAGES[service.id] || imgUrl}
                      alt={`${service.title} Key Benefits`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Content Column (Desktop: Image 2 / Mobile: Full Width Image 3) */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    
                    {/* Header: Icon, Divider, Title & Subtitle */}
                    <div>
                      <div className="flex items-center gap-3.5 mb-2">
                        {/* Red Medal / Award Badge */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FEECEE] flex items-center justify-center text-[#E31E2B] flex-shrink-0 shadow-xs">
                          <Award className="w-6 h-6 stroke-[2.2]" />
                        </div>

                        {/* Vertical Red Divider Line */}
                        <div className="w-[2.5px] h-8 sm:h-9 bg-[#E31E2B] rounded-full flex-shrink-0" />

                        {/* Heading with 'Transport' Highlighted */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight leading-tight">
                            Key Benefits of Choosing{' '}
                            <span className="block sm:inline">
                              Flash <span className="text-[#E31E2B]">Transport</span>
                            </span>
                          </h3>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-[13px] text-[#686D75] ml-0 sm:ml-1 mt-1 font-normal leading-relaxed">
                        Engineered for zero downtime, punctual runs, and complete passenger peace of mind
                      </p>
                    </div>

                    {/* Benefits Grid: 2 Columns on Desktop (Image 2), 1 Column on Mobile (Image 3) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 mt-5 sm:mt-6">
                      {service.benefits.map((b, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F8F9FB] border border-[#ECEFF3] shadow-xs hover:border-[#E31E2B]/40 hover:bg-white transition-all group",
                            idx === service.benefits.length - 1 && service.benefits.length % 2 !== 0 && "md:col-span-2"
                          )}
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FEECEE] text-[#E31E2B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-medium text-[#1F2937] leading-[1.45]">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>

              {/* 4. Service Features: 4 Consistent Modern Feature Blocks */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31E2B]">
                    <span>— OPERATIONAL HIGHLIGHTS —</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-1">
                    Service Features &amp; Fleet Standards
                  </h3>
                  <div className="w-12 h-1 bg-[#E31E2B] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E9ED] shadow-sm hover:border-[#E31E2B] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#E31E2B] bg-[#FFF0F1] px-3 py-1 rounded-full inline-block">
                            Feature 0{idx + 1}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#E31E2B] transition-colors leading-snug">
                          {feat.title}
                        </h4>
                        <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Booking & Mobilization Process (Connected Timeline) */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31E2B]">
                    <span>— SEAMLESS ONBOARDING —</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-1">
                    How Our Booking &amp; Mobilization Process Works
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686D75] mt-1 max-w-2xl">
                    A structured four-step methodology delivering turnkey transport readiness with zero operational friction.
                  </p>
                  <div className="w-12 h-1 bg-[#E31E2B] rounded-full mt-2" />
                </div>

                {/* Timeline Grid (Horizontal on Desktop, Vertical on Mobile) */}
                <div className="relative pt-6">
                  {/* Desktop Horizontal Line */}
                  <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-0.5 bg-gradient-to-r from-[#E31E2B] via-[#E31E2B]/60 to-[#E7E9ED] z-0" />
                  
                  {/* Mobile Vertical Line */}
                  <div className="lg:hidden absolute top-8 bottom-8 left-6 w-0.5 bg-[#E7E9ED] z-0" />

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
                    {service.howItWorks.map((st) => (
                      <div
                        key={st.step}
                        className="flex lg:flex-col items-start gap-5 lg:gap-0 group"
                      >
                        {/* Step Number Badge */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#E31E2B] text-[#E31E2B] font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md flex-shrink-0 lg:mb-5 group-hover:bg-[#E31E2B] group-hover:text-white transition-all duration-300">
                          0{st.step}
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-[#E7E9ED] shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E31E2B] block mb-1">
                              Stage 0{st.step}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-[#111827] leading-snug">
                              {st.title}
                            </h4>
                            <p className="mt-2 text-xs sm:text-[13px] text-[#686D75] leading-relaxed">
                              {st.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Safety & Regulatory Standards (Premium Dark Section) */}
              <div className="bg-[#0F1115] text-white rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
                {/* Decorative Red Blur Glow */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E31E2B]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E31E2B]/20 border border-[#E31E2B]/40 flex items-center justify-center text-[#E31E2B] flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E31E2B] block">
                      ZERO-COMPROMISE STANDARDS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Safety &amp; Regulatory Compliance
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                  Our fleet operates strictly under Abu Dhabi Department of Transport (DoT), ADEK regulations, and EIAC international standards to guarantee comprehensive safety for every passenger.
                </p>

                {/* Safety Points Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.safetyPoints.map((sp, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E31E2B] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                        {sp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accreditation Strip */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>DoT &amp; ADEK Certified Fleet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-[#E31E2B]" />
                    <span>Speed Governors &amp; Active Safety Hardware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>24/7 Operations Room Telematics</span>
                  </div>
                </div>
              </div>

              {/* 7. Frequently Asked Questions (Modern Accordion Interface) */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31E2B]">
                      <span>— CLEAR ANSWERS —</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-1 flex items-center gap-2.5">
                      <HelpCircle className="w-7 h-7 text-[#E31E2B]" />
                      <span>Frequently Asked Questions</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686D75] mt-1">
                      Everything you need to know about our fleet, operations, permits, and booking contracts.
                    </p>
                    <div className="w-12 h-1 bg-[#E31E2B] rounded-full mt-2" />
                  </div>

                  <div className="space-y-3.5 pt-2">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className={cn(
                            'border rounded-2xl overflow-hidden transition-all duration-200',
                            isOpen
                              ? 'border-[#E31E2B] bg-white shadow-md ring-1 ring-[#E31E2B]/20'
                              : 'border-[#E7E9ED] bg-white hover:border-[#E31E2B]/40 shadow-sm'
                          )}
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors"
                          >
                            <span className={cn(isOpen ? 'text-[#E31E2B]' : 'text-[#111827]')}>
                              {faq.question}
                            </span>
                            <div
                              className={cn(
                                'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300',
                                isOpen
                                  ? 'bg-[#FFF0F1] text-[#E31E2B] rotate-180'
                                  : 'bg-[#FAFAFB] text-[#686D75]'
                              )}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-[1.75] border-t border-[#E7E9ED]/60 bg-[#FAFAFB]/60">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* ------------------------------------------------------------------
                RIGHT COLUMN: Sticky Enquiry & Related Services Sidebar (4 Cols)
               ------------------------------------------------------------------ */}
            <div className="lg:col-span-4 sticky top-28 self-start space-y-6">
              
              {/* Card 1: Premium Enquiry Widget */}
              <div className="bg-[#0F1115] text-white rounded-3xl p-7 border border-white/15 shadow-2xl relative overflow-hidden">
                {/* Decorative Red Corner Glow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#E31E2B]/20 rounded-full blur-2xl pointer-events-none" />

                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E31E2B] bg-white/10 px-3 py-1 rounded-full inline-block mb-3 border border-white/10">
                  RAPID COMMERCIAL QUOTATION
                </span>
                
                <h3 className="text-xl font-bold text-white leading-tight">
                  Need {service.title}?
                </h3>
                
                <p className="mt-2 text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
                  Send your requirements directly to our Abu Dhabi logistics coordinators for instant institutional rates.
                </p>

                {/* Action Buttons */}
                <div className="pt-5 space-y-3">
                  <Link
                    to={`${ROUTES.REQUEST_QUOTE}?service=${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E31E2B] hover:bg-[#B51220] text-white font-semibold text-sm shadow-lg shadow-[#E31E2B]/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Request a Quote Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_CONTACT.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4 text-[#E31E2B]" />
                    <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Flash Transport, I would like to inquire about ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 font-semibold text-xs border border-[#25D366]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Instant WhatsApp Consultation</span>
                  </a>
                </div>

                {/* Available Vehicles for this Service */}
                {service.vehicleOptions && service.vehicleOptions.length > 0 && (
                  <div className="pt-6 mt-6 border-t border-white/15">
                    <div className="text-xs font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                      <Bus className="w-4 h-4 text-[#E31E2B]" />
                      <span>Dedicated Vehicle Classes:</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {service.vehicleOptions.map((v, i) => (
                        <li key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E31E2B] flex-shrink-0" />
                          <span className="font-medium">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Trust Highlights */}
                <div className="pt-5 mt-5 border-t border-white/15 space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Triple ISO 9001 / 14001 / 45001 Accredited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                    <span>Company-Owned Verified Fleet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Standby Fleet for Zero Downtime</span>
                  </div>
                </div>
              </div>

              {/* Card 2: All Transport Services Navigation */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E9ED] shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E9ED]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                    All Mobility Solutions
                  </h4>
                  <span className="text-[11px] font-semibold text-[#E31E2B]">{SERVICES.length} Services</span>
                </div>
                <ul className="space-y-2">
                  {SERVICES.map((s) => {
                    const isCurrent = s.id === service.id;
                    return (
                      <li key={s.id}>
                        <Link
                          to={`/${s.slug}/`}
                          className={cn(
                            'flex items-center justify-between p-3 rounded-xl transition-all text-xs font-semibold',
                            isCurrent
                              ? 'bg-[#E31E2B] text-white shadow-md shadow-[#E31E2B]/25'
                              : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#FAFAFB]'
                          )}
                        >
                          <span className="truncate">{s.title}</span>
                          <ChevronRight className={cn('w-3.5 h-3.5 flex-shrink-0', isCurrent ? 'text-white' : 'text-[#686D75]')} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. RELATED SERVICES STRIP: Premium Horizontal Service Cards
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F6F7F9] border-t border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E31E2B]">
                <span>— FLEET FRAMEWORKS —</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mt-1">
                Explore Complementary Fleet Solutions
              </h3>
            </div>
            <Link
              to={ROUTES.SERVICES}
              className="text-xs font-bold uppercase tracking-wider text-[#E31E2B] hover:text-[#B51220] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relatedServices.map((rel) => {
              const relImg = getAssetUrl(rel.imageKey);
              return (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E7E9ED] shadow-sm hover:shadow-xl hover:border-[#E31E2B]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Top Image */}
                    <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                      <img
                        src={relImg}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    {/* Card Body */}
                    <div className="p-6">
                      <h4 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#E31E2B] transition-colors leading-snug">
                        <Link to={`/${rel.slug}/`}>
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="mt-2.5 text-xs sm:text-[13px] text-[#686D75] line-clamp-2 leading-relaxed">
                        {rel.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="px-6 pb-6 pt-3 border-t border-[#E7E9ED]/70 flex justify-between items-center text-xs">
                    <Link
                      to={`/${rel.slug}/`}
                      className="font-bold text-[#111827] hover:text-[#E31E2B] flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={`${ROUTES.REQUEST_QUOTE}?service=${rel.slug}`}
                      className="font-semibold text-white bg-[#E31E2B] hover:bg-[#B51220] px-4 py-2 rounded-xl transition-all shadow-sm shadow-[#E31E2B]/30 active:scale-95"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
export default ServiceDetail;
