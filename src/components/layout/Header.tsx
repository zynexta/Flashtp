import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { ROUTES } from '../../config/routes';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Light-hero pages render a crisp white header bar from initial load for optimal contrast
  const isLightHeroPage =
    pathname.startsWith('/about') ||
    pathname.startsWith('/best-bus-rental-companies-in-abu-dhabi-and-dubai');
  const isWhiteHeader = isScrolled || isLightHeroPage;

  useEffect(() => {
    const handleScroll = () => {
      // Threshold of 20px for immediate smooth response without jitter
      setIsScrolled(window.scrollY > 20);
    };

    // Run once on mount to handle cases where page is reloaded halfway down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & synchronize scroll state
  useEffect(() => {
    setMobileMenuOpen(false);
    const syncScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    syncScroll();
    const timer = setTimeout(syncScroll, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 select-none',
          isWhiteHeader
            ? cn(
                'bg-white/95 backdrop-blur-md border-b border-[#E8EAF0]',
                isScrolled && 'shadow-header'
              )
            : 'bg-transparent border-b border-white/10'
        )}
      >
        {/* Main Navigation Bar */}
        <div
          className={cn(
            'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300',
            isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4 lg:py-4.5'
          )}
        >
          {/* Logo: White text version on transparent header, Dark text version on white header */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3 group flex-shrink-0">
            <img
              src={isWhiteHeader ? "/images/flash-transport-logo.png?v=3" : "/images/flash-transport-logo-white.png?v=3"}
              alt="Flash Transport Passengers By Bus LLC"
              className={cn(
                "h-10 sm:h-11 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]",
                !isWhiteHeader && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav isDark={!isWhiteHeader} isScrolled={isScrolled} />

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to={ROUTES.REQUEST_QUOTE}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E31E2B] hover:bg-[#B51220] text-white font-sans font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
              className={cn(
                'p-2 rounded-lg lg:hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E31E2B]',
                isWhiteHeader
                  ? 'text-[#171B23] hover:bg-[#F6F7F9]'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
export default Header;
