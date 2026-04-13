import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeBurst } from '../utils/ParticleBurst';

// Native Imports for reliable deployment
import beachAnime from '../assets/beach_anime.png';
import firstMetAnime from '../assets/first_met_anime.png';
import couple1Anime from '../assets/couple_1_anime.png';
import couple2Anime from '../assets/couple_2_anime.png';
import girlWithCat from '../assets/girl_with_cat.png';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayText}</span>;
}

const GreetingFlow = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [showTease, setShowTease] = useState(false);

  const nextStep = () => {
    setStep(s => s + 1);
    coffeeBurst();
  };

  const steps = [
    // Step 1: Cinematic Intro
    {
      id: "intro",
      content: (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFDF5' }}>
          <div className="absolute inset-0 z-0 bg-cover bg-center brightness-90 animate-pulse-soft" style={{ backgroundImage: `url("${beachAnime}")`, backgroundSize: 'cover' }}></div>
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 253, 245, 0.2), #FFFDF5)' }}></div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-20 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-hindi text-black mb-6 drop-shadow-md">हे सोनू... ✨</h1>
            <h2 className="text-xl md:text-2xl font-royal italic text-black/70 mb-12">How was your day today, madam ji?</h2>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              {['Nice 😊', 'Fine 🙂', 'Bad 😔 (Make it better!)'].map((label, i) => (
                <button key={i} onClick={nextStep} className="btn-romantic" style={{ padding: '16px 40px', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(255, 255, 255, 0.5)', fontWeight: 'bold' }}>
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
    // Step 2: First Met
    {
      id: "anime_met",
      content: (
        <div className="text-center px-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-hindi mb-10 text-black">Yaad hai hum pehli baar kab mile the? 🕰️</h2>
          <div className="glass-premium p-4 rounded-[2rem] mb-12">
            <img src={firstMetAnime} className="w-full h-[450px] object-cover rounded-[1.5rem] shadow-huge" />
          </div>
          <button onClick={nextStep} className="btn-romantic">I remember ❤️</button>
        </div>
      )
    },
    // Step 3: Couple 1
    {
      id: "anime_couple_1",
      content: (
        <div className="text-center px-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-hindi mb-10 text-black">Aisa lagta hai jaise koi anime movie chal rahi ho... 🎬</h2>
          <div className="glass-premium p-4 rounded-[2rem] mb-12">
            <img src={couple1Anime} className="w-full h-[450px] object-cover rounded-[1.5rem] shadow-huge" />
          </div>
          <button onClick={nextStep} className="btn-romantic">Aage Badho ✨</button>
        </div>
      )
    },
    // Step 4: Couple 2
    {
      id: "anime_couple_2",
      content: (
        <div className="text-center px-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-hindi mb-10 text-black">Har pal tumhare saath ek kahani jaisa hai. 📖</h2>
          <div className="glass-premium p-4 rounded-[2rem] mb-12">
            <img src={couple2Anime} className="w-full h-[450px] object-cover rounded-[1.5rem] shadow-huge" />
          </div>
          <button onClick={nextStep} className="btn-romantic">Bas itna hi? 😏</button>
        </div>
      )
    },
    // Step 5: The Tease & Reality
    {
      id: "icloud_tease",
      content: (
        <div className="text-center px-6 max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!showTease ? (
              <motion.div key="tease_btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="glass-premium p-10 rounded-[3rem] border-dashed border-2 border-black/10">
                  <h2 className="text-3xl font-hindi mb-6 text-black">Wait... Thoda aur bhi hai! ✋</h2>
                  <p className="text-lg text-black/70 mb-8 leading-relaxed">Mera <span className="font-bold text-red-500">iCloud storage full</span> ho gaya tha...</p>
                  <button onClick={() => setShowTease(true)} className="btn-romantic w-full">Bas itna hi? 😏</button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="tease_popup" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-premium p-10 rounded-[3rem] bg-white/90">
                <h2 className="text-2xl font-hindi mb-6 text-black">
                  <TypewriterText text="Wait... tumne sach mein socha bas itna hi hai? 😏 Thoda sabar madam ji, asli magic ab shuru hoga!" />
                </h2>
                <button onClick={onComplete} className="btn-romantic w-full mt-6 bg-black text-white">Reality Dekhao? ✨</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-romantic-white relative z-10 overflow-hidden">
      {/* Cat Companion in the corner */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 3, repeat: Infinity }}
        className="fixed bottom-10 left-10 w-32 md:w-48 z-50 pointer-events-none drop-shadow-xl"
      >
        <img src={girlWithCat} alt="Cat Companion" className="w-full h-auto" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full flex items-center justify-center"
        >
          {steps[step]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GreetingFlow;
