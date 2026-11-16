import React from 'react';
import { Car, Bus, Users, Gem } from 'lucide-react';
import { VehicleCategory } from '../../types/vehicle';
import { FLEET_CATEGORIES, FLEET_VEHICLES } from '../../data/fleet';
import { cn } from '../../lib/utils';

export interface FleetFiltersProps {
  selectedCategory: VehicleCategory;
  onSelectCategory: (category: VehicleCategory) => void;
}

export const FleetFilters: React.FC<FleetFiltersProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getCount = (cat: VehicleCategory) => {
    if (cat === 'All Vehicles') return FLEET_VEHICLES.length;
    return FLEET_VEHICLES.filter(v => v.category === cat).length;
  };

  const getCategoryIcon = (cat: VehicleCategory) => {
    switch (cat) {
      case 'Large Coaches':
      case 'Mini Buses':
        return <Bus className="w-4 h-4 flex-shrink-0" />;
      case 'Passenger Vans':
        return <Users className="w-4 h-4 flex-shrink-0" />;
      case 'Luxury Cars':
        return <Gem className="w-4 h-4 flex-shrink-0" />;
      case 'SUVs':
      case 'All Vehicles':
      default:
        return <Car className="w-4 h-4 flex-shrink-0" />;
    }
  };

  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar select-none">
      {FLEET_CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        const count = getCount(category);

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 flex-shrink-0 cursor-pointer',
              isSelected
                ? 'bg-[#E51E32] text-white shadow-sm'
                : 'bg-white hover:bg-neutral-50 text-[#191C22] border border-[#E7E9ED]'
            )}
          >
            {getCategoryIcon(category)}
            <span>{category}</span>
            <span
              className={cn(
                'px-2 py-0.5 rounded-full text-[11px] font-extrabold',
                isSelected ? 'bg-white text-[#E51E32]' : 'bg-[#F3F4F6] text-[#686D75]'
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
