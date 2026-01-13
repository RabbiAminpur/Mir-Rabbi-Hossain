
import React from 'react';
import { MENU_ITEMS, SITE_CONFIG } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Blur Overlay */}
      <div 
        className={`fixed inset-0 bg-white/40 backdrop-blur-xl z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Main Drawer */}
      <aside className={`fixed right-0 top-0 bottom-0 z-[70] w-full md:w-[550px] bg-white border-l border-slate-100 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 md:p-16 flex flex-col h-full">
          
          <div className="flex justify-between items-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</span>
            <button 
              onClick={onClose}
              className="group flex items-center space-x-2 text-slate-900 transition-all hover:scale-105"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">বন্ধ করুন</span>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>

          <nav className="flex-1 grid grid-cols-1 gap-4">
            {MENU_ITEMS.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href}
                onClick={onClose}
                className="group relative overflow-hidden p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-6">
                    <span className="text-3xl filter group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 mb-1">SECTION 0{idx + 1}</span>
                      <span className="text-2xl md:text-3xl font-black text-slate-900">{item.name}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                {/* Decorative Background Text */}
                <span className="absolute right-4 bottom-[-10px] text-6xl font-black text-slate-900/5 select-none pointer-events-none group-hover:translate-y-[-10px] transition-transform duration-500">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
            <div className="mb-4 md:mb-0">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{SITE_CONFIG.name} — ২০২৫</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Facebook</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Github</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
