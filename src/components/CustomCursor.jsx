import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 450 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const [trail, setTrail] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Create trail of hearts
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 30) {
        setTrail((prev) => [
          ...prev.slice(-15), // Keep last 15 hearts
          { x: e.clientX, y: e.clientY, id: Date.now() }
        ]);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Golden Thread Trail (Simple Swirl) */}
      <motion.svg 
        className="absolute inset-0" 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ x: springX, y: springY, marginLeft: -25, marginTop: -25 }}
      >
        <circle 
          cx="25" 
          cy="25" 
          r="20" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="1.5" 
          strokeDasharray="10 5"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E27E" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Main Heart Cursor */}
      <motion.div
        className="fixed w-6 h-6 flex items-center justify-center text-red-500 drop-shadow-lg"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <span className="text-xl">🤍</span>
      </motion.div>

      {/* Heart Trail */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5, y: -20 }}
          exit={{ opacity: 0 }}
          className="fixed text-white opacity-40 select-none"
          style={{ left: point.x, top: point.y, translateX: "-50%", translateY: "-50%" }}
        >
          🤍
        </motion.div>
      ))}
    </div>
  );
};

export default CustomCursor;
