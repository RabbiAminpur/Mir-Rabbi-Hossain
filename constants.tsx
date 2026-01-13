
export const SITE_CONFIG = {
  name: "মীর রাব্বি হোসেন",
  title: "ডিজিটাল মেকার",
  footer: "© ২০২৫ মীর রাব্বি হোসেন"
};

export const MENU_ITEMS = [
  { 
    name: 'হোম', 
    icon: '🏠', 
    href: '#', 
    color: 'from-blue-50 to-blue-100',
    accent: 'bg-blue-600'
  },
  { 
    name: 'গ্যালারি', 
    icon: '🎨', 
    href: '#', 
    color: 'from-purple-50 to-purple-100',
    accent: 'bg-purple-600'
  },
  { 
    name: 'প্রজেক্ট', 
    icon: '🚀', 
    href: '#', 
    color: 'from-emerald-50 to-emerald-100',
    accent: 'bg-emerald-600'
  },
  { 
    name: 'যোগাযোগ', 
    icon: '✉️', 
    href: '#', 
    color: 'from-orange-50 to-orange-100',
    accent: 'bg-orange-600'
  }
];

/**
 * Fix: Added HERO_CONTENT to satisfy Hero.tsx import
 */
export const HERO_CONTENT = {
  intro: "মীর রাব্বি হোসেনের ডিজিটাল স্পেসে আপনাকে স্বাগতম। আমি আধুনিক এবং মিনিমালিস্ট ডিজাইন করতে ভালোবাসি যা ব্যবহারকারীর অভিজ্ঞতাকে সহজ করে তোলে।",
  ctaWork: "আমার কাজ দেখুন",
  ctaContact: "যোগাযোগ করুন"
};

/**
 * Fix: Added ABOUT_CONTENT to satisfy About.tsx import
 */
export const ABOUT_CONTENT = {
  description: "আমি একজন ফ্রন্টএন্ড ডেভেলপার এবং ডিজাইনার। আমি বিশ্বাস করি একটি ভালো ডিজাইন শুধু দেখতে সুন্দর নয়, সেটি কার্যকরীও হওয়া উচিত। প্রযুক্তির সাথে সৃজনশীলতার সমন্বয় ঘটিয়ে আমি আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
  focus: ["ইউজার ইন্টারফেস ডিজাইন", "রেসপন্সিভ ওয়েব ডেভেলপমেন্ট", "ইউজার এক্সপেরিয়েন্স রিসার্চ", "পারফরম্যান্স অপ্টিমাইজেশন"]
};

/**
 * Fix: Added SKILLS_DATA to satisfy Skills.tsx import
 */
export const SKILLS_DATA = [
  { name: 'React & Next.js', level: 92 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Figma', level: 85 }
];

/**
 * Fix: Added PROJECTS_DATA to satisfy Projects.tsx import
 */
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'মডার্ন ই-কমার্স',
    description: 'এটি একটি পূর্ণাঙ্গ অনলাইন শপিং প্ল্যাটফর্ম যেখানে ইউজাররা সহজেই পণ্য কিনতে পারেন।',
    tech: ['Next.js', 'Tailwind', 'Stripe'],
    github: '#',
    image: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    id: 2,
    title: 'ক্রিয়েটিভ পোর্টফোলিও',
    description: 'একজন শিল্পীর কাজের গ্যালারি এবং ডাইনামিক পোর্টফোলিও ওয়েবসাইট।',
    tech: ['React', 'Framer Motion', 'PostCSS'],
    github: '#',
    image: 'https://picsum.photos/seed/portfolio/800/600'
  },
  {
    id: 3,
    title: 'টাস্ক ম্যানেজমেন্ট অ্যাপ',
    description: 'ব্যক্তিগত কাজের ট্র্যাকিং এবং টিমের প্রোডাক্টিভিটি বাড়ানোর জন্য একটি টুল।',
    tech: ['TypeScript', 'Firebase', 'Zustand'],
    github: '#',
    image: 'https://picsum.photos/seed/task/800/600'
  }
];

/**
 * Fix: Added EXPERIENCE_DATA to satisfy Experience.tsx import
 */
export const EXPERIENCE_DATA = [
  {
    year: '২০২৩ - ২০২৫',
    title: 'সিনিয়র ইউআই ডেভেলপার',
    description: 'একটি শীর্ষস্থানীয় আইটি ফার্মে প্রজেক্ট আর্কিটেকচার এবং ফ্রন্টএন্ড ম্যানেজমেন্টে কাজ করেছি।'
  },
  {
    year: '২০২১ - ২০২৩',
    title: 'ওয়েব ডেভেলপার',
    description: 'বিভিন্ন স্টার্টআপের জন্য ডাইনামিক এবং রেসপন্সিভ ওয়েব ইন্টারফেস তৈরি করেছি।'
  },
  {
    year: '২০১৯ - ২০২১',
    title: 'ফ্রিল্যান্স ডিজাইনার',
    description: 'ইউজার এক্সপেরিয়েন্সের ওপর ভিত্তি করে অসংখ্য ডিজিটাল প্রোডাক্ট ডিজাইন করেছি।'
  }
];
