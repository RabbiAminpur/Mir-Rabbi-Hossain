
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col">
      <Header />
      
      <main className="flex-1 mr-20 md:mr-24 pt-20 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center space-y-6">
          <div className="inline-block p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm animate-pulse">
            <p className="text-slate-500 dark:text-slate-400 italic">
              নতুন তথ্য যোগ করার জন্য প্রস্তুত...
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            কাজ শুরু হোক <span className="text-blue-600">এখান থেকেই।</span>
          </h2>
        </div>
      </main>

      <Sidebar />
      
      <div className="fixed bottom-8 left-8 text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 vertical-text hidden md:block">
        Portfolio Structure v2.0
      </div>
    </div>
  );
};

export default App;
