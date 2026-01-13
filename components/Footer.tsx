
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">
          © {new Date().getFullYear()} রাব্বি হোসেন — All Rights Reserved
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Github</a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Dribbble</a>
          <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">Behance</a>
        </div>
        <p className="text-sm italic text-slate-400 dark:text-slate-600">
          "একটি ভালো ডিজাইন হাজার কথা বলে।"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
