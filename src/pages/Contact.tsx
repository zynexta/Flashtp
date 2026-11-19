 import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_CONTACT } from '../data/company';
import { ContactForm } from '../components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight, Building } from 'lucide-react';
import { Button } from '../components/common/Button';
import { ROUTES } from '../config/routes';
import { SEO } from '../components/common/SEO';

export const Contact: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Contact Us | Abu Dhabi Bus Rental Office | Flash Transport';
    if (pathname === '/contact-us') {
      navigate('/contact-us/', { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <div className="bg-[#F6F7F9]">
      <SEO
        title="Contact Us | Abu Dhabi Bus Rental Office"
        description="Contact Flash Transport Abu Dhabi headquarters for professional bus rentals, corporate staff transport contracts, and luxury vehicle hire. 24/7 operations desk."
        canonical="https://www.flashtp.com/contact-us/"
      />
      {/* Contact Hero */}
      <section className="relative bg-[#0B0D12] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden select-none">
        {/* Background High-Resolution Corporate Headquarters Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.webp"
            alt="Flash Transport Contact Abu Dhabi Headquarters"
            className="w-full h-full object-cover object-[center_right] sm:object-right brightness-[1.05] contrast-[1.02]"
          />
          {/* Directional Dark Gradient Overlay: high contrast on the left for text, completely clear and bright on the right */}
          <div className="absolute inset-0 bg-[#0B0D12]/75 sm:hidden z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0D12_0%,rgba(11,13,18,0.92)_25%,rgba(11,13,18,0.45)_40%,rgba(11,13,18,0)_58%)] hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/50 via-transparent to-transparent via-12%" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Contact Us' }]}
            className="text-neutral-400 mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31E2B] bg-white/10 px-3 py-1 rounded-full inline-block backdrop-blur-sm border border-white/10">
              We Are Ready to Assist You
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch with Flash Transport
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Have a question about our bus rental services, corporate staff contracts, or luxury vehicle hire? Contact our Abu Dhabi headquarters today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Contact Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Details & Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D92332]">
                  Direct Contact Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191C22] tracking-tight">
                  Headquarters & Dispatch
                </h2>
                <p className="text-sm text-[#686D75] leading-relaxed">
                  Our commercial logistics center in Abu Dhabi manages 24/7 fleet movements and provides immediate assistance for bookings and emergency dispatch.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4 pt-2">
                {/* Office Location */}
                <div className="bg-[#F6F7F9] p-5 rounded-2xl border border-[#E7E9ED] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#191C22]">
                      Abu Dhabi Headquarters
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686D75] leading-snug">
                      {COMPANY_CONTACT.address.full}
                    </p>
                    <p className="text-[11px] text-[#D92332] font-semibold pt-0.5">
                      Landmark: Opposite Al Zahiyah Bus Station
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#F6F7F9] p-5 rounded-2xl border border-[#E7E9ED] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#191C22]">
                      Telephone Support
                    </h3>
                    <a
                      href={`tel:${COMPANY_CONTACT.phone}`}
                      className="text-sm sm:text-base font-bold text-[#191C22] hover:text-[#D92332] block"
                    >
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#686D75]">
                      Direct line to fleet management
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#F6F7F9] p-5 rounded-2xl border border-[#E7E9ED] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#191C22]">
                      Electronic Mail
                    </h3>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="text-sm font-semibold text-[#191C22] hover:text-[#D92332] block truncate"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                    <p className="text-xs text-[#686D75]">
                      Official procurement inquiries & RFPs
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#F6F7F9] p-5 rounded-2xl border border-[#E7E9ED] flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#191C22] text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D92332]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#191C22]">
                      Operating & Dispatch Hours
                    </h3>
                    <p className="text-xs text-[#686D75]">
                      <span className="font-semibold text-[#191C22]">Office:</span> Sat – Thu, 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-xs font-semibold text-emerald-600">
                      24/7 Operations & Emergency Fleet Dispatch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border border-[#E7E9ED] rounded-2xl overflow-hidden shadow-subtle">
            <div className="p-4 bg-[#F6F7F9] border-b border-[#E7E9ED] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#191C22]">
                <MapPin className="w-4 h-4 text-[#D92332]" />
                <span>Flash Transport Location Map — Al Zahiyah / Tourist Club Area, Abu Dhabi</span>
              </div>
              <a
                href="https://maps.google.com/?q=Al+Zahiyah+Bus+Station+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D92332] hover:underline"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="h-96 w-full bg-neutral-200">
              <iframe
                title="Flash Transport Abu Dhabi Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.5517949310887!2d54.3785112!3d24.4981445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665675555555%3A0x6789abcde!2sAl%20Zahiyah%20Bus%20Station%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

