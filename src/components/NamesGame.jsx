import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeBurst, celebrate } from '../utils/ParticleBurst';

const NamesGame = ({ onComplete }) => {
  const [selected, setSelected] = useState(null);

  const handleNameClick = (name) => {
    setSelected(name);
    if (name === 'Sonu') {
      celebrate();
      setTimeout(onComplete, 5000);
    } else {
      coffeeBurst();
    }
  };

  const nameButtons = [
    { name: 'Sambhavi', label: 'Sambhavi' },
    { name: 'Trish', label: 'Trish' },
    { name: 'Sonu', label: 'Sonu' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl md:text-3xl font-royal text-black/60 mb-12 text-center"
      >
        The world may know you by many names...
      </motion.h2>

      <div className="flex flex-col gap-6 w-full max-w-xs">
        {nameButtons.map((btn) => (
          <motion.button
            key={btn.name}
            onClick={() => handleNameClick(btn.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-2xl font-bold tracking-widest transition-all shadow-md ${
              selected === btn.name 
                ? 'bg-black text-white' 
                : 'bg-white border-2 border-gray-100 text-gray-400'
            }`}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-16 text-center"
          >
            {selected === 'Sonu' ? (
              <div className="space-y-4">
                <p className="text-3xl font-royal text-black font-bold animate-pulse">Yes...</p>
                <div className="space-y-2 text-xl font-medium text-black/80">
                  <p>Sonu feels different.</p>
                  <p>Sonu feels personal.</p>
                  <p>Sonu feels like home.</p>
                </div>
              </div>
            ) : (
              <p className="text-xl text-black/40 italic">A beautiful name, but...</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NamesGame;
