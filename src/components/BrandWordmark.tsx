import React from 'react';

interface BrandWordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-4xl md:text-5xl tracking-tight',
    xl: 'text-5xl md:text-6xl tracking-tight',
    hero: 'text-5xl sm:text-6xl md:text-8xl tracking-tight',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className={`font-heading font-extrabold uppercase leading-none select-none flex items-baseline gap-1.5 sm:gap-2 ${sizeClasses[size]}`}>
        {/* L.E in Royal Blue #0066FF */}
        <span className="text-[#0066FF] drop-shadow-[0_2px_8px_rgba(0,102,255,0.4)]">
          L.E
        </span>
        {/* Blaze in Maroon #800000 (with high-contrast light outline / vibrant crimson shadow so it stands out cleanly on dark navy) */}
        <span className="text-[#C1121F] sm:text-[#B91C1C] text-shadow-sm font-black" style={{ color: '#E11D48', textShadow: '0 0 20px rgba(128, 0, 0, 0.6)' }}>
          BLAZE
        </span>
        {/* Trophy in Gold #D4AF37 */}
        <span className="text-[#D4AF37] drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)]">
          TROPHY
        </span>
      </div>
      {showSubtitle && (
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-slate-400 mt-1">
          Wesley College Colombo <span className="text-[#D4AF37]">vs</span> Kingswood College Kandy
        </span>
      )}
    </div>
  );
};
