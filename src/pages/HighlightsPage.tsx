import React, { useState } from 'react';
import {
  Play,
  Sparkles,
  Camera,
  ExternalLink,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { BRAND_CONFIG, HIGHLIGHTS_SECTIONS, HighlightMoment } from '../data/eventData';
import { Lightbox } from '../components/Lightbox';

export const HighlightsPage: React.FC = () => {
  const [selectedMoment, setSelectedMoment] = useState<HighlightMoment | null>(null);

  // Convert moments into lightbox-friendly items if user clicks to enlarge
  const lightboxItems = HIGHLIGHTS_SECTIONS.map((m) => ({
    id: m.id,
    title: m.title,
    category: 'Stadium & Atmosphere' as const,
    imageUrl: m.imageUrl,
    caption: `${m.subtitle} — ${m.description}`,
    aspectRatio: 'landscape' as const,
    tag: m.badge,
  }));

  const activeIndex = selectedMoment
    ? HIGHLIGHTS_SECTIONS.findIndex((m) => m.id === selectedMoment.id)
    : 0;

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* Page Header */}
      <section className="relative py-20 border-b border-slate-800 bg-gradient-to-b from-[#0A1322] to-[#050B14] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Showcase</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            Event <span className="text-[#D4AF37]">Highlights</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300">
            Immerse yourself in the defining moments of the L.E Blaze Trophy: from the aerial drone flag ceremony to the electric grandstands and the final whistle.
          </p>

          {/* Prominent Working WATCH EVENT REEL button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND_CONFIG.social.instagramReel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-heading font-extrabold text-base uppercase tracking-wider shadow-xl shadow-pink-900/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Watch Event Reel</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <a
              href={BRAND_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-heading font-bold text-base uppercase tracking-wider transition-colors"
            >
              <span>Share Event Reel</span>
              <Share2 className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Sections List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {HIGHLIGHTS_SECTIONS.map((moment, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={moment.id}
                className="rounded-2xl bg-[#091220] border border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Photo / Media Container */}
                  <div className={`lg:col-span-6 relative overflow-hidden h-[340px] sm:h-[420px] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={moment.imageUrl}
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-slate-700 text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                        {moment.badge}
                      </span>
                    </div>

                    {/* Expand CTA button */}
                    <button
                      onClick={() => setSelectedMoment(moment)}
                      aria-label={`Enlarge photo for ${moment.title}`}
                      className="absolute bottom-4 right-4 p-3 rounded-lg bg-slate-900/80 hover:bg-[#D4AF37] hover:text-slate-950 text-white transition-all backdrop-blur-sm border border-slate-700 flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Enlarge Photo</span>
                    </button>
                  </div>

                  {/* Editorial Details Container */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                        Highlight {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-xs text-slate-400 font-medium">
                        {moment.section}
                      </span>
                    </div>

                    <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
                      {moment.title}
                    </h2>

                    <div className="text-sm font-semibold text-[#4FC3F7] tracking-wide">
                      {moment.subtitle}
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {moment.description}
                    </p>

                    {/* Key Details List */}
                    <div className="pt-2 space-y-2 border-t border-slate-800">
                      {moment.keyDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex items-center gap-4">
                      <a
                        href={BRAND_CONFIG.social.instagramReel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-pink-400" />
                        <span>Watch in Event Reel</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {selectedMoment && (
        <Lightbox
          isOpen={!!selectedMoment}
          items={lightboxItems}
          currentIndex={activeIndex >= 0 ? activeIndex : 0}
          onClose={() => setSelectedMoment(null)}
          onNext={() => {
            const nextIdx = (activeIndex + 1) % HIGHLIGHTS_SECTIONS.length;
            setSelectedMoment(HIGHLIGHTS_SECTIONS[nextIdx]);
          }}
          onPrev={() => {
            const prevIdx =
              (activeIndex - 1 + HIGHLIGHTS_SECTIONS.length) % HIGHLIGHTS_SECTIONS.length;
            setSelectedMoment(HIGHLIGHTS_SECTIONS[prevIdx]);
          }}
          onSelectIndex={(index) => {
            setSelectedMoment(HIGHLIGHTS_SECTIONS[index]);
          }}
        />
      )}
    </div>
  );
};
