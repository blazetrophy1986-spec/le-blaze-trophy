import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HighlightsPage } from './pages/HighlightsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Auto scroll-to-top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#050B14] text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/highlights" element={<HighlightsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
