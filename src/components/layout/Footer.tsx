import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock, MessageCircle, Award } from 'lucide-react';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES_LINKS } from '../../data/navigation';
import { COMPANY_CONTACT } from '../../data/company';
import { ROUTES } from '../../config/routes';
import { QuickBookingAssistant } from '../common/QuickBookingAssistant';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 select-none">
      {/* =========================================================================
          G. TRANSPORTATION BOOKING SECTION (Light Corporate Canvas + White Card)
         ========================================================================= */}
      <section className="bg-[#F6F7F9] border-t border-[#E8EAF0] relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Subtle decorative background waves */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E31E2B]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#E31E2B]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Value proposition, direct contact & dispatch badges */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEECEE] border border-[#F5C6CA] mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#E31E2B] animate-pulse" />
                  <span className="font-sans text-[11px] uppercase font-bold tracking-widest text-[#E31E2B]">
                    Corporate &amp; Private Mobility
                  </span>
                </div>

                <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171B23] tracking-tight leading-[1.25]">
                  Need a Reliable Transportation Partner in{' '}
                  <span className="text-[#E31E2B]">Abu Dhabi</span> or{' '}
                  <span className="text-[#E31E2B]">Dubai</span>?
                </h2>
              </div>

              <p className="font-body text-sm sm:text-[15px] text-[#687080] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Plan your group travel in seconds using our quick booking assistant, or connect directly with our commercial operations desk for instant quotes and dedicated fleet frameworks.
              </p>

              {/* Direct Contact Points */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 w-full sm:w-auto">
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAFAFB] text-[#171B23] font-sans font-semibold text-sm transition-all border border-[#E8EAF0] hover:border-[#E31E2B]/40 active:scale-[0.98] shadow-sm w-full sm:w-auto text-center"
                >
                  <Phone className="w-4 h-4 text-[#E31E2B]" />
                  <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans font-semibold text-sm transition-all active:scale-[0.98] shadow-sm shadow-emerald-600/20 w-full sm:w-auto text-center"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-5 text-xs text-[#687080] font-sans font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                  ISO 9001, 14001 &amp; 45001 Certified Fleet
                </span>
              </div>
            </div>

            {/* Right Column: Clean White Quick Booking Assistant Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <QuickBookingAssistant variant="light" className="w-full max-w-[440px]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          H. MAIN FOOTER DIRECTORY GRID (Deep Dark-Red Corporate Theme)
         ========================================================================= */}
      <div className="bg-gradient-to-br from-[#680A14] via-[#4F0710] to-[#360309] text-white/85 relative overflow-hidden">
        {/* Subtle ambient corner glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E2B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
            {/* Col 1: Brand Identity & Accreditation Standards */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              <Link to={ROUTES.HOME} className="inline-block group">
                <img
                  src="/images/flash-transport-logo-white.webp?v=3"
                  alt="Flash Transport Passengers By Bus LLC"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>

              <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm font-normal">
                Flash Transport Passengers By Bus LLC is an established leader in commercial passenger transportation across the United Arab Emirates. With over 20 years of proven operational excellence, we deliver punctual, safe, and modern mobility frameworks for institutions and corporate enterprises.
              </p>

              {/* Certifications preview */}
              <div className="pt-2 font-sans space-y-2.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/90 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FF6B75] flex-shrink-0" />
                  <span>Accredited &amp; Certified Standards</span>
                </div>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                  <span className="px-2.5 py-1.5 rounded-lg bg-white/10 text-[11px] font-medium text-white/90 border border-white/15 text-center sm:text-left">
                    ISO 9001:2015
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-white/10 text-[11px] font-medium text-white/90 border border-white/15 text-center sm:text-left">
                    ISO 14001:2015
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-white/10 text-[11px] font-medium text-white/90 border border-white/15 text-center sm:text-left">
                    ISO 45001:2018
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-white/10 text-[11px] font-medium text-white/90 border border-white/15 text-center sm:text-left">
                    EIAC Accredited
                  </span>
                  <span className="col-span-2 sm:col-span-1 px-2.5 py-1.5 rounded-lg bg-white/10 text-[11px] font-medium text-white/90 border border-white/15 text-center sm:text-left">
                    DoT Approved
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2 & Col 3: Company Navigation & Transport Services Links (Side-by-side on Mobile) */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-5">
              {/* Company Links */}
              <div className="space-y-3.5 sm:space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white border-b border-white/15 pb-2.5 sm:pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B75]" />
                  <span>Company</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-[13px] font-sans font-medium">
                  {FOOTER_QUICK_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group py-1"
                      >
                        <ArrowRight className="w-3 h-3 text-[#FF6B75] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0 hidden sm:inline-block" />
                        <span className="transition-transform group-hover:translate-x-0.5">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transport Services Links */}
              <div className="space-y-3.5 sm:space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white border-b border-white/15 pb-2.5 sm:pb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B75]" />
                  <span>Services</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-[13px] font-sans font-medium">
                  {FOOTER_SERVICES_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group py-1"
                      >
                        <ArrowRight className="w-3 h-3 text-[#FF6B75] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0 hidden sm:inline-block" />
                        <span className="transition-transform group-hover:translate-x-0.5">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 4: Abu Dhabi Operations Desk (Styled Corporate Micro-Card on Mobile/Desktop) */}
            <div className="lg:col-span-3 w-full">
              <div className="bg-black/20 sm:bg-white/[0.04] border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Abu Dhabi Operations</span>
                  </h4>
                </div>

                <div className="space-y-3.5 text-xs sm:text-[13px] text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FF6B75] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {COMPANY_CONTACT.address.full}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#FF6B75] flex-shrink-0" />
                    <a
                      href={`tel:${COMPANY_CONTACT.phone}`}
                      className="hover:text-white transition-colors text-white font-semibold"
                    >
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#FF6B75] flex-shrink-0" />
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="hover:text-white transition-colors truncate"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                    <Clock className="w-4 h-4 text-[#FF6B75] flex-shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="text-white/75">{COMPANY_CONTACT.workingHours.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="border-t border-white/10 py-6 pb-24 sm:pb-6 bg-[#240206]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/65 text-center md:text-left">
            <div className="leading-relaxed">
              &copy; {currentYear} Flash Transport Passengers By Bus LLC. All Rights Reserved.
              <span className="block sm:inline text-white/50 sm:text-inherit mt-1 sm:mt-0">
                {' '}<span className="hidden sm:inline">•</span> Commercial Lic: Abu Dhabi DoT &amp; DED.
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <Link
                to={ROUTES.ABOUT}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/75 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to={ROUTES.SERVICES}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/75 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to={ROUTES.FLEET}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/75 hover:text-white transition-colors"
              >
                Fleet Catalogue
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/75 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
