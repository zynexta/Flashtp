import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Bus, Phone, Compass } from 'lucide-react';
import { ROUTES } from '../config/routes';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found (404) | Flash Transport Abu Dhabi';
  }, []);

  return (
    <div className="min-h-[70vh] bg-[#F6F7F9] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E7E9ED] shadow-card">
        <div className="w-20 h-20 rounded-2xl bg-[#FEECEE] text-[#D92332] flex items-center justify-center mx-auto">
          <span className="text-3xl font-extrabold">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#191C22]">
            Destination Not Found
          </h1>
          <p className="text-sm text-[#686D75] leading-relaxed">
            The page you are looking for has been moved, renamed, or does not exist. Let's get your journey back on route.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-semibold text-[#191C22]">
          <Link
            to={ROUTES.HOME}
            className="p-3 rounded-xl bg-[#F6F7F9] hover:bg-[#FEECEE] hover:text-[#D92332] transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5 text-[#D92332]" />
            <span>Homepage</span>
          </Link>
          <Link
            to={ROUTES.SERVICES}
            className="p-3 rounded-xl bg-[#F6F7F9] hover:bg-[#FEECEE] hover:text-[#D92332] transition-colors flex items-center justify-center gap-1.5"
          >
            <Bus className="w-3.5 h-3.5 text-[#D92332]" />
            <span>Our Services</span>
          </Link>
          <Link
            to={ROUTES.FLEET}
            className="p-3 rounded-xl bg-[#F6F7F9] hover:bg-[#FEECEE] hover:text-[#D92332] transition-colors flex items-center justify-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#D92332]" />
            <span>Our Fleet</span>
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="p-3 rounded-xl bg-[#F6F7F9] hover:bg-[#FEECEE] hover:text-[#D92332] transition-colors flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#D92332]" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#E7E9ED]">
          <Button
            href={ROUTES.HOME}
            variant="primary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
            className="w-full justify-center"
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

