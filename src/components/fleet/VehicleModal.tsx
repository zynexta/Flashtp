import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Users, Briefcase, Snowflake, Gauge, Fuel, Music, Check, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { VehicleItem } from '../../types/vehicle';
import { getAssetUrl } from '../../data/assets';
import { ROUTES } from '../../config/routes';
import { COMPANY_CONTACT } from '../../data/company';

export interface VehicleModalProps {
  vehicle: VehicleItem | null;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (vehicle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const imgUrl = getAssetUrl(vehicle.imageKey);
  const cleanPhone = COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '');
  const waText = `Hello Flash Transport! I am interested in inquiring about the ${vehicle.name} (${vehicle.capacity}).`;
  const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all border border-[#E7E9ED] relative animate-fade-in my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Image Header */}
          <div className="relative h-64 sm:h-80 bg-neutral-900 overflow-hidden">
            <img
              src={imgUrl}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-6 right-6 text-white flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D92332] bg-white px-3 py-1 rounded-full inline-block mb-1.5">
                  {vehicle.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {vehicle.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  {vehicle.tagline}
                </p>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white font-bold text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D92332]" />
                <span>{vehicle.capacity}</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-20rem)] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#191C22] mb-2">
                Vehicle Overview
              </h4>
              <p className="text-sm text-[#686D75] leading-relaxed">
                {vehicle.overview}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="bg-[#F6F7F9] rounded-2xl p-5 border border-[#E7E9ED]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#191C22] mb-3">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#191C22]">
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                  <Users className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                  <span><strong>Capacity:</strong> {vehicle.specs.passengers}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                  <Briefcase className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                  <span><strong>Luggage:</strong> {vehicle.specs.luggage}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                  <Snowflake className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                  <span><strong>Climate:</strong> {vehicle.specs.airConditioning}</span>
                </div>
                {vehicle.specs.transmission && (
                  <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                    <Gauge className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                    <span><strong>Gearbox:</strong> {vehicle.specs.transmission}</span>
                  </div>
                )}
                {vehicle.specs.fuelType && (
                  <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                    <Fuel className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                    <span><strong>Fuel:</strong> {vehicle.specs.fuelType}</span>
                  </div>
                )}
                {vehicle.specs.entertainment && (
                  <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E7E9ED]">
                    <Music className="w-4 h-4 text-[#D92332] flex-shrink-0" />
                    <span><strong>Audio/Video:</strong> {vehicle.specs.entertainment}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#191C22] mb-3">
                Equipped Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#686D75]">
                {vehicle.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D92332] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            {vehicle.idealFor && vehicle.idealFor.length > 0 && (
              <div className="pt-2 border-t border-[#E7E9ED]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191C22] mb-2">
                  Recommended For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle.idealFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#F6F7F9] text-xs font-medium text-[#191C22] border border-[#E7E9ED]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTAs */}
          <div className="p-6 bg-[#F6F7F9] border-t border-[#E7E9ED] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#686D75] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Company-owned verified fleet vehicle</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>

              <Link
                to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(vehicle.name)}`}
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D92332] hover:bg-[#B91F2D] text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>Request Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

