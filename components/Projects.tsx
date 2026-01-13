
import React from 'react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  if (!PROJECTS_DATA || PROJECTS_DATA.length === 0) {
    return (
      <div className="text-center py-20 opacity-50">
        <p>প্রজেক্ট গ্যালারিতে কোনো প্রজেক্ট নেই।</p>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-16 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">প্রজেক্ট গ্যালারি</h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">আমার সাম্প্রতিক কিছু কাজ</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="glass rounded-xl md:rounded-2xl overflow-hidden group transition-all duration-300">
            <div className="relative overflow-hidden h-40 md:h-48">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 md:p-4">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] md:text-[10px] bg-white/20 backdrop-blur px-1.5 py-0.5 rounded text-white font-medium uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-2">
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
