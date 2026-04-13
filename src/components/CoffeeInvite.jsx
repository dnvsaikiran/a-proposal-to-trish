import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celebrate } from '../utils/ParticleBurst';

// Native Imports
import cafeBackground from '../assets/cafe.png';

const CoffeeInvite = ({ onComplete }) => {
  const [noButtonState, setNoButtonState] = useState({
    label: "Nahi 🙈",
    clicks: 0,
    x: 0,
    y: 0,
    isVisible: true
  });
  const [isAccepted, setIsAccepted] = useState(false);

  const noLabels = [
    "Nahi?", 
    "Think really", 
    "Are you sure?", 
    "Sonu please? 🥺", 
    "One more time check", 
    "Almost there...", 
    "Fine, I'm hiding!"
  ];

  const handleNoInteraction = useCallback(() => {
    if (noButtonState.clicks >= 6) {
      setNoButtonState(prev => ({ ...prev, isVisible: false }));
      return;
    }

    // Move to a random position within safe bounds
    const randomX = (Math.random() - 0.5) * 400; // ±200px
    const randomY = (Math.random() - 0.5) * 400; // ±200px

    setNoButtonState(prev => ({
      ...prev,
      clicks: prev.clicks + 1,
      label: noLabels[Math.min(prev.clicks + 1, noLabels.length - 1)],
      x: randomX,
      y: randomY
    }));
  }, [noButtonState.clicks]);

  const handleYesClick = () => {
    celebrate();
    setIsAccepted(true);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-romantic-white">
      {/* Background Anime Cafe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-75 scale-105 opacity-40 blur-sm"
        style={{ backgroundImage: `url("${cafeBackground}")` }}
      ></div>

      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div 
            key="invite"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-20 glass-premium w-full max-w-2xl p-8 md:p-12 rounded-[4rem] text-center"
          >
            <h2 className="text-3xl md:text-5xl font-hindi text-black mb-12 leading-relaxed h-32 flex items-center justify-center">
               Your evenings are mine... ☕❤️
            </h2>
            
            <div className="flex flex-col items-center gap-8">
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d-romantic w-full py-6 text-2xl !rounded-2xl shadow-xl flex items-center justify-center"
              >
                Confirmed ✨
              </motion.button>

              {noButtonState.isVisible && (
                <motion.button
                  onMouseEnter={handleNoInteraction}
                  onClick={handleNoInteraction}
                  animate={{ 
                    x: noButtonState.x, 
                    y: noButtonState.y,
                    scale: Math.max(0.6, 1 - noButtonState.clicks * 0.1)
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-10 py-3 bg-white/40 text-black/60 rounded-full font-medium border border-black/10 backdrop-blur-md"
                >
                  {noButtonState.label}
                </motion.button>
              )}
            </div>

            {noButtonState.clicks >= 6 && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-8 text-black font-bold animate-bounce"
              >
                Pakda gaya! Ab sirf 'Confirmed' hi bacha hai! 😉
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 text-center glass-premium p-16 rounded-[4rem] bg-white/80"
          >
            <motion.h1 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-7xl mb-10"
            >
              💖
            </motion.h1>
            <h2 className="text-4xl font-hindi text-black mb-8">I knew it! ✨</h2>
            <p className="text-2xl font-script text-black/70 mb-12">See you there, Sonu. Every evening is ours now.</p>
            <button 
              onClick={onComplete}
              className="btn-3d-romantic w-full text-xl"
            >
              Aage Chalein? ❤️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoffeeInvite;
