import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';
import { SEO } from './components/common/SEO';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Fleet } from './pages/Fleet';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { RequestQuote } from './pages/RequestQuote';
import { NotFound } from './pages/NotFound';

import { ROUTES, ROUTE_REDIRECTS } from './config/routes';
import { SERVICES } from './data/services';
import { BLOG_ARTICLES } from './data/blog';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      <ScrollToTop />
      <WhatsAppWidget />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path="/about" element={<Navigate to={ROUTES.ABOUT} replace />} />
          <Route path="/best-bus-rental-companies-in-abu-dhabi-and-dubai/" element={<About />} />
          <Route path="/best-bus-rental-companies-in-abu-dhabi-and-dubai" element={<About />} />

          {/* Services Pages */}
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path="/services" element={<Navigate to={ROUTES.SERVICES} replace />} />
          <Route path="/projects" element={<Navigate to={ROUTES.SERVICES} replace />} />
          <Route path="/projects/" element={<Navigate to={ROUTES.SERVICES} replace />} />

          {/* Fleet Pages */}
          <Route path={ROUTES.FLEET} element={<Fleet />} />
          <Route path="/abudhabi-bus-and-cars" element={<Fleet />} />
          <Route path="/fleet/" element={<Fleet />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/our-fleet/" element={<Fleet />} />
          <Route path="/our-fleet" element={<Fleet />} />

          {/* Blog Landing */}
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path="/blog" element={<Navigate to={ROUTES.BLOG} replace />} />

          {/* Contact & Quote Pages */}
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="/contact" element={<Navigate to={ROUTES.CONTACT} replace />} />
          <Route path="/contact/" element={<Navigate to={ROUTES.CONTACT} replace />} />
          <Route path={ROUTES.REQUEST_QUOTE} element={<RequestQuote />} />
          <Route path="/request-quote" element={<Navigate to={ROUTES.REQUEST_QUOTE} replace />} />
          <Route path="/request-a-quote" element={<Navigate to={ROUTES.REQUEST_QUOTE} replace />} />
          <Route path="/enquiry" element={<Navigate to={ROUTES.REQUEST_QUOTE} replace />} />

          {/* Redirect removed services */}
          <Route path="/long-short-term-lease-bus-rental-abu-dhabi" element={<Navigate to={ROUTES.SERVICES} replace />} />
          <Route path="/long-short-term-lease-bus-rental-abu-dhabi/" element={<Navigate to={ROUTES.SERVICES} replace />} />

          {/* Individual Service Pages (Both with and without trailing slash) */}
          {SERVICES.map((s) => (
            <React.Fragment key={s.slug}>
              <Route path={`/${s.slug}/`} element={<ServiceDetail />} />
              <Route path={`/${s.slug}`} element={<ServiceDetail />} />
            </React.Fragment>
          ))}

          {/* Individual Blog Article Pages (Both with and without trailing slash) */}
          {BLOG_ARTICLES.map((b) => (
            <React.Fragment key={b.slug}>
              <Route path={`/${b.slug}/`} element={<BlogDetail />} />
              <Route path={`/${b.slug}`} element={<BlogDetail />} />
            </React.Fragment>
          ))}

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

