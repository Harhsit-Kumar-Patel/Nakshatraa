import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: string;
  delay: string;
}

export function Starfield({ density = 50 }: { density?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const generatedStars = Array.from({ length: density }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      duration: prefersReducedMotion ? '0s' : `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    
    setStars(generatedStars);
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-[#FAF7F4]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.15,
            animation: star.duration !== '0s' ? `twinkle ${star.duration} infinite ease-in-out` : undefined,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
