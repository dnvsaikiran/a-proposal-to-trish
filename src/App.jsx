import React, { useState, useEffect } from 'react';
import GreetingFlow from './components/GreetingFlow';
import SpecialPPT from './components/SpecialPPT';
import HardWorkScroll from './components/HardWorkScroll';
import CoffeeInvite from './components/CoffeeInvite';
import DragonOverlay from './components/DragonOverlay';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [currentSection, setCurrentSection] = useState('greeting'); // greeting, ppt, hard_work, coffee
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'greeting':
        return <GreetingFlow onComplete={() => { setCurrentSection('ppt'); window.scrollTo(0, 0); }} />;
      case 'ppt':
        return <SpecialPPT onComplete={() => { setCurrentSection('hard_work'); window.scrollTo(0, 0); }} />;
      case 'hard_work':
        return <HardWorkScroll onComplete={() => { setCurrentSection('coffee'); window.scrollTo(0, 0); }} />;
      case 'coffee':
        return <CoffeeInvite onComplete={() => { setCurrentSection('greeting'); window.scrollTo(0, 0); }} />;
      default:
        return <GreetingFlow onComplete={() => setCurrentSection('ppt')} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-romantic-white selection:bg-black selection:text-white overflow-x-hidden">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <FloatingHearts />
      <DragonOverlay />
      <CustomCursor />
      <MusicPlayer />
      
      <main className="transition-all duration-1000 ease-in-out">
        {renderSection()}
      </main>

      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[80] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
