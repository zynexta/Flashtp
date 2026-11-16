import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  description,
  align = 'center',
  dark = false,
  className
}) => {
  return (
    <div className={cn(
      'max-w-3xl mb-12',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
      className
    )}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 mb-3', align === 'center' ? 'justify-center' : '')}>
          <span className="w-2 h-2 rounded-full bg-[#D92332]"></span>
          <span className="font-sans text-xs uppercase font-semibold tracking-widest text-[#D92332]">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className={cn(
        'font-sans text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-bold tracking-tight leading-[1.2]',
        dark ? 'text-white' : 'text-[#191C22]'
      )}>
        {title}{' '}
        {highlightedText && (
          <span className="text-[#D92332] relative inline-block">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className={cn(
          'mt-4 font-body text-[15px] sm:text-base leading-[1.65] font-normal text-balance',
          dark ? 'text-neutral-300' : 'text-[#686D75]'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

