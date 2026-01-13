
import React from 'react';
import { SITE_CONFIG } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {SITE_CONFIG.name}
        </h1>
        <div className="hidden md:flex items-center space-x-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-50">বর্তমানে উপলব্ধ</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
