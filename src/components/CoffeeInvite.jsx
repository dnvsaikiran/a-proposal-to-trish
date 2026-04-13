import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celebrate } from '../utils/ParticleBurst';

const CoffeeInvite = ({ onComplete }) => {
  const [noButtonState, setNoButtonState] = useState({
    scale: 1,
    label: "No 🙈",
    clicks: 0
  });

  const noLabels = [
    "No?", "Socho firse", "Pakka?", "Itna bhi kya", 
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
    setTimeout(onComplete, 2000);
  };

  return (
    <div className="min-h-[120vh] w-full relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-90 scale-105"
        style={{ backgroundImage: 'url("/assets/cafe.png")' }}
      ></div>

      <div className="absolute inset-0 bg-white/20 z-10"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-20 glass w-full max-w-lg p-8 md:p-12 rounded-[3rem] text-center border-white/50"
      >
        <div className="space-y-6 mb-12 text-lg md:text-xl font-medium text-black/90 text-left md:text-center italic">
          <p>Between UPSC pressure, dreams,</p>
          <p>and binge-watching dark romance + manga...</p>
          <p>Life gets heavy.</p>
          <p className="font-bold text-black/80">Toh maine socha... thoda easy kar dete hain.</p>
        </div>

        <div className="space-y-4 mb-12">
          <p className="text-xl">Spend some evenings with me.</p>
          <p className="text-xl">A little laughter. A little peace.</p>
          <p className="text-2xl font-bold text-black font-royal">A little coffee. ☕</p>
        </div>

        <h3 className="text-xl font-bold mb-12 tracking-wide leading-relaxed">
          So I officially invite you... <br />
          <span className="text-2xl text-black font-royal font-black">For one cup of coffee with me every evening</span>
        </h3>

        {noButtonState.scale === 0 && (
          <p className="text-black font-bold mb-4 animate-bounce">
            Navigation complete. Destination = Yes 💘
          </p>
        )}

        <div className="flex flex-col items-center gap-6">
          <motion.button
            onClick={handleYesClick}
            animate={{ scale: noButtonState.scale === 0 ? 1.4 : 1.1 }}
            className="w-full py-5 bg-black text-white rounded-2xl font-black text-xl shadow-2xl hover:bg-gray-900 transition-colors"
          >
            Yes ✨
          </motion.button>

          {noButtonState.scale > 0 && (
            <motion.button
              onClick={handleNoClick}
              animate={{ scale: noButtonState.scale }}
              className="px-10 py-3 bg-white/20 text-white rounded-xl font-medium text-lg border border-white/40"
            >
              {noButtonState.label}
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CoffeeInvite;
