
import React from 'react';
import { HERO_CONTENT } from '../constants';

interface HeroProps {
  onNext?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2">
      <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 glass rounded-full text-[10px] md:text-xs font-bold tracking-widest text-blue-500 uppercase mb-6 md:mb-8">
         ডিজিটাল ক্রিয়েটর ও ডিজাইনার
      </div>
      
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter leading-tight md:leading-none">
        আমি <span className="text-gradient">{HERO_CONTENT.name}</span>
      </h1>
      
      <p className="max-w-3xl text-base md:text-xl text-slate-500 dark:text-slate-400 mb-8 md:mb-12 leading-relaxed">
        {HERO_CONTENT.intro}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
        <button 
          onClick={onNext}
          className="px-8 py-3.5 md:px-10 md:py-4 bg-blue-600 text-white font-bold rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/30 hover:bg-blue-700 active:scale-95 transition-all text-sm md:text-base"
        >
          {HERO_CONTENT.ctaWork}
        </button>
        <button 
          onClick={() => {
            // Manual navigation to contact slide (usually slide 5)
            // Implementation in App.tsx handles this via state if we passed setActiveSlide
            window.location.hash = "#contact";
          }}
          className="px-8 py-3.5 md:px-10 md:py-4 glass text-slate-900 dark:text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/10 active:scale-95 transition-all text-sm md:text-base"
        >
          {HERO_CONTENT.ctaContact}
        </button>
      </div>

      <div className="mt-12 md:mt-20 opacity-30 animate-pulse hidden sm:block">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">নিচে স্ক্রল করুন বা স্লাইড করুন</p>
      </div>
    </div>
  );
};

export default Hero;
