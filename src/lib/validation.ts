export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateQuoteForm(data: Record<string, any>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid corporate or personal email address.';
  }

  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Please provide a valid phone or WhatsApp number.';
  }

  if (!data.serviceRequired) {
    errors.serviceRequired = 'Please select the required transport service.';
  }

  if (!data.passengers || parseInt(data.passengers, 10) <= 0) {
    errors.passengers = 'Please specify the expected number of passengers.';
  }

  if (!data.pickupLocation || data.pickupLocation.trim().length < 2) {
    errors.pickupLocation = 'Please provide a pickup location.';
  }

  if (!data.travelDate) {
    errors.travelDate = 'Please select a travel or service start date.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContactForm(data: Record<string, any>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please enter your enquiry message (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

