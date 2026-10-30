import React from 'react';

interface SchoolBadgeProps {
  school: 'kingswood' | 'wesley';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showLabel?: boolean;
  className?: string;
}

export const SchoolBadge: React.FC<SchoolBadgeProps> = ({
  school,
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const isKingswood = school === 'kingswood';

  const logoSrc = isKingswood
    ? '/assets/aistudio/Kinesley_logo_9f0698b4.jpeg'
    : '/assets/aistudio/Wesley_College_8f1dccae.jpeg';

  const schoolName = isKingswood ? 'Kingswood College' : 'Wesley College';
  const schoolCity = isKingswood ? 'Kandy' : 'Colombo';
  const motto = isKingswood ? 'Fide et Virtute' : 'Ora et Labora';
  const colorsText = isKingswood ? 'Maroon & Royal Blue' : 'Dark & Light Double Blue';
  const accentBorder = isKingswood ? 'hover:border-[#0066FF]/60' : 'hover:border-[#4FC3F7]/60';

  const dimensionClasses = {
    sm: 'w-10 h-10 p-1',
    md: 'w-16 h-16 sm:w-20 sm:h-20 p-1.5',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 p-2',
    hero: 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 p-2 sm:p-2.5',
  };

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Pristine white backdrop container to preserve original logo clarity and protect transparency */}
      <div
        className={`relative rounded-2xl bg-white shadow-xl shadow-black/40 border-2 border-slate-700/60 transition-all duration-300 hover:scale-105 ${accentBorder} ${dimensionClasses[size]}`}
      >
        <img
          src={logoSrc}
          alt={`${schoolName} ${schoolCity} Official Crest`}
          className="w-full h-full object-contain rounded-xl select-none"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Subtle corner badge marker */}
        <div
          className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#050B14] ${
            isKingswood ? 'bg-[#800000]' : 'bg-[#0066FF]'
          }`}
          title={colorsText}
        />
      </div>

      {showLabel && (
        <div className="mt-2.5">
          <div className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
            {schoolName}
          </div>
          <div className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
            {schoolCity}
          </div>
          <div className="text-[11px] text-slate-400 italic mt-0.5 font-serif">
            "{motto}"
          </div>
        </div>
      )}
    </div>
  );
};
