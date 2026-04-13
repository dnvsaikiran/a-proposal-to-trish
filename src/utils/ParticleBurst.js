import confetti from 'canvas-confetti';

export const celebrate = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ffffff', '#000000', '#e5e5e5', '#191970']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ffffff', '#000000', '#e5e5e5', '#191970']
    });
  }, 250);
};

export const coffeeBurst = () => {
  const scalar = 2.5;
  const coffee = confetti.shapeFromText({ text: '☕', scalar });
  const heart = confetti.shapeFromText({ text: '🤎', scalar });

  confetti({
    shapes: [coffee, heart],
    particleCount: 40,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6F4E37', '#ffffff']
  });
};

export const catBurst = () => {
  const scalar = 2.5;
  const cat1 = confetti.shapeFromText({ text: '🐱', scalar });
  const cat2 = confetti.shapeFromText({ text: '🐈', scalar });
  const paw = confetti.shapeFromText({ text: '🐾', scalar });

  confetti({
    shapes: [cat1, cat2, paw],
    particleCount: 40,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ffffff', '#000000', '#191970']
  });
};

export const flowerBurst = () => {
  const scalar = 3;
  const lily = confetti.shapeFromText({ text: '🤍', scalar }); // Lily representation
  const rose = confetti.shapeFromText({ text: '🌸', scalar }); // Tuberose/Rose representation
  const leaf = confetti.shapeFromText({ text: '🌿', scalar });

  confetti({
    shapes: [lily, rose, leaf],
    particleCount: 50,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#ffffff', '#191970', '#90EE90']
  });
};

export const grandCelebration = () => {
  const scalar = 3;
  const coffee = confetti.shapeFromText({ text: '☕', scalar });
  const bean = confetti.shapeFromText({ text: '🫘', scalar });
  const chicken = confetti.shapeFromText({ text: '🍗', scalar });
  const lily = confetti.shapeFromText({ text: '🤍', scalar });
  const rose = confetti.shapeFromText({ text: '🌸', scalar });
  const leaf = confetti.shapeFromText({ text: '🌿', scalar });

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    shapes: [coffee, bean, chicken, lily, rose, leaf],
    colors: ['#6F4E37', '#ffffff', '#191970', '#90EE90', '#FFB6C1']
  };

  confetti({
    ...defaults,
    particleCount: 80,
    scalar: 1.2,
    origin: { y: 0.6 }
  });

  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 0.75,
    origin: { y: 0.6 }
  });
};

export const magicalRandomBurst = () => {
  const bursts = [celebrate, coffeeBurst, catBurst, flowerBurst, grandCelebration];
  const randomBurst = bursts[Math.floor(Math.random() * bursts.length)];
  randomBurst();
};
