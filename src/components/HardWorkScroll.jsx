import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Native Imports
import scrollImg from '../assets/decor/ancient_scroll.png';
import paperBg from '../assets/decor/japanese_paper.png';

const messages = [
  "Sonu, main jaanta hoon tum kitni mehnat karti ho. ✨",
  "Subah se shaam tak, padhai aur busy schedules.",
  "Assignments, exams, aur wo constant grind.",
  "But still, you manage to keep that beautiful smile.",
  "You juggle so many worlds at once. 🌍",
  "Anime ki duniya se lekar real life responsibilities tak.",
  "Dark romance reading aur wo late night study sessions.",
  "Sabkuch kitni gracefully handle karti ho tum.",
  "Par kya tumhe pata hai main kya dekhta hoon?",
  "Main dekhta hoon ek insaan jo kabhi haar nahi maanta.",
  "Ek aisi ladki jo har mushkil ko haskar taal deti hai.",
  "Sonu, ek baat sach bataun? 🤫",
  "Mere aas pass bahut log aate hain, bahut baatein hoti hain.",
  "Par baaki sab mere liye sirf ek distraction hain.",
  "Tumhare saath baat karna... it brings a spark.",
  "A feeling that burns me in the best way possible. ❤️",
  "Sirf tum hi ho jo mujhe is tarah mehsoos kara sakti ho.",
  "Ab waqt hai ki main tumhe ek special jagah le chalun... 👀"
];

const HardWorkScroll = ({ onComplete }) => {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    if (activeCount < messages.length) {
      const timer = setTimeout(() => {
        setActiveCount(prev => prev + 1);
      }, 2000); // 2s lag
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(onComplete, 4000); // Wait on last message
      return () => clearTimeout(finishTimer);
    }
  }, [activeCount, onComplete]);

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-start py-24 px-6 overflow-hidden">
      {/* Background Japanese Paper */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url("${paperBg}")` }}
      ></div>

      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl min-h-[80vh] flex flex-col items-center justify-center p-12 md:p-20 origin-top"
      >
        {/* Scroll Backdrop Image */}
        <img 
          src={scrollImg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-fill drop-shadow-2xl opacity-90"
        />

        {/* Messages Container */}
        <div className="relative z-20 flex flex-col items-center gap-6 max-h-[70vh] overflow-y-auto no-scrollbar py-10 px-4 md:px-12 text-center">
          <AnimatePresence>
            {messages.slice(0, activeCount).map((msg, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-lg md:text-2xl font-hindi leading-relaxed ${idx === messages.length - 1 ? 'text-[#5d2e2e] font-bold text-3xl mt-4 scale-110' : 'text-[#4a3728]'}`}
              >
                {msg}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        className="mt-12 text-black/40 font-royal tracking-[0.2em] italic uppercase text-xs"
      >
        The scroll of our dedication...
      </motion.div>
    </div>
  );
};

export default HardWorkScroll;
