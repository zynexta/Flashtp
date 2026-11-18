import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '../../data/company';
import { validateContactForm } from '../../lib/validation';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry logging
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Contact Enquiry via Website*\nName: ${formData.name || 'Visitor'}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject}\nMessage: ${formData.message || 'I would like to inquire about Flash Transport services.'}`;
    const cleanPhone = COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-[#E7E9ED] shadow-card text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#191C22]">
          Message Received Successfully!
        </h3>
        <p className="text-sm text-[#686D75] max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#191C22]">{formData.name}</span>. Our fleet coordinator in Abu Dhabi will review your request and get back to you within 30 minutes during working hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
              });
            }}
            className="text-xs font-semibold text-[#686D75] hover:text-[#191C22] underline py-2"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E9ED] shadow-card space-y-5">
      <div className="border-b border-[#E7E9ED] pb-4">
        <h3 className="text-xl font-bold text-[#191C22]">Send Us a Message</h3>
        <p className="text-xs text-[#686D75] mt-1">
          Fill out the details below and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Your Full Name <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Mohammed Al Hashimi"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
              errors.name ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Email Address <span className="text-[#D92332]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@company.ae"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Phone / WhatsApp Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +971 50 123 4567"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E9ED] text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Bus Rental Quotation">Bus Rental Quotation</option>
            <option value="Staff Transportation Contract">Staff Transportation Contract</option>
            <option value="School Bus Partnership">School Bus Partnership</option>
            <option value="Rent A Car & Limousine">Rent A Car & Limousine</option>
            <option value="Feedback & Support">Feedback & Support</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#191C22] mb-1.5">
          Your Message <span className="text-[#D92332]">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your transport requirements, passenger numbers, or questions..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#191C22] bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-[#D92332] ${
            errors.message ? 'border-[#D92332] bg-red-50/30' : 'border-[#E7E9ED]'
          }`}
        />
        {errors.message && (
          <p className="text-xs text-[#D92332] mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
          icon={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>

        <a
          href={generateWhatsAppMessage()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Prefer WhatsApp? Click to message immediately</span>
        </a>
      </div>
    </form>
  );
};

