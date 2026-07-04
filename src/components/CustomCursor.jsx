import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'pointer'
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 45, stiffness: 450, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const val = target.getAttribute('data-cursor');
        if (val === 'view') {
          setCursorText('VIEW');
          setCursorType('hover');
        } else if (val === 'demo') {
          setCursorText('PLAY');
          setCursorType('hover');
        } else if (val === 'pointer') {
          setCursorType('pointer');
        }
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorType('pointer');
      } else {
        setCursorText('');
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[99999] flex items-center justify-center text-[10px] font-sans font-bold tracking-widest text-white bg-accent/10 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: cursorType === 'hover' ? 2.2 : cursorType === 'pointer' ? 1.5 : 1,
        backgroundColor: cursorType === 'hover' ? '#C2662D' : 'rgba(194, 102, 45, 0.1)',
        borderColor: cursorType === 'default' ? '#C2662D' : 'rgba(194, 102, 45, 0)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      {cursorText}
    </motion.div>
  );
}
