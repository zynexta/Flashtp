import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Bus, Award, Clock } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FleetPreview } from '../components/home/FleetPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SectionHeading } from '../components/common/SectionHeading';
import { BLOG_ARTICLES } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard';
import { ROUTES } from '../config/routes';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Flash Transport | Bus Rental Abu Dhabi & Passenger Transport UAE';
  }, []);

  const latestBlogs = BLOG_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Featured Services */}
      <ServicesPreview />

      {/* 4. Fleet Preview */}
      <FleetPreview />

      {/* 5. Why Choose Flash Transport & Corporate / School Standards */}
      <WhyChooseUs />

      {/* 6. Latest Blog Insights & Industry Guides */}
      <section className="py-16 sm:py-24 bg-[#F6F7F9] border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Transport Insights & Guides"
              title="Latest Articles & Transport"
              highlightedText="News"
              description="Authoritative resources on UAE transport regulations, bus leasing pricing guides, and passenger safety best practices."
              align="left"
              className="mb-0 max-w-2xl"
            />

            <div className="mt-6 md:mt-0 flex-shrink-0">
              <Link
                to={ROUTES.BLOG}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E7E9ED] bg-white hover:bg-neutral-100 text-[#191C22] text-sm font-bold transition-colors shadow-sm"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4 text-[#D92332]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

