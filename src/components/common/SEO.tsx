import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_CONTACT } from '../../data/company';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Flash Transport Passengers By Bus LLC - Premier bus rental, corporate staff transportation, school buses, and luxury vehicle hire across Abu Dhabi, Dubai, and UAE.',
  image = '/images/hero-abu-dhabi-bus.webp',
  type = 'website',
  schema,
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://flashtp.com${pathname}`;
  const fullTitle = title
    ? `${title} | Flash Transport Abu Dhabi`
    : 'Flash Transport | Premier Bus Rental & Passenger Transport Abu Dhabi';

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (nameOrProperty: string, content: string, isProperty: boolean = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('description', description);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', image, true);
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // 3. Inject Structured Data JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY_CONTACT.legalName,
      alternateName: COMPANY_CONTACT.brandName,
      url: 'https://flashtp.com',
      logo: 'https://flashtp.com/images/flash-transport-logo.webp',
      image: 'https://flashtp.com/images/hero-abu-dhabi-bus.webp',
      telephone: COMPANY_CONTACT.phone,
      email: COMPANY_CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '704, Al Junaibi Building, opposite Al Zahiyah Bus Station, Al Meena Street',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY_CONTACT.mapCoordinates.lat,
        longitude: COMPANY_CONTACT.mapCoordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
    };

    scriptTag.textContent = JSON.stringify(schema || defaultSchema);
  }, [fullTitle, description, canonicalUrl, image, type, schema]);

  return null;
};

