import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Waves, Flower2, Heart, PenTool, Sparkles, Star } from 'lucide-react';

const Traits = ({ onComplete }) => {
  const traits = [
    { icon: <Coffee />, text: "Coffee lover", color: "bg-orange-50" },
    { icon: <Waves />, text: "Beach soul", color: "bg-blue-50" },
    { icon: <Flower2 />, text: "Flower girl", color: "bg-pink-50" },
    { icon: "🦖", text: "Certified dinosaur fan", color: "bg-green-50" },
    { icon: <PenTool />, text: "Writes feelings into poetry", color: "bg-purple-50" },
    { icon: <Sparkles />, text: "Looks beautiful in kurtis", color: "bg-yellow-50" },
    { icon: <Coffee />, text: "Coffee lover", color: "bg-white" },
    { icon: <Waves />, text: "Beach soul", color: "bg-white" },
    { icon: <Flower2 />, text: "Flower girl", color: "bg-white" },
    { icon: "🦖", text: "Certified dinosaur fan", color: "bg-white" },
    { icon: <PenTool />, text: "Writes feelings into poetry", color: "bg-white" },
    { icon: <Sparkles />, text: "Looks beautiful in kurtis", color: "bg-white" },
    { icon: <Heart size={16} className="text-black/40" />, text: "Rare heart", color: "bg-white" }
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6 relative flex flex-col items-center">
      <h2 className="text-3xl font-royal text-black mb-16">Who You Are...</h2>
      
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {traits.map((trait, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className={`flex items-center gap-4 px-8 py-5 rounded-3xl glass bg-white shadow-lg cursor-default border border-black/5`}
          >
            <span className="text-black text-2xl">
              {trait.icon}
            </span>
            <span className="font-semibold text-black/70 tracking-wide">
              {trait.text}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button 
        onClick={onComplete}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 px-10 py-4 bg-black text-white rounded-full font-royal text-xl tracking-widest shadow-2xl hover:bg-gray-800 hover:scale-110 transition-all"
      >
        Wait... there's more
      </motion.button>
    </div>
  );
};

export default Traits;
