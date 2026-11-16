import React from 'react';
import { ServiceItem } from '../../types/service';
import { ServiceCard } from './ServiceCard';

export interface ServiceGridProps {
  services: ServiceItem[];
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

