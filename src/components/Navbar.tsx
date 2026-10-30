import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/eventData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About the Trophy', path: '/about' },
    { name: 'Event Highlights', path: '/highlights' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050B14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (1 line, single element) */}
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#0066FF]">
                L.E
              </span>
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#EF4444]">
                BLAZE
              </span>
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#D4AF37]">
                TROPHY
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide uppercase">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4AF37]'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-emerald-900/30 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Contact"
              className="p-2 text-emerald-400 hover:text-white rounded-lg bg-emerald-950/40 border border-emerald-800/40"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#07111E]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-l-2 border-[#D4AF37]'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {BRAND_CONFIG.contact.phoneFormatted}</span>
            </a>
            <a
              href={BRAND_CONFIG.social.instagramReel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Watch Event Reel</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
