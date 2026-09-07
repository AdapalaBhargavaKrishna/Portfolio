import React, { useRef, useEffect } from 'react';

export default function ElasticStrings() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -1000, y: -1000, radius: 100 };
    const numStrings = Math.floor(width / 30); // Dynamic based on width
    const strings = [];

    // Physics parameters
    const tension = 0.03;  // Spring stiffness
    const damping = 0.85;  // Friction (lower = more bouncy, higher = more sluggish)

    // Initialize strings
    const initStrings = () => {
      strings.length = 0;
      const spacing = width / numStrings;
      for (let i = 0; i <= numStrings; i++) {
        const xPos = i * spacing;
        strings.push({
          baseX: xPos,
          currentX: xPos, // The control point's X that moves
          currentY: height / 2, // The control point's Y (tracks mouse Y when grabbed)
          vx: 0,
          vy: 0,
          isGrabbed: false,
          color: '#8C593B' // Accent color
        });
      }
    };

    initStrings();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStrings();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // We draw the string as a Quadratic Bezier Curve from top to bottom
      strings.forEach(s => {
        // Distance from mouse to the base string line
        const dx = mouse.x - s.baseX;
        // Dist in Y from center of screen (or current point)
        const dy = mouse.y - s.currentY;
        const dist = Math.abs(dx);

        if (dist < mouse.radius) {
          s.isGrabbed = true;
          // Pull the string towards mouse
          const pull = (mouse.radius - dist) / mouse.radius;
          // Apply a force towards the mouse
          s.currentX += (mouse.x - s.currentX) * pull * 0.2;
          s.currentY += (mouse.y - s.currentY) * pull * 0.2;
        } else {
          s.isGrabbed = false;
        }

        if (!s.isGrabbed) {
          // Spring physics back to center
          const forceX = (s.baseX - s.currentX) * tension;
          s.vx += forceX;
          s.vx *= damping;
          s.currentX += s.vx;

          const forceY = (height / 2 - s.currentY) * tension;
          s.vy += forceY;
          s.vy *= damping;
          s.currentY += s.vy;
        }

        // Calculate visual tension (how far it is from base) to change color/glow
        const displacement = Math.abs(s.baseX - s.currentX);
        const intensity = Math.min(displacement / 50, 1);
        
        ctx.beginPath();
        ctx.moveTo(s.baseX, -50); // Start slightly above screen
        
        // Quad curve: control point at (currentX, currentY)
        ctx.quadraticCurveTo(s.currentX, s.currentY, s.baseX, height + 50);

        // Styling based on tension
        ctx.strokeStyle = `rgba(140, 89, 59, ${0.1 + (intensity * 0.8)})`; // Accent color fading in
        ctx.lineWidth = 1 + (intensity * 2);
        
        // Optional Glow when stretched
        if (intensity > 0.1) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#C2662D';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
      });

      // Reset shadow for performance
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-20 pointer-events-none"
    />
  );
}
