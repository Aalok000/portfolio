'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const HackerAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const nums = '0123456789';
      const characters = katakana + latin + nums;

      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);

      const rainDrops: number[] = [];
      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }
      
      const limeColor = 'hsl(120 61% 50%)';

      const draw = () => {
        ctx.fillStyle = resolvedTheme === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = limeColor;
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };

      const animate = () => {
        draw();
        animationFrameId = window.requestAnimationFrame(animate);
      };

      animate();
    };

    const handleResize = () => {
      window.cancelAnimationFrame(animationFrameId);
      setup();
    };
    
    setup();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-20" />;
};

export default HackerAnimation;
