
import React from 'react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse mr-2"></span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">বর্তমানে প্রজেক্টের জন্য উপলব্ধ</span>
      </div>
      
      <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.95] text-slate-900 mb-10">
        মিনিমালিস্ট <br />
        <span className="text-slate-200 [text-stroke:1px_#cbd5e1] font-serif italic pr-4">ডিজিটাল</span> মেকার
      </h1>
      
      <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-2xl font-light leading-relaxed mb-16">
        {HERO_CONTENT.intro}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="#projects"
          className="px-10 py-5 bg-slate-900 text-white font-bold rounded-3xl shadow-2xl shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
        >
          {HERO_CONTENT.ctaWork}
        </a>
        <a 
          href="#contact"
          className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-3xl hover:bg-slate-50 active:scale-95 transition-all text-sm uppercase tracking-widest"
        >
          {HERO_CONTENT.ctaContact}
        </a>
      </div>
    </div>
  );
};

export default Hero;
