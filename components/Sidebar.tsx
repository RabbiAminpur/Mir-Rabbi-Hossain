
import React from 'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'হোম', icon: '🏠' },
    { name: 'প্রজেক্ট', icon: '📂' },
    { name: 'যোগাযোগ', icon: '📧' }
  ];

  return (
    <aside className="fixed right-0 top-0 bottom-0 z-50 w-20 md:w-24 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col items-center py-10">
      <div className="mb-12">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20">
          ম
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col space-y-8">
        {menuItems.map((item, idx) => (
          <button key={idx} className="group relative flex flex-col items-center justify-center p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
            <div className="absolute right-[-1px] w-1 h-0 group-hover:h-8 bg-blue-600 transition-all rounded-l-full"></div>
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="w-1 h-12 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="w-full h-1/3 bg-blue-600"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
