import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, ShieldCheck, ArrowRight, Heart, Eye } from 'lucide-react';
import { VehicleItem } from '../../types/vehicle';
import { ROUTES } from '../../config/routes';
import { getAssetUrl } from '../../data/assets';
import { cn } from '../../lib/utils';

export interface FleetCardProps {
  vehicle: VehicleItem;
  className?: string;
  onSelect?: (vehicle: VehicleItem) => void;
}

export const FleetCard: React.FC<FleetCardProps> = ({ vehicle, className, onSelect }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const imgUrl = getAssetUrl(vehicle.imageKey);

  const badgeText = vehicle.badge || vehicle.category;
  const descriptionText = vehicle.shortDescription || vehicle.tagline || vehicle.overview;

  const handleCardClick = (e: React.MouseEvent) => {
    // If the click is on an anchor or button inside, let it proceed
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    if (onSelect) {
      onSelect(vehicle);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        'bg-white rounded-[26px] sm:rounded-[28px] border border-[#E7E9ED] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.11)] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 relative select-none cursor-pointer',
        className
      )}
    >
      <div>
        {/* 1. Top Bar: Category Pill on Left & Heart Favorite Icon on Right (matching Reference) */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-[#E51E32] bg-[#E51E32]/8 border border-[#E51E32]/20 uppercase tracking-wider">
            {badgeText}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="w-9 h-9 rounded-full bg-[#F6F7F9] hover:bg-neutral-200/80 text-[#6B7280] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            aria-label="Save to favorites"
          >
            <Heart
              className={cn(
                'w-4 h-4 transition-colors',
                isFavorite ? 'fill-[#E51E32] text-[#E51E32]' : 'text-[#6B7280]'
              )}
            />
          </button>
        </div>

        {/* 2. Large Central Vehicle Photograph (Dominant Visual Highlight matching Reference) */}
        <div className="w-full h-44 sm:h-52 flex items-center justify-center relative p-2 my-2 overflow-hidden rounded-2xl bg-gradient-to-b from-[#FAFAFB] to-[#F3F4F6]/60">
          <img
            src={imgUrl}
            alt={vehicle.name}
            className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
            loading="lazy"
          />

          {/* Quick Details Hover Badge on Desktop */}
          {onSelect && (
            <div className="absolute inset-0 bg-black/20 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#111827] text-xs font-bold shadow-md">
                <Eye className="w-3.5 h-3.5 text-[#E51E32]" />
                <span>View Full Specs</span>
              </span>
            </div>
          )}
        </div>

        {/* 3. Vehicle Name & Capacity Info */}
        <div className="space-y-1.5 pt-2">
          {/* Row 1: Vehicle Name on Left, Corporate / Daily badge on Right */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-sans text-[17px] sm:text-[19px] font-extrabold text-[#111827] group-hover:text-[#E51E32] transition-colors leading-tight truncate">
              {vehicle.name}
            </h3>
            <span className="text-[11px] font-bold text-[#E51E32] uppercase tracking-wider flex-shrink-0">
              Corporate &amp; Daily
            </span>
          </div>

          {/* Row 2: Star Rating & Capacity */}
          <div className="flex items-center justify-between text-xs font-semibold text-[#4B5563] pt-0.5">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-[#111827]">5.0</span>
              <span className="text-[#6B7280] font-normal text-[11px] ml-1">• Verified Fleet</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827] bg-[#F6F7F9] px-2.5 py-1 rounded-lg border border-[#E7E9ED]">
              <Users className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
              <span>{vehicle.capacity}</span>
            </div>
          </div>

          {/* Row 3: Short Description */}
          <p className="text-xs text-[#6B7280] leading-snug line-clamp-2 min-h-[32px] pt-1">
            {descriptionText}
          </p>
        </div>
      </div>

      {/* 4. Bottom Action Row matching Reference */}
      <div className="mt-4 pt-3 border-t border-[#F0F1F3] flex items-center gap-2">
        {/* Primary Red Pill Button: Enquire for This Vehicle */}
        <Link
          to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(vehicle.name)}`}
          onClick={(e) => e.stopPropagation()}
          className="min-h-[44px] flex-1 py-2.5 px-4 rounded-full bg-[#E51E32] hover:bg-[#B51220] text-white text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#E51E32]/25 active:scale-[0.98] group/btn"
        >
          <span>Enquire for This Vehicle</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>

        {/* Quick Specs Trigger */}
        {onSelect && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(vehicle);
            }}
            className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#F6F7F9] hover:bg-[#E5E7EB] text-[#111827] flex items-center justify-center transition-colors border border-[#E7E9ED] cursor-pointer"
            aria-label={`View full specifications of ${vehicle.name}`}
            title="View Full Specifications"
          >
            <Eye className="w-4 h-4 text-[#6B7280]" />
          </button>
        )}
      </div>
    </div>
  );
};
