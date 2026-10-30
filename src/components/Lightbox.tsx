import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../data/eventData';

interface LightboxProps {
  isOpen: boolean;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800/80 bg-black/60">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-slate-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gallery</span>
        </button>

        {/* Counter */}
        <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-400">
          <span className="text-[#D4AF37] font-bold">{currentIndex + 1}</span> of{' '}
          <span className="text-white">{items.length}</span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 rounded-lg bg-slate-900/80 hover:bg-red-950/80 hover:text-red-400 text-slate-400 transition-colors border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Viewport */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Photo"
          className="absolute left-2 sm:left-6 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-[#D4AF37] hover:text-slate-950 text-white transition-all border border-slate-700 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Active Image */}
        <div className="max-w-5xl max-h-[75vh] flex flex-col items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[68vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Photo"
          className="absolute right-2 sm:right-6 z-10 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-[#D4AF37] hover:text-slate-950 text-white transition-all border border-slate-700 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="px-4 sm:px-8 py-4 border-t border-slate-800/80 bg-black/80 max-w-5xl mx-auto w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
              {currentItem.category}
            </span>
            {currentItem.tag && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-[11px] text-slate-400">{currentItem.tag}</span>
              </>
            )}
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {currentItem.caption}
          </p>
        </div>

        <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Use arrow keys or swipe</span>
        </div>
      </div>
    </div>
  );
};
