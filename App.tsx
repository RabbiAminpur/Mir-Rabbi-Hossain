
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-slate-900 selection:text-white bg-grid">
      <Header onMenuToggle={() => setIsMenuOpen(true)} />
      
      <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <div className="max-w-4xl space-y-8 animate-reveal">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse mr-2"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Portfolio v3.0</span>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-tight text-slate-900">
            সরলতাই <br />
            <span className="text-slate-300 italic font-serif [text-stroke:1px_#cbd5e1]">শ্রেষ্ঠ</span> সৌন্দর্য
          </h2>
          
          <p className="max-w-xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            মীর রাব্বি হোসেনের ডিজিটাল স্পেসে আপনাকে স্বাগতম। মেনু থেকে আমার কাজগুলো দেখে নিতে পারেন।
          </p>
        </div>
      </main>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center">
        <div className="w-px h-12 bg-slate-900 mb-4"></div>
        <span className="text-[10px] font-black tracking-[0.5em] uppercase">Built with Precision</span>
      </div>
    </div>
  );
};

export default App;
