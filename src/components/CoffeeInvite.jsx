import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celebrate } from '../utils/ParticleBurst';

// Native Imports
import cafeBackground from '../assets/cafe.png';

const BASE = import.meta.env.BASE_URL;

const CoffeeInvite = ({ onComplete }) => {
  const [noButtonState, setNoButtonState] = useState({
    scale: 1,
    label: "Nahi 🙈",
    clicks: 0
  });
  const [isAccepted, setIsAccepted] = useState(false);

  const noLabels = [
    "Nahi?", "Socho firse", "Pakka?", "Itna bhi kya", 
    "Arey yaar", "Last try", "Tiny no"
  ];

  const handleNoClick = () => {
    if (noButtonState.clicks >= noLabels.length - 1) {
      setNoButtonState(prev => ({ ...prev, scale: 0 }));
      return;
    }
    setNoButtonState(prev => ({
      ...prev,
      scale: Math.max(0.1, prev.scale - 0.15),
      label: noLabels[prev.clicks + 1],
      clicks: prev.clicks + 1
    }));
  };

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
            <h2 className="text-3xl md:text-5xl font-hindi text-black mb-8 leading-relaxed">
              Itni mehnat ke baad, mere saath ek cup coffee? ☕❤️
            </h2>
            
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-10 shadow-huge bg-black">
              <video 
                src={`${BASE}photos/VIDEO-2026-04-13-15-19-29.mp4`} 
                controls 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xl font-hindi text-black/70 mb-12">
              Chalo thodi der ke liye duniya bhul jaate hain.
            </p>

            {noButtonState.scale === 0 && (
              <p className="text-black font-bold mb-4 animate-bounce">
                Ab toh sirf 'Haan' hi option hai madam ji! 😉
              </p>
            )}

            <div className="flex flex-col items-center gap-6">
              <motion.button
                onClick={handleYesClick}
                animate={{ scale: noButtonState.scale === 0 ? 1.4 : 1.1 }}
                className="btn-romantic w-full py-5 text-xl bg-black text-white hover:bg-black/90"
              >
                Bilkul! ✨
              </motion.button>

              {noButtonState.scale > 0 && (
                <motion.button
                  onClick={handleNoClick}
                  animate={{ scale: noButtonState.scale }}
                  className="px-10 py-3 bg-white/40 text-black/60 rounded-full font-medium border border-black/10"
                >
                  {noButtonState.label}
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 text-center glass-premium p-16 rounded-[4rem]"
          >
            <h1 className="text-6xl mb-8">💖</h1>
            <h2 className="text-4xl font-hindi text-black mb-6">See you soon, Sonu!</h2>
            <p className="text-xl font-hindi text-black/60 mb-12">I knew you couldn't say no. Prepare for the best coffee date! ☕✨</p>
            <button 
              onClick={onComplete}
              className="px-8 py-3 bg-black text-white rounded-full font-bold"
            >
              Finish Journey
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="wave-container fixed bottom-0 left-0">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" className="wave-path">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,1)" />
        </svg>
      </div>
    </div>
  );
};

export default CoffeeInvite;
