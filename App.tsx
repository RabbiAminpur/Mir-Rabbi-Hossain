
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-slate-900 selection:text-white">
      <Header onMenuToggle={() => setIsMenuOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-32 md:space-y-48">
        <section id="home" className="animate-reveal">
          <Hero />
        </section>

        <section id="about" className="animate-reveal" style={{ animationDelay: '0.2s' }}>
          <About />
        </section>

        <section id="skills" className="animate-reveal" style={{ animationDelay: '0.4s' }}>
          <Skills />
        </section>

        <section id="projects" className="animate-reveal" style={{ animationDelay: '0.6s' }}>
          <Projects />
        </section>

        <section id="experience" className="animate-reveal" style={{ animationDelay: '0.8s' }}>
          <Experience />
        </section>

        <section id="contact" className="animate-reveal" style={{ animationDelay: '1s' }}>
          <Contact />
        </section>
      </main>

      <Footer />
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Aesthetic Floating Indicator */}
      <div className="fixed bottom-12 left-12 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-px h-16 bg-slate-200"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] opacity-40">SCROLL DOWN</span>
        </div>
      </div>
    </div>
  );
};

export default App;
