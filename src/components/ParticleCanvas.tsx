'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  alphaDir: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const particles: Particle[] = [];
    const COUNT = 55;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: rand(0, window.innerWidth),
        y: rand(0, window.innerHeight),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.08, -0.22),
        size: rand(1, 2.8),
        alpha: rand(0.1, 0.55),
        alphaDir: rand(-1, 1) > 0 ? 1 : -1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir * 0.003;
        if (p.alpha >= 0.55 || p.alpha <= 0.05) p.alphaDir *= -1;

        if (p.y < -10) { p.y = canvas.height + 10; p.x = rand(0, canvas.width); }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
