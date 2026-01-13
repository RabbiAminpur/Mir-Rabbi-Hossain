
export const SITE_CONFIG = {
  name: "মীর রাব্বি হোসেন",
  title: "ব্যক্তিগত পোর্টফোলিও",
  footer: "© ২০২৫ মীর রাব্বি হোসেন"
};

export const MENU_ITEMS = [
  { name: 'হোম', icon: '🏠', href: '#' },
  { name: 'আমার সম্পর্কে', icon: '👤', href: '#' },
  { name: 'প্রজেক্ট', icon: '📂', href: '#' },
  { name: 'যোগাযোগ', icon: '📧', href: '#' }
];

// Added HERO_CONTENT to fix Error in Hero.tsx
export const HERO_CONTENT = {
  name: "মীর রাব্বি হোসেন",
  intro: "আমি একজন ফুল-স্ট্যাক ডেভেলপার এবং UI/UX ডিজাইনার। আমি আধুনিক ওয়েব প্রযুক্তির মাধ্যমে চমৎকার ইউজার এক্সপেরিয়েন্স তৈরি করতে ভালোবাসি।",
  ctaWork: "আমার কাজ দেখুন",
  ctaContact: "কথা বলুন"
};

// Added ABOUT_CONTENT to fix Error in About.tsx
export const ABOUT_CONTENT = {
  description: "আমি বিগত ৩ বছর ধরে ওয়েব ডিজাইন এবং ডেভেলপমেন্টের সাথে জড়িত। আমি সবসময় নতুন নতুন প্রযুক্তি শিখতে এবং সেগুলোকে বাস্তব জীবনে প্রয়োগ করতে পছন্দ করি।",
  focus: ["ইউজার ইন্টারফেস ডিজাইন", "ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট", "পারফরম্যান্স অপ্টিমাইজেশান", "মোবাইল রেসপন্সিভ ডিজাইন"]
};

// Added SKILLS_DATA to fix Error in Skills.tsx
export const SKILLS_DATA = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "PostgreSQL", level: 75 }
];

// Added PROJECTS_DATA to fix Error in Projects.tsx
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "ই-কমার্স ড্যাশবোর্ড",
    description: "একটি শক্তিশালী অ্যাডমিন প্যানেল যা বিক্রয় এবং ইনভেন্টরি ম্যানেজ করতে সাহায্য করে।",
    tech: ["React", "Chart.js", "Tailwind"],
    github: "#",
    image: "https://picsum.photos/seed/project1/800/600"
  },
  {
    id: 2,
    title: "ভ্রমণ গাইড অ্যাপ",
    description: "ভ্রমণপিপাসুদের জন্য একটি আধুনিক প্ল্যাটফর্ম যেখানে সব তথ্য এক জায়গায় পাওয়া যায়।",
    tech: ["Next.js", "Firebase", "Leaflet"],
    github: "#",
    image: "https://picsum.photos/seed/project2/800/600"
  },
  {
    id: 3,
    title: "টাস্ক ম্যানেজমেন্ট টুল",
    description: "টিমের উৎপাদনশীলতা বাড়াতে একটি স্মার্ট টাস্ক ট্র্যাকিং সিস্টেম।",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    github: "#",
    image: "https://picsum.photos/seed/project3/800/600"
  }
];

// Added EXPERIENCE_DATA to fix Error in Experience.tsx
export const EXPERIENCE_DATA = [
  {
    year: "২০২৩ - বর্তমান",
    title: "সিনিয়র ফ্রন্টএন্ড ডেভেলপার",
    description: "একটি মাল্টিন্যাশনাল কোম্পানিতে লিড ডেভেলপার হিসেবে দায়িত্ব পালন করছি।"
  },
  {
    year: "২০২১ - ২০২৩",
    title: "জুনিয়র ওয়েব ডেভেলপার",
    description: "শুরুতেই অনেকগুলো রিয়েল-ওয়ার্ল্ড প্রজেক্টে কাজ করার সুযোগ পেয়েছি।"
  },
  {
    year: "২০২০ - ২০২১",
    title: "ইন্টার্নশিপ",
    description: "প্রফেশনাল সফটওয়্যার ডেভেলপমেন্ট লাইফসাইকেল সম্পর্কে জ্ঞান অর্জন করেছি।"
  }
];
