import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { QuoteForm } from '../components/forms/QuoteForm';
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageSquare, Bus } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/company';

export const RequestQuote: React.FC = () => {
  useEffect(() => {
    document.title = 'Request a Quote | Bus Rental Abu Dhabi | Flash Transport';
  }, []);

  return (
    <div className="bg-[#F6F7F9]">
      {/* Header */}
      <section className="bg-[#191C22] text-white pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Request a Quote' }]}
            className="text-neutral-400 mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92332] bg-white/10 px-3 py-1 rounded-full inline-block">
              Rapid Commercial Quotation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Request Your Custom Bus Rental or Fleet Proposal
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Provide your trip or contract details below. Our commercial operations desk in Abu Dhabi will review your itinerary and reply within 30 minutes with our best corporate rates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Sidebar Trust & Support */}
            <div className="lg:col-span-4 space-y-6">
              {/* Trust Box */}
              <div className="bg-white rounded-2xl p-6 border border-[#E7E9ED] shadow-subtle space-y-4">
                <h3 className="text-base font-bold text-[#191C22] pb-3 border-b border-[#E7E9ED]">
                  Why Quote with Flash Transport?
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#686D75]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-[#191C22]">Transparent Pricing:</strong> All-inclusive quotations with no hidden fuel, Salik toll, or driver surcharges.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-[#191C22]">Owned Fleet:</strong> We operate 150+ company-owned vehicles ensuring guaranteed vehicle quality and dispatch reliability.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-[#191C22]">ISO & DoT Certified:</strong> Full compliance with Abu Dhabi Integrated Transport Centre (ITC) and ADEK school safety laws.</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-[#191C22]">Standby Backup:</strong> Immediate replacement buses ready at Abu Dhabi depots for zero operational downtime.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 text-emerald-950 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <MessageSquare className="w-5 h-5" />
                  <span>Prefer Immediate WhatsApp Support?</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Need a rapid bus quote for today or tomorrow? Message our on-duty fleet coordinator directly on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Flash Transport, I need an urgent transport quotation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>

              {/* Telephone Assistance */}
              <div className="bg-[#191C22] rounded-2xl p-6 text-white space-y-3">
                <div className="text-xs font-bold text-[#D92332] uppercase tracking-wider">
                  Speak Directly with Fleet Management
                </div>
                <div className="text-xl font-bold text-white">
                  {COMPANY_CONTACT.phoneDisplay}
                </div>
                <p className="text-xs text-neutral-400">
                  24/7 Dispatch Hotline • Multilingual dispatchers (English & Arabic)
                </p>
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D92332]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

