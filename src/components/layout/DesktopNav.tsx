import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Bus,
  Car,
  Compass,
  Users,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { MAIN_NAV_LINKS } from '../../data/navigation';
import { ROUTES } from '../../config/routes';
import { cn } from '../../lib/utils';

export interface DesktopNavProps {
  isDark?: boolean;
  isScrolled?: boolean;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ isDark = false, isScrolled = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Icon mapping for services in right column (scaled to compact 16px/1rem inside 34-36px container)
  const getServiceIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes('rent a car')) {
      return <Car className="w-4 h-4 stroke-[2]" />;
    }
    if (lower.includes('group pick') || lower.includes('pick & drop')) {
      return <Users className="w-4 h-4 stroke-[2]" />;
    }
    if (lower.includes('tour') || lower.includes('inter city')) {
      return <Compass className="w-4 h-4 stroke-[2]" />;
    }
    if (lower.includes('daily')) {
      return <Clock className="w-4 h-4 stroke-[2]" />;
    }
    return <Bus className="w-4 h-4 stroke-[2]" />;
  };

  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      {MAIN_NAV_LINKS.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isCurrentRoute =
          item.href === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.href);

        if (hasChildren) {
          const isDropdownActive = dropdownOpen;

          return (
            <div
              key={item.label}
              ref={triggerRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={cn(
                  'flex items-center gap-1.5 text-sm font-sans font-medium transition-colors relative py-1 tracking-normal focus:outline-none',
                  isDropdownActive || isCurrentRoute
                    ? isDark ? 'text-white font-semibold' : 'text-[#171B23] font-semibold'
                    : isDark ? 'text-white/85 hover:text-white' : 'text-[#171B23] hover:text-[#E31E2B]'
                )}
                aria-expanded={isDropdownActive}
              >
                <span>{item.label}</span>
                {isDropdownActive ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#E31E2B] transition-transform duration-200" />
                ) : (
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      isDark ? 'text-white/70' : 'text-[#687080]'
                    )}
                  />
                )}

                {/* Active red underline with subtle glow */}
                {(isDropdownActive || isCurrentRoute) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#E31E2B] rounded-full shadow-[0_2px_8px_rgba(227,30,43,0.8)]" />
                )}
              </button>

              {/* Compact, Luxury-Proportioned Mega Menu (Width: 920-960px, Height: ~485px, Max: 550px) */}
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    'fixed left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[920px] xl:max-w-[960px] transition-all duration-200 select-none',
                    isScrolled ? 'top-[58px]' : 'top-[68px]'
                  )}
                >
                  {/* Invisible Hit-Area Bridge so cursor moving from nav item to dropdown never drops hover */}
                  <div className="absolute -top-3 left-0 right-0 h-3.5 bg-transparent" />

                  {/* Mega Menu Floating Container with maximum height 550px */}
                  <div className="bg-white/98 backdrop-blur-2xl rounded-[22px] border border-[#E8EAF0] shadow-[0_16px_45px_-10px_rgba(0,0,0,0.18),0_8px_20px_-6px_rgba(227,30,43,0.10)] overflow-hidden max-h-[550px] flex flex-col animate-in fade-in-0 zoom-in-[0.98] duration-200">
                    
                    {/* Main Content Area (Two Columns: Left Branding Panel ~27%, Right Services ~73%) */}
                    <div className="flex flex-col md:flex-row flex-1 min-h-0">
                      
                      {/* Left Red Branding Panel (27% Width, 18-20px Internal Padding) */}
                      <div className="w-full md:w-[27%] min-w-[230px] max-w-full md:max-w-[260px] bg-gradient-to-br from-[#A90016] via-[#B8061C] to-[#790014] text-white p-4 sm:p-4.5 lg:p-5 relative overflow-hidden flex flex-col justify-between rounded-tl-[20px] md:rounded-bl-[12px]">
                        
                        {/* Decorative Aerodynamic Curves */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 pointer-events-none opacity-25 select-none">
                          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                            <path
                              d="M0 60 C 80 40, 160 80, 200 160 L 200 0 L 0 0 Z"
                              fill="#5A000E"
                            />
                            <path
                              d="M20 0 C 100 20, 180 80, 200 120 L 200 0 Z"
                              fill="#FFFFFF"
                              opacity="0.15"
                            />
                          </svg>
                        </div>

                        {/* Top Content: 40px Icon, Label, Heading, Description */}
                        <div className="relative z-10">
                          {/* Translucent 38-40px Bus Icon Container */}
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner mb-2.5">
                            <Bus className="w-5 h-5 stroke-[2.2]" />
                          </div>

                          {/* Eyebrow Label */}
                          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-white/90 block mb-1">
                            OUR SERVICES
                          </span>

                          {/* Thin White Divider Line */}
                          <div className="w-7 h-[1.5px] bg-white/40 mb-2.5" />

                          {/* Main Heading: 20-22px compact */}
                          <h3 className="font-sans text-[19px] lg:text-[21px] font-extrabold text-white leading-[1.12] tracking-tight">
                            Comprehensive<br />
                            Passenger<br />
                            Transport<br />
                            Solutions
                          </h3>

                          {/* Supporting Text: 12-12.5px */}
                          <p className="font-body text-[11.5px] lg:text-[12px] text-white/80 leading-relaxed mt-1.5 max-w-[200px]">
                            Reliable, safe, and flexible transportation services across Abu Dhabi &amp; the UAE.
                          </p>
                        </div>

                        {/* Bottom Bus with Abu Dhabi Skyline Banner Image (Compact Height) */}
                        <div className="mt-3 -mx-4 sm:-mx-4.5 lg:-mx-5 -mb-4 sm:-mb-4.5 lg:-mb-5 relative overflow-hidden rounded-bl-[12px] h-22 sm:h-26">
                          <img
                            src="/images/about-hero-banner.jpg"
                            alt="Flash Transport Luxury Fleet Abu Dhabi"
                            className="w-full h-full object-cover object-[72%_center]"
                          />
                          {/* Smooth Blend Gradients into Red Panel */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#8B0012]/40 to-[#A90016]" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#A90016]/50 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Right Service Cards Column (50-52px Card Height, 7-8px Gap, 12-14px Padding) */}
                      <div className="flex-1 min-w-0 p-2.5 sm:p-3 lg:p-3.5 flex flex-col justify-center space-y-1.5 sm:space-y-2 bg-[#FCFDFF]">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group flex items-center justify-between h-[50px] sm:h-[52px] px-3 sm:px-3.5 rounded-[14px] bg-white border border-[#EAECEF] hover:border-[#FFCCD1] shadow-[0_1.5px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(227,30,43,0.10)] transition-all duration-200 hover:-translate-y-[1.5px]"
                          >
                            {/* Left Pink Rounded Icon Container (32-36px) */}
                            <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-[#FFF0F1] group-hover:bg-[#FFE0E3] text-[#E31E2B] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                              {getServiceIcon(sub.label)}
                            </div>

                            {/* Center Title (13-14px) and Description (11-12px) */}
                            <div className="flex-1 min-w-0 ml-2.5 mr-2">
                              <h4 className="font-sans font-bold text-[13px] sm:text-[13.5px] text-[#171B23] group-hover:text-[#E31E2B] transition-colors leading-tight">
                                {sub.label}
                              </h4>
                              {sub.description && (
                                <p className="font-body text-[11px] sm:text-[11.5px] text-[#687080] truncate mt-0.5 leading-normal">
                                  {sub.description}
                                </p>
                              )}
                            </div>

                            {/* Right Circular Arrow Control (28-30px) */}
                            <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-[#FFF0F1] group-hover:bg-[#E31E2B] text-[#E31E2B] group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-2xs transition-all duration-200 group-hover:scale-105">
                              <ArrowRight className="w-3 h-3 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Certification & All Services Bar (Compact 46-48px Height) */}
                    <div className="h-[46px] sm:h-[48px] bg-[#FAFBFD] border-t border-[#E8EAF0] px-4.5 sm:px-5.5 flex items-center justify-between rounded-b-[22px] flex-shrink-0">
                      {/* Left: ISO Certification Badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FFF0F1] text-[#E31E2B] flex items-center justify-center flex-shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans font-semibold text-[11px] sm:text-[11.5px] text-[#171B23]">
                          ISO 9001 / 14001 / 45001 Certified Fleet
                        </span>
                      </div>

                      {/* Right: All Services Red Pill Button */}
                      <Link
                        to={ROUTES.SERVICES}
                        onClick={() => setDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:py-1.5 rounded-full bg-[#E31E2B] hover:bg-[#B51220] text-white font-sans font-semibold text-[11px] sm:text-[11.5px] shadow-2xs shadow-[#E31E2B]/20 hover:shadow-xs transition-all duration-200 active:scale-[0.98]"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3 h-3 stroke-[2.2]" />
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'text-sm font-sans font-medium transition-colors relative py-1 tracking-normal',
                isActive
                  ? isDark ? 'text-white font-semibold' : 'text-[#171B23] font-semibold'
                  : isDark ? 'text-white/80 hover:text-white' : 'text-[#171B23] hover:text-[#E31E2B]'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E31E2B] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
export default DesktopNav;
