import React from 'react';
import { motion } from 'framer-motion';

// Native Imports for reliable deployment
import dragonGreen from '../assets/dragon_green.png';
import dragonGolden from '../assets/dragon_golden_v2.png';

const Dragon = ({ src, delay, duration, pathParams }) => {
  return (
    <motion.div
      initial={{ 
        x: pathParams.startX, 
        y: pathParams.startY, 
        scale: 0.3, // Slightly smaller per request
        rotate: pathParams.startRotate,
        opacity: 0 
      }}
      animate={{
        x: [pathParams.startX, ...pathParams.midPoints, pathParams.endX],
        y: [pathParams.startY, ...pathParams.midYPoints, pathParams.endY],
        opacity: [0, 1, 1, 0],
        rotate: [pathParams.startRotate, pathParams.endRotate],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="fixed z-[100] pointer-events-none drop-shadow-xl"
      style={{ 
        width: '180px',
        mixBlendMode: 'multiply' // Defensive fallback to hide white backgrounds
      }}
    >
      {/* Flapping Wing Effect - Localized to feel more like flapping on the back */}
      <motion.div
        animate={{ 
          rotateX: [0, 45, 0],
          scaleY: [1, 0.8, 1],
          y: [0, 5, 0]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={src} alt="Dragon" className="w-full h-auto" />
      </motion.div>
    </motion.div>
  );
};

const DragonOverlay = () => {
  // Path definitions for a more cinematic movement
  const dragons = [
    {
      src: dragonGreen,
      delay: 0,
      duration: 25,
      params: {
        startX: -300,
        startY: 200,
        midPoints: [400, 800, 1200],
        midYPoints: [100, 400, 200],
        endX: 2000,
        endY: 600,
        startRotate: 10,
        endRotate: 20
      }
    },
    {
      src: dragonGolden,
      delay: 5,
      duration: 30,
      params: {
        startX: 1500,
        startY: -200,
        midPoints: [1000, 500, 0],
        midYPoints: [100, 500, 300],
        endX: -500,
        endY: 800,
        startRotate: -10,
        endRotate: -30
      }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
      {dragons.map((d, i) => (
        <Dragon 
          key={i}
          src={d.src}
          delay={d.delay}
          duration={d.duration}
          pathParams={d.params}
        />
      ))}
    </div>
  );
};

export default DragonOverlay;
