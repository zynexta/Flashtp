import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Bus, Users, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { cn } from '../../lib/utils';

export interface QuickBookingAssistantProps {
  className?: string;
  variant?: 'glass' | 'dark' | 'light';
}

export const QuickBookingAssistant: React.FC<QuickBookingAssistantProps> = ({
  className,
  variant = 'dark'
}) => {
  const navigate = useNavigate();
  const [quickService, setQuickService] = useState('school-college-transportation-abu-dabi');
  const [quickPassengers, setQuickPassengers] = useState('30-50');
  const [quickCity, setQuickCity] = useState('Abu Dhabi');

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `${ROUTES.REQUEST_QUOTE}?service=${quickService}&passengers=${quickPassengers}&city=${encodeURIComponent(
        quickCity
      )}`
    );
  };

  const isGlass = variant === 'glass';
  const isLight = variant === 'light';

  const selectClass = cn(
    'w-full pl-10 pr-8 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium font-sans focus:outline-none focus:ring-2 appearance-none transition-all cursor-pointer',
    isLight
      ? 'bg-[#F6F7F9] hover:bg-[#EFF1F5] border border-[#E8EAF0] text-[#171B23] focus:ring-[#E31E2B]/25 focus:border-[#E31E2B] focus:bg-white'
      : 'bg-white/5 hover:bg-white/10 border border-white/15 text-white focus:ring-[#D92332] focus:bg-[#12141A]'
  );

  const optionClass = isLight
    ? 'bg-white text-[#171B23] font-sans'
    : 'bg-[#12141A] text-white font-sans';

  const labelClass = cn(
    'block font-sans text-[12px] font-semibold mb-1.5',
    isLight ? 'text-[#171B23]' : 'text-white/90'
  );

  const iconClass = cn(
    'w-4 h-4 absolute left-3.5 top-3 pointer-events-none',
    isLight ? 'text-[#687080]' : 'text-white/60'
  );

  const chevronClass = cn(
    'w-4 h-4 absolute right-3.5 top-3 pointer-events-none',
    isLight ? 'text-[#687080]' : 'text-white/60'
  );

  return (
    <div
      className={cn(
        'w-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 relative',
        isLight
          ? 'bg-white border border-[#E8EAF0] shadow-[0_14px_40px_rgba(23,27,35,0.08)] hover:shadow-[0_18px_46px_rgba(23,27,35,0.11)]'
          : isGlass
            ? 'bg-white/[0.12] backdrop-blur-2xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-white/35'
            : 'bg-[#161922]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:border-white/25',
        className
      )}
    >
      {/* Card Header */}
      <div
        className={cn(
          'flex items-center gap-3.5 pb-4 border-b',
          isLight ? 'border-[#E8EAF0]' : 'border-white/10'
        )}
      >
        <div
          className={cn(
            'w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm',
            isLight
              ? 'bg-[#E31E2B] text-white shadow-[#E31E2B]/25'
              : 'bg-[#D92332]/15 text-[#D92332] border border-[#D92332]/30'
          )}
        >
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3
            className={cn(
              'font-sans text-base sm:text-[17px] font-bold leading-tight tracking-tight',
              isLight ? 'text-[#171B23]' : 'text-white'
            )}
          >
            Quick Booking Assistant
          </h3>
          <p
            className={cn(
              'font-body text-[12px] mt-0.5 font-normal',
              isLight ? 'text-[#687080]' : 'text-white/75'
            )}
          >
            Plan your journey in seconds
          </p>
        </div>
      </div>

      {/* Form Controls */}
      <form onSubmit={handleQuickQuote} className="mt-5 space-y-4 font-sans">
        {/* Field 1: Transport Service Required */}
        <div>
          <label className={labelClass}>Transport Service Required</label>
          <div className="relative">
            <Bus className={iconClass} />
            <select
              value={quickService}
              onChange={(e) => setQuickService(e.target.value)}
              className={cn(selectClass, 'pr-9')}
            >
              <option value="school-college-transportation-abu-dabi" className={optionClass}>
                School &amp; College Transportation
              </option>
              <option value="staff-transportation-services-abudhabi" className={optionClass}>
                Staff Transportation
              </option>
              <option value="rent-a-car" className={optionClass}>
                Rent a Car (Luxury Sedans &amp; SUVs)
              </option>
              <option value="inter-city-tour" className={optionClass}>
                Inter City Tour &amp; Sightseeing
              </option>
              <option value="group-pick-drop-services" className={optionClass}>
                Group Pick &amp; Drop Services
              </option>
              <option value="daily-bus-service-in-abu-dhabi" className={optionClass}>
                Daily Bus Services
              </option>
            </select>
            <ChevronDown className={chevronClass} />
          </div>
        </div>

        {/* Field 2 & 3: Passengers & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Estimated Passengers */}
          <div>
            <label className={labelClass}>Estimated Passengers</label>
            <div className="relative">
              <Users className={iconClass} />
              <select
                value={quickPassengers}
                onChange={(e) => setQuickPassengers(e.target.value)}
                className={selectClass}
              >
                <option value="30-50" className={optionClass}>
                  30 – 50 (Luxury Coach)
                </option>
                <option value="1-7" className={optionClass}>
                  1 – 7 (SUV / Sedan)
                </option>
                <option value="8-14" className={optionClass}>
                  8 – 14 (Van / Mini Bus)
                </option>
                <option value="15-30" className={optionClass}>
                  15 – 30 (Coaster Bus)
                </option>
                <option value="50-66+" className={optionClass}>
                  50 – 66+ (Heavy Bus)
                </option>
              </select>
              <ChevronDown className={chevronClass} />
            </div>
          </div>

          {/* City / Emirate */}
          <div>
            <label className={labelClass}>City / Emirate</label>
            <div className="relative">
              <MapPin className={iconClass} />
              <select
                value={quickCity}
                onChange={(e) => setQuickCity(e.target.value)}
                className={selectClass}
              >
                <option value="Abu Dhabi" className={optionClass}>
                  Abu Dhabi
                </option>
                <option value="Dubai" className={optionClass}>
                  Dubai
                </option>
                <option value="Sharjah" className={optionClass}>
                  Sharjah
                </option>
                <option value="Al Ain" className={optionClass}>
                  Al Ain
                </option>
                <option value="Other Emirates" className={optionClass}>
                  Other Emirates
                </option>
              </select>
              <ChevronDown className={chevronClass} />
            </div>
          </div>
        </div>

        {/* Primary Button */}
        <button
          type="submit"
          className="w-full mt-2 py-3.5 px-5 rounded-xl bg-[#E31E2B] hover:bg-[#B51220] text-white font-sans font-semibold text-sm tracking-wide shadow-md shadow-[#E31E2B]/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          <span>Continue to Full Quote Request</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
