import React from 'react';
import { motion } from 'framer-motion';

const HeroBeach = ({ onComplete }) => {
  return (
    <div className="relative min-h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: 'url("/assets/beach.png")' }}
      ></div>
      
      {/* Animated Waves Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-60"></div>

      {/* Text Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-royal text-black mb-8 drop-shadow-lg">
          Some people enter life quietly...
        </h1>
        <h2 className="text-2xl md:text-3xl font-royal text-black/80 italic">
          and become impossible to replace.
        </h2>
        
        <motion.button
          onClick={onComplete}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 px-12 py-4 glass text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all shadow-xl"
        >
          Explore this world 🌊
        </motion.button>
      </motion.div>

      {/* Floating Dinosaur Easter Egg */}
      <motion.div 
        className="absolute bottom-20 left-10 z-20 cursor-pointer text-4xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🦖
      </motion.div>
    </div>
  );
};

export default HeroBeach;
