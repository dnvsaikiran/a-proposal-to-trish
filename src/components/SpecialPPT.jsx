import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { magicalRandomBurst } from '../utils/ParticleBurst';

// Native Imports
import coupleConstant from '../assets/couple_bg_special.png';
import bgCoffee from '../assets/gallery/coffeeshop.png';
import bgMuseum from '../assets/gallery/museum.png';
import bgAdventure from '../assets/gallery/adventure_park.png';
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

const dynamicBackgrounds = [bgCoffee, bgMuseum, bgAdventure];

const SpecialPPT = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    magicalRandomBurst();
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const isLastSlide = currentIndex === photos.length - 1;
  const currentBgLevel = currentIndex % dynamicBackgrounds.length;

  // Floating flowers positions
  const flowers = [
    { id: 1, text: '🤍', top: '10%', left: '5%', delay: 0 },
    { id: 2, text: '🌸', top: '80%', left: '10%', delay: 2 },
    { id: 3, text: '🤍', top: '15%', left: '85%', delay: 1 },
    { id: 4, text: '🌸', top: '75%', left: '90%', delay: 3 },
    { id: 5, text: '🌿', top: '50%', left: '2%', delay: 4 },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-12 px-6 overflow-hidden bg-[#FFFDF5]">
      {/* GLOBAL BACKGROUND - Split Experience */}
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        {/* Left Side: Dynamic Favorites */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentBgLevel}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${dynamicBackgrounds[currentBgLevel]}")` }}
            />
          </AnimatePresence>
        </div>
        
        {/* Right Side: Constant Couple */}
        <div className="w-1/2 h-full relative overflow-hidden border-l border-black/5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            className="absolute inset-0 bg-cover bg-right"
            style={{ backgroundImage: `url("${coupleConstant}")` }}
          />
        </div>
      </div>

      {/* Floral Background Texture Overlay */}
      <div className="absolute inset-0 floral-texture pointer-events-none z-1"></div>

      {/* Floating Flowers */}
      {flowers.map(f => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute text-3xl flower-float z-0"
          style={{ top: f.top, left: f.left, transitionDelay: `${f.delay}s` }}
        >
          {f.text}
        </motion.div>
      ))}

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full relative z-20"
      >
        <div className="flex justify-between items-end mb-8 relative z-30">
          <div>
            <h2 className="text-3xl font-hindi text-black mb-2 drop-shadow-sm">Asli Yaadein 📸</h2>
            <p className="font-royal italic text-black/40">The Real Moments ({currentIndex + 1}/{photos.length})</p>
          </div>
          <button 
            onClick={nextSlide}
            className="btn-3d-romantic"
          >
            <span>{isLastSlide ? "Next Journey" : "Next Photo"}</span>
            <span className="heart-beat">💙</span>
          </button>
        </div>

        <div className="relative aspect-[4/5] md:aspect-video w-full rounded-[3rem] overflow-hidden shadow-huge glass-premium p-6 bg-white/40">
          {/* Floral Corner Ornaments */}
          <div className="flower-corner top-4 left-4">🤍</div>
          <div className="flower-corner top-4 right-4">🌸</div>
          <div className="flower-corner bottom-4 left-4">🌸</div>
          <div className="flower-corner bottom-4 right-4">🤍</div>

          {/* Main Floral Border Overlay */}
          <div className="absolute inset-0 z-40 pointer-events-none p-4">
            <img src={photoFrame} alt="" className="w-full h-full object-fill opacity-90 drop-shadow-lg" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="w-full h-full relative flex items-center justify-center p-8"
            >
              <img 
                src={`${BASE}photos/${photos[currentIndex]}`}
                alt={`Memory ${currentIndex}`}
                className="max-w-full max-h-full object-contain rounded-[1.5rem] shadow-2xl relative z-30"
              />

              {/* Romantic Hinglish Message for the Last Photo */}
              <AnimatePresence>
                {isLastSlide && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-6 bottom-6 md:inset-x-12 md:bottom-12 z-20"
                  >
                    <div className="glass-premium p-6 md:p-10 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-huge">
                      <p className="text-2xl md:text-3xl font-hindi text-black leading-relaxed mb-4 text-center">
                        Arey, ye wala blush... ✨
                      </p>
                      <p className="text-xl md:text-2xl font-script text-black/80 text-center">
                        Is smile ke aage to sab fail hai. Sach mein Sonu, tum muskurate huye sabse zyada pretty lagti ho! ❤️
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle Decorative Frame */}
          <div className="absolute inset-8 pointer-events-none border-[2px] border-white/10 rounded-[2.5rem] shadow-inner"></div>
        </div>

        <div className="mt-12 w-full bg-black/5 h-2 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / photos.length) * 100}%` }}
          />
        </div>

        <p className="mt-8 text-center text-black/30 font-royal text-sm italic tracking-widest">
          Scroll through the petals of our time together...
        </p>
      </motion.div>
    </div>
  );
};

export default SpecialPPT;
