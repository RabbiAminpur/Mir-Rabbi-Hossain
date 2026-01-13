
import React from 'react';
import { SITE_CONFIG } from '../constants';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <a href="#home" className="group">
          <h1 className="text-xl font-black text-slate-900 tracking-tighter transition-all group-hover:tracking-widest">
            {SITE_CONFIG.name}
          </h1>
        </a>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">পাবলিক প্রজেক্টস</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-slate-900 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">যোগাযোগ</a>
          </nav>
          
          <button 
            onClick={onMenuToggle}
            className="group flex items-center space-x-3 text-slate-900 transition-colors"
          >
            <div className="w-12 h-12 flex flex-col justify-center items-center rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all">
              <div className="w-5 h-0.5 bg-current mb-1.5 transition-all group-hover:translate-x-1"></div>
              <div className="w-5 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
