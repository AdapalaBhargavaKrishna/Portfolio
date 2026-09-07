import React, { useRef, useEffect } from 'react';

export default function QuantumBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const nodes = [];
    const nodeCount = Math.min(80, Math.floor((width * height) / 50000));
    // Initialize nodes with random positions and phase offsets
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now();

      // Draw pulsing nodes
      nodes.forEach(node => {
        const pulse = Math.sin(time * node.speed + node.phase) * 0.5 + 0.5; // 0-1
        const r = node.radius + pulse * 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 89, 59, ${0.15 + pulse * 0.3})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
