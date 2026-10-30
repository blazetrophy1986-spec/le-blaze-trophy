import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Share2, ExternalLink, ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG, SCHOOL_DATA } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03070E] border-t border-slate-800 text-slate-300">
      {/* Upper banner: School crests and match encounter banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-[#800000]/15 via-transparent to-[#0066FF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Left: Kingswood Crest */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 p-1 rounded-xl bg-white shadow-md border border-slate-700 shrink-0">
                <img
                  src={SCHOOL_DATA.kingswood.crestUrl}
                  alt={SCHOOL_DATA.kingswood.crestAlt}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                  Kingswood College
                </div>
                <div className="text-xs text-[#D4AF37] font-serif italic">
                  "{SCHOOL_DATA.kingswood.motto}" · Kandy
                </div>
                <div className="text-[11px] text-slate-400">
                  Maroon & Royal Blue
                </div>
              </div>
            </div>

            {/* Center: Match Title */}
            <div className="text-center">
              <div className="font-heading font-black text-2xl tracking-wide uppercase text-white">
                L.E BLAZE TROPHY
              </div>
              <div className="text-xs text-[#D4AF37] tracking-widest uppercase font-semibold">
                Annual Schools Rugby Classic
              </div>
            </div>

            {/* Right: Wesley Crest */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <div className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                  Wesley College
                </div>
                <div className="text-xs text-[#4FC3F7] font-serif italic">
                  "{SCHOOL_DATA.wesley.motto}" · Colombo
                </div>
                <div className="text-[11px] text-slate-400">
                  The Double Blues
                </div>
              </div>
              <div className="w-14 h-14 p-1 rounded-xl bg-white shadow-md border border-slate-700 shrink-0">
                <img
                  src={SCHOOL_DATA.wesley.crestUrl}
                  alt={SCHOOL_DATA.wesley.crestAlt}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left md:hidden">
                <div className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                  Wesley College
                </div>
                <div className="text-xs text-[#4FC3F7] font-serif italic">
                  "{SCHOOL_DATA.wesley.motto}" · Colombo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-2xl tracking-tight text-[#0066FF]">
                L.E
              </span>
              <span className="font-heading font-black text-2xl tracking-tight text-[#EF4444]">
                BLAZE
              </span>
              <span className="font-heading font-black text-2xl tracking-tight text-[#D4AF37]">
                TROPHY
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-500">
              Honoring Louis Edmund Blaze, founder of Kingswood College and pioneer of schoolboy rugby in Sri Lanka (1891).
            </p>

            {/* Official Colors Swatches */}
            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Official Colors
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {BRAND_CONFIG.officialColors.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium border border-slate-700 bg-slate-900/60"
                    title={`${c.name}: ${c.label}`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block border border-black/40"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-slate-300">{c.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Site Navigation */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
                  About the Trophy & Heritage
                </Link>
              </li>
              <li>
                <Link to="/highlights" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
                  Event Highlights & Moments
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
                  Editorial Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
                  Contact & Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
              Connect & Media
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={BRAND_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs">WhatsApp Direct Desk</div>
                  <div className="text-[11px] text-slate-400">{BRAND_CONFIG.contact.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={BRAND_CONFIG.social.instagramReel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-950/40 border border-pink-800/40 flex items-center justify-center text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-xs">Official Instagram Reel</div>
                  <div className="text-[11px] text-slate-400">Watch Match Highlights</div>
                </div>
              </a>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook Match Feeds</span>
                </div>
                <div className="flex flex-col gap-1.5 pl-5">
                  <a
                    href={BRAND_CONFIG.social.facebook1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>Event Feature Update 1</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={BRAND_CONFIG.social.facebook2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>Match Gallery Post 2</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={BRAND_CONFIG.social.facebook3}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>Ceremony Announcement 3</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: School Heritage Summary */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4">
              Collegiate Heritage
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Kingswood College (Est. 1891):</strong> Founded by L.E. Blaze in Kandy, Kingswood holds the eternal distinction of initiating schools rugby in Sri Lanka.
              </p>
              <p>
                <strong className="text-slate-200">Wesley College (Est. 1874):</strong> Founded in Colombo, the Double Blues embody a proud legacy of sporting valor, discipline, and brotherhood.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Community event celebration portal dedicated to rugby heritage. Not officially affiliated with or authorized to represent the administrative bodies of either school.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} L.E Blaze Trophy. A Celebration of Rugby, Tradition & School Spirit.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Kingswood College Kandy</span>
            <span>·</span>
            <span>Wesley College Colombo</span>
            <span>·</span>
            <span className="text-[#D4AF37]">Rugby Union</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
