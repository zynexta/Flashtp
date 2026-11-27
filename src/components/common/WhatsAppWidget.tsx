import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Bus, Users, Clock } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/company';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '');

  const getWaLink = (message: string) => {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const quickPrompts = [
    {
      title: 'Charter Bus Rental',
      desc: 'Get an instant quote for luxury or staff buses',
      msg: 'Hello Flash Transport! I would like to enquire about renting a charter bus in Abu Dhabi / UAE.',
      icon: <Bus className="w-4 h-4 text-[#D92332]" />,
    },
    {
      title: 'Corporate Staff Shuttles',
      desc: 'Employee daily transport contracts & pricing',
      msg: 'Hello, I represent a company in Abu Dhabi and need a corporate staff transportation proposal.',
      icon: <Users className="w-4 h-4 text-[#D92332]" />,
    },
    {
      title: 'Dispatch & Urgent Booking',
      desc: 'Immediate vehicle mobilization support',
      msg: 'URGENT: I need immediate transport dispatch support from Flash Transport.',
      icon: <Clock className="w-4 h-4 text-[#D92332]" />,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none">
      {/* Expanded Popup */}
      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-18 right-0 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#E7E9ED] overflow-hidden animate-fade-in text-[#191C22]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-5 text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md">
                {/* Official WhatsApp SVG Icon */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-[#25D366]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.002 0C7.164 0 0 7.163 0 16.002c0 2.825.738 5.578 2.138 8.006L.068 31.932l8.113-2.128a15.932 15.932 0 007.821 2.054h.007c8.836 0 16-7.163 16-16.002C32.009 7.163 24.845 0 16.002 0zm0 29.3c-2.457 0-4.869-.661-6.974-1.91l-.5-.297-5.183 1.359 1.383-5.053-.326-.519a13.333 13.333 0 01-2.046-7.178c0-7.37 5.997-13.367 13.37-13.367 3.57 0 6.927 1.391 9.452 3.916 2.525 2.525 3.916 5.882 3.916 9.452 0 7.37-5.997 13.367-13.37 13.367zm7.333-9.756c-.402-.201-2.378-1.173-2.746-1.307-.368-.134-.636-.201-.904.201-.268.402-1.038 1.307-1.272 1.575-.234.268-.469.301-.871.1-.402-.201-1.698-.626-3.234-1.996-1.196-1.066-2.003-2.383-2.237-2.785-.234-.402-.025-.619.176-.819.181-.18.402-.469.603-.703.201-.234.268-.402.402-.67.134-.268.067-.502-.033-.703-.1-.201-.904-2.177-1.239-2.981-.326-.783-.658-.677-.904-.689-.234-.012-.502-.015-.77-.015-.268 0-.703.1-1.072.502-.368.402-1.406 1.374-1.406 3.351 0 1.977 1.44 3.886 1.641 4.154.201.268 2.833 4.326 6.863 6.066.959.414 1.707.661 2.29.847.963.306 1.839.263 2.532.16.773-.116 2.378-.972 2.713-1.909.335-.938.335-1.742.234-1.909-.101-.167-.368-.268-.77-.469z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight font-sans">Flash Transport Dispatch</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-white/90 font-medium mt-0.5 font-sans">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Online • Typically replies in 2 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F6F7F9] space-y-3 max-h-[360px] overflow-y-auto">
            <p className="text-xs text-[#686D75] leading-relaxed font-body">
              Welcome to Flash Transport! Select an enquiry option below to connect directly with our operations dispatch team on WhatsApp:
            </p>

            {quickPrompts.map((item, idx) => (
              <a
                key={idx}
                href={getWaLink(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3 bg-white rounded-2xl border border-[#E7E9ED] hover:border-[#25D366] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F6F7F9] group-hover:bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[#191C22] group-hover:text-[#128C7E] transition-colors truncate font-sans">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#686D75] truncate mt-0.5 font-body">
                      {item.desc}
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-[#E7E9ED] flex items-center justify-between text-[11px] text-[#686D75] font-sans">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              Official Verified Dispatch
            </span>
            <a
              href={getWaLink('Hello Flash Transport, I would like to enquire about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#128C7E] hover:underline"
            >
              Direct Chat →
            </a>
          </div>
        </div>
      )}

      {/* Floating Original WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Flash Transport on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer relative"
      >
        {/* Pulsing online status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </span>

        {/* Authentic Original WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white transition-transform duration-200 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0C7.164 0 0 7.163 0 16.002c0 2.825.738 5.578 2.138 8.006L.068 31.932l8.113-2.128a15.932 15.932 0 007.821 2.054h.007c8.836 0 16-7.163 16-16.002C32.009 7.163 24.845 0 16.002 0zm0 29.3c-2.457 0-4.869-.661-6.974-1.91l-.5-.297-5.183 1.359 1.383-5.053-.326-.519a13.333 13.333 0 01-2.046-7.178c0-7.37 5.997-13.367 13.37-13.367 3.57 0 6.927 1.391 9.452 3.916 2.525 2.525 3.916 5.882 3.916 9.452 0 7.37-5.997 13.367-13.37 13.367zm7.333-9.756c-.402-.201-2.378-1.173-2.746-1.307-.368-.134-.636-.201-.904.201-.268.402-1.038 1.307-1.272 1.575-.234.268-.469.301-.871.1-.402-.201-1.698-.626-3.234-1.996-1.196-1.066-2.003-2.383-2.237-2.785-.234-.402-.025-.619.176-.819.181-.18.402-.469.603-.703.201-.234.268-.402.402-.67.134-.268.067-.502-.033-.703-.1-.201-.904-2.177-1.239-2.981-.326-.783-.658-.677-.904-.689-.234-.012-.502-.015-.77-.015-.268 0-.703.1-1.072.502-.368.402-1.406 1.374-1.406 3.351 0 1.977 1.44 3.886 1.641 4.154.201.268 2.833 4.326 6.863 6.066.959.414 1.707.661 2.29.847.963.306 1.839.263 2.532.16.773-.116 2.378-.972 2.713-1.909.335-.938.335-1.742.234-1.909-.101-.167-.368-.268-.77-.469z" />
        </svg>
      </button>
    </div>
  );
};
