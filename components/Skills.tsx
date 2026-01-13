
import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  if (!SKILLS_DATA || SKILLS_DATA.length === 0) {
    return (
      <div className="text-center py-20 opacity-50">
        <p>দক্ষতা সংক্রান্ত কোনো তথ্য পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className="text-center mb-10 md:mb-16">
         <span className="text-blue-500 font-bold tracking-widest text-[10px] md:text-xs uppercase">প্রযুক্তিগত দক্ষতা</span>
         <h2 className="text-2xl md:text-4xl font-black mt-2">আমি যা জানি ও <span className="text-gradient">করি</span></h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {SKILLS_DATA.map((skill, idx) => (
          <div key={idx} className="glass p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/5 transition-all group">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <span className="font-bold text-sm md:text-base text-slate-700 dark:text-slate-200">{skill.name}</span>
              <div className="text-[10px] md:text-xs font-black px-2 py-1 bg-blue-500/10 text-blue-500 rounded-lg">
                {skill.level}%
              </div>
            </div>
            <div className="h-1 md:h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
