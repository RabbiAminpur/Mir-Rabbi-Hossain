
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  const sections = [
    { name: 'হোম', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { name: 'সম্পর্কে', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { name: 'দক্ষতা', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { name: 'প্রজেক্ট', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { name: 'অভিজ্ঞতা', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: 'যোগাযোগ', icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % sections.length);
  }, [sections.length]);

  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + sections.length) % sections.length);
  }, [sections.length]);

  const renderSlide = () => {
    switch (activeSlide) {
      case 0: return <Hero onNext={handleNext} />;
      case 1: return <About />;
      case 2: return <Skills />;
      case 3: return <Projects />;
      case 4: return <Experience />;
      case 5: return <Contact />;
      default: return <Hero onNext={handleNext} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <Sidebar 
        activeSection={activeSlide} 
        onSectionChange={setActiveSlide} 
        sections={sections} 
      />
      
      <main className="flex-1 ml-16 md:ml-24 relative overflow-hidden h-screen">
        <div className="h-full w-full overflow-y-auto custom-scroll px-4 sm:px-8 md:px-12 py-8 md:py-12">
          <div key={activeSlide} className="animate-slide-in min-h-full flex flex-col justify-center">
             <div className="max-w-5xl mx-auto w-full">
                {renderSlide()}
             </div>
          </div>
        </div>

        {/* Manual Slide Controls */}
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2 md:space-x-3 z-40">
          <button 
            onClick={handlePrev}
            className="p-3 md:p-4 glass rounded-xl md:rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            title="আগের স্লাইড"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="p-3 md:p-4 glass rounded-xl md:rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            title="পরের স্লাইড"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </main>

      <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
      
      {/* Decorative Gradients */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default App;
