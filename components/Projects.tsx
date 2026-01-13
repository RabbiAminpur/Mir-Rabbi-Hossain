
import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">প্রজেক্ট <span className="font-serif italic text-slate-400">গ্যালারি</span></h2>
        </div>
        <p className="max-w-md text-slate-500 text-sm md:text-lg">
          প্রতিটি প্রজেক্টে আমি আধুনিক ডিজাইন এবং সেরা পারফরম্যান্স নিশ্চিত করার চেষ্টা করেছি।
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS_DATA.map((project, idx) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 mb-6 aspect-[4/3] border border-slate-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
