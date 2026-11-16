import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogArticle } from '../../types/blog';
import { getAssetUrl } from '../../data/assets';

export interface BlogCardProps {
  article: BlogArticle;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const imgUrl = getAssetUrl(article.imageKey);

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#E7E9ED] shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
      <div>
        {/* Featured Image */}
        <div className="relative h-48 sm:h-52 bg-neutral-100 overflow-hidden">
          <img
            src={imgUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-[#D92332] shadow-sm">
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-sans text-[#686D75] mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D92332]" />
              <span>{article.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#686D75]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h3 className="font-sans text-lg sm:text-xl font-bold text-[#191C22] group-hover:text-[#D92332] transition-colors leading-snug line-clamp-2">
            <Link to={`/${article.slug}/`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2.5 font-body text-xs sm:text-sm text-[#686D75] line-clamp-3 leading-[1.6]">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0">
        <Link
          to={`/${article.slug}/`}
          className="font-sans text-xs font-semibold uppercase tracking-wider text-[#191C22] group-hover:text-[#D92332] flex items-center gap-1.5 transition-colors pt-3 border-t border-[#E7E9ED]"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

