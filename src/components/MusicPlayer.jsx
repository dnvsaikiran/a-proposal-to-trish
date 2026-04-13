import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  // Hardcoded path for the Hawayein song to ensure it never 404s
  const musicUrl = "/a-proposal-to-trish/hawayein.mp3";

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log("Audio play failed:", err);
          // If the hardcoded path fails, try the dev path
          audioRef.current.src = "hawayein.mp3";
          audioRef.current.play().catch(e => console.log("Final playback failed"));
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3 pointer-events-auto">
      <audio ref={audioRef} src={musicUrl} loop />
      
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-black/80 backdrop-blur-lg text-white px-5 py-2 rounded-2xl text-sm font-hindi shadow-huge whitespace-nowrap mb-2 border border-white/20"
          >
            Suno... aur feel karo ✨
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => {
          togglePlay();
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-huge transition-all duration-500 ${isPlaying ? 'bg-black text-white' : 'bg-white/80 text-black border border-white/50 backdrop-blur-md'}`}
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          background: isPlaying ? '#000' : 'rgba(255,255,255,0.9)'
        }}
      >
        <div className="relative">
          {isPlaying && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-black rounded-full"
            />
          )}
          {isPlaying ? <Music size={28} /> : <Volume2 size={28} />}
        </div>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
