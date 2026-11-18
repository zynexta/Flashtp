import React from 'react';
import { VehicleItem } from '../../types/vehicle';
import { FleetCard } from './FleetCard';

export interface FleetGridProps {
  vehicles: VehicleItem[];
  visibleCount?: number;
  onSelect?: (vehicle: VehicleItem) => void;
}

export const FleetGrid: React.FC<FleetGridProps> = ({ vehicles, visibleCount, onSelect }) => {
  if (vehicles.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-[#E7E9ED] p-8">
        <h4 className="text-lg font-bold text-[#191C22]">No vehicles found in this category</h4>
        <p className="text-sm text-[#686D75] mt-1">Please try selecting another filter above or contact our dispatch team.</p>
      </div>
    );
  }

  const displayedVehicles = visibleCount ? vehicles.slice(0, visibleCount) : vehicles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      {displayedVehicles.map((vehicle) => (
        <FleetCard
          key={vehicle.id}
          vehicle={vehicle}
          onSelect={onSelect}
          className="animate-in fade-in duration-300"
        />
      ))}
    </div>
  );
};
