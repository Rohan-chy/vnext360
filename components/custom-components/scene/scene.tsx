'use client';

import { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NUM_DOTS = 20;
const WIDTH = 800;
const HEIGHT = 600;
const LINE_DISTANCE = 190;

export default function MovingDotsScene() {
  const [dots, setDots] = useState<Dot[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Initialize dots randomly
    const initialDots: Dot[] = [];
    for (let i = 0; i < NUM_DOTS; i++) {
      initialDots.push({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      });
    }
    setDots(initialDots);

    const animate = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let { x, y, vx, vy } = dot;
          x += vx;
          y += vy;

          // Bounce off walls
          if (x < 0 || x > WIDTH) vx = -vx;
          if (y < 0 || y > HEIGHT) vy = -vy;

          return { x, y, vx, vy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
      {/* Lines between close dots */}
      {dots.map((dot, i) =>
        dots.slice(i + 1).map((other, j) => {
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            return (
              <line
                key={`${i}-${j}`}
                x1={dot.x}
                y1={dot.y}
                x2={other.x}
                y2={other.y}
                stroke={`rgba(255,255,255,${0.2 + Math.random() * 0.3})`}
                strokeWidth={1}
              />
            );
          }
          return null;
        })
      )}

      {/* Dots */}
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={4}
          fill="white"
          style={{ filter: 'drop-shadow(0 0 6px white)' }}
        />
      ))}
    </svg>
  );
}
