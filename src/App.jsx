import React, { useState, useEffect } from 'react';
import GreetingFlow from './components/GreetingFlow';
import RoyalScroll from './components/RoyalScroll';
import HeroBeach from './components/HeroBeach';
import NamesGame from './components/NamesGame';
import Traits from './components/Traits';
import Confession from './components/Confession';
import Gift from './components/Gift';
import CoffeeInvite from './components/CoffeeInvite';
import YesGarden from './components/YesGarden';
import FloatingHearts from './components/FloatingHearts';

const App = () => {
  const [currentSection, setCurrentSection] = useState('greeting'); // greeting, royal, hero, names, traits, confession, gift, coffee, garden
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
        return <GreetingFlow onComplete={() => setCurrentSection('royal')} />;
      case 'royal':
        return <RoyalScroll onComplete={() => setCurrentSection('hero')} />;
      case 'hero':
        return <HeroBeach onComplete={() => setCurrentSection('names')} />;
      case 'names':
        return <NamesGame onComplete={() => setCurrentSection('traits')} />;
      case 'traits':
        return <Traits onComplete={() => setCurrentSection('confession')} />;
      case 'confession':
        return <Confession onComplete={() => setCurrentSection('gift')} />;
      case 'gift':
        return <Gift onComplete={() => setCurrentSection('coffee')} />;
      case 'coffee':
        return <CoffeeInvite onComplete={() => setCurrentSection('garden')} />;
      case 'garden':
        return <YesGarden onReplay={() => setCurrentSection('greeting')} />;
      default:
        return <GreetingFlow onComplete={() => setCurrentSection('royal')} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <FloatingHearts />
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
