import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BLOG_ARTICLES, BLOG_MAP } from '../data/blog';
import { SERVICES } from '../data/services';
import { getAssetUrl } from '../data/assets';
import { Calendar, Clock, User, ArrowRight, Share2, Bus, ShieldCheck, Tag } from 'lucide-react';
import { Button } from '../components/common/Button';
import { ROUTES } from '../config/routes';
import { NotFound } from './NotFound';

export const BlogDetail: React.FC = () => {
  const { pathname } = useLocation();
  const cleanSlug = pathname.replace(/^\/+|\/+$/g, '');
  const article = BLOG_MAP[cleanSlug] || BLOG_ARTICLES.find(b => b.slug === cleanSlug);

  useEffect(() => {
    if (article) {
      document.title = `${article.metaTitle || article.title} | Flash Transport Blog`;
    }
  }, [article]);

  if (!article) {
    return <NotFound />;
  }

  const imgUrl = getAssetUrl(article.imageKey);
  const relatedArticles = BLOG_ARTICLES.filter(b => b.id !== article.id).slice(0, 3);
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="bg-[#F6F7F9]">
      {/* Article Header */}
      <section className="bg-[#191C22] text-white pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-[#2A2F3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: ROUTES.BLOG },
              { label: article.category, href: ROUTES.BLOG },
              { label: article.title }
            ]}
            className="text-neutral-400 mb-6"
          />

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D92332] bg-white/10 px-3 py-1 rounded-full inline-block">
              {article.category}
            </span>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author & Meta bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D92332] text-white flex items-center justify-center font-bold text-xs">
                  FT
                </div>
                <div>
                  <span className="font-semibold text-white">{article.author.name}</span>
                  <span className="text-neutral-400 text-xs block">{article.author.role}</span>
                </div>
              </div>

              <span>•</span>

              <div className="flex items-center gap-1.5 text-neutral-400">
                <Calendar className="w-4 h-4 text-[#D92332]" />
                <span>{article.publishedDate}</span>
              </div>

              <span>•</span>

              <div className="flex items-center gap-1.5 text-neutral-400">
                <Clock className="w-4 h-4 text-neutral-400" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-12 sm:py-20 bg-white border-b border-[#E7E9ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-[#E7E9ED] mb-10 max-h-[460px]">
            <img
              src={imgUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Prose */}
          <div className="prose prose-lg max-w-none text-[#191C22] space-y-8 leading-relaxed">
            {/* Introduction */}
            <p className="text-lg sm:text-xl text-[#191C22] font-medium leading-relaxed border-l-4 border-[#D92332] pl-5 italic bg-[#F6F7F9] py-4 rounded-r-xl">
              {article.content.introduction}
            </p>

            {/* Sections */}
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191C22] tracking-tight">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-base text-[#686D75] leading-relaxed">
                    {para}
                  </p>
                ))}

                {sec.listItems && sec.listItems.length > 0 && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {sec.listItems.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#191C22]">
                        <span className="w-2 h-2 rounded-full bg-[#D92332] flex-shrink-0 mt-2" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-[#F6F7F9] rounded-2xl p-6 sm:p-8 border border-[#E7E9ED] mt-8 space-y-3">
              <h3 className="text-xl font-bold text-[#191C22]">
                Key Takeaway
              </h3>
              <p className="text-sm sm:text-base text-[#686D75] leading-relaxed">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="pt-8 mt-10 border-t border-[#E7E9ED] flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#686D75] mr-1" />
              {article.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#F6F7F9] text-xs font-semibold text-[#191C22] border border-[#E7E9ED]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Quick Quote Banner Inside Article */}
          <div className="mt-12 bg-[#191C22] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-xl font-bold text-white">
                Need Professional Transportation in Abu Dhabi?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Explore our modern 150+ fleet or talk directly with our commercial fleet dispatch.
              </p>
            </div>
            <Button
              href={ROUTES.REQUEST_QUOTE}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="flex-shrink-0"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services Strip */}
      <section className="py-12 bg-[#F6F7F9] border-b border-[#E7E9ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#191C22]">
              Related Commercial Services
            </h3>
            <Link
              to={ROUTES.SERVICES}
              className="text-xs font-bold uppercase tracking-wider text-[#D92332] hover:underline"
            >
              All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-5 border border-[#E7E9ED] shadow-subtle hover:border-[#D92332] transition-colors"
              >
                <h4 className="text-base font-bold text-[#191C22]">
                  <Link to={`/${srv.slug}/`} className="hover:text-[#D92332]">
                    {srv.title}
                  </Link>
                </h4>
                <p className="mt-1.5 text-xs text-[#686D75] line-clamp-2">
                  {srv.shortDescription}
                </p>
                <div className="mt-3 pt-3 border-t border-[#E7E9ED] flex justify-between items-center text-xs">
                  <Link to={`/${srv.slug}/`} className="font-bold text-[#191C22]">
                    Details &rarr;
                  </Link>
                  <Link to={`${ROUTES.REQUEST_QUOTE}?service=${srv.slug}`} className="font-semibold text-[#D92332]">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#191C22]">
              Recommended Articles & Guides
            </h3>
            <Link
              to={ROUTES.BLOG}
              className="text-xs font-bold uppercase tracking-wider text-[#D92332] hover:underline"
            >
              View All Articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => {
              const relImg = getAssetUrl(rel.imageKey);
              return (
                <div
                  key={rel.id}
                  className="bg-[#F6F7F9] rounded-2xl overflow-hidden border border-[#E7E9ED] shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-neutral-200">
                      <img
                        src={relImg}
                        alt={rel.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-[#686D75] mb-2">{rel.publishedDate}</div>
                      <h4 className="text-base font-bold text-[#191C22] hover:text-[#D92332] line-clamp-2">
                        <Link to={`/${rel.slug}/`}>
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-xs text-[#686D75] line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link
                      to={`/${rel.slug}/`}
                      className="text-xs font-bold uppercase text-[#D92332] flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

