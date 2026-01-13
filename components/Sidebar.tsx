
import React from 'react';
import { MENU_ITEMS, SITE_CONFIG } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Dynamic Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/10 backdrop-blur-md z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Unique Side Drawer */}
      <aside className={`fixed right-0 top-0 bottom-0 z-[70] w-full md:w-[500px] bg-white border-l border-slate-100 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 md:p-12 flex flex-col h-full">
          
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Navigation Menu</h3>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 grid grid-cols-1 gap-5 overflow-y-auto pr-2 custom-scroll">
            {MENU_ITEMS.map((item: any, idx) => (
              <a 
                key={idx} 
                href={item.href}
                onClick={onClose}
                className={`group relative overflow-hidden p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} border border-white/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500`}
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className={`w-14 h-14 rounded-3xl ${item.accent} flex items-center justify-center text-3xl shadow-lg shadow-white/20 group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">0{idx + 1}</span>
                      <span className="text-3xl font-black text-slate-900">{item.name}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Artistic Background Label */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black text-slate-900/5 select-none pointer-events-none group-hover:scale-150 transition-transform duration-1000">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-slate-50">
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-[10px] font-bold uppercase tracking-widest">{SITE_CONFIG.name}</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-slate-900 transition-colors"><span className="text-[10px] font-black uppercase tracking-widest">Facebook</span></a>
                <a href="#" className="hover:text-slate-900 transition-colors"><span className="text-[10px] font-black uppercase tracking-widest">Github</span></a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #f1f5f9; border-radius: 10px; }
      `}</style>
    </>
  );
};

export default Sidebar;
