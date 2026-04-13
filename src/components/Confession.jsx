import React from 'react';
import { motion } from 'framer-motion';

const Confession = ({ onComplete }) => {
  const lines = [
    "Sometimes my face looks serious.",
    "I know I messed that up.",
    "But that never meant",
    "I wasn’t enjoying our conversations.",
    "It only meant",
    "there were too many thoughts in my mind...",
    "while I was quietly happy being there with you."
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Moon */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-10 md:right-40 w-32 h-32 bg-yellow-50 rounded-full blur-xl opacity-60 shadow-[0_0_100px_rgba(253,224,71,0.5)]"
      ></motion.div>

      <div className="max-w-2xl w-full space-y-8 z-10 text-center md:text-left">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 1.5, duration: 1 }}
            className="text-xl md:text-2xl font-royal text-dark/90 leading-relaxed italic"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.button
        onClick={onComplete}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: lines.length * 1.5 + 1 }}
        className="mt-24 px-12 py-4 bg-white border border-pink-100 text-pink-400 rounded-full font-bold shadow-xl hover:scale-110 transition-all"
      >
        I have a gift for you 🎁
      </motion.button>
    </div>
  );
};

export default Confession;
