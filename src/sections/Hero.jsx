import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const roles = [
  'Full-Stack Developer',
  'AI Systems Builder', 
  'Backend Engineer',
  'Problem Solver',
  'Open Source Contributor'
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.8], [0, 12]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center section-padding relative overflow-hidden bg-ivory"
      style={{ perspective: 1200 }}
    >
      <div className="absolute top-10 right-10 pointer-events-none select-none font-serif text-[18vw] leading-none text-charcoal/[0.02] font-semibold tracking-tight z-0">
        BK
      </div>

      <motion.div
        style={{ opacity, scale, y, rotateX, transformStyle: 'preserve-3d' }}
        className="max-w-7xl mx-auto w-full flex flex-col justify-center min-h-[70vh] z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-sans text-xs uppercase tracking-widest text-charcoal-muted font-semibold">
            Based in Hyderabad, India
          </span>
        </motion.div>

        <h1 className="font-serif text-[11vw] sm:text-[9vw] lg:text-[8vw] leading-[0.95] text-charcoal select-none mb-10 tracking-tight font-normal">
          <span className="block overflow-hidden py-3 -my-3">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', rotate: 4 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Bhargava Krishna
            </motion.span>
          </span>
          <span className="block overflow-hidden py-3 -my-3 italic text-charcoal-muted text-[10vw] sm:text-[8vw] lg:text-[7.5vw]">
            <motion.span
              className="inline-block"
              initial={{ y: '110%', rotate: -3 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Adapala
            </motion.span>
          </span>
        </h1>

        <div className="w-[110%] -mx-[5%] overflow-hidden border-y border-border/80 py-4 mb-10 select-none pointer-events-none">
          <motion.div
            className="flex whitespace-nowrap gap-12 font-sans text-xs uppercase tracking-widest text-charcoal-light font-semibold"
            animate={{ x: [0, -400] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 20,
            }}
          >
            {Array(5)
              .fill(roles)
              .flat()
              .map((role, idx) => (
                <div key={idx} className="flex items-center gap-12">
                  <span>{role}</span>
                  <span className="text-accent">•</span>
                </div>
              ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="font-sans text-base md:text-lg text-charcoal-light max-w-md leading-relaxed"
          >
            A Software Engineer crafting high-fidelity web experiences — from pixel-perfect frontends to production-grade AI backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="flex gap-6 items-center flex-shrink-0"
          >
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => handleScroll(e, 'work')}
                className="group font-sans text-sm font-semibold text-accent hover:text-accent-hover transition flex items-center gap-1.5 cursor-pointer py-2"
              >
                Work Catalog
                <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-200">
                  ↓
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="group font-sans text-sm font-semibold text-charcoal hover:text-accent transition flex items-center gap-1.5 cursor-pointer py-2"
              >
                Get in Touch
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
