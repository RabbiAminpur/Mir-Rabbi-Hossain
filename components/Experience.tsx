
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="py-2">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">আমার পথচলা</h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">ব্যক্তিগত শিক্ষা ও ক্রিয়েটিভ জার্নি</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block"></div>
        
        <div className="space-y-6 md:space-y-10">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 border-2 md:border-4 border-white dark:border-slate-900 z-10"></div>
              
              <div className="w-full sm:w-1/2 px-0 sm:px-6 md:px-8">
                <div className="glass p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                  <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-bold rounded-full mb-2 md:mb-3 uppercase tracking-wider">
                    {exp.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{exp.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
