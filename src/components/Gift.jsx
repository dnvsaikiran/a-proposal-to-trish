import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celebrate } from '../utils/ParticleBurst';

const Gift = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    celebrate();
  };

  return (
    <div className="min-h-screen bg-pink-50/30 flex flex-col items-center justify-center px-6 text-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            className="cursor-pointer group"
            onClick={handleOpen}
          >
            <div className="text-9xl mb-12 group-hover:rotate-12 transition-transform duration-500">🎁</div>
            <h2 className="text-3xl font-royal text-accent">Tap to see your gift</h2>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-xl flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-royal text-accent mb-12">The Real Gift</h2>
            
            <div className="space-y-6 text-xl md:text-2xl font-medium text-dark/70 italic leading-relaxed">
              <p>Maybe I cannot give expensive surprises.</p>
              <p>But I can give effort.</p>
              <p>Creativity.</p>
              <p>Care.</p>
              <p className="text-accent font-bold">And something made only for you.</p>
            </div>

            <motion.button
              onClick={onComplete}
              className="mt-20 px-12 py-4 bg-accent text-white rounded-full font-bold shadow-2xl hover:scale-110 transition-all uppercase tracking-widest"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Continue 💖
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gift;
