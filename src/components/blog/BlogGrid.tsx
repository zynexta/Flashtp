import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { BlogArticle } from '../../types/blog';
import { BLOG_CATEGORIES } from '../../data/blog';
import { BlogCard } from './BlogCard';
import { cn } from '../../lib/utils';

export interface BlogGridProps {
  articles: BlogArticle[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All Articles' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0',
                  isSelected
                    ? 'bg-[#D92332] text-white shadow-sm'
                    : 'bg-white hover:bg-neutral-100 text-[#191C22] border border-[#E7E9ED]'
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72 flex-shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides & articles..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E7E9ED] bg-white text-xs sm:text-sm text-[#191C22] focus:outline-none focus:ring-2 focus:ring-[#D92332]"
          />
          <Search className="w-4 h-4 text-[#686D75] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E7E9ED] p-8">
          <h4 className="text-lg font-bold text-[#191C22]">No articles found</h4>
          <p className="text-sm text-[#686D75] mt-1">Try searching for other terms like "safety", "cost", or "bus rental".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

