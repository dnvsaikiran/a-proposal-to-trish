import { motion, useScroll, useTransform } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

const HardWorkScroll = ({ onComplete }) => {
  const { scrollYProgress } = useScroll();
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.35], [-50, 0]);
  
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.35, 0.55], [0.8, 1]);
  
  const opacity4 = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const scale4 = useTransform(scrollYProgress, [0.55, 0.8], [0.9, 1]);

  const opacity5 = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);
  const y5 = useTransform(scrollYProgress, [0.8, 1.0], [100, 0]);

  return (
    <div className="relative bg-romantic-white min-h-[550vh]">
      {/* Section 1: Introduction */}
      <section className="h-screen w-full flex items-center justify-center sticky top-0 px-6">
        <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-hindi mb-8 text-black leading-tight">
            Main jaanta hoon tum kitni mehnat karti ho... ✨
          </h2>
          <p className="text-xl font-royal italic text-black/60">
            You juggle so many worlds at once.
          </p>
        </motion.div>
      </section>

      {/* Section 2: The Hustle */}
      <section className="h-screen w-full flex items-center justify-center sticky top-0 px-6">
        <motion.div style={{ opacity: opacity2, x: x2 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl items-center">
          <div className="glass-premium p-8 rounded-[3rem]">
            <h3 className="text-3xl font-hindi mb-6 text-black">Padhai aur Kaam 📚</h3>
            <p className="text-lg text-black/70 mb-4 leading-relaxed font-hindi">
              Din bhar ki padhai, assignments, aur busy schedule... main sab dekhta hoon. 
            </p>
            <p className="text-sm font-royal italic text-black/40">The constant grind of a brilliant mind.</p>
          </div>
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="hidden md:block"
          >
            <img src={`${BASE}assets/media__1776079739054.png`} alt="Decoration" className="w-64 h-64 object-contain opacity-20" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: The Escape */}
      <section className="h-screen w-full flex items-center justify-center sticky top-0 px-6">
        <motion.div style={{ opacity: opacity3, scale: scale3 }} className="text-center max-w-3xl">
          <div className="glass-premium p-12 rounded-[4rem] border-2 border-white/50">
            <h3 className="text-3xl font-hindi mb-8 text-black">Managing Your World 🎭</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-hindi text-xl">
              <span className="px-6 py-2 bg-black text-white rounded-full">Anime ⛩️</span>
              <span className="px-6 py-2 border border-black/20 rounded-full">Dark Romance 🥀</span>
              <span className="px-6 py-2 bg-romantic-cream border border-black/10 rounded-full">Reading 📖</span>
              <span className="px-6 py-1 bg-black/5 rounded-full">Sleeping 😴</span>
            </div>
            <p className="text-lg text-black/70 font-hindi">
              In sab ke beech khud ke liye waqt nikaalna... asaan nahi hota. 
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 4: The Romantic Disclosure (Scroll) */}
      <section className="h-screen w-full flex items-center justify-center sticky top-0 px-6 overflow-hidden">
        <motion.div style={{ opacity: opacity4, scale: scale4 }} className="relative max-w-4xl w-full flex items-center justify-center">
          {/* Scroll Asset */}
          <img 
            src={`${BASE}assets/decor/ancient_scroll.png`} 
            alt="Ancient Scroll" 
            className="w-full h-auto max-h-[90vh] object-contain drop-shadow-2xl"
          />
          
          {/* Personal Message Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 md:p-24 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-hindi text-[#4a3728] leading-relaxed drop-shadow-sm">
              Sonu, ek baat sach bataun? Mere aas pass bahut log aate hain, bahut se baatein hoti hain... par baaki sab mere liye sirf ek distraction hain.
            </p>
            <div className="h-4 md:h-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-hindi text-[#5d2e2e] font-bold leading-relaxed">
              Par tum... it brings a spark which I can't explain in words. It's a feeling that burns me in the best way possible. ❤️
            </p>
            <div className="h-4 md:h-8"></div>
            <p className="text-lg md:text-xl font-hindi text-[#4a3728] italic">
              Sirf tum hi ho jo mujhe is tarah mehsoos kara sakti ho.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 5: The Invitation Hook */}
      <section className="h-screen w-full flex items-center justify-center sticky top-0 px-6">
        <motion.div style={{ opacity: opacity5, y: y5 }} className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-hindi text-black mb-10 leading-snug">
            Itna stress lene ki zaroorat nahi hai, madam ji... 
          </h2>
          <p className="text-xl font-hindi text-black/60 mb-12">
            Is stress ko door karne ka ek upaay hai mere paas.
          </p>
          <button 
            onClick={onComplete}
            className="btn-romantic group"
          >
            Kya hai wo? <span className="inline-block group-hover:translate-x-2 transition-transform">👀</span>
          </button>
        </motion.div>
      </section>

      <div className="wave-container opacity-20 fixed bottom-0 left-0 pointer-events-none">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" className="wave-path">
          <use href="#gentle-wave" x="48" y="0" fill="#000" />
        </svg>
      </div>
    </div>
  );
};

export default HardWorkScroll;
