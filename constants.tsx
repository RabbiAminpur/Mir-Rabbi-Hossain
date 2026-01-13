
import { Project, Skill, Experience } from './types';

export const HERO_CONTENT = {
  name: "রাব্বি হোসেন",
  role: "UI / Web / App Designer",
  intro: "আমি একজন ডিজিটাল ক্রিয়েটর এবং ডিজাইনার, যে আধুনিক ইউজার ইন্টারফেস এবং কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরিতে বিশ্বাসী।",
  ctaWork: "আমার কাজ দেখুন",
  ctaContact: "যোগাযোগ করুন"
};

export const ABOUT_CONTENT = {
  title: "আমার সম্পর্কে",
  description: "আমি রাব্বি হোসেন। আমি গত কয়েক বছর ধরে ইউজার ইন্টারফেস (UI) এবং ইউজার এক্সপেরিয়েন্স (UX) ডিজাইন নিয়ে কাজ করছি। আমার মূল লক্ষ্য হলো সহজ এবং দৃষ্টিনন্দন ডিজাইনের মাধ্যমে মানুষের ডিজিটাল অভিজ্ঞতাকে সহজতর করা।",
  focus: ["UI/UX ডিজাইন", "ওয়েব অ্যাপ্লিকেশন", "রেসপন্সিভ লেআউট", "প্রম্পট ইঞ্জিনিয়ারিং"]
};

export const SKILLS_DATA: Skill[] = [
  { name: "UI Design", level: 95 },
  { name: "Web Design", level: 90 },
  { name: "App Concept", level: 85 },
  { name: "React / Frontend", level: 80 },
  { name: "GitHub Deployment", level: 85 },
  { name: "Prompt Engineering", level: 90 }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "আধুনিক পোর্টফোলিও",
    description: "একটি ক্লিন এবং মিনিমাল পোর্টফোলিও যা রিঅ্যাক্ট এবং টেলউইন্ড সিএসএস দিয়ে তৈরি।",
    tech: ["React", "Tailwind", "Framer"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/project1/600/400"
  },
  {
    id: 2,
    title: "ই-কমার্স ইন্টারফেস",
    description: "ইউজার ফ্রেন্ডলি ই-কমার্স অ্যাপ ডিজাইন যেখানে কেনাকাটা হবে আরও সহজ।",
    tech: ["UI Design", "Figma"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/project2/600/400"
  },
  {
    id: 3,
    title: "ট্রাভেল অ্যাপ কনসেপ্ট",
    description: "ভ্রমণ পিপাসুদের জন্য একটি চমৎকার মোবাইল অ্যাপ ডিজাইনের পরিকল্পনা।",
    tech: ["UX Research", "Mobile UI"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/project3/600/400"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    year: "২০২২ - বর্তমান",
    title: "ফ্রিল্যান্স ডিজাইনার",
    description: "বিভিন্ন গ্লোবাল ক্লায়েন্টের জন্য ইউজার ইন্টারফেস এবং ব্র্যান্ডিং নিয়ে কাজ করছি।"
  },
  {
    year: "২০২১ - ২০২২",
    title: "সেলফ লার্নিং জার্নি",
    description: "ওয়েব ডিজাইন এবং ফ্রন্টএন্ড ডেভেলপমেন্টের খুঁটিনাটি হাতে-কলমে শেখা।"
  },
  {
    year: "২০২০",
    title: "শুরুটা যখন থেকে",
    description: "গ্রাফিক ডিজাইনের মাধ্যমে ভিজ্যুয়াল আর্টের জগতে আমার প্রবেশ।"
  }
];
