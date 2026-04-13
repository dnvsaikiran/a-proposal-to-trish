import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RoyalScroll = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const textLines = [
    "To the girl who carries more strength than she knows...",
    "You are working so hard.",
    "Balancing dreams, pressure, studies, overthinking,",
    "UPSC preparation,",
    "and still finding time for stories, dark romance, manga, and smiles.",
    "That takes strength.",
    "I know one day you will succeed.",
    "And yes...",
    "I can truly imagine you as an IAS officer.",
    "Not just because you work hard,",
    "but because your heart is good.",
    "You care deeply.",
    "You act strong,",
    "sometimes distant,",
    "sometimes guarded...",
    "Maybe because good people often learn",
    "to protect themselves after being hurt.",
    "But behind all of that,",
    "you are genuinely beautiful at heart.",
    "And that deserves to be celebrated today."
  ];

  return (
    <div className="min-h-screen bg-[#fcf8f1] flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <AnimatePresence>
        {!isOpen ? (
          <motion.div 
            key="sealed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-64 h-16 bg-[#e6d5b8] rounded-full shadow-lg relative border-4 border-[#c5a880] flex items-center justify-center">
               <div className="w-12 h-12 bg-red-700 rounded-full border-2 border-red-900 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-royal text-xl">S</span>
               </div>
            </div>
            <p className="mt-8 font-royal text-gray-600 italic animate-pulse">Tap to break the seal</p>
          </motion.div>
        ) : (
          <motion.div 
            key="scroll"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-lg bg-[#f4e4bc] shadow-2xl relative border-x-[12px] border-[#8b5a2b] p-8 md:p-12 overflow-hidden"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")' }}
          >
            {/* Scroll Ends */}
            <div className="absolute top-0 left-[-12px] right-[-12px] h-4 bg-[#6f4e37] rounded-full"></div>
            
            <div className="space-y-6">
              {textLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.8 + 0.5, duration: 1 }}
                  className={`text-lg font-royal leading-relaxed text-[#4a3728] ${i === 0 ? 'text-2xl font-bold mb-4' : ''}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: textLines.length * 0.8 + 1 }}
               className="mt-12 pt-8 border-t border-[#8b5a2b]/20 text-right"
            >
              <p className="font-royal text-[#6f4e37] italic">Signed,</p>
              <p className="font-royal text-xl font-bold text-[#4a3728]">Someone who notices more than he says.</p>
              
              <button 
                onClick={onComplete}
                className="mt-12 w-full py-4 bg-[#8b5a2b] text-white rounded-lg font-royal text-lg shadow-lg hover:bg-[#6f4e37] transition-colors"
              >
                Continue, Your Highness ✨
              </button>
            </motion.div>

            {/* Bottom Scroll End */}
            <div className="absolute bottom-0 left-[-12px] right-[-12px] h-4 bg-[#6f4e37] rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoyalScroll;
