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
    
    // Minimalist colors: White, Silver, Black, and tiny touches of Pink
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ffffff', '#000000', '#e5e5e5', '#FFB6C1'] // Tiny bit of pink
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ffffff', '#000000', '#e5e5e5', '#FFB6C1']
    });
  }, 250);
};

export const coffeeBurst = () => {
  const scalar = 2;
  const coffee = confetti.shapeFromText({ text: '☕', scalar });
  const flower = confetti.shapeFromText({ text: '🌸', scalar }); // Tiny pink heart replacement
  const lily = confetti.shapeFromText({ text: '🤍', scalar });

  confetti({
    shapes: [coffee, flower, lily],
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6F4E37', '#ffffff', '#000000', '#FFB6C1']
  });
};
