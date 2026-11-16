import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { VehicleItem } from '../../types/vehicle';
import { ROUTES } from '../../config/routes';
import { getAssetUrl } from '../../data/assets';

export interface FleetCardProps {
  vehicle: VehicleItem;
  className?: string;
}

export const FleetCard: React.FC<FleetCardProps> = ({ vehicle, className }) => {
  const imgUrl = getAssetUrl(vehicle.imageKey);

  // Derive specs matching reference screenshot
  const spec1 = vehicle.keySpecs?.[0] || vehicle.specs.airConditioning || 'Premium Climate Control';
  const spec2 = vehicle.keySpecs?.[1] || vehicle.features?.[0] || 'Advanced Safety';
  const badgeText = vehicle.badge || vehicle.category;
  const descriptionText = vehicle.shortDescription || vehicle.tagline || vehicle.overview;

  return (
    <div className={`bg-white rounded-2xl border border-[#E7E9ED] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 p-5 flex flex-col justify-between group hover:-translate-y-1 relative ${className || ''}`}>
      <div>
        {/* Top-Left Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#E51E32] bg-[#E51E32]/8 border border-[#E51E32]/20">
            {badgeText}
          </span>
        </div>

        {/* Compact Horizontal Split (Image on Left, Info on Right) */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          {/* Left Column: Transparent Vehicle Photo */}
          <div className="w-36 sm:w-40 h-28 sm:h-32 flex-shrink-0 flex items-center justify-center relative p-1">
            <img
              src={imgUrl}
              alt={vehicle.name}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ease-out drop-shadow-sm"
              loading="lazy"
            />
          </div>

          {/* Right Column: Vehicle Information */}
          <div className="flex flex-col justify-center flex-1 min-w-0 space-y-1.5">
            {/* Vehicle Name */}
            <h3 className="font-sans text-[15.5px] sm:text-[17px] font-bold text-[#111827] group-hover:text-[#E51E32] transition-colors leading-tight truncate">
              {vehicle.name}
            </h3>

            {/* Passenger Capacity */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#111827]">
              <Users className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
              <span>{vehicle.capacity}</span>
            </div>

            {/* Short Description */}
            <p className="text-xs text-[#6B7280] leading-snug line-clamp-2 min-h-[30px]">
              {descriptionText}
            </p>

            {/* Two Key Specifications with Subtle Red Icons */}
            <div className="pt-0.5 flex flex-col gap-1 text-[11px] sm:text-xs text-[#4B5563] font-medium">
              <div className="flex items-center gap-1.5 truncate">
                <Star className="w-3.5 h-3.5 text-[#E51E32] fill-[#E51E32] flex-shrink-0" />
                <span className="truncate">{spec1}</span>
              </div>
              <div className="flex items-center gap-1.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E51E32] flex-shrink-0" />
                <span className="truncate">{spec2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Red Enquire Button at Bottom */}
      <div className="mt-4 pt-1">
        <Link
          to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(vehicle.name)}`}
          className="w-full py-2.5 px-4 rounded-full bg-[#E51E32] hover:bg-[#C91829] text-white text-xs sm:text-[13px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.99] group/btn"
        >
          <span>Enquire for This Vehicle</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
