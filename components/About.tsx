
import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-2">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <div className="w-full max-w-sm lg:w-1/2 relative group">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden glass p-1.5 md:p-2 border border-white/20">
             <img 
               src="https://picsum.photos/seed/rabbi-profile/1000/1000" 
               alt="Rabbi Hossain" 
               className="rounded-xl md:rounded-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 aspect-square"
             />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-bold rounded-lg mb-4 md:mb-6">
             আমার গল্প
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 leading-tight">
            ক্রিয়েটিভিটি এবং ইউজার এক্সপেরিয়েন্সের <span className="text-blue-500">সমন্বয়</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-10 leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {ABOUT_CONTENT.focus.map((item, idx) => (
              <div key={idx} className="glass p-3 md:p-4 rounded-xl flex items-center space-x-3 group hover:border-blue-500/50 transition-colors">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                <span className="font-bold text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
