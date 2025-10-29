import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 24;

interface Particle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  alpha: number;
  deltaAlpha: number;
}

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * 2 + 1,
  velocityX: (Math.random() - 0.5) * 0.3,
  velocityY: (Math.random() - 0.5) * 0.3,
  alpha: Math.random() * 0.5 + 0.3,
  deltaAlpha: (Math.random() - 0.5) * 0.01,
});

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(canvas.width, canvas.height));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.alpha += particle.deltaAlpha;

        if (particle.alpha <= 0.2 || particle.alpha >= 0.8) {
          particle.deltaAlpha *= -1;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.velocityX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.velocityY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(159, 178, 217, ${particle.alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="cs-particles" aria-hidden />;
};

export default Particles;
