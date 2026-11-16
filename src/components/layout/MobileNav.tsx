import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '../../data/navigation';
import { COMPANY_CONTACT } from '../../data/company';
import { ROUTES } from '../../config/routes';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedServices, setExpandedServices] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#E7E9ED] flex items-center justify-between">
          <Link to={ROUTES.HOME} onClick={onClose} className="flex items-center gap-2">
            <img
              src="/images/flash-transport-logo.png?v=3"
              alt="Flash Transport Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg text-[#686D75] hover:text-[#191C22] hover:bg-[#F6F7F9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 px-4 space-y-1 font-sans">
          {MAIN_NAV_LINKS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="py-1">
                  <button
                    onClick={() => setExpandedServices(!expandedServices)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-base font-sans font-medium text-[#191C22] hover:text-[#D92332] rounded-lg hover:bg-[#F6F7F9] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      expandedServices ? 'rotate-180 text-[#D92332]' : 'text-[#686D75]'
                    )} />
                  </button>

                  {expandedServices && (
                    <div className="pl-4 pr-1 py-1 space-y-1 bg-[#F6F7F9] rounded-lg mt-1 font-sans">
                      {item.children.map((sub) => (
                        <NavLink
                          key={sub.label}
                          to={sub.href}
                          onClick={onClose}
                          className={({ isActive }) =>
                            cn(
                              'block px-3 py-2 text-sm rounded-md transition-colors',
                              isActive
                                ? 'font-semibold text-[#E31E2B] bg-white shadow-xs'
                                : 'text-[#686D75] hover:text-[#191C22]'
                            )
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                      <Link
                        to={ROUTES.SERVICES}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#E31E2B] rounded-md hover:bg-white transition-colors"
                      >
                        <span>All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'block px-3 py-2.5 text-base font-sans font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-[#D92332] bg-[#FEECEE]'
                      : 'text-[#191C22] hover:text-[#D92332] hover:bg-[#F6F7F9]'
                  )
                }
              >
                {item.label}
              </NavLink>
            );
          })}

          <div className="pt-4">
            <Button
              href={ROUTES.REQUEST_QUOTE}
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Mobile Drawer Contact Info */}
        <div className="p-4 sm:p-5 border-t border-[#E7E9ED] bg-[#F6F7F9] space-y-3 text-xs text-[#686D75]">
          <a
            href={`tel:${COMPANY_CONTACT.phone}`}
            className="flex items-center gap-2.5 text-[#191C22] font-semibold hover:text-[#D92332]"
          >
            <div className="w-7 h-7 rounded-full bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{COMPANY_CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${COMPANY_CONTACT.email}`}
            className="flex items-center gap-2.5 text-[#191C22] font-semibold hover:text-[#D92332]"
          >
            <div className="w-7 h-7 rounded-full bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">{COMPANY_CONTACT.email}</span>
          </a>

          <div className="flex items-start gap-2.5 text-xs text-[#686D75]">
            <div className="w-7 h-7 rounded-full bg-white text-[#686D75] flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="leading-snug">
              Al Zahiyah / TCA, Abu Dhabi - UAE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

