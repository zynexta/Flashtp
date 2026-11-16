import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Calendar, Users, MapPin, Bus, ShieldCheck, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/company';
import { SERVICES } from '../../data/services';
import { FLEET_VEHICLES } from '../../data/fleet';
import { validateQuoteForm } from '../../lib/validation';
import { Button } from '../common/Button';

export const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: searchParams.get('service') || 'school-college-transportation-abu-dabi',
    vehicleType: searchParams.get('vehicle') || 'Any Suitable Vehicle',
    passengers: searchParams.get('passengers') || '30',
    pickupLocation: '',
    destination: 'Abu Dhabi / Dubai',
    travelDate: '',
    duration: 'Single Day Charter',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    const s = searchParams.get('service');
    const v = searchParams.get('vehicle');
    if (s) setFormData(prev => ({ ...prev, serviceRequired: s }));
    if (v) setFormData(prev => ({ ...prev, vehicleType: v }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateQuoteForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);

    // Generate reference code e.g. FT-2026-9481
    const refCode = `FT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReference(refCode);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getWhatsAppSummaryLink = () => {
    const text = `*New Transport Quote Request [Ref: ${quoteReference || 'Pending'}]*\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceRequired}\nVehicle: ${formData.vehicleType}\nPassengers: ${formData.passengers}\nPickup: ${formData.pickupLocation}\nDestination: ${formData.destination}\nDate: ${formData.travelDate}\nDuration: ${formData.duration}\nRequirements: ${formData.additionalRequirements || 'None'}`;
    const cleanPhone = COMPANY_CONTACT.phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E7E9ED] shadow-card max-w-2xl mx-auto space-y-6 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#D92332] bg-[#FEECEE] px-3 py-1 rounded-full">
            Quote Reference: {quoteReference}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191C22] mt-3">
            Quotation Request Received!
          </h3>
          <p className="mt-2 text-sm text-[#686D75] max-w-lg mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-[#191C22]">{formData.fullName}</span>. Your request has been queued in our central dispatch logistics desk in Abu Dhabi.
          </p>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="bg-[#F6F7F9] rounded-xl p-5 border border-[#E7E9ED] text-left text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between border-b border-[#E7E9ED] pb-2">
            <span className="text-[#686D75]">Service Category:</span>
            <span className="font-semibold text-[#191C22]">{formData.serviceRequired}</span>
          </div>
          <div className="flex justify-between border-b border-[#E7E9ED] pb-2">
            <span className="text-[#686D75]">Vehicle Preference:</span>
            <span className="font-semibold text-[#191C22]">{formData.vehicleType}</span>
          </div>
          <div className="flex justify-between border-b border-[#E7E9ED] pb-2">
            <span className="text-[#686D75]">Passenger Count:</span>
            <span className="font-semibold text-[#191C22]">{formData.passengers} Passengers</span>
          </div>
          <div className="flex justify-between border-b border-[#E7E9ED] pb-2">
            <span className="text-[#686D75]">Route:</span>
            <span className="font-semibold text-[#191C22]">{formData.pickupLocation} &rarr; {formData.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#686D75]">Service Date / Duration:</span>
            <span className="font-semibold text-[#191C22]">{formData.travelDate} ({formData.duration})</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-3 pt-2">
          <p className="text-xs text-[#686D75]">
            Our fleet specialist will email and WhatsApp your customized commercial proposal shortly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppSummaryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Reference via WhatsApp for Immediate Dispatch</span>
            </a>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  serviceRequired: 'school-college-transportation-abu-dabi',
                  vehicleType: 'Any Suitable Vehicle',
                  passengers: '30',
                  pickupLocation: '',
                  destination: 'Abu Dhabi / Dubai',
                  travelDate: '',
                  duration: 'Single Day Charter',
                  additionalRequirements: ''
                });
              }}
              className="text-xs font-semibold text-[#686D75] hover:text-[#191C22] underline py-2"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E9ED] shadow-card space-y-6">
      <div className="border-b border-[#E7E9ED] pb-5">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D92332]"></span>
          <span className="text-xs uppercase font-bold tracking-widest text-[#D92332]">
            Official Commercial Quotation
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-[#191C22]">
          Request Transport Pricing & Availability
        </h3>
        <p className="text-sm text-[#686D75] mt-1">
          Complete the details below to receive competitive corporate rates from Flash Transport.
        </p>
      </div>

      {/* Row 1: Personal / Company Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Full Name / Company Representative <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Tariq Mansour"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.fullName ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Corporate / Personal Email <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. procurement@company.ae"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.email ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Phone / WhatsApp Number <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +971 50 123 4567"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.phone ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Service & Vehicle Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Service Required <span className="text-[#D92332]">*</span>
          </label>
          <select
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          >
            {SERVICES.map(s => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Vehicle Type Preference
          </label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          >
            <option value="Any Suitable Vehicle">Any Suitable Vehicle (Recommended)</option>
            {FLEET_VEHICLES.map(v => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.capacity})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Number of Passengers <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="number"
            name="passengers"
            min="1"
            max="1000"
            value={formData.passengers}
            onChange={handleChange}
            placeholder="e.g. 45"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.passengers ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.passengers && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.passengers}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Itinerary & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Pickup Location <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="e.g. Abu Dhabi Airport / Musaffah"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.pickupLocation ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.pickupLocation && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.pickupLocation}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Destination / Route
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Dubai Marina / ICAD Site"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Travel / Start Date <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.travelDate ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.travelDate && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.travelDate}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Contract Duration
          </label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          >
            <option value="Single Day Charter">Single Day Charter</option>
            <option value="Multi-Day Event (2-7 Days)">Multi-Day Event (2-7 Days)</option>
            <option value="1 Month Lease">1 Month Lease</option>
            <option value="3-6 Months Contract">3-6 Months Contract</option>
            <option value="Annual Corporate SLA">Annual Corporate SLA (1+ Year)</option>
          </select>
        </div>
      </div>

      {/* Row 4: Additional Requirements */}
      <div>
        <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
          Additional Requirements / Notes
        </label>
        <textarea
          name="additionalRequirements"
          rows={3}
          value={formData.additionalRequirements}
          onChange={handleChange}
          placeholder="Shift timings, flight numbers, luggage details, special industrial site permits needed..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
        />
      </div>

      {/* Submit Button & Assurance */}
      <div className="pt-4 border-t border-[#E7E9ED] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto shadow-md"
          icon={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? 'Calculating Quote & Dispatching...' : 'Submit Official Quote Request'}
        </Button>

        <div className="text-xs text-[#686D75] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Official response within 30 minutes • Transparent all-inclusive rates</span>
        </div>
      </div>
    </form>
  );
};

