import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { grandCelebration } from '../utils/ParticleBurst';

// Native Imports
import japanesePaper from '../assets/decor/japanese_paper.png';
import photoFrame from '../assets/decor/photo_frame_final.png';

const BASE = import.meta.env.BASE_URL;

const photos = [
  "PHOTO-2026-04-13-16-00-45.jpg",
  "PHOTO-2026-04-13-15-19-29.jpg",
  "PHOTO-2026-04-13-15-19-29-1.jpg",
  "PHOTO-2026-04-13-15-19-30.jpg",
  "PHOTO-2026-04-13-15-19-30-1.jpg",
  "PHOTO-2026-04-13-15-19-30-2.jpg",
  "PHOTO-2026-04-13-15-19-31.jpg",
  "PHOTO-2026-04-13-15-19-31-1.jpg",
  "PHOTO-2026-04-13-15-19-31-2.jpg",
  "PHOTO-2026-04-13-15-19-32.jpg",
  "PHOTO-2026-04-13-15-19-32-1.jpg",
  "PHOTO-2026-04-13-16-03-04.jpg",
  "PHOTO-2026-04-13-16-03-05.jpg",
  "PHOTO-2026-04-13-16-17-15.jpg",
  "PHOTO-2026-04-13-16-17-15-1.jpg",
  "PHOTO-2026-04-13-16-17-16.jpg",
  "PHOTO-2026-04-13-16-17-16-1.jpg",
  "PHOTO-2026-04-13-16-17-17.jpg",
];

const captions = [
  "Mera favorite smile! 😊",
  "Bas tum aur main, har lamha khaas hai. ✨",
  "Our first proper date. Yaad hai? ❤️",
  "Making amazing memories with the gang! 🍻",
  "Best times with the squad! 🤘",
  "Crazy night with friends. Unforgettable! ✨",
  "Group goals right here. 📸",
  "Arey, ye wala pose to iconic tha! 😎",
  "Tumhare bina sab adhura lagta hai. 🥺",
  "Beautiful days, beautiful you.",
  "Sunday fun with the best people! 🍕",
  "Look at us! Kinni pyaari lag rahi ho. 😍",
  "Adventure awaits us. Hamesha saath rehna. ✨",
  "Cafe dates and deep talks. ❤️",
  "Humari apni duniya. 🌍",
  "Through thick and thin, always together.",
  "The real moments that define us. ❤️",
  "Last one... for now. Sonu, you're my favorite human! 💖"
];

const SpecialPPT = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      grandCelebration();
      if (currentIndex < photos.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 3000);
      }
    }, 2800); // 2.5s display + padding

    return () => clearInterval(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
      {/* Background Japanese Paper */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-105"
        style={{ backgroundImage: `url("${japanesePaper}")` }}
      ></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full relative z-20"
      >
        <div className="text-center mb-10">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-3xl md:text-5xl font-hindi text-black drop-shadow-sm h-12 flex items-center justify-center"
            >
              {captions[currentIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="relative aspect-[4/5] md:aspect-video w-full rounded-[4rem] overflow-hidden shadow-2xl glass-premium p-4 md:p-8 bg-white/80 border border-white/50">
          {/* Floral Border Overlay - Multiply Blend Fix */}
          <div className="absolute inset-0 z-40 pointer-events-none p-2">
            <img 
              src={photoFrame} 
              alt="" 
              className="w-full h-full object-fill opacity-90 mix-blend-multiply drop-shadow-sm" 
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <img 
                src={`${BASE}photos/${photos[currentIndex]}`}
                alt={`Memory ${currentIndex}`}
                className="max-w-[90%] max-h-[90%] object-contain rounded-[2rem] shadow-xl relative z-30"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-12 text-center text-black/40 font-royal text-sm italic tracking-[0.3em]"
        >
          MAKING MEMORIES FOREVER...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SpecialPPT;
