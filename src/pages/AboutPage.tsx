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
  Trophy,
  Users,
  CheckCircle2,
  Clock,
  Flame,
} from 'lucide-react';
import { SchoolBadge } from '../components/SchoolBadge';
import { BRAND_CONFIG, SCHOOL_DATA, HISTORICAL_RECORD } from '../data/eventData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* Header Banner */}
      <section className="relative py-20 border-b border-slate-800 bg-gradient-to-b from-[#0A1322] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Event Chronicle & Heritage</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            About the <span className="text-[#D4AF37]">L.E Blaze Trophy</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300">
            Inaugurated in 1986 in honour of Louis Edmund Blaze, father of schools rugby in Ceylon. Celebrating four decades of passion, brotherhood, and classic rugby rivalry.
          </p>

          {/* Both School Crests in Banner */}
          <div className="mt-10 flex items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <SchoolBadge school="kingswood" size="lg" showLabel={true} />
            </div>

            <div className="flex flex-col items-center justify-center pt-2">
              <span className="font-heading font-black text-3xl text-[#D4AF37]">VS</span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mt-1">
                Since 1986
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
        {/* =========================================================================
            SECTION 1: OFFICIAL WIN TALLY & CURRENT HOLDERS SCORECARD
            ========================================================================= */}
        <section className="rounded-2xl bg-gradient-to-b from-[#0F1E38] via-[#091220] to-[#070D18] border-2 border-[#D4AF37]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                <span>Verified Series Statistics</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight mt-1">
                Official Blaze Trophy Win Tally
              </h2>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="px-3 py-1 rounded-md bg-[#0066FF]/20 border border-[#0066FF]/50 text-blue-300 text-xs font-bold uppercase tracking-wider">
                Current Holders: Wesley (2026)
              </span>
            </div>
          </div>

          {/* Win Tally Scoreboard Counters */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
            {/* Kingswood Wins */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#800000]/25 border border-[#800000]/60 relative overflow-hidden">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-red-300 mb-1">
                Kingswood College
              </div>
              <div className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tabular-nums">
                {HISTORICAL_RECORD.winTally.kingswood}
              </div>
              <div className="text-[11px] sm:text-xs text-red-200/80 font-medium mt-1">
                Trophy Victories
              </div>
              <div className="text-[10px] text-slate-400 mt-2">
                Last Lifted: 2019
              </div>
            </div>

            {/* Draws */}
            <div className="p-4 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-700 relative overflow-hidden flex flex-col justify-center">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Drawn Matches
              </div>
              <div className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#D4AF37] tabular-nums">
                {HISTORICAL_RECORD.winTally.draw}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                Unresolved Clashes
              </div>
              <div className="text-[10px] text-slate-500 mt-2">
                Total Matches: {HISTORICAL_RECORD.winTally.totalPlayed}
              </div>
            </div>

            {/* Wesley Wins */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#0B3D91]/30 border border-[#0066FF]/60 relative overflow-hidden">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
                Wesley College
              </div>
              <div className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tabular-nums">
                {HISTORICAL_RECORD.winTally.wesley}
              </div>
              <div className="text-[11px] sm:text-xs text-blue-200/80 font-medium mt-1">
                Trophy Victories
              </div>
              <div className="text-[10px] text-[#4FC3F7] font-semibold mt-2">
                5-in-a-Row (2026)
              </div>
            </div>
          </div>

          {/* Current Trophy Status Note */}
          <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed flex items-start gap-3">
            <Flame className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <p>
                <strong>Wesley are the holders of the Prestigious Blaze Trophy</strong> after setting a record <strong>5th win in a row in 2026</strong>. Kingswood last lifted the cup in <strong>2019</strong> and are eagerly looking to break the hoodoo.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INAUGURAL 1986 ENCOUNTER & ARCHIVAL PHOTOGRAPH
            ========================================================================= */}
        <article className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Inaugural Encounter · 1986</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Inauguration in 1986: Captains Kuruppu & Ibrahim
            </h2>
            <div className="text-slate-300 text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                The <strong>Blaze Trophy was inaugurated in 1986</strong> with <strong>Sumedha Kuruppu</strong> of Wesley College, Colombo and <strong>Ronnie Ibrahim</strong> of Kingswood College, Kandy leading the two schools at the inaugural encounter.
              </p>
              <p>
                The encounter is played in honour of the man who introduced Rugby to Ceylon: <strong>Louis Edmund Blaze</strong> — the founding forefather of Kingswood College who changed the course of sports in the island nation with the introduction of the oval ball game in 1891.
              </p>
            </div>
          </div>

          {/* Historical Team Photograph Display */}
          <div className="rounded-2xl overflow-hidden border-2 border-slate-700 bg-black shadow-2xl">
            <img
              src={HISTORICAL_RECORD.historicPhotoUrl}
              alt="Inaugural 1986 Blaze Trophy Encounter squad photo with Sumedha Kuruppu and Ronnie Ibrahim"
              className="w-full h-auto object-contain block select-none"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 sm:p-5 bg-gradient-to-t from-[#060D17] to-[#0A1424] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-[#D4AF37] block">
                  Original 1986 Inaugural Match Photograph
                </span>
                <span className="text-slate-300">
                  Kingswood College and Wesley College First XV squads photographed together in blazers & kits.
                </span>
              </div>
              <span className="px-3 py-1 rounded bg-black/60 border border-slate-700 text-slate-400 font-mono text-[11px] self-start sm:self-auto shrink-0">
                Captains: Sumedha Kuruppu & Ronnie Ibrahim
              </span>
            </div>
          </div>
        </article>

        {/* =========================================================================
            SECTION 3: THE TROPHY DONOR — ROY DE SILVA
            ========================================================================= */}
        <section className="rounded-2xl bg-gradient-to-r from-[#091220] via-[#0C192E] to-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#D4AF37]/15 border-2 border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                The Trophy Benefactor
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
                Donated by Mr. Roy De Silva
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The coveted Blaze Trophy was generously donated by <strong>Roy De Silva</strong>, a distinguished Old Boy of Kingswood College and former Chairman of the Asian Olympic Committee. His generous gift ensured that the rich sporting heritage of L.E. Blaze would be celebrated with an enduring annual silverware classic between the two brother schools.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: SCHOOL RUGBY MILESTONES (1891, 1906, 1956)
            ========================================================================= */}
        <section className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
              Historic Timeline
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Origins of Schoolboy Rugby in Sri Lanka
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* 1891: Kingswood Rugby Start */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden group hover:border-[#800000]/60 transition-all">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                1891 · The Inception
              </div>
              <div className="font-heading text-2xl font-bold uppercase text-white">
                Rugby Introduced to Ceylon
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kingswood College carries the rare honour as the school which introduced Rugby to Sri Lanka in 1891 by founder Louis Edmund Blaze.
              </p>
            </div>

            {/* 1906: First Inter-School Match */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden group hover:border-[#D4AF37]/60 transition-all">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                1906 · First Interschool Match
              </div>
              <div className="font-heading text-2xl font-bold uppercase text-white">
                Kingswood vs Trinity
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                In 1906, the first match ever between two schools in Sri Lanka was played between Kingswood College and Trinity College Kandy.
              </p>
            </div>

            {/* 1956: Wesley Rugby Start */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden group hover:border-[#0066FF]/60 transition-all">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                1956 · Double Blue Debut
              </div>
              <div className="font-heading text-2xl font-bold uppercase text-white">
                Wesley Starts Rugby
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wesley College started rugby in 1956 under the coaching and guidance of <strong>Eddie Buell</strong>, initiating the proud Double Blue tradition.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ICONIC PLAYMAKERS & LEGENDS
            ========================================================================= */}
        <section className="rounded-2xl bg-[#091220] border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            <Users className="w-4 h-4 text-[#D4AF37]" />
            <span>Hall of Legends</span>
          </div>
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Iconic Playmakers of the Blaze Trophy
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              From the iconic playmakers in the likes of <strong>Nalaka</strong>, <strong>Eranda Weerakkody</strong>, <strong>Amjad Buksh</strong>, <strong>Fazil Marija</strong>, to <strong>Dev Anand</strong> and <strong>Kishan Musafer</strong>, <strong>Zulfikar Haleemdeen</strong>, <strong>Henry Terence</strong> to <strong>Rahul De Silva</strong> and many more, the Blaze Trophy has seen some unforgettable moments and is truly a classic rivalry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {HISTORICAL_RECORD.legends.map((name) => (
              <div
                key={name}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center flex items-center justify-center gap-2 hover:border-[#D4AF37]/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="font-heading font-bold text-sm uppercase text-slate-200 tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: JUNIOR & AGE-GROUP MATCHES TROPHIES
            ========================================================================= */}
        <section className="rounded-2xl bg-gradient-to-b from-[#091220] to-[#070D18] border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span>Collegiate Age-Group Silverware</span>
          </div>
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Junior & Age-Group Matches
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              The rivalry spans every tier of schoolboy rugby, with contested trophies honouring revered masters and icons of both institutions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {HISTORICAL_RECORD.juniorMatches.map((j) => (
              <div
                key={j.grade}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 font-heading font-bold text-sm">
                  {j.grade.replace('Under ', 'U')}
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {j.grade} Match
                  </div>
                  <div className="font-heading font-bold text-lg uppercase text-white">
                    {j.trophy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: The Trophy Architecture */}
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
                    <strong className="text-white">Dual-Tiered Base:</strong> Engraved with: <em>"L.E. BLAZE TROPHY / KINGSWOOD vs. WESLEY / DONATED BY MR. ROY DE SILVA"</em>.
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

        {/* Section 8: School Rugby Traditions */}
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
      </div>
    </div>
  );
};
