
import React from 'react';

interface SidebarProps {
  activeSection: number;
  onSectionChange: (index: number) => void;
  sections: { name: string; icon: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, sections }) => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 z-50 w-16 md:w-24 flex flex-col items-center py-6 md:py-8 glass border-r border-white/10 dark:border-slate-800/50">
      <div className="mb-8 md:mb-12">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg shadow-blue-500/30">
          ?
        </div>
      </div>

      <nav className="flex-1 flex flex-col space-y-4 md:space-y-6">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => onSectionChange(idx)}
            className={`group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl transition-all duration-300 ${
              activeSection === idx 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40' 
                : 'text-slate-400 hover:bg-white/10 hover:text-blue-400'
            }`}
          >
            <span className="scale-90 md:scale-100">{section.icon}</span>
            
            <span className="absolute left-full ml-4 px-3 py-1 bg-slate-900 text-white text-[10px] md:text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] hidden md:block">
              {section.name}
              <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </span>

            {activeSection === idx && (
              <div className="absolute -right-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full glow-dot"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col space-y-2 md:space-y-4 items-center">
         <div className="w-0.5 md:w-1 h-8 md:h-12 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="w-full bg-blue-500 transition-all duration-500" 
              style={{ height: `${((activeSection + 1) / sections.length) * 100}%` }}
            ></div>
         </div>
         <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest vertical-text">
            {activeSection + 1} / {sections.length}
         </span>
      </div>
    </aside>
  );
};

export default Sidebar;
