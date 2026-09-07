import React, { useRef, useEffect, useState } from 'react';

/**
 * ElasticStringOverlay draws a glowing line from the cursor to a target point.
 * Props:
 *   target - {x, y} coordinates of the card centre (or null)
 */
export default function ElasticStringOverlay({ target }) {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [animationId, setAnimationId] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    const handleResize = () => setSize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (target) {
        const dx = target.x - mousePos.x;
        const dy = target.y - mousePos.y;
        const dist = Math.hypot(dx, dy);
        const tension = Math.min(dist / 200, 1); // 0‑1
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = `rgba(140, 89, 59, ${0.1 + tension * 0.4})`;
        ctx.lineWidth = 2 + tension * 3;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#C2662D';
        ctx.stroke();
      }
      setAnimationId(requestAnimationFrame(render));
    };
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [target]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />;
}
