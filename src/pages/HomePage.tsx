import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Play,
  ArrowRight,
  Shield,
  Camera,
  Calendar,
  Sparkles,
  ExternalLink,
  Users,
  Award,
  ChevronRight,
  Trophy,
  Flame,
} from 'lucide-react';
import { BRAND_CONFIG, SCHOOL_DATA, GALLERY_ITEMS, HISTORICAL_RECORD } from '../data/eventData';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* =========================================================================
          HERO SECTION: Official L.E. Blaze Trophy Poster Showcase
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
        {/* Ambient Dark Navy & Stadium Lighting Backdrops */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071326] via-[#050B14] to-[#03070E] z-0" />
        
        {/* Subtle dual-team aura: Maroon glow on left, Royal Blue glow on right */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#800000]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0066FF]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Stadium turf grid overlay pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center text-center">
          {/* Brand Kicker / Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#D4AF37]/40 shadow-lg shadow-black/60 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              The Annual Schoolboy Rugby Showcase · Since 1986
            </span>
          </div>

          {/* Official L.E. Blaze Trophy Poster - Clean, premium presentation with dark background */}
          <div className="w-full max-w-3xl lg:max-w-4xl mx-auto my-2 sm:my-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050B14] border border-[#D4AF37]/35 shadow-2xl shadow-black/90 gold-glow">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_03.32.26_ffbebc9a.jpeg"
                alt="The Official L.E. Blaze Trophy Poster - Wesley College vs Kingswood College - Since 1986"
                className="w-full h-auto object-contain block mx-auto select-none"
                style={{ width: '100%', height: 'auto' }}
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Subtitle & Tagline */}
          <div className="mt-4 sm:mt-6 space-y-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl font-medium tracking-wide text-slate-200">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Wesley College Colombo vs Kingswood College Kandy · Annual Schools Rugby Classic
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B38F27] text-slate-950 font-heading font-extrabold text-base uppercase tracking-wider shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Camera className="w-5 h-5 text-slate-950" />
              <span>Explore Gallery</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              to="/highlights"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A1322] hover:bg-[#101E35] border border-slate-700 hover:border-[#D4AF37]/60 text-white font-heading font-bold text-base uppercase tracking-wider transition-all"
            >
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span>Event Highlights</span>
            </Link>

            <a
              href={BRAND_CONFIG.social.instagramReel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pink-950/40 hover:bg-pink-900/40 border border-pink-700/50 text-pink-300 font-heading font-bold text-base uppercase tracking-wider transition-all"
            >
              <Play className="w-4 h-4 fill-pink-400 text-pink-400" />
              <span>Watch Reel</span>
            </a>
          </div>

          {/* Official Colors Bar below hero */}
          <div className="mt-12 w-full max-w-3xl pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
              Official Palettes:
            </span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#800000]" title="Maroon (#800000)" />
              <span className="w-3 h-3 rounded-full bg-[#0066FF]" title="Royal Blue (#0066FF)" />
              <span className="text-slate-300 text-xs">Kingswood</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#0B3D91]" title="Dark Blue (#0B3D91)" />
              <span className="w-3 h-3 rounded-full bg-[#4FC3F7]" title="Light Blue (#4FC3F7)" />
              <span className="text-slate-300 text-xs">Wesley</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D4AF37]" title="Gold (#D4AF37)" />
              <span className="text-[#D4AF37] text-xs font-semibold">Blaze Silverware</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: TWO SCHOOL INTRODUCTION CARDS
          ========================================================================= */}
      <section className="py-20 bg-[#070F1C] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Historic Brotherhood
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
              Two Great Institutions. One Eternal Legacy.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Rooted in nineteenth-century educational foundations, Kingswood and Wesley have championed the sport of rugby in Sri Lanka with honor, dignity, and unyielding school spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Kingswood College Kandy */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#101E35] to-[#0A1322] border border-slate-800 p-8 flex flex-col justify-between shadow-2xl hover:border-[#800000]/80 transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#800000]/15 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 p-1.5 rounded-xl bg-white shadow-lg border border-slate-700">
                      <img
                        src={SCHOOL_DATA.kingswood.crestUrl}
                        alt={SCHOOL_DATA.kingswood.crestAlt}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold uppercase text-white">
                        {SCHOOL_DATA.kingswood.name}
                      </div>
                      <div className="text-xs font-serif text-[#D4AF37] italic">
                        "{SCHOOL_DATA.kingswood.motto}" · {SCHOOL_DATA.kingswood.city}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#800000]/30 border border-[#800000]/60 text-xs font-bold text-red-300 uppercase">
                    Est. {SCHOOL_DATA.kingswood.founded}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Pioneers of Sri Lankan Schools Rugby:</strong> In 1891, the legendary founder and first principal, <strong>Louis Edmund Blaze</strong>, introduced rugby football to Kingswood College, marking the historic dawn of schools rugby across the island.
                  </p>
                  <p>
                    The "Gentlemen of Kingswood" take to the pitch dressed in the regal <strong>Maroon and Royal Blue</strong>, adhering steadfastly to their motto of faith, courage, and moral integrity.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                  {SCHOOL_DATA.kingswood.keyValues.map((val) => (
                    <span
                      key={val}
                      className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-xs text-slate-300"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Traditional Colors: Maroon & Royal Blue</span>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline font-semibold"
                >
                  <span>Read School Story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Wesley College Colombo */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#101E35] to-[#0A1322] border border-slate-800 p-8 flex flex-col justify-between shadow-2xl hover:border-[#0066FF]/80 transition-all group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 p-1.5 rounded-xl bg-white shadow-lg border border-slate-700">
                      <img
                        src={SCHOOL_DATA.wesley.crestUrl}
                        alt={SCHOOL_DATA.wesley.crestAlt}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold uppercase text-white">
                        {SCHOOL_DATA.wesley.name}
                      </div>
                      <div className="text-xs font-serif text-[#4FC3F7] italic">
                        "{SCHOOL_DATA.wesley.motto}" · {SCHOOL_DATA.wesley.city}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#0B3D91]/40 border border-[#0066FF]/60 text-xs font-bold text-blue-300 uppercase">
                    Est. {SCHOOL_DATA.wesley.founded}
                  </span>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-white">The Storied Double Blues of Campbell Park:</strong> Founded in 1874 in Colombo, Wesley College holds a revered legacy in the sporting arena, producing iconic athletes, visionary leaders, and fearless rugby sides.
                  </p>
                  <p>
                    United under the motto <strong>"Ora et Labora"</strong> (Pray and Work), the Double Blues play with disciplined tactical acumen, relentless forwards grit, and an inspiring collegiate pride.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                  {SCHOOL_DATA.wesley.keyValues.map((val) => (
                    <span
                      key={val}
                      className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-xs text-slate-300"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Traditional Colors: Dark & Light Blue</span>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-[#4FC3F7] hover:underline font-semibold"
                >
                  <span>Read School Story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1.5: OFFICIAL WIN TALLY & 1986 INAUGURAL HERITAGE
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#070F1C] via-[#091426] to-[#050B14] border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Official Rivalry Record</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
              Series Win Tally & 1986 Heritage
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Inaugurated in 1986 under inaugural captains Sumedha Kuruppu (Wesley) and Ronnie Ibrahim (Kingswood), contested for the trophy donated by Roy De Silva.
            </p>
          </div>

          {/* Win Tally Scoreboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Kingswood Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#800000]/25 to-[#091220] border-2 border-[#800000]/60 text-center relative overflow-hidden shadow-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-300">
                Kingswood College
              </div>
              <div className="font-heading font-black text-5xl sm:text-7xl text-white my-2 tabular-nums">
                {HISTORICAL_RECORD.winTally.kingswood}
              </div>
              <div className="text-xs text-red-200/90 font-semibold uppercase tracking-wider">
                Trophy Victories
              </div>
              <div className="mt-3 text-[11px] text-slate-400">
                Last Lifted: 2019 · Seeking To Break Hoodoo
              </div>
            </div>

            {/* Draws Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border-2 border-slate-700 text-center flex flex-col justify-center shadow-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Drawn Matches
              </div>
              <div className="font-heading font-black text-5xl sm:text-7xl text-[#D4AF37] my-2 tabular-nums">
                {HISTORICAL_RECORD.winTally.draw}
              </div>
              <div className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                Total Matches: {HISTORICAL_RECORD.winTally.totalPlayed}
              </div>
              <div className="mt-3 text-[11px] text-[#D4AF37] font-mono">
                Since 1986 Inception
              </div>
            </div>

            {/* Wesley Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0B3D91]/35 to-[#091220] border-2 border-[#0066FF]/60 text-center relative overflow-hidden shadow-xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
                Wesley College
              </div>
              <div className="font-heading font-black text-5xl sm:text-7xl text-white my-2 tabular-nums">
                {HISTORICAL_RECORD.winTally.wesley}
              </div>
              <div className="text-xs text-blue-200/90 font-semibold uppercase tracking-wider">
                Trophy Victories
              </div>
              <div className="mt-3 text-[11px] text-[#4FC3F7] font-bold">
                Current Holders · Record 5th Win in a Row (2026)
              </div>
            </div>
          </div>

          {/* 1986 Historic Photo & Key Facts Split */}
          <div className="rounded-2xl bg-[#091220] border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo */}
              <div className="lg:col-span-6 rounded-xl overflow-hidden border border-slate-700 bg-black shadow-xl">
                <img
                  src={HISTORICAL_RECORD.historicPhotoUrl}
                  alt="Historic 1986 Inaugural Match photograph: Sumedha Kuruppu & Ronnie Ibrahim with squads"
                  className="w-full h-auto object-contain block select-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-black/80 text-[11px] text-slate-400 font-mono text-center">
                  Inaugural 1986 Squads · Captains Sumedha Kuruppu (Wesley) & Ronnie Ibrahim (Kingswood)
                </div>
              </div>

              {/* Text chronicle & Junior matches summary */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                  <Flame className="w-4 h-4 text-[#D4AF37]" />
                  <span>The Inaugural Legacy</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
                  Donated by Roy De Silva (1986)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  In 1986, <strong>Sumedha Kuruppu</strong> of Wesley College and <strong>Ronnie Ibrahim</strong> of Kingswood College led their teams in the inaugural match. The trophy was donated by <strong>Roy De Silva</strong>, distinguished Kingswoodian and former Chairman of the Asian Olympic Committee.
                </p>

                {/* Junior Trophies List */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    Junior & Age-Group Trophies
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {HISTORICAL_RECORD.juniorMatches.map((jm) => (
                      <div
                        key={jm.grade}
                        className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        <span className="text-[#D4AF37] font-bold block">{jm.grade}</span>
                        <span className="text-white font-medium">{jm.trophy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
                  >
                    <span>Read Full Historical Archive & Legends</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED EVENT PHOTOGRAPHY & BRAND ARTWORK
          ========================================================================= */}
      <section className="py-20 bg-[#050B14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Visual Retrospective
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
                Featured Event Photography
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>View All Photos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Marquee Bento-Grid using uploaded official artworks & ceremony photography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Big Feature: Handcrafted Trophy Blueprint & Drone Concept */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group min-h-[380px]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg"
                alt="L.E Blaze Trophy Handcrafted Blueprint and Color Guide"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  OFFICIAL ARTWORK & SPECIFICATION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                  The Handcrafted L.E Blaze Trophy Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                  Original hand-drawn design delineating the gold bowl, twin Dark Blue and Light Blue handles, and the dual banners uniting Kingswood maroon & royal blue with Wesley double blue.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#E5C158] transition-colors"
                  >
                    <span>View in Lightbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Side Card 1: Wesley College Colors */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group min-h-[380px] flex flex-col justify-end p-6">
              <img
                src="/assets/aistudio/Wesley_College_colors_ee5793ca.jpeg"
                alt="Wesley College Colombo Double Blue Banners"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4FC3F7] mb-1 block">
                  DOUBLE BLUE STANDARD
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
                  Stadium Atmosphere & Banners
                </h3>
                <p className="text-xs text-slate-300 mt-2">
                  The electric atmosphere as double blue standards fly across the grandstands in celebration.
                </p>
                <Link
                  to="/highlights"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#4FC3F7] hover:underline"
                >
                  <span>Explore Atmosphere</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EVENT HIGHLIGHTS & INSTAGRAM REEL TEASER
          ========================================================================= */}
      <section className="py-20 bg-[#07111E] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 cols: Editorial Highlights Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
                <span>Cinematic Match Experience</span>
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                Drone Flag Ceremony & Fierce 80-Minute Clash
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Experience the magic that makes the L.E Blaze Trophy one of the most anticipated fixtures on the schoolboy calendar. From the majestic drone flag flyover soaring above the field to the thunderous roars of school war cries, every moment is etched in memory.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-[#D4AF37] mb-1">
                    01. Drone Flag Ceremony
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Giant school flags flown by drone above center pitch.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-[#D4AF37] mb-1">
                    02. Stadium Energy
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Papare brass bands, rhythmic drums & alumni passion.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-[#D4AF37] mb-1">
                    03. Team Presentations
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Honoring the First XV squads as they take the pitch.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold uppercase text-[#D4AF37] mb-1">
                    04. The Championship Cup
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Lifting the golden silverware in celebration.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BRAND_CONFIG.social.instagramReel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-pink-900/30 transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Event Reel on Instagram</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <Link
                  to="/highlights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-heading font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Detailed Highlights Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right 5 cols: Instagram Reel Card Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A1322] border-2 border-slate-800 p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-amber-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        Official Event Reel
                      </div>
                      <div className="text-[11px] text-slate-400">@blazetrophy</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/60 border border-pink-800/40 text-pink-400 font-semibold uppercase">
                    INSTAGRAM VIDEO
                  </span>
                </div>

                {/* Video Teaser Graphic with Play Button */}
                <a
                  href={BRAND_CONFIG.social.instagramReel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-xl overflow-hidden aspect-[9/12] max-h-[380px] w-full border border-slate-800 group shadow-inner"
                >
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg"
                    alt="L.E Blaze Trophy Instagram Reel Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                    <span className="mt-4 font-heading text-lg font-bold uppercase tracking-wider text-white">
                      Watch Highlights Reel
                    </span>
                    <span className="text-xs text-slate-300 mt-1">
                      Tap to open official Instagram video
                    </span>
                  </div>
                </a>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Featuring Drone Flag Ceremony</span>
                  <a
                    href={BRAND_CONFIG.social.instagramReel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Open Reel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHATSAPP DIRECT CONTACT BANNER
          ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-emerald-950/40 via-[#071326] to-emerald-950/30 border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-b from-[#0A1A17] to-[#061210] border border-emerald-800/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                <MessageCircle className="w-4 h-4" />
                <span>Instant Communications Desk</span>
              </div>
              <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                Connect Directly via WhatsApp
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Have inquiries regarding event media passes, official merchandise, match guidelines, or trophy updates? Reach out directly to the official coordination team.
              </p>
              <div className="text-xs text-emerald-300/80 font-mono pt-1">
                Official Number: <strong>{BRAND_CONFIG.contact.phoneFormatted}</strong>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BRAND_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-extrabold text-base uppercase tracking-wider shadow-xl shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-heading font-bold text-base uppercase tracking-wider transition-colors"
              >
                <span>Full Contact Info</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
