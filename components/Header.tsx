
import React from 'react';
import { SITE_CONFIG } from '../constants';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-24 flex items-center justify-between">
        <a href="#" className="group">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-xs font-black">M</div>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">
              {SITE_CONFIG.name}
            </h1>
          </div>
        </a>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex items-center space-x-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Mir Rabbi Portfolio</span>
          </nav>
          
          <button 
            onClick={onMenuToggle}
            className="group flex items-center space-x-4 text-slate-900 transition-colors"
          >
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block opacity-40 group-hover:opacity-100 transition-opacity">মেনু ওপেন করুন</span>
            <div className="w-14 h-14 flex flex-col justify-center items-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all shadow-sm">
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all group-hover:translate-x-1"></div>
              <div className="w-4 h-0.5 bg-current transition-all group-hover:-translate-x-1"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
