import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Shield,
  Flag,
  Sparkles,
  Layers,
  ArrowRight,
  Info,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { SchoolBadge } from '../components/SchoolBadge';
import { BRAND_CONFIG, SCHOOL_DATA } from '../data/eventData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* Header Banner */}
      <section className="relative py-20 border-b border-slate-800 bg-gradient-to-b from-[#0A1322] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Legacy & Heritage</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            About the <span className="text-[#D4AF37]">L.E Blaze Trophy</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300">
            A celebration of rugby, tradition, and brotherhood between Wesley College Colombo and Kingswood College Kandy, honoring the father of schools rugby in Sri Lanka.
          </p>

          {/* Both School Crests in Banner */}
          <div className="mt-10 flex items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <SchoolBadge school="kingswood" size="lg" showLabel={true} />
            </div>

            <div className="flex flex-col items-center justify-center pt-2">
              <span className="font-heading font-black text-3xl text-[#D4AF37]">VS</span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mt-1">
                Centennial Bonds
              </span>
            </div>

            <div className="flex flex-col items-center">
              <SchoolBadge school="wesley" size="lg" showLabel={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: The Legacy of Louis Edmund Blaze */}
        <article className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
            <Award className="w-4 h-4" />
            <span>Foundational History</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-4">
            The Vision of Louis Edmund Blaze
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base space-y-4 leading-relaxed">
            <p>
              The L.E Blaze Trophy is named in immortal honour of <strong>Louis Edmund Blaze</strong> (1861–1951), an illustrious scholar, educator, author, and the founding principal of Kingswood College, Kandy.
            </p>
            <p>
              In <strong>1891</strong>, L.E. Blaze made history by introducing rugby football to Kingswood College, marking the very first time the oval-ball game was organized and played at a school in Ceylon (now Sri Lanka). His visionary initiative transformed Sri Lankan youth athletics, setting ablaze a passion that has thrived across generations.
            </p>
            <p>
              This prestigious trophy encounter celebrates not merely a rivalry on the pitch, but the eternal sporting ideals envisioned by Blaze: courage without malice, competition with gentlemanly grace, and lifelong fellowship across collegiate borders.
            </p>
          </div>
        </article>

        {/* Section 2: School Traditions & Double Blues vs Gentlemen of Kingswood */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kingswood Heritage */}
          <div className="rounded-2xl bg-[#091220] border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-700">
                  <img
                    src={SCHOOL_DATA.kingswood.crestUrl}
                    alt={SCHOOL_DATA.kingswood.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    Kingswood College
                  </h3>
                  <div className="text-xs text-[#D4AF37] font-serif italic">
                    "Fide et Virtute" · Kandy
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Founded in 1891 in the hill capital of Kandy, Kingswood is steeped in literary, musical, and sporting traditions. Known affectionately as the "Gentlemen of Kingswood," its students wear the <strong>Maroon and Royal Blue</strong> jersey with pride.
                </p>
                <p>
                  As the nursery of schoolboy rugby in Sri Lanka, the institution upholds the tradition of sportsmanship and chivalry, carrying the Latin motto <em>Fide et Virtute</em> (By Faith and Virtue) onto the field in every engagement.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
              Colors: Maroon (#800000) & Royal Blue (#0066FF)
            </div>
          </div>

          {/* Wesley Heritage */}
          <div className="rounded-2xl bg-[#091220] border border-slate-800 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-700">
                  <img
                    src={SCHOOL_DATA.wesley.crestUrl}
                    alt={SCHOOL_DATA.wesley.name}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    Wesley College
                  </h3>
                  <div className="text-xs text-[#4FC3F7] font-serif italic">
                    "Ora et Labora" · Colombo
                  </div>
                </div>
              </div>
              <div className="text-sm text-slate-300 space-y-3 leading-relaxed">
                <p>
                  Established in 1874 in Colombo, Wesley College stands as one of the premier Methodist educational institutions on the island. The storied "Double Blues" take immense pride in their rugby heritage honed at Campbell Park.
                </p>
                <p>
                  Guided by the inspiring motto <em>Ora et Labora</em> (Pray and Work), generations of Wesleyites have graced the national rugby arena, revered for their disciplined pack play, flair, and enduring loyalty to the Double Blue banner.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
              Colors: Dark Blue (#0B3D91) & Light Blue (#4FC3F7)
            </div>
          </div>
        </div>

        {/* Section 3: The Trophy Architecture & Client Handcrafted Blueprint */}
        <article className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Layers className="w-4 h-4" />
                <span>The Silverware & Colors</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                The Anatomy of the Blaze Trophy
              </h2>
              <div className="text-slate-300 text-sm sm:text-base space-y-3 leading-relaxed">
                <p>
                  As delineated in the official handcrafted blueprint supplied by the event organizers, the L.E Blaze Trophy features an iconic sculpted golden cup crowned by sculpted twin handles:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-sm pl-2">
                  <li>
                    <strong className="text-[#D4AF37]">Gold Cup Body:</strong> Symbolizing the pinnacle of collegiate athletic pursuit and championship merit.
                  </li>
                  <li>
                    <strong className="text-[#0B3D91]">Dark Blue & Light Blue Elements:</strong> Emblazoned along the handles and pedestal, representing the Double Blue pride of Wesley College.
                  </li>
                  <li>
                    <strong className="text-[#0066FF]">Royal Blue & Maroon Accents:</strong> Harmoniously integrated into the insignia, celebrating the timeless heritage of Kingswood College.
                  </li>
                  <li>
                    <strong className="text-white">Dual-Tiered Base:</strong> Built from heavy polished timber with engraved brass placards commemorating every encounter.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border-2 border-slate-700 bg-black/60 p-2 shadow-2xl">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg"
                  alt="Original L.E Blaze Trophy Handcrafted Blueprint and Color Legend"
                  className="w-full h-auto rounded-lg object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-center">
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    Official Handcrafted Concept & Color Breakdown
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Section 4: School Rugby Traditions */}
        <section className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Flag className="w-4 h-4" />
            <span>Match Day Rituals</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mb-4">
            Traditions That Define the Encounter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="font-heading text-xl font-bold uppercase text-white">
                Drone Flag Flyover
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A grand modern tradition where high-altitude camera drones glide above the stadium turf bearing the massive banners of both colleges as the crowd erupts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="font-heading text-xl font-bold uppercase text-white">
                Papare & War Cries
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The unforgettable atmosphere of Ceylon brass papare bands, cheer squads, and coordinated school war cries that reverberate through all four quarters.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="font-heading text-xl font-bold uppercase text-white">
                Tunnel of Honor
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                At the final whistle, both teams form the traditional guard of honour, clapping each other off the turf in true adherence to the gentlemanly code of rugby.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Editorial Content Area (Clearly preserved for verified records) */}
        <section className="rounded-2xl bg-slate-900/60 border border-dashed border-slate-700 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-slate-800 text-[#D4AF37] shrink-0 mt-1">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Official Archive Slot
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">Verified History Documentation</span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                Historical Match Records & Event Archives
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In strict adherence to client guidelines, historical fixture scores, match dates, and player statistics are verified by the authorized school sports councils before publication.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Series Inception: Celebrated Annually</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#0066FF]" />
                  <span>Contesting Sides: First XV Rugby</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
