import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, Heart, Users, Star, ShieldCheck, CheckCircle2, ArrowRight, Phone, Clock, Briefcase, Award } from 'lucide-react';
import { VehicleItem } from '../../types/vehicle';
import { getAssetUrl } from '../../data/assets';
import { ROUTES } from '../../config/routes';
import { COMPANY_CONTACT } from '../../data/company';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface VehicleDetailModalProps {
  vehicle: VehicleItem | null;
  onClose: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (vehicle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [vehicle]);

  if (!vehicle) return null;

  const imgUrl = getAssetUrl(vehicle.imageKey);
  const badgeText = vehicle.badge || vehicle.category;

  // Spec highlight cards
  const seatSpec = vehicle.specs.passengers || vehicle.capacity;
  const climateSpec = vehicle.specs.airConditioning || 'Dual Heavy-Duty AC';
  const luggageSpec = vehicle.specs.luggage || 'Underfloor Cargo Bays';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-[#0B0D12] rounded-t-[32px] sm:rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden text-white animate-in slide-in-from-bottom duration-300">
        
        {/* Top Header Bar with Back Button & Favorite Toggle */}
        <div className="absolute top-0 inset-x-0 z-30 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/15 flex items-center justify-center transition-all active:scale-95 cursor-pointer pointer-events-auto"
            aria-label="Back to fleet"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/15 flex items-center justify-center transition-all active:scale-95 cursor-pointer pointer-events-auto"
            aria-label="Save to favorites"
          >
            <Heart
              className={cn(
                'w-5 h-5 transition-colors',
                isFavorite ? 'fill-[#E51E32] text-[#E51E32]' : 'text-white'
              )}
            />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 no-scrollbar">
          
          {/* 1. Large Vehicle Showcase Stage (Top Half) */}
          <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-[#161922] via-[#0F1117] to-[#0B0D12] flex items-center justify-center pt-8 px-6 overflow-hidden">
            
            {/* Ambient Red Stage Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 bg-[#E51E32]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Vehicle Photograph */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              <img
                src={imgUrl}
                alt={vehicle.name}
                className="max-h-full max-w-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Pagination Dots (matching reference) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              <span className="w-6 h-1.5 rounded-full bg-[#E51E32]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>

          {/* 2. White Sheet Card Content (Bottom Half) */}
          <div className="bg-white text-[#111827] rounded-t-[32px] p-6 sm:p-7 space-y-6 relative z-20 -mt-2 shadow-2xl">
            
            {/* Model Name & Availability Badge */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold text-[#E51E32] bg-[#E51E32]/10 border border-[#E51E32]/25 uppercase tracking-wider mb-2">
                  {badgeText}
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  {vehicle.name}
                </h2>
              </div>

              {/* Status Pill matching Reference */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold whitespace-nowrap shadow-xs mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </div>
            </div>

            {/* Short Tagline / Description */}
            <p className="font-body text-sm sm:text-[15px] text-[#4B5563] leading-relaxed font-normal">
              {vehicle.tagline || vehicle.overview}
            </p>

            {/* Rating / Verified Trust Bar matching Reference */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#4B5563] font-semibold pb-1">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[#111827]">5.0</span>
              </div>
              <span className="text-neutral-300">•</span>
              <span className="text-[#6B7280]">ITC &amp; ADEK Certified Fleet</span>
              <span className="text-neutral-300">•</span>
              <span className="text-emerald-700 font-bold">100% Owned Fleet</span>
            </div>

            {/* 3. Three Highlight Specification Cards in Row (matching Reference Screen 2) */}
            <div className="grid grid-cols-3 gap-3">
              {/* Box 1: Seating Capacity */}
              <div className="bg-[#F8F9FA] rounded-2xl p-3.5 sm:p-4 border border-[#E7E9ED] flex flex-col justify-between text-left space-y-2">
                <div className="w-7 h-7 rounded-xl bg-[#FEECEE] text-[#E51E32] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                    CAPACITY
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827] truncate mt-0.5">
                    {seatSpec}
                  </div>
                </div>
              </div>

              {/* Box 2: Climate Control */}
              <div className="bg-[#F8F9FA] rounded-2xl p-3.5 sm:p-4 border border-[#E7E9ED] flex flex-col justify-between text-left space-y-2">
                <div className="w-7 h-7 rounded-xl bg-[#FEECEE] text-[#E51E32] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                    CLIMATE
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827] truncate mt-0.5">
                    {climateSpec}
                  </div>
                </div>
              </div>

              {/* Box 3: Luggage / Safety */}
              <div className="bg-[#F8F9FA] rounded-2xl p-3.5 sm:p-4 border border-[#E7E9ED] flex flex-col justify-between text-left space-y-2">
                <div className="w-7 h-7 rounded-xl bg-[#FEECEE] text-[#E51E32] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#6B7280] uppercase tracking-wider">
                    CARGO / SAFETY
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#111827] truncate mt-0.5">
                    {luggageSpec}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Available Key Features List */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  Standard Fleet Amenities &amp; Safety Equipment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {vehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#374151]">
                      <CheckCircle2 className="w-4 h-4 text-[#E51E32] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Ideal Use Cases */}
            {vehicle.idealFor && vehicle.idealFor.length > 0 && (
              <div className="space-y-3 pt-2 pb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  Recommended Transport Solutions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle.idealFor.map((useCase, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-[#F3F4F6] text-[#374151] text-xs font-medium border border-[#E5E7EB]"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* 3. Sticky Bottom Action Bar matching Reference */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E7E9ED] flex items-center justify-between gap-4 z-30">
          <div>
            <div className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wider">
              COMMERCIAL RATES
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#111827]">
              All-Inclusive Rates
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] flex items-center justify-center transition-colors"
              title="Call dispatch"
            >
              <Phone className="w-5 h-5 text-[#E51E32]" />
            </a>

            <Link
              to={`${ROUTES.REQUEST_QUOTE}?vehicle=${vehicle.slug}`}
              onClick={onClose}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#E51E32] hover:bg-[#B51220] text-white font-sans font-bold text-sm shadow-lg shadow-[#E51E32]/35 transition-all duration-200 active:scale-95"
            >
              <span>Enquire for This Vehicle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

