import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types/service';
import { ROUTES } from '../../config/routes';
import { getAssetUrl } from '../../data/assets';
import { cn } from '../../lib/utils';

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const imgUrl = getAssetUrl(service.imageKey);

  return (
    <div
      className={cn(
        'group bg-white rounded-[24px] sm:rounded-[26px] overflow-hidden border border-[#E7E9ED] shadow-[0_8px_26px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_46px_rgba(0,0,0,0.11)] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5',
        className
      )}
    >
      {/* 1. Large Landscape Image (16:9 Aspect Ratio, Rounded Top, No Icon Overlays) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={imgUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 2. Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Bold Dark Navy Title */}
          <h3 className="font-sans text-[19px] sm:text-[20px] font-bold text-[#111827] group-hover:text-[#D92332] transition-colors leading-snug">
            <Link to={`/${service.slug}/`}>
              {service.title}
            </Link>
          </h3>

          {/* Small Corporate Red Horizontal Accent Line Beneath Title */}
          <div className="w-8 h-[2.5px] bg-[#D92332] rounded-full mt-2.5 mb-3.5" />

          {/* Short Description with Comfortable Line Spacing */}
          <p className="font-body text-[13.5px] sm:text-[14px] text-[#4B5563] leading-relaxed line-clamp-3 min-h-[64px]">
            {service.shortDescription}
          </p>
        </div>

        {/* 3. Bottom Action Row (Primary Red Button + Divider + Secondary Text Action) */}
        <div className="flex items-center gap-4 mt-6 pt-2">
          {/* Primary Action: Explore Service */}
          <Link
            to={`/${service.slug}/`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D92332] hover:bg-[#B91F2D] text-white text-xs sm:text-[13px] font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 group/btn active:scale-95"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>

          {/* Thin Vertical Subtle Separator */}
          <div className="h-4 w-[1px] bg-[#E5E7EB]" />

          {/* Secondary Action: Get Quote */}
          <Link
            to={`${ROUTES.REQUEST_QUOTE}?service=${service.slug}`}
            className="font-sans text-xs sm:text-[13px] font-semibold text-[#111827] hover:text-[#D92332] transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
