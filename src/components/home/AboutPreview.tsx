import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Bus, MapPin, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../config/routes';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E7E9ED] relative overflow-hidden select-none">
      
      {/* 1. Bottom-Right Dynamic Aerodynamic Red Ribbon Graphic */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none w-72 sm:w-96 lg:w-[480px] h-28 sm:h-40 overflow-hidden select-none">
        <svg
          viewBox="0 0 500 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M50 160C150 140 230 100 340 110C410 115 460 80 500 40V160H50Z"
            fill="url(#red-about-back)"
            opacity="0.65"
          />
          <path
            d="M110 160C210 130 270 70 380 75C430 78 470 50 500 15V160H110Z"
            fill="url(#red-about-front)"
          />
          <defs>
            <linearGradient id="red-about-back" x1="50" y1="160" x2="500" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7E121B" />
              <stop offset="1" stopColor="#B91F2D" />
            </linearGradient>
            <linearGradient id="red-about-front" x1="110" y1="160" x2="500" y2="15" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B91F2D" />
              <stop offset="0.5" stopColor="#D92332" />
              <stop offset="1" stopColor="#EA2637" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition with Floating Badges */}
          <div className="lg:col-span-6 relative">
            
            {/* Top-Left Red Curved Accent Frame */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-28 sm:w-36 h-40 sm:h-52 bg-gradient-to-br from-[#D92332] to-[#B91F2D] rounded-tl-[36px] sm:rounded-tl-[44px] rounded-bl-[20px] -z-10 shadow-sm" />

            {/* Main Rounded Image Card */}
            <div className="relative rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-2xl border border-[#E7E9ED] bg-neutral-100 group">
              <img
                src="/images/about-school-bus-fleet.webp"
                alt="Flash Transport Certified Passenger Bus Fleet in Abu Dhabi"
                className="w-full h-[360px] sm:h-[430px] lg:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Contrast Vignette Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-7 pt-20 rounded-b-[28px] sm:rounded-b-[34px] pointer-events-none">
                <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#D92332] bg-white px-3 py-1 rounded-full inline-block mb-2 shadow-sm">
                  ISO & EIAC ACCREDITED
                </span>
                <p className="font-sans text-xs sm:text-[13px] text-white/95 font-medium leading-snug max-w-sm drop-shadow-sm">
                  Certified passenger transport infrastructure adhering to global safety, environmental, and quality management standards.
                </p>
              </div>

              {/* Top-Right Floating EIAC Accredited Badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white rounded-2xl p-2.5 sm:p-3 shadow-lg border border-[#E7E9ED] flex items-center gap-3 z-10 transition-transform duration-300 hover:scale-105">
                <img
                  src="/images/cert-eiac-eqcs.webp"
                  alt="EIAC Accredited OHSMS Certification"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <div className="text-left leading-tight">
                  <div className="font-sans font-bold text-xs sm:text-[13px] text-[#191C22]">
                    EIAC Accredited
                  </div>
                  <div className="font-sans text-[10px] sm:text-[11px] text-[#686D75] mt-0.5 font-medium">
                    CB-QMS/EMS/OHSMS-084
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Floating 20+ Years Experience Card */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-[#E7E9ED] text-center min-w-[125px] sm:min-w-[150px] absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 lg:-right-5 z-20 transition-transform duration-300 hover:scale-105">
              <div className="font-sans font-extrabold text-3xl sm:text-4xl text-[#D92332] leading-none tracking-tight">
                20+
              </div>
              
              {/* Golden Laurel Wreath Graphic */}
              <div className="my-1 flex items-center justify-center">
                <svg
                  className="w-16 h-4 text-amber-500/90"
                  viewBox="0 0 64 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14c-3-2-5-4-5-8 0-2 1-5 3-6 1 1 1 4 0 6-1 2-2 5-4 8zm40 0c3-2 5-4 5-8 0-2-1-5-3-6-1 1-1 4 0 6 1 2 2 5 4 8z" opacity="0.6"/>
                  <path d="M18 13c-2-1-4-4-4-6 0-2 1-4 2-5 1 1 1 3 0 5-1 2-2 4-4 6zm28 0c2-1 4-4 4-6 0-2-1-4-2-5-1 1-1 3 0 5 1 2 2 4 3 6z" opacity="0.8"/>
                  <path d="M24 11c-2-1-3-3-3-5 0-2 1-3 2-4 1 1 1 2 0 4-1 2-2 3-3 5zm16 0c2-1 3-3 3-5 0-2-1-3-2-4-1 1-1 2 0 4 1 2 2 3 3 5z"/>
                </svg>
              </div>

              <div className="font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#191C22] leading-tight">
                Years of
                <br />
                Operational
                <br />
                Excellence
              </div>
            </div>

          </div>

          {/* Right Column: Copy, Value Points Grid & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow & Main Title */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-[2px] bg-[#D92332] inline-block rounded-full"></span>
                <span className="font-sans text-xs uppercase font-bold tracking-widest text-[#D92332]">
                  ABOUT FLASH TRANSPORT
                </span>
              </div>
              
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#191C22] tracking-tight leading-[1.15]">
                Your Trusted Passenger Transport Partner in{' '}
                <span className="text-[#D92332] block sm:inline">
                  Abu Dhabi & Dubai
                </span>
              </h2>
            </div>

            {/* Description Copy */}
            <div className="space-y-4 font-body text-[14px] sm:text-[15px] text-[#686D75] leading-[1.68]">
              <p>
                Flash Transport Passengers By Bus LLC is an established leader in commercial passenger transportation across the United Arab Emirates. With over 20 years of hands-on experience, we specialize in tailor-made mobility solutions for corporate enterprises, educational institutions, government organizations, and private travelers.
              </p>
              <p>
                Whether you require a daily staff transport shuttle for hundreds of workers, a certified school bus network, an executive chauffeur-driven limousine, or a single-day luxury tour coach, our diverse and modern fleet delivers unmatched value and punctuality.
              </p>
            </div>

            {/* 4 Feature Cards (2x2 Grid with Subtle Divider) */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#E7E9ED]">
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#D92332]" />
                  </div>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#191C22] leading-snug">
                    Certified ISO 9001, 14001, & 45001
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#D92332]" />
                  </div>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#191C22] leading-snug">
                    Vetted & Defensive-Certified Drivers
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <Bus className="w-5 h-5 text-[#D92332]" />
                  </div>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#191C22] leading-snug">
                    Standby Fleet for Zero Downtime
                  </span>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#D92332]" />
                  </div>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#191C22] leading-snug">
                    Real-Time GPS & Telematics Dispatch
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to={ROUTES.ABOUT}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D92332] hover:bg-[#B91F2D] text-white font-sans font-semibold text-sm shadow-md shadow-[#D92332]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-[#F6F7F9] text-[#191C22] hover:text-[#D92332] border border-[#E7E9ED] hover:border-[#D92332] font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
