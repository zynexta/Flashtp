import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-semibold rounded-lg tracking-normal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantClasses = {
    primary: 'bg-[#D92332] hover:bg-[#B91F2D] text-white shadow-sm focus:ring-[#D92332] active:scale-[0.98]',
    secondary: 'bg-[#191C22] hover:bg-[#2A2F3A] text-white shadow-sm focus:ring-[#191C22] active:scale-[0.98]',
    outline: 'border border-[#E7E9ED] bg-white text-[#191C22] hover:bg-[#F6F7F9] hover:border-[#D92332] hover:text-[#D92332] focus:ring-[#D92332]',
    ghost: 'text-[#191C22] hover:bg-[#F6F7F9] hover:text-[#D92332] focus:ring-[#D92332]',
    white: 'bg-white text-[#D92332] hover:bg-neutral-100 shadow-sm focus:ring-white active:scale-[0.98]'
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

