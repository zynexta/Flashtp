import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Eye,
  HeartHandshake,
  ArrowRight,
  Clock,
  Bus,
  Award
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  COMPANY_STATS,
  COMPANY_CERTIFICATIONS,
  COMPANY_VALUES
} from '../data/company';
import { ROUTES } from '../config/routes';

const VALUE_ICONS = [ShieldCheck, Clock, HeartHandshake, Bus];

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Best Bus Rental Company in Abu Dhabi | Flash Transport';
  }, []);

  return (
    <div className="bg-white text-[#171B23] overflow-x-hidden">
      {/* =========================================================================
          B. HERO SECTION (Full-Width Cinematic Panoramic Composition — Target Ref 2)
         ========================================================================= */}
      <section className="relative w-full min-h-[640px] xs:min-h-[680px] sm:min-h-[700px] lg:min-h-[750px] xl:min-h-[780px] flex items-start md:items-center pt-24 min-[360px]:pt-[100px] sm:pt-32 lg:pt-24 pb-64 xs:pb-72 sm:pb-24 lg:pb-20 bg-white border-b border-[#E8EAF0] overflow-hidden select-none">
        
        {/* 1. Background Image: Dedicated Mobile Portrait vs Desktop Panoramic Banner */}
        {/* Mobile View: Dedicated Vertical Portrait Image (Not Cropped Desktop) */}
        <img
          src="/images/about-hero-mobile.webp"
          alt="Flash Transport Luxury Coach Bus in Abu Dhabi"
          className="w-full h-full object-cover object-[center_top] md:hidden absolute inset-0 z-0"
        />

        {/* Desktop View: Full-Width Panoramic Background Image */}
        <div
          aria-hidden="true"
          style={{ backgroundImage: "url('/images/about-hero-banner.webp?v=7')" }}
          className="hidden md:block absolute inset-0 z-0 bg-no-repeat bg-cover bg-[position:right_center]"
        />

        {/* 2. Seamless Smooth White Readability Gradients */}
        {/* Mobile: Gentle natural sky fade for text readability (leaves vehicle below 100% bright and clear) */}
        <div
          aria-hidden="true"
          className="md:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/30 via-white/5 to-transparent"
        />
        {/* Tablet & Desktop: Horizontal Gradient matching exact target specs (solid white on left -> soft fade -> fully revealing bus on right) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.98)_22%,rgba(255,255,255,0.92)_36%,rgba(255,255,255,0.65)_50%,rgba(255,255,255,0.22)_65%,transparent_78%)]"
        />

        {/* 3. Layered Brand Red Sweeping Curves */}
        {/* Desktop & Tablet: Layered Brand Red Sweeping Curves (Mobile curve is integrated directly in the dedicated mobile image) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute right-0 bottom-0 top-0 w-full md:w-[60%] lg:w-[48%] xl:w-[42%] pointer-events-none select-none z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 700 780"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Outer Translucent Pale-Red Accent Wave */}
            <path
              d="M700 120V780H80C260 760 460 710 570 580C650 480 680 280 700 120Z"
              fill="url(#hero-curve-pale-ref2)"
            />
            {/* Mid Coral-Red Layered Sweep */}
            <path
              d="M700 220V780H180C340 760 510 710 600 590C670 500 690 340 700 220Z"
              fill="url(#hero-curve-mid-ref2)"
              opacity="0.65"
            />
            {/* Inner Primary & Deep Red Brand Edge Curve */}
            <path
              d="M700 320V780H280C420 760 550 715 630 615C685 530 695 410 700 320Z"
              fill="url(#hero-curve-primary-ref2)"
            />
            <defs>
              <linearGradient
                id="hero-curve-pale-ref2"
                x1="200"
                y1="780"
                x2="700"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E31E2B" stopOpacity="0" />
                <stop offset="0.4" stopColor="#F8A5AC" stopOpacity="0.3" />
                <stop offset="1" stopColor="#E31E2B" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient
                id="hero-curve-mid-ref2"
                x1="280"
                y1="780"
                x2="700"
                y2="220"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E31E2B" stopOpacity="0" />
                <stop offset="0.45" stopColor="#E31E2B" stopOpacity="0.5" />
                <stop offset="1" stopColor="#B51220" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient
                id="hero-curve-primary-ref2"
                x1="360"
                y1="780"
                x2="700"
                y2="320"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E31E2B" stopOpacity="0" />
                <stop offset="0.35" stopColor="#E31E2B" stopOpacity="0.88" />
                <stop offset="1" stopColor="#B51220" stopOpacity="0.96" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4. Centered Content Container with Left-Aligned Copy */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="w-full md:w-[62%] lg:w-[52%] xl:w-[48%] space-y-2 xs:space-y-2.5 sm:space-y-5 text-left max-w-[640px]">
            {/* 1. Breadcrumb */}
            <Breadcrumbs
              items={[{ label: 'About Us' }]}
              className="text-[#687080] mb-1 sm:mb-3"
            />

            {/* 2. Experience Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#FEECEE]/90 border border-[#F8A5AC]/50 text-[#E51E32] text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase select-none shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E51E32] animate-pulse" />
              <span>20+ Years of Transport Leadership</span>
            </div>

            {/* 3. Main Heading: Premium Editorial Typography matching Hero */}
            <h1 className="text-[28px] min-[360px]:text-[32px] xs:text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[68px] tracking-[-0.02em] leading-[1.14] sm:leading-[1.08] max-w-[640px]">
              <span className="font-serif font-bold text-[#171B23] block">
                Pioneering Passenger
              </span>
              <span className="font-serif font-bold text-[#171B23] block">
                Mobility in{' '}
                <span className="font-serif italic font-bold text-[#E51E32]">
                  Abu Dhabi
                </span>
              </span>
              <span className="font-serif italic font-bold text-[#E51E32] block mt-0.5 sm:mt-1">
                &amp; Across the UAE
              </span>
            </h1>

            {/* 4. Company Description */}
            <p className="font-body text-[13px] min-[360px]:text-[13.5px] sm:text-[16px] lg:text-[17px] text-[#4A5160] leading-[1.6] sm:leading-[1.65] max-w-[340px] xs:max-w-[380px] sm:max-w-[560px] font-normal pt-1 sm:pt-2">
              Flash Transport Passengers By Bus LLC specializes in customized passenger transport solutions for corporate enterprises, educational institutions, government bodies, and private charters.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          C. OUR STORY & HERITAGE + EIAC/ISO CERTIFICATION CARD
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8EAF0] relative overflow-hidden">
        {/* Subtle Soft Grey Decorative Corner Wave */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F6F7F9] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FEECEE]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Story Copy & Statistics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31E2B]" />
                <span className="font-sans text-xs uppercase font-bold tracking-[0.18em] text-[#E31E2B]">
                  Our Story &amp; Heritage
                </span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#171B23] tracking-tight leading-[1.2]">
                Built on Trust, Safety, and Relentless Punctuality
              </h2>

              <div className="space-y-4 font-body text-sm sm:text-[15px] lg:text-base text-[#687080] leading-[1.75]">
                <p>
                  Flash Transport Passengers By Bus LLC, established in Abu Dhabi, has grown into one of the most reliable and distinguished passenger transportation providers in the UAE. With more than two decades of dedicated field operations, we consistently deliver exceptional value, stringent safety adherence, and rapid turnaround times.
                </p>
                <p>
                  Whether chartering a bus for short urban transfers within Abu Dhabi or executing long-term staff transportation contracts connecting remote industrial facilities in Musaffah, ICAD, and Dubai, our top-tier company-owned fleet is maintained to the highest international benchmarks.
                </p>
                <p>
                  We excel in the competitive transportation market by deeply understanding our clients&apos; unique operational logistics and customizing our service schedules to provide reliable, comfortable, and cost-effective solutions.
                </p>
              </div>

              {/* Company Statistics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7 mt-4 border-t border-[#E8EAF0]">
                {COMPANY_STATS.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-sans text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#E31E2B] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="font-sans text-xs font-bold text-[#171B23] leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Accreditation & ISO Certification Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F6F7F9]/90 rounded-2xl p-6 sm:p-8 border border-[#E8EAF0] shadow-[0_10px_34px_rgba(23,27,35,0.05)] space-y-5">
                {/* Header with EIAC Logo */}
                <div className="flex items-center gap-4 border-b border-[#E8EAF0] pb-5">
                  <div className="bg-white rounded-xl p-2 border border-[#E8EAF0] shadow-xs flex-shrink-0">
                    <img
                      src="/images/ohms.webp"
                      alt="EIAC Certification"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-[#171B23]">
                      EIAC Accredited Certification
                    </h3>
                    <p className="font-sans text-xs text-[#687080] mt-0.5 font-medium">
                      Certificate: CB-QMS/EMS/OHSMS-084
                    </p>
                  </div>
                </div>

                {/* Certification Intro */}
                <p className="font-body text-xs sm:text-[13px] text-[#687080] leading-relaxed">
                  Our company is proudly certified by the Emirates International Accreditation Centre (EIAC) under globally recognized management frameworks:
                </p>

                {/* ISO Standards List */}
                <div className="space-y-3">
                  {COMPANY_CERTIFICATIONS.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#E8EAF0] shadow-[0_2px_8px_rgba(23,27,35,0.02)] hover:border-[#E31E2B]/35 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FEECEE] text-[#E31E2B] flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-sans text-xs sm:text-[13px] font-bold text-[#171B23]">
                          {cert.title}
                        </div>
                        <div className="font-body text-[11px] sm:text-xs text-[#687080]">
                          {idx === 0
                            ? 'Quality Management System'
                            : idx === 1
                              ? 'Environmental Management System'
                              : 'Occupational Health & Safety'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Framed Official EIAC / EQCS Badge Preview */}
                <div className="pt-1">
                  <div className="bg-white rounded-xl border border-[#E8EAF0] p-3 shadow-xs">
                    <img
                      src="/images/cert-eiac-eqcs.webp"
                      alt="ISO Quality Certificate Badge — EIAC & EQCS"
                      className="w-full h-auto object-contain max-h-28 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          D. OUR MISSION & VISION
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F6F7F9] border-b border-[#E8EAF0] relative overflow-hidden">
        {/* Subtle Corner Wave Accents */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-80 h-80 bg-white/70 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#E31E2B]/50 rounded-full" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E31E2B]">
                Strategic Direction
              </span>
              <span className="w-8 h-[1.5px] bg-[#E31E2B]/50 rounded-full" />
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171B23] tracking-tight">
              Our Mission &amp; <span className="text-[#E31E2B]">Vision</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-[#687080] leading-relaxed">
              Guiding our operational standards, driver protocols, and passenger care across every mile we travel.
            </p>
          </div>

          {/* Two Elevated White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8EAF0] shadow-[0_6px_24px_rgba(23,27,35,0.04)] hover:shadow-[0_14px_34px_rgba(227,30,43,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E31E2B] text-white flex items-center justify-center shadow-sm shadow-[#E31E2B]/25">
                  <Target className="w-6 h-6" />
                </div>

                <h3 className="font-sans text-2xl font-extrabold text-[#171B23]">
                  Our Mission
                </h3>

                <p className="font-body text-sm sm:text-[15px] text-[#687080] leading-[1.7]">
                  To provide safe, reliable, and comfortable passenger transport solutions that connect people, communities, and enterprises with total peace of mind. We are committed to upholding the strictest safety guidelines, investing continuously in modern clean-fleet technologies, and empowering our workforce to deliver exceptional customer service every day.
                </p>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-[#E8EAF0] text-xs sm:text-[13px] font-semibold text-[#171B23]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                  <span>Uncompromised passenger ergonomics and protection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                  <span>Zero-delay logistical precision for corporate partners</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8EAF0] shadow-[0_6px_24px_rgba(23,27,35,0.04)] hover:shadow-[0_14px_34px_rgba(227,30,43,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E31E2B] text-white flex items-center justify-center shadow-sm shadow-[#E31E2B]/25">
                  <Eye className="w-6 h-6" />
                </div>

                <h3 className="font-sans text-2xl font-extrabold text-[#171B23]">
                  Our Vision
                </h3>

                <p className="font-body text-sm sm:text-[15px] text-[#687080] leading-[1.7]">
                  To be recognized as the premier and most respected passenger transport company in the United Arab Emirates. We envision setting the gold standard for ground transportation through innovation, operational sustainability, certified safety excellence, and enduring client partnerships.
                </p>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-[#E8EAF0] text-xs sm:text-[13px] font-semibold text-[#171B23]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                  <span>Expanding eco-friendly and low-emission fleet options</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E2B] flex-shrink-0" />
                  <span>Setting the regional benchmark in intelligent transport tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          E. CORE CORPORATE VALUES
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8EAF0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#E31E2B]/50 rounded-full" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#E31E2B]">
                The Principles We Live By
              </span>
              <span className="w-8 h-[1.5px] bg-[#E31E2B]/50 rounded-full" />
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#171B23] tracking-tight">
              Our Core Corporate <span className="text-[#E31E2B]">Values</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-[#687080] leading-relaxed">
              Our values guide every decision, from driver onboarding and preventive mechanics to client contract execution.
            </p>
          </div>

          {/* 2-Column Grid of 4 Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_VALUES.map((val, idx) => {
              const IconComponent = VALUE_ICONS[idx % VALUE_ICONS.length] || Award;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F7F9]/70 hover:bg-white rounded-2xl p-7 sm:p-8 border border-[#E8EAF0] hover:border-[#E31E2B]/30 shadow-[0_2px_12px_rgba(23,27,35,0.03)] hover:shadow-[0_12px_30px_rgba(23,27,35,0.06)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#E31E2B] text-white flex items-center justify-center font-sans font-bold text-sm flex-shrink-0 shadow-xs shadow-[#E31E2B]/25">
                          {idx + 1}
                        </div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold text-[#171B23] leading-snug">
                          {val.title}
                        </h3>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E8EAF0] text-[#E31E2B] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="font-body text-sm text-[#687080] leading-[1.7] pl-0 sm:pl-11">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          F. PARTNERSHIP HORIZONTAL CTA BANNER
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#8D0C18] via-[#B51220] to-[#6E0912] shadow-[0_20px_50px_rgba(181,18,32,0.22)]">
            {/* Right-Side Luxury Coach Fleet Lineup Image */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-[56%] lg:w-[54%] pointer-events-none select-none">
              <img
                src="/images/service-staff-transport.webp"
                alt="Flash Transport Luxury Coach Fleet Lineup"
                className="w-full h-full object-cover object-[center_65%]"
              />
              {/* Seamless Directional Crimson Mask Blending Left Text Area into Bus Lineup */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#9E0E1B] via-[#9E0E1B]/85 via-30% to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6E0912]/60 via-transparent to-[#6E0912]/30" />
            </div>

            {/* Mobile Top/Background Subtle Image Fallback */}
            <div className="md:hidden absolute inset-0 opacity-20 pointer-events-none select-none">
              <img
                src="/images/service-staff-transport.webp"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 lg:w-7/12 md:w-8/12 p-8 sm:p-12 lg:p-14 space-y-5">
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-[1.18]">
                Partner with Abu Dhabi’s Proven Transport Leader
              </h2>

              <p className="font-body text-sm sm:text-base text-white/85 leading-[1.65] max-w-xl font-normal">
                Discuss your company’s passenger transportation or bus rental requirements with our experienced fleet coordinators today.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  to={ROUTES.REQUEST_QUOTE}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F6F7F9] text-[#E31E2B] font-sans font-bold text-sm shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                >
                  <span>Request a Corporate Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={ROUTES.CONTACT}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-sans font-semibold text-sm backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Visit Our Abu Dhabi Office</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
