import React, { useState, useEffect } from 'react';
import { FLEET_VEHICLES } from '../data/fleet';
import { VehicleCategory, VehicleItem } from '../types/vehicle';
import { FleetFilters } from '../components/fleet/FleetFilters';
import { FleetGrid } from '../components/fleet/FleetGrid';
import { FleetCard } from '../components/fleet/FleetCard';
import { VehicleDetailModal } from '../components/fleet/VehicleDetailModal';
import { ShieldCheck, Phone, ArrowRight, ArrowDown, ArrowUp, Gem, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';
import { ROUTES } from '../config/routes';
import { COMPANY_CONTACT } from '../data/company';

const ALL_CATEGORIES: VehicleCategory[] = [
  'Luxury Cars',
  'SUVs',
  'Large Coaches',
  'Mini Buses',
  'Passenger Vans'
];

export const Fleet: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('All Vehicles');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<VehicleItem | null>(null);

  useEffect(() => {
    document.title = 'Our Luxury Fleet for Your Journey | Flash Transport Abu Dhabi';
  }, []);

  const filteredVehicles = selectedCategory === 'All Vehicles'
    ? FLEET_VEHICLES
    : FLEET_VEHICLES.filter(v => v.category === selectedCategory);

  const categoriesToShow = selectedCategory === 'All Vehicles'
    ? ALL_CATEGORIES
    : [selectedCategory];

  const handleCategorySelect = (category: VehicleCategory) => {
    setSelectedCategory(category);
    // Initially load 6 cards for any selected category
    setVisibleCount(6);
  };

  const remainingCount = Math.max(0, filteredVehicles.length - visibleCount);

  return (
    <div className="bg-[#FAFAFB] text-[#111827]">
      {/* 1. Fleet Hero: Exact Reproduction of Reference Mockup */}
      <section className="relative bg-[#0B0D12] text-white pt-24 sm:pt-36 lg:pt-40 pb-72 sm:pb-28 lg:pb-32 overflow-hidden select-none">
        
        {/* Background High-Resolution Panoramic Luxury Vehicle Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile View: Dedicated Vertical Mobile Hero Image */}
          <img
            src="/images/fleet-luxury-hero-mobile.jpg"
            alt="Flash Transport Luxury Vehicle Fleet"
            className="w-full h-full object-cover object-center sm:hidden"
          />
          {/* Desktop & Tablet View: Full Landscape Hero Banner */}
          <img
            src="/images/fleet-luxury-hero-banner.jpg"
            alt="Flash Transport Luxury Vehicle Fleet"
            className="w-full h-full object-cover object-[center_right] sm:object-right hidden sm:block"
          />
          
          {/* Mobile Top Vignette: soft sky gradient for 100% crisp headline legibility, vehicle below is completely unshaded */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/75 via-[#0B0D12]/25 via-42% to-transparent sm:hidden z-10 pointer-events-none" />

          {/* Directional Dark Gradient Overlay: high contrast on the left under typography, leaving vehicles crystal-clear on the right */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0D12_0%,rgba(11,13,18,0.92)_28%,rgba(11,13,18,0.55)_42%,rgba(11,13,18,0)_58%)] hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/70 via-transparent to-transparent via-15% hidden sm:block" />

          {/* Glowing Curved Neon Red Light Streaks on Lower-Left Ground matching Mockup (Desktop only) */}
          <div className="hidden sm:block absolute bottom-10 left-0 z-10 pointer-events-none w-80 sm:w-[480px] h-32 overflow-hidden select-none opacity-85">
            <svg viewBox="0 0 480 140" fill="none" className="w-full h-full">
              <path
                d="M-30 130 C 100 120, 200 70, 320 65 C 400 60, 440 30, 480 0"
                stroke="url(#red-neon-glow)"
                strokeWidth="4"
                filter="blur(3px)"
              />
              <path
                d="M-30 130 C 100 120, 200 70, 320 65 C 400 60, 440 30, 480 0"
                stroke="#FF4D5E"
                strokeWidth="2"
              />
              <path
                d="M-40 138 C 80 128, 180 88, 290 82 C 370 78, 420 50, 460 20"
                stroke="#E51E32"
                strokeWidth="1.5"
                opacity="0.7"
              />
              <defs>
                <linearGradient id="red-neon-glow" x1="0" y1="140" x2="480" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E51E32" stopOpacity="0.9" />
                  <stop offset="0.6" stopColor="#FF4D5E" />
                  <stop offset="1" stopColor="#E51E32" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Top-Right Red Angled Racing / Wing Geometric Accents matching Mockup (Desktop only) */}
          <div className="hidden sm:block absolute top-0 right-0 z-10 pointer-events-none w-72 sm:w-96 h-80 overflow-hidden select-none">
            <svg viewBox="0 0 380 320" fill="none" className="w-full h-full">
              <polygon points="160,0 230,0 380,200 310,200" fill="#E51E32" opacity="0.85" />
              <polygon points="260,0 300,0 380,110 340,110" fill="#C91829" opacity="0.6" />
              <polygon points="80,0 120,0 360,320 320,320" fill="#FF4D5E" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Hero Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl space-y-4">
            
            {/* 1. Pill Badge: ● PREMIUM FLEET */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E51E32] animate-pulse" />
              <span>PREMIUM FLEET</span>
            </div>

            {/* 2. Hero Heading: Two Lines matching Reference */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm">
              Our Luxury Fleet<br />
              <span className="text-[#E51E32]">for Your Journey</span>
            </h1>

            {/* 3. Subtitle matching Reference */}
            <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed font-normal pt-1 max-w-lg">
              Travel in comfort and style with our premium fleet of Cadillac, GMC, Toyota and more – perfect for corporate, school and private transportation.
            </p>

            {/* 4. Three Feature Tags Row matching Reference Screenshot */}
            <div className="pt-2 pb-2 flex flex-wrap items-center gap-2.5 sm:gap-6 text-xs sm:text-[13px] font-semibold text-white/95">
              <span className="flex items-center gap-1.5 bg-black/40 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full border border-white/15 sm:border-0 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#E51E32] flex-shrink-0" />
                <span>Safety First</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full border border-white/15 sm:border-0 backdrop-blur-xs">
                <Gem className="w-4 h-4 text-[#E51E32] flex-shrink-0" />
                <span>Premium Comfort</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full border border-white/15 sm:border-0 backdrop-blur-xs">
                <Clock className="w-4 h-4 text-[#E51E32] flex-shrink-0" />
                <span>On-Time Always</span>
              </span>
            </div>

            {/* 5. Dual Action Buttons matching Reference */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-3.5">
              <a
                href="#browse-vehicles"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E51E32] hover:bg-[#C91829] text-white font-sans font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#E51E32]/30 group cursor-pointer active:scale-95"
              >
                <span>Explore Our Fleet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-sans font-semibold text-sm border border-white/20 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#E51E32]" />
                <span>Call {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 6. Signature S-Curve Wave Divider Transition matching Mockup */}
        <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none select-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-16 lg:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 35C240 75 540 85 840 65C1140 45 1320 15 1440 0V90H0V35Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* 2. Main Vehicle Listing Section matching Reference Mockup */}
      <section id="browse-vehicles" className="relative py-10 sm:py-16 bg-white border-b border-[#E7E9ED] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
        
        {/* Subtle City Skyline Silhouettes in corners matching mock-up */}
        <div className="absolute bottom-0 left-0 z-0 pointer-events-none opacity-[0.05] w-48 sm:w-64 h-32 select-none">
          <svg viewBox="0 0 240 120" fill="#111827" className="w-full h-full">
            <rect x="10" y="40" width="22" height="80" />
            <rect x="36" y="20" width="18" height="100" />
            <polygon points="45,5 36,20 54,20" />
            <rect x="58" y="50" width="24" height="70" />
            <rect x="86" y="30" width="20" height="90" />
            <rect x="110" y="10" width="26" height="110" />
            <polygon points="123,0 110,10 136,10" />
            <rect x="140" y="45" width="22" height="75" />
            <rect x="166" y="25" width="20" height="95" />
            <rect x="190" y="55" width="30" height="65" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-[0.05] w-48 sm:w-64 h-32 select-none">
          <svg viewBox="0 0 240 120" fill="#111827" className="w-full h-full">
            <rect x="10" y="55" width="26" height="65" />
            <rect x="40" y="25" width="20" height="95" />
            <rect x="64" y="45" width="22" height="75" />
            <rect x="90" y="10" width="26" height="110" />
            <polygon points="103,0 90,10 116,10" />
            <rect x="120" y="30" width="20" height="90" />
            <rect x="144" y="50" width="24" height="70" />
            <rect x="172" y="20" width="18" height="100" />
            <polygon points="181,5 172,20 190,20" />
            <rect x="194" y="40" width="22" height="80" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 relative z-10">
          
          {/* Header & Filter Controls matching Reference Screenshot */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#F0F1F3]">
              <div>
                {/* Eyebrow: — FILTER BY CATEGORY */}
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="w-4 h-[2px] bg-[#E51E32] rounded-full inline-block" />
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E51E32]">
                    OUR FLEET SHOWROOM
                  </span>
                </div>

                {/* Title: Browse Vehicles (21 Models) */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                  Browse Vehicles <span className="text-[#E51E32]">({filteredVehicles.length} Models)</span>
                </h2>
              </div>

              {/* Right Trust Badge */}
              <div className="text-xs font-semibold text-[#4B5563] flex items-center gap-2 bg-[#F6F7F9] px-3.5 py-2 rounded-xl border border-[#E7E9ED] self-start md:self-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verified Fleet Capacities &amp; Specifications</span>
              </div>
            </div>

            {/* Category Filter Pills Row matching Screenshot */}
            <FleetFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* 4A. Mobile Categorized Horizontal Side-Scroll Rows */}
          <div className="md:hidden space-y-7">
            {categoriesToShow.map((cat) => {
              const catVehicles = FLEET_VEHICLES.filter(v => v.category === cat);
              if (catVehicles.length === 0) return null;
              return (
                <div key={`mobile-cat-${cat}`} className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E51E32]" />
                      <h3 className="font-sans text-base font-bold text-[#111827]">
                        {cat}
                      </h3>
                      <span className="text-xs font-semibold text-[#6B7280] bg-[#F3F4F6] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
                        {catVehicles.length} Models
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#E51E32]">
                      Swipe →
                    </span>
                  </div>

                  {/* Horizontal Side Scroll Row */}
                  <div className="overflow-x-auto pb-3 pt-1 -mx-4 px-4 scrollbar-none snap-x snap-mandatory flex gap-3.5">
                    {catVehicles.map((vehicle) => (
                      <FleetCard
                        key={`mobile-v-${vehicle.id}`}
                        vehicle={vehicle}
                        onSelect={setSelectedVehicleForModal}
                        className="w-[280px] xs:w-[305px] flex-shrink-0 snap-start"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4B. Tablet & Desktop View: 100% Original 3-Column Grid with Pagination */}
          <div className="hidden md:block space-y-7">
            <FleetGrid
              vehicles={filteredVehicles}
              visibleCount={visibleCount}
              onSelect={setSelectedVehicleForModal}
            />

            {/* Load More Vehicles Button: loads 6 more on each click */}
            {remainingCount > 0 ? (
              <div className="pt-6 sm:pt-8 text-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#E31E2B] bg-white text-[#E31E2B] hover:bg-[#E31E2B] hover:text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 group"
                >
                  <span>Load More Vehicles ({remainingCount} Remaining)</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>
            ) : filteredVehicles.length > 6 ? (
              <div className="pt-6 sm:pt-8 text-center">
                <button
                  onClick={() => {
                    setVisibleCount(6);
                    const el = document.getElementById('browse-vehicles');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#E31E2B] bg-white text-[#E31E2B] hover:bg-[#E31E2B] hover:text-white font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95 group"
                >
                  <span>Show Less Vehicles</span>
                  <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </button>
              </div>
            ) : null}
          </div>

        </div>
      </section>

      {/* 3. Physical Fleet Inspection Welcome Section */}
      <section className="py-16 sm:py-20 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191C22] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 shadow-lg">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E51E32] inline-block">
                Physical Fleet Inspection Welcome
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Would You Like to Inspect Our Fleet in Abu Dhabi?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Corporate clients are welcome to inspect our vehicles, review maintenance logbooks, and test-ride our buses at our Abu Dhabi operating depot before signing any contract.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <Button
                href={ROUTES.REQUEST_QUOTE}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto justify-center rounded-xl"
              >
                Request Quotation
              </Button>
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#E51E32]" />
                <span>{COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Interactive Vehicle Detail Modal (Matching Reference Screen 2) */}
      <VehicleDetailModal
        vehicle={selectedVehicleForModal}
        onClose={() => setSelectedVehicleForModal(null)}
      />
    </div>
  );
};

export default Fleet;
