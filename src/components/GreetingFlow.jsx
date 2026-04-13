import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coffeeBurst } from '../utils/ParticleBurst';

const GreetingFlow = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [noButtonState, setNoButtonState] = useState({
    scale: 1,
    label: "No",
    clicks: 0
  });

  const noLabels = [
    "No?", "Are you sure?", "Think again", "Pakka?", 
    "Last chance?", "Still no?", "Tiny no", "Oops"
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

  const nextStep = () => {
    setStep(s => s + 1);
    coffeeBurst();
  };

  const steps = [
    // Section 0A: Greeting
    {
      id: "greeting",
      content: (
        <div className="text-center px-6">
          <h2 className="text-2xl font-royal mb-8 text-black">Hey Sonu... how was your day today? ✨</h2>
          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <button onClick={nextStep} className="btn-premium">Nice 😊</button>
            <button onClick={nextStep} className="btn-premium">Fine 🙂</button>
            <button onClick={nextStep} className="btn-premium">Bad 😔</button>
          </div>
        </div>
      )
    },
    // Section 0B: Anime Cat
    {
      id: "cat",
      content: (
        <div className="text-center px-6">
          <h2 className="text-xl font-medium mb-6 text-black/70">Guess this might make you happy...</h2>
          <motion.img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3YybWxmZ3Z6Z3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyZ3hyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbnUQpnihPSIgIXOnP/giphy.gif" 
            alt="Cute anime cat"
            className="w-48 h-48 mx-auto rounded-3xl mb-8 object-cover shadow-2xl border-4 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
          <div className="flex gap-4 justify-center">
            <button onClick={nextStep} className="px-8 py-3 bg-black text-white rounded-full font-bold shadow-lg">Enough 😌</button>
            <button onClick={nextStep} className="px-8 py-3 border-2 border-black text-black rounded-full font-bold">Not Enough 😏</button>
          </div>
        </div>
      )
    },
    // Section 0C: Flowers (White Tube Lilies)
    {
      id: "flowers",
      content: (
        <div className="text-center px-6">
          <h2 className="text-xl font-medium mb-6 text-black/70">Maybe these flowers will make you happy 🌸</h2>
          <div className="w-64 h-80 mx-auto rounded-3xl mb-8 overflow-hidden shadow-huge bg-gray-50 relative border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1596708051772-4d05f3a09332?q=80&w=400" 
              alt="White tube lilies"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={nextStep} className="px-8 py-3 bg-black text-white rounded-full">Happy</button>
            <button onClick={nextStep} className="px-8 py-3 border-2 border-black text-black rounded-full text-sm font-bold">Not Happy</button>
          </div>
        </div>
      )
    },
    // Section 0D: Holi Memories (Gallery)
    {
      id: "holi",
      content: (
        <div className="text-center px-6 w-full max-w-md mx-auto">
          <h2 className="text-xl font-medium mb-6 text-black/70">What about these memories? 🎨</h2>
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x no-scrollbar">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="min-w-[280px] h-80 bg-gray-100 rounded-3xl snap-center flex-shrink-0 overflow-hidden shadow-2xl border-4 border-white relative group">
                 <img 
                  src={`https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=400&i=${i}`} 
                  alt={`Holi memory ${i}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <button onClick={nextStep} className="btn-premium py-2">Happy</button>
            <button onClick={nextStep} className="px-6 py-2 border-2 border-gray-200 text-gray-400 rounded-full text-xs">Not Happy</button>
          </div>
        </div>
      )
    },
    // [NEW] Section: First Meeting
    {
      id: "first_met",
      content: (
          <div className="text-center px-6">
          <h2 className="text-2xl font-royal mb-8 text-black">Do you remember this...? 🕰️</h2>
          <div className="w-80 h-96 mx-auto rounded-3xl mb-12 overflow-hidden shadow-huge relative group border-8 border-white">
            <img 
              src="/photos/first_met.png" 
              alt="Where we first met"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=400"; }}
            />
          </div>
          <p className="font-royal text-xl italic text-black/60 mb-12">The day our story truly began.</p>
          <button onClick={nextStep} className="btn-premium">I remember ✨</button>
        </div>
      )
    },
    // Section 0E: Our Photo (Shrinking No)
    {
      id: "final_photo",
      content: (
        <div className="text-center px-6">
          <h2 className="text-xl font-medium mb-6">This will surely make you happy... right? 💫</h2>
          <div className="w-72 h-96 mx-auto rounded-3xl mb-12 overflow-hidden shadow-huge relative group border-4 border-white">
            <img 
              src="/photos/her_laughing.png" 
              alt="Us together"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=400"; }}
            />
          </div>

          <div className="min-h-[140px] flex flex-col items-center justify-center">
            {noButtonState.scale === 0 && (
              <p className="text-black font-semibold mb-6 animate-bounce">
                Guess you always had only one option 😉
              </p>
            )}

            <div className="flex items-center justify-center gap-8">
              <motion.button 
                onClick={onComplete}
                animate={{ scale: noButtonState.scale === 0 ? 1.5 : 1 + (noButtonState.clicks * 0.1) }}
                className="px-12 py-5 bg-black text-white rounded-full font-black shadow-2xl z-20"
              >
                Yes
              </motion.button>

              {noButtonState.scale > 0 && (
                <motion.button 
                  onClick={handleNoClick}
                  animate={{ scale: noButtonState.scale }}
                  className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-500 rounded-full font-medium"
                >
                  {noButtonState.label}
                </motion.button>
              )}
            </div>
            
            {noButtonState.clicks > 0 && noButtonState.scale > 0 && (
              <p className="mt-6 text-gray-400 text-sm">Oh really? 😏 Think again.</p>
            )}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full"
        >
          {steps[step]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GreetingFlow;
