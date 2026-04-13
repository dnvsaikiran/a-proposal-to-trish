import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Native Imports
import nightBg from '../assets/decor/cozy_night_sky_final.png';

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

const FallingComet = () => (
  <motion.div
    initial={{ x: "-10vw", y: "-10vh", opacity: 0 }}
    animate={{ 
      x: "110vw", 
      y: "40vh", 
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5] 
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      repeatDelay: 8,
      ease: "linear" 
    }}
    className="fixed z-20 pointer-events-none"
  >
    <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-yellow-200 to-white blur-[1px] rotate-[15deg] shadow-[0_0_20px_white]"></div>
  </motion.div>
);

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
        animate={{ opacity: phase === 'clock' ? 0.7 : 0.4 }}
        className="absolute inset-0 z-0 bg-cover bg-center brightness-90"
        style={{ backgroundImage: `url("${nightBg}")` }}
      />

      <FallingComet />

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
            <div className="relative w-72 h-72 border-4 border-white/20 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.1)] backdrop-blur-md">
              <div className="absolute w-full h-full rounded-full border border-white/5 animate-pulse"></div>
              
              {/* Clock Hands */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-1.5 h-28 bg-white/40 bottom-1/2 origin-bottom rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-0.5 h-32 bg-yellow-400 bottom-1/2 origin-bottom rounded-full shadow-[0_0_10px_orange]"
              />
              
              {/* Clock Center */}
              <div className="w-5 h-5 bg-white rounded-full z-20 shadow-2xl"></div>
              
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1.5 h-6 bg-white/30" 
                  style={{ transform: `rotate(${i * 30}deg) translateY(-125px)` }}
                />
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-5xl md:text-7xl font-hindi tracking-[0.2em] text-white/90 drop-shadow-xl">
                Waiting{dots}
              </h3>
              <p className="mt-8 text-2xl font-royal italic text-white/50 tracking-widest">Everything is and will always be yours.</p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8 }}
              onClick={onComplete}
              className="mt-16 px-10 py-4 bg-white/5 hover:bg-white/10 text-white/20 rounded-full text-xs tracking-[0.4em] uppercase transition-all border border-white/5"
            >
              Restart Journey
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Stardust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [-10, -50],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 4 + 4, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-white/60 rounded-full shadow-[0_0_5px_white]"
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
