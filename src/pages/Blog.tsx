import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { BLOG_ARTICLES } from '../data/blog';
import { BlogGrid } from '../components/blog/BlogGrid';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../data/assets';

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog & Industry Insights | Abu Dhabi Bus Rental Guides | Flash Transport';
  }, []);

  const featuredArticle = BLOG_ARTICLES[0];
  const remainingArticles = BLOG_ARTICLES.slice(1);
  const featuredImgUrl = getAssetUrl(featuredArticle.imageKey);

  return (
    <div className="bg-[#F6F7F9]">
      {/* Blog Hero Header */}
      <section className="relative bg-[#0B0D12] text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden select-none">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog-hero.jpg"
            alt="Flash Transport UAE Industry Insights & Guides"
            className="w-full h-full object-cover object-[center_right] sm:object-right"
          />
          {/* Directional Dark Gradient Overlay for Maximum Left-Side Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D12] via-[#0B0D12]/92 via-45% to-[#0B0D12]/25 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-[#0B0D12]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[{ label: 'Blog & Insights' }]}
            className="text-neutral-400 mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E31E2B] bg-white/10 px-3 py-1 rounded-full inline-block backdrop-blur-sm border border-white/10">
              UAE Ground Transport Knowledgebase
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transport Guides, Regulations & Industry News
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Expert articles on Abu Dhabi bus rental costs, Department of Transport safety regulations, corporate fleet management, and intercity travel tips.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Article */}
      <section className="py-12 bg-white border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F6F7F9] rounded-3xl overflow-hidden border border-[#E7E9ED] shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image */}
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden">
              <img
                src={featuredImgUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#D92332] text-white text-xs font-bold shadow-md">
                Featured Guide
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#686D75]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D92332]" />
                  <span>{featuredArticle.publishedDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#686D75]" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191C22] hover:text-[#D92332] transition-colors leading-tight">
                <Link to={`/${featuredArticle.slug}/`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm text-[#686D75] leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  to={`/${featuredArticle.slug}/`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D92332] hover:bg-[#B91F2D] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Grid with Filters & Search */}
      <section className="py-16 sm:py-24 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92332]">
              All Published Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191C22] mt-1">
              Explore Articles & Guides ({BLOG_ARTICLES.length})
            </h2>
          </div>

          <BlogGrid articles={BLOG_ARTICLES} />
        </div>
      </section>
    </div>
  );
};

