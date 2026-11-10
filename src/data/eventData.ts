export interface SchoolInfo {
  name: string;
  shortName: string;
  city: string;
  founded: number;
  motto: string;
  mottoMeaning: string;
  colors: {
    primary: string;
    secondary: string;
    names: string[];
  };
  crestUrl: string;
  crestAlt: string;
  nickname: string;
  rugbyHistory: string;
  keyValues: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Drone Ceremony' | 'Match Day' | 'Players' | 'Stadium & Atmosphere';
  imageUrl: string;
  caption: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  photographerCredit?: string;
  tag?: string;
}

export interface HighlightMoment {
  id: string;
  section: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge: string;
  keyDetails: string[];
}

export interface HistoryRecord {
  inaugurationYear: number;
  inauguralCaptains: {
    wesley: string;
    kingswood: string;
  };
  trophyDonor: {
    name: string;
    title: string;
    description: string;
  };
  winTally: {
    kingswood: number;
    wesley: number;
    draw: number;
    totalPlayed: number;
  };
  currentHolders: {
    school: string;
    streak: string;
    year: number;
    notes: string;
  };
  kingswoodLastWon: number;
  rugbyMilestones: {
    kingswoodIntro: string;
    firstInterSchoolMatch: string;
    wesleyIntro: string;
  };
  legends: string[];
  juniorMatches: {
    grade: string;
    trophy: string;
  }[];
  historicPhotoUrl: string;
}

export const HISTORICAL_RECORD: HistoryRecord = {
  inaugurationYear: 1986,
  inauguralCaptains: {
    wesley: 'Sumedha Kuruppu',
    kingswood: 'Ronnie Ibrahim',
  },
  trophyDonor: {
    name: 'Mr. Roy De Silva',
    title: 'Distinguished Old Boy of Kingswood',
    description: 'Former Chairman of the Asian Olympic Committee',
  },
  winTally: {
    kingswood: 23,
    wesley: 11,
    draw: 4,
    totalPlayed: 38,
  },
  currentHolders: {
    school: 'Wesley College',
    streak: 'Record 5th win in a row',
    year: 2026,
    notes: 'Wesley are the holders of the Prestigious Blaze Trophy after setting a record 5th win in a row in 2026.',
  },
  kingswoodLastWon: 2019,
  rugbyMilestones: {
    kingswoodIntro: 'Kingswood College carries the rare honour as the school which introduced Rugby to Sri Lanka in 1891 by founding forefather Louis Edmund Blaze.',
    firstInterSchoolMatch: 'In 1906, the first match ever between two schools in Sri Lanka was played between Kingswood College and Trinity College Kandy.',
    wesleyIntro: 'Wesley College started rugby in 1956 under Eddie Buell.',
  },
  legends: [
    'Nalaka',
    'Eranda Weerakkody',
    'Amjad Buksh',
    'Fazil Marija',
    'Dev Anand',
    'Kishan Musafer',
    'Zulfikar Haleemdeen',
    'Henry Terence',
    'Rahul De Silva',
  ],
  juniorMatches: [
    { grade: 'Under 12', trophy: 'P. H. Nonis Trophy' },
    { grade: 'Under 14', trophy: 'N. J. Madannayake Trophy' },
    { grade: 'Under 16', trophy: 'Shelton Wirasinha Shield' },
    { grade: '2nd XV', trophy: 'Kenneth De Lanerolle Trophy' },
  ],
  historicPhotoUrl: '/assets/aistudio/photo_20fd3dcf.jpeg',
};

export const BRAND_CONFIG = {
  name: 'L.E BLAZE TROPHY',
  tagline: 'A Celebration of Rugby, Tradition & School Spirit.',
  encounter: 'Wesley College Colombo vs Kingswood College Kandy',
  contact: {
    phone: '0776928822',
    phoneFormatted: '+94 77 692 8822',
    whatsappUrl: 'https://wa.me/94776928822',
    email: 'blazetrophy1986@gmail.com',
  },
  social: {
    instagramReel: 'https://www.instagram.com/reel/DbBBTO_sB2v/?igsh=MWNrNDAxMzRrN24yNw==',
    facebook1: 'https://www.facebook.com/share/1GA7VTCPPa/',
    facebook2: 'https://www.facebook.com/share/19HcJQ3fL7/',
    facebook3: 'https://www.facebook.com/share/p/1942hrF6kZ/',
  },
  officialColors: [
    { name: 'Maroon', hex: '#800000', label: 'Kingswood Tradition' },
    { name: 'Royal Blue', hex: '#0066FF', label: 'Kingswood Horizon' },
    { name: 'Dark Blue', hex: '#0B3D91', label: 'Wesley Navy' },
    { name: 'Light Blue', hex: '#4FC3F7', label: 'Wesley Sky Blue' },
    { name: 'Gold', hex: '#D4AF37', label: 'The Blaze Trophy & Championship' },
    { name: 'White', hex: '#FFFFFF', label: 'Purity of Sportsmanship' },
  ],
};

export const SCHOOL_DATA: { kingswood: SchoolInfo; wesley: SchoolInfo } = {
  kingswood: {
    name: 'Kingswood College',
    shortName: 'Kingswood',
    city: 'Kandy',
    founded: 1891,
    motto: 'Fide et Virtute',
    mottoMeaning: 'In Faith and Virtue',
    colors: {
      primary: '#800000',
      secondary: '#0066FF',
      names: ['Maroon', 'Royal Blue'],
    },
    crestUrl: '/assets/aistudio/Kinesley_logo_9f0698b4.jpeg',
    crestAlt: 'Kingswood College Kandy Official Crest',
    nickname: 'Gentlemen of Kingswood',
    rugbyHistory:
      'Pioneers of schools rugby in Sri Lanka. It was Louis Edmund Blaze, the founding principal of Kingswood College, who introduced the game of rugby football to Sri Lankan schools in 1891, laying the foundation for generations of rugby heritage.',
    keyValues: ['Courage & Character', 'Faith & Virtue', 'First in Rugby (1891)'],
  },
  wesley: {
    name: 'Wesley College',
    shortName: 'Wesley',
    city: 'Colombo',
    founded: 1874,
    motto: 'Ora et Labora',
    mottoMeaning: 'Pray and Work',
    colors: {
      primary: '#0B3D91',
      secondary: '#4FC3F7',
      names: ['Dark Blue', 'Light Blue'],
    },
    crestUrl: '/assets/aistudio/Wesley_College_8f1dccae.jpeg',
    crestAlt: 'Wesley College Colombo Official Crest',
    nickname: 'The Double Blues',
    rugbyHistory:
      'A distinguished powerhouse in Sri Lankan schools rugby with storied traditions at Campbell Park. Renowned for their fierce dedication, structured backline brilliance, and timeless sporting camaraderie.',
    keyValues: ['Ora et Labora', 'Double Blue Pride', 'Generations of Excellence'],
  },
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'official-poster-01',
    title: 'Official L.E. Blaze Trophy Event Poster',
    category: 'Stadium & Atmosphere',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-11-01_at_03.32.26_ffbebc9a.jpeg',
    caption: 'Official L.E. Blaze Trophy poster commemorating the encounter between Wesley College Colombo and Kingswood College Kandy. Tradition. Rivalry. Respect. Since 1986.',
    aspectRatio: 'square',
    featured: true,
    tag: 'Official Event Poster',
  },
  {
    id: 'inaugural-1986-photo',
    title: 'Inaugural 1986 Blaze Trophy Encounter Squads',
    category: 'Players',
    imageUrl: '/assets/aistudio/photo_20fd3dcf.jpeg',
    caption: 'Historic 1986 inaugural encounter: Sumedha Kuruppu of Wesley College and Ronnie Ibrahim of Kingswood College leading their respective teams at the historic first match.',
    aspectRatio: 'landscape',
    featured: true,
    tag: 'Inaugural 1986 Match',
  },
  {
    id: 'art-01',
    title: 'Official L.E Blaze Trophy Handcrafted Blueprint',
    category: 'Stadium & Atmosphere',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'Official hand-drawn concept artwork delineating the official colors: Maroon, Royal Blue, Dark Blue, Light Blue, and Gold cup architecture.',
    aspectRatio: 'landscape',
    featured: true,
    tag: 'Official Brand Blueprint',
  },
  {
    id: 'wesley-colors-01',
    title: 'The Double Blue Banner Standard',
    category: 'Stadium & Atmosphere',
    imageUrl: '/assets/aistudio/Wesley_College_colors_ee5793ca.jpeg',
    caption: 'The heraldic Dark Blue and Light Blue dual stripes representing the proud spirit of Wesley College Colombo.',
    aspectRatio: 'landscape',
    featured: false,
    tag: 'Wesley Heritage',
  },
  {
    id: 'kingswood-crest-01',
    title: 'Kingswood College Heraldic Insignia',
    category: 'Players',
    imageUrl: '/assets/aistudio/Kinesley_logo_9f0698b4.jpeg',
    caption: 'The historical crest of Kingswood College Kandy bearing the Latin motto "Fide et Virtute" and the winged rising sun.',
    aspectRatio: 'square',
    featured: false,
    tag: 'Kingswood College',
  },
  {
    id: 'wesley-crest-01',
    title: 'Wesley College Colombo Shield & Cross',
    category: 'Players',
    imageUrl: '/assets/aistudio/Wesley_College_8f1dccae.jpeg',
    caption: 'The ornate roundel and cross shield of Wesley College Colombo bearing "Ora et Labora" with heraldic escallops.',
    aspectRatio: 'square',
    featured: false,
    tag: 'Wesley College',
  },
  {
    id: 'drone-01',
    title: 'Ceremonial Drone Flag Flyover',
    category: 'Drone Ceremony',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'The aerial spectacle capturing the giant school flags carried across the stadium turf during the opening ceremony.',
    aspectRatio: 'landscape',
    featured: true,
    tag: 'Drone Flag Ceremony',
  },
  {
    id: 'match-01',
    title: 'Fierce Breakdown at the 22m Line',
    category: 'Match Day',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'High-intensity collision and breakdown play between the forward packs battling for possession.',
    aspectRatio: 'portrait',
    featured: false,
    tag: 'Intense Action',
  },
  {
    id: 'players-01',
    title: 'Captains Pre-Match Handshake & Toss',
    category: 'Players',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'Captains of Wesley College and Kingswood College exchanging respect in front of match officials.',
    aspectRatio: 'landscape',
    featured: false,
    tag: 'Tradition & Respect',
  },
  {
    id: 'stadium-01',
    title: 'The Sea of Maroon and Double Blue',
    category: 'Stadium & Atmosphere',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'Packed grandstands reverberating with school anthems, trumpet blasts, and passionate school spirit.',
    aspectRatio: 'landscape',
    featured: true,
    tag: 'Grandstand Euphoria',
  },
  {
    id: 'match-02',
    title: 'Scrummaging Under Pressure',
    category: 'Match Day',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    caption: 'Front rows locking horns in a battle of pure grit, technique, and brotherhood.',
    aspectRatio: 'portrait',
    featured: false,
    tag: 'Forward Battle',
  },
];

export const HIGHLIGHTS_SECTIONS: HighlightMoment[] = [
  {
    id: 'drone-ceremony',
    section: 'Drone Flag Ceremony',
    title: 'Aerial Majesty Above the Turf',
    subtitle: 'A Modern Spectacle Honoring Historic Banners',
    description:
      'The ceremonial drone flag flight has become a signature tradition of the L.E Blaze Trophy. Hovering above the center pitch, the drone unveils the massive dual flags of Kingswood and Wesley amidst roaring cheers from thousands of spectators.',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    badge: 'AERIAL SPECTACLE',
    keyDetails: [
      'Twin school banners showcased from high above the pitch',
      'Synchronized with the marching band fanfare',
      'Cinematic 4K aerial footage featured across official reels',
    ],
  },
  {
    id: 'stadium-atmosphere',
    section: 'Stadium Atmosphere',
    title: 'Electric Passion Across the Stands',
    subtitle: 'Colombo & Kandy United in Unyielding Voice',
    description:
      'From the opening whistle to the final siren, the grandstands pulse with energy. Papare bands, thunderous drums, school flags waving in the afternoon breeze, and decades of old boys singing side by side with current students.',
    imageUrl: '/assets/aistudio/Wesley_College_colors_ee5793ca.jpeg',
    badge: 'GRANDSTAND ENERGY',
    keyDetails: [
      'Classic Ceylon papare brass bands and collegiate rhythms',
      'Generations of alumni reunited from across the globe',
      'Sportsmanship celebrated between rival student bodies',
    ],
  },
  {
    id: 'team-presentations',
    section: 'Team Presentations',
    title: 'Pride of the First XV Jerseys',
    subtitle: 'Walking Out to the Thunder of Drums',
    description:
      'Stepping onto the arena in the maroon & royal blue of Kingswood and the dark & light double blues of Wesley represents the pinnacle of schoolboy rugby pride. Each player carries the hopes of their brotherhood into the match.',
    imageUrl: '/assets/aistudio/Kinesley_logo_9f0698b4.jpeg',
    badge: 'HONOR & COMMITMENT',
    keyDetails: [
      'Formal lineup and national school anthems rendition',
      'Introduction of chief guests and rugby stalwarts',
      'The ceremonial handshake honoring L.E. Blaze',
    ],
  },
  {
    id: 'rugby-moments',
    section: 'Rugby Match Moments',
    title: 'Uncompromising 80-Minute Clash',
    subtitle: 'Paces, Tackles, Scrums and Strategic Play',
    description:
      'The contest is always marked by hard-hitting defense, tactical kicking duels, fast-paced backline sweeps, and fierce breakdown battles. Both sides play with unyielding tenacity while upholding the highest gentlemanly conduct.',
    imageUrl: '/assets/aistudio/Wesley_College_8f1dccae.jpeg',
    badge: 'CLASSIC CONTEST',
    keyDetails: [
      'Tenacious breakdown defense and counter-rucking',
      'Electric wingers exploiting outside channels',
      'Scrum and lineout precision under pressure',
    ],
  },
  {
    id: 'school-spirit',
    section: 'School Spirit',
    title: 'Traditions Passed Through Generations',
    subtitle: 'Mottos Forged into Living Legacy',
    description:
      'Kingswood’s "Fide et Virtute" meets Wesley’s "Ora et Labora". The encounter is more than a game—it is an enduring testament to school character, mutual respect, and the foundational ideals of Sri Lankan education.',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    badge: 'TIMELESS HERITAGE',
    keyDetails: [
      'Mutual guard of honor following the final whistle',
      'Traditional singing of respective school hymns',
      'Post-match reception celebrating lasting friendship',
    ],
  },
  {
    id: 'event-memories',
    section: 'Event Memories',
    title: 'The L.E Blaze Trophy Presentation',
    subtitle: 'Lifting the Gold and Blue Cup',
    description:
      'The trophy itself—sculpted in lustrous gold with handles and pedestal echoing the Dark Blue, Light Blue, Royal Blue, and Maroon colors—stands as a monument to excellence. The champion hoists the silverware amid flares and celebrations.',
    imageUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.40.42_895cac06.jpeg',
    badge: 'CHAMPIONSHIP SILVERWARE',
    keyDetails: [
      'Custom gold trophy with dark and light blue motifs',
      'Medals awarded for Best Forward and Best Back',
      'Commemorative team photographs inscribed in event archives',
    ],
  },
];
