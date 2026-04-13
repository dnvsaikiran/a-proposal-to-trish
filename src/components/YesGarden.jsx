import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { celebrate } from '../utils/ParticleBurst';

const YesGarden = ({ onReplay }) => {
  useEffect(() => {
    celebrate();
    const interval = setInterval(celebrate, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">
      {/* Garden Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-90 animate-pulse-soft"
        style={{ backgroundImage: 'url("/assets/garden.png")' }}
      ></div>

      {/* Floating Petals Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            initial={{ y: -20, x: Math.random() * 100 + "%", rotate: 0 }}
            animate={{ y: "105vh", rotate: 360, x: (Math.random() * 100 - 10) + "%" }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 text-center px-6 max-w-2xl bg-white/30 backdrop-blur-xl p-12 rounded-[4rem] border border-white/40 shadow-huge"
      >
        <h1 className="text-5xl md:text-7xl font-royal text-black mb-8 drop-shadow-lg">
          I’ll be waiting ⏰
        </h1>

        <div className="space-y-4 mb-12">
          <p className="text-2xl font-royal text-black/80">For that coffee.</p>
          <p className="text-2xl font-royal text-black/80">For those 30 minutes.</p>
          <p className="text-2xl font-royal text-black/80">For your yes.</p>
          <p className="text-xl italic text-black/60">For whatever beautiful name this place in my heart gets.</p>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl md:text-5xl font-black text-black font-royal mb-12 drop-shadow-md"
        >
          Happy Birthday, Sonu 🎂
        </motion.div>

        <button
          onClick={onReplay}
          className="px-10 py-4 glass border-gray-200 text-black rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-xl"
        >
          Replay Journey
        </button>
      </motion.div>
    </div>
  );
};

export default YesGarden;
