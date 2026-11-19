import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SERVICES } from '../data/services';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { ShieldCheck, ArrowRight, Phone, CheckCircle2, Award, Bus, Clock, Gem } from 'lucide-react';
import { Button } from '../components/common/Button';
import { ROUTES } from '../config/routes';
import { COMPANY_CONTACT } from '../data/company';
import { SEO } from '../components/common/SEO';

export const Services: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Our Services | Commercial Bus Rental & Transport Abu Dhabi | Flash Transport';
    if (pathname === '/services') {
      navigate('/services/', { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <div className="bg-[#FAFAFB] text-[#111827]">
      <SEO
        title="Our Services | Commercial Bus Rental & Transport Abu Dhabi"
        description="Comprehensive commercial transport solutions in Abu Dhabi & UAE: School bus rentals, corporate staff transport, executive chauffeured cars, intercity tours, and daily bus services."
        canonical="https://www.flashtp.com/services/"
      />
      {/* 1. Mobile Services Hero Header (sm:hidden): Exact Match to Reference Visual */}
      <section className="sm:hidden relative bg-[#090B10] text-white pt-24 pb-72 overflow-hidden select-none min-h-[660px]">
        {/* Background Mobile Vehicle Image with Cadillac Escalade & Dusk Skyline */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services-hero-mobile-cadillac.webp"
            alt="Flash Transport Luxury Mobility Solutions"
            className="w-full h-full object-cover object-[center_bottom]"
          />
          {/* Top-down dark vignette to keep text 100% crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090B10]/95 via-[#090B10]/75 via-48% to-transparent pointer-events-none" />
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#E51E32]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="px-5 relative z-10 space-y-3.5">
          {/* Eyebrow: — OUR SERVICES */}
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E51E32] rounded-full inline-block" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/90">
              OUR SERVICES
            </span>
          </div>

          {/* Main Heading: Premium Transport Solutions */}
          <h1 className="text-[30px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
            Premium Transport<br />
            <span className="text-[#E51E32] italic font-semibold">Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-[13px] text-neutral-200/95 leading-relaxed font-normal max-w-xs pt-0.5">
            Reliable, comfortable and professional transportation services across Abu Dhabi and the UAE.
          </p>

          {/* Feature Highlights: Minimal Inline Elements with Red Outline Icons & Subtle Separators */}
          <div className="pt-1.5 pb-1 flex items-center justify-start gap-1.5 min-[360px]:gap-2 text-[10.5px] min-[360px]:text-[11.5px] text-white/95 font-medium select-none">
            <span className="inline-flex items-center gap-1.5 flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
              <span>Safety First</span>
            </span>
            <span className="text-white/30 font-light select-none px-0.5">|</span>
            <span className="inline-flex items-center gap-1.5 flex-shrink-0">
              <Gem className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
              <span>Premium Comfort</span>
            </span>
            <span className="text-white/30 font-light select-none px-0.5">|</span>
            <span className="inline-flex items-center gap-1.5 flex-shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
              <span>On-Time Always</span>
            </span>
          </div>

          {/* Dual Action Buttons matching Reference */}
          <div className="pt-2 flex flex-col min-[360px]:flex-row items-stretch min-[360px]:items-center gap-2.5">
            <Link
              to={ROUTES.FLEET}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E51E32] hover:bg-[#C91829] text-white font-sans font-bold text-xs sm:text-[13px] transition-all duration-200 shadow-md shadow-[#E51E32]/30 active:scale-95 group"
            >
              <span>Explore Our Fleet</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-sans font-semibold text-xs sm:text-[13px] border border-white/20 transition-all duration-200 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-white/90" />
              <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Desktop Services Hero Header (hidden sm:block): 100% Preserved Existing Design */}
      <section className="hidden sm:block relative bg-[#0F1115] text-white sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden select-none">
        {/* Background Image Layer with Sophisticated Contrast Vignettes */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dubai-hero-luxury-coach.webp"
            alt="Flash Transport Commercial Fleet UAE"
            className="w-full h-full object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/98 via-[#0F1115]/90 via-45% to-[#0F1115]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-[#0F1115]/75" />
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D92332]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs
              items={[{ label: 'Our Services' }]}
              className="text-white/70"
            />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D92332] animate-pulse" />
              <span>Full-Spectrum Commercial Transport • Abu Dhabi &amp; Dubai</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
              Comprehensive Bus Rental &amp;{' '}
              <span className="text-[#D92332]">Passenger Mobility</span> Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
              From contract corporate employee transit to private executive charters and certified school buses, Flash Transport delivers safety, comfort, and unmatched punctuality across Abu Dhabi, Dubai, and all Emirates.
            </p>

            {/* CTA Buttons Row with Reduced Border Radius (rounded-xl) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={ROUTES.REQUEST_QUOTE}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#D92332] hover:bg-[#B91F2D] text-white font-semibold text-sm sm:text-[15px] shadow-lg shadow-[#D92332]/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Fleet Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-[15px] border border-white/25 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#D92332]" />
                <span>Call Operations: {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Hero Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Abu Dhabi DoT &amp; ADEK Approved
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D92332]" />
                Triple ISO 9001 / 14001 / 45001
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-amber-400" />
                Standby Fleet for Zero Downtime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Service Offerings"
            title="Explore Our Core Transport"
            highlightedText="Categories"
            description="Every service is backed by our certified quality standards, 24/7 dedicated dispatch operations, and clean modern company-owned vehicles."
          />

          <ServiceGrid services={SERVICES} />
        </div>
      </section>

      {/* Corporate Transportation Benefits Strip */}
      <section className="py-16 sm:py-20 bg-[#F6F7F9] border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191C22] rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D92332]">
                Corporate Logistics Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need a Custom Corporate Transit Framework?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                We design customized multi-route shift transportation systems for construction EPCs, industrial facilities in ICAD & Musaffah, and corporate offices across Abu Dhabi and Dubai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D92332]" />
                  <span>Dedicated on-site logistics manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D92332]" />
                  <span>Immediate standby replacement fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D92332]" />
                  <span>GPS telematics & attendance telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D92332]" />
                  <span>Consolidated monthly corporate billing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                href={ROUTES.REQUEST_QUOTE}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Request Custom Proposal
              </Button>
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#D92332]" />
                <span>Call Fleet Desk: {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

