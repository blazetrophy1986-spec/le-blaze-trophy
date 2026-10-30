import React, { useState, useMemo } from 'react';
import {
  Camera,
  Filter,
  Maximize2,
  Sparkles,
  Info,
  ChevronRight,
  Layers,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/eventData';
import { Lightbox } from '../components/Lightbox';

type CategoryFilter =
  | 'All Photos'
  | 'Drone Ceremony'
  | 'Match Day'
  | 'Players'
  | 'Stadium & Atmosphere';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const categories: CategoryFilter[] = [
    'All Photos',
    'Drone Ceremony',
    'Match Day',
    'Players',
    'Stadium & Atmosphere',
  ];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All Photos') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredPhotos.findIndex((p) => p.id === item.id);
    setSelectedPhotoIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100">
      {/* Header Banner */}
      <section className="relative py-20 border-b border-slate-800 bg-gradient-to-b from-[#0A1322] to-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Event Photography Archive</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            Photo <span className="text-[#D4AF37]">Gallery</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300">
            Capturing the spirit, heritage, and emotion of the L.E Blaze Trophy. Filter across match day action, drone flag ceremonies, player honors, and grandstand atmosphere.
          </p>

          {/* Interactive Category Filter Tabs (Compliant with Frontend Design Skill) */}
          <div className="mt-10 flex items-center justify-center gap-2 flex-wrap max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-slate-950 shadow-lg shadow-[#D4AF37]/25 scale-105'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs font-mono text-slate-500">
            Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'Photograph' : 'Photographs'} in{' '}
            <span className="text-slate-300">{activeCategory}</span>
          </div>
        </div>
      </section>

      {/* Main Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden bg-[#0A1322] border border-slate-800 hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>View in Lightbox</span>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-slate-700 text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Photo Information Card Footer */}
              <div className="p-5 bg-gradient-to-b from-[#0A1322] to-[#070E1A]">
                <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{photo.tag || 'Official Asset'}</span>
                  <span className="text-[#D4AF37] group-hover:underline">Open Photo →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Photography Submissions & Media Placeholders */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              <Info className="w-4 h-4" />
              <span>Photographer & Media Submissions</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Are you an official media photographer or old boy with high-resolution match day images? Submit high-definition files to be featured in the official gallery.
            </p>
          </div>

          <a
            href="https://wa.me/94776928822?text=Hello%20LE%20Blaze%20Trophy%20Team%2C%20I%20have%20high-res%20event%20photographs%20to%20submit."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Submit Photos via WhatsApp
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={filteredPhotos}
        currentIndex={selectedPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => {
          setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
        }}
        onPrev={() => {
          setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
        }}
        onSelectIndex={(index) => setSelectedPhotoIndex(index)}
      />
    </div>
  );
};
