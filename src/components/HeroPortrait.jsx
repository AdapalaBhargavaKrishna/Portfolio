import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroPortrait() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !isHovered) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
      const rotateY = ((x - centerX) / centerX) * 15;

      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div className="relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg aspect-[4/5] perspective-1000">
      <motion.div
        ref={cardRef}
        className="w-full h-full relative transform-style-3d transition-transform duration-200 ease-out rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotation({ x: 0, y: 0 });
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Glow behind the portrait */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {/* The portrait image (placeholder for user photo) */}
        <div className="absolute inset-2 md:inset-4 rounded-3xl bg-bg-secondary overflow-hidden z-10 flex items-center justify-center">
            {/* If user has a photo, place `img` tag here. For now, an abstract shape/placeholder */}
            <div className="w-full h-full bg-gradient-to-t from-charcoal/80 to-transparent absolute bottom-0 z-20 mix-blend-multiply" />
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center grayscale contrast-125 mix-blend-luminosity opacity-80" />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-8 left-8 z-30 translate-z-10 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs text-white font-medium shadow-lg flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Adapala Bhargava Krishna
          </div>
        </div>

        <div className="absolute bottom-10 right-8 z-30 translate-z-10 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
          <div className="px-4 py-2 rounded-full bg-accent/90 backdrop-blur-md border border-accent-hover text-xs text-ivory font-medium shadow-lg">
            AI & Full-Stack Engineer
          </div>
        </div>

      </motion.div>
    </div>
  );
}
