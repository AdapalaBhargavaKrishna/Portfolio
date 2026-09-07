import React, { useRef, useEffect } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const numParticles = 40;

    // Palette: warm ivory, brown, accent
    const colors = ['rgba(140, 89, 59, 0.15)', 'rgba(232, 226, 214, 0.4)', 'rgba(45, 36, 30, 0.05)'];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 80 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw background ambient shapes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < -100 || p.x > width + 100) p.vx *= -1;
        if (p.y < -100 || p.y > height + 100) p.vy *= -1;

        // Mouse interaction (slight repulsion/attraction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.filter = 'blur(40px)';
        ctx.fill();
        ctx.filter = 'none';
      });

      // Cursor glow
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2, false);
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
      gradient.addColorStop(0, 'rgba(140, 89, 59, 0.1)');
      gradient.addColorStop(1, 'rgba(140, 89, 59, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
