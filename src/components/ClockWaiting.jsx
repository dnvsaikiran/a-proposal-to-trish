import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Native Imports
import nightBg from '../assets/decor/cozy_night_sky.png';

const Typewriter = ({ text, onComplete, delay = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) setTimeout(onComplete, 1000);
      }
    }, delay);
    return () => clearInterval(timer);
  }, [text, onComplete, delay]);

  return <span>{displayedText}</span>;
};

const ClockWaiting = ({ onComplete }) => {
  const [phase, setPhase] = useState('intro'); // intro, clock
  const [introStep, setIntroStep] = useState(0);
  const [dots, setDots] = useState('');

  const introSequence = [
    { text: "yeah i forgot to tell you", nextDelay: 1000 },
    { text: "happy birthday to my human dairy sambhavi", nextDelay: 1000 },
    { text: "wait... maybe this is more correct...", nextDelay: 1000 },
    { text: "happy birthday to my human dairy trish", nextDelay: 1000 },
    { text: "actually, this feels even better...", nextDelay: 1500 },
    { text: "happy birthday to my human dairy SONU", nextDelay: 5000 },
  ];

  useEffect(() => {
    if (phase === 'clock') {
      const interval = setInterval(() => {
        setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const handleIntroComplete = () => {
    if (introStep < introSequence.length - 1) {
      setIntroStep(prev => prev + 1);
    } else {
      setPhase('clock');
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'clock' ? 0.6 : 0.3 }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${nightBg}")` }}
      />

      <AnimatePresence mode="wait">
        {phase === 'intro' ? (
          <motion.div 
            key={introStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 text-center px-10 max-w-4xl"
          >
            <h2 className={`text-3xl md:text-5xl font-hindi leading-relaxed ${introStep === 5 ? 'text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)] scale-110 font-bold transition-all duration-1000' : 'text-white/90'}`}>
              <Typewriter 
                text={introSequence[introStep].text} 
                onComplete={handleIntroComplete}
                delay={introStep === 5 ? 80 : 50}
              />
            </h2>
          </motion.div>
        ) : (
          <motion.div 
            key="clock-face"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex flex-col items-center gap-12"
          >
            {/* Elegant Cinematic Clock */}
            <div className="relative w-64 h-64 border-4 border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)] backdrop-blur-sm">
              <div className="absolute w-full h-full rounded-full border border-white/5 animate-pulse"></div>
              
              {/* Clock Hands */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-1 h-24 bg-white/40 bottom-1/2 origin-bottom rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute w-0.5 h-28 bg-yellow-400 bottom-1/2 origin-bottom rounded-full"
              />
              
              {/* Clock Center */}
              <div className="w-4 h-4 bg-white rounded-full z-20 shadow-lg"></div>
              
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-4 bg-white/20" 
                  style={{ transform: `rotate(${i * 30}deg) translateY(-110px)` }}
                />
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-6xl font-hindi tracking-widest text-white/80">
                Waiting{dots}
              </h3>
              <p className="mt-6 text-xl font-royal italic text-white/40">The stars are aligned, and so am I.</p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              onClick={onComplete}
              className="mt-12 px-8 py-3 bg-white/5 hover:bg-white/10 text-white/30 rounded-full text-sm tracking-[0.3em] uppercase transition-all"
            >
              Restart Journey
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-20, -100],
              opacity: [0, 0.5, 0],
              x: Math.random() * 100 - 50
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockWaiting;
