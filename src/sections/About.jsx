import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';
import { techCategories } from '../data/techMap';

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

const childFadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const ParagraphReveal = ({ text }) => {
  const words = text.split(" ");
  return (
    <motion.span
      variants={{
        initial: {},
        animate: { transition: { staggerChildren: 0.008 } }
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-wrap"
    >
      {words.map((word, idx) => (
        <span key={idx} className="overflow-hidden inline-block mr-2 py-0.5">
          <motion.span
            variants={{
              initial: { y: "100%" },
              animate: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-block text-charcoal font-sans"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

const AboutInfoCard = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x / width);
    mouseY.set(y / height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{
        scale: 1.02,
        y: -6,
        boxShadow: '0 40px 80px -20px rgba(26, 26, 26, 0.18)',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="w-full bg-charcoal text-ivory rounded-[2.5rem] p-8 relative overflow-hidden cursor-pointer shadow-xl border border-white/5"
    >
      {/* Ticking Ticker Header */}
      <div className="flex justify-between items-start mb-10" style={{ transform: 'translateZ(20px)' }}>
        <div>
          <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-1">
            02 / THE ARCHITECT
          </span>
          <h4 className="font-serif text-2xl text-white font-medium">
            Bhargava Krishna
          </h4>
        </div>
        <div className="text-right">
          <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold block">
            Coordinates
          </span>
          <p className="font-sans text-[11px] text-white/70 font-mono">
            17.391307° N, 78.318920° E
          </p>
        </div>
      </div>

      {/* Info Rows */}
      <div className="space-y-4 mb-10" style={{ transform: 'translateZ(30px)' }}>
  <div className="flex justify-between items-baseline text-sm border-b border-white/10 pb-2">
    <span className="font-sans text-xs text-white/40">Status</span>
    <span className="font-sans text-white/90 font-medium text-right">CBIT IT Undergrad</span>
  </div>
  <div className="flex justify-between items-baseline text-sm border-b border-white/10 pb-2">
    <span className="font-sans text-xs text-white/40">Core Specialty</span>
    <span className="font-sans text-white/90 font-medium text-right">Full-Stack & AI Systems</span>
  </div>
  <div className="flex justify-between items-baseline text-sm border-b border-white/10 pb-2">
    <span className="font-sans text-xs text-white/40">Currently</span>
    <span className="font-sans text-white/90 font-medium text-right">Open to Opportunities</span>
  </div>
  <div className="flex justify-between items-baseline text-sm">
    <span className="font-sans text-xs text-white/40">Base</span>
    <span className="font-sans text-white/90 font-medium text-right">Hyderabad, India</span>
  </div>
</div>

      {/* Scrolling marquee block */}
      <div className="w-[120%] -mx-[10%] border-t border-white/10 pt-4 overflow-hidden flex select-none" style={{ transform: 'translateZ(10px)' }}>
        <motion.div
          animate={{ x: [0, -250] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 8 }}
          className="flex whitespace-nowrap gap-4 text-[9px] uppercase tracking-[3px] font-bold text-accent"
        >
          {Array(4).fill("IT Ungergrad• Full-Stack Developer • AI Builder • Problem Solver • ").map((str, i) => (
  <span key={i}>{str}</span>
))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsListRow = ({ category, idx }) => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const rowRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 220, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <motion.div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={childFadeUp}
      whileHover={{ x: 12 }}
      className="border-b border-border/80 py-8 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between items-start transition-all duration-300 relative overflow-hidden group"
    >
      {/* Dynamic Hover background wash */}
      <div className="absolute inset-0 bg-accent-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl" />

      {/* Floating Logo Preview Follow */}
      <AnimatePresence>
        {hoveredTech && (
          <motion.div
            style={{
              left: springX,
              top: springY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="absolute pointer-events-none w-20 h-20 bg-ivory/80 border border-border/40 backdrop-blur-md rounded-2xl flex items-center justify-center p-4 z-20 shadow-md"
          >
            <img src={hoveredTech.logo} alt="" className="w-12 h-12 object-contain filter drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left side: Category Index & Title */}
      <div className="flex items-center gap-6 lg:w-1/4 select-none relative z-10 pl-4 group-hover:text-accent transition-colors duration-300">
        <span className="font-serif text-lg text-accent font-semibold tracking-wider">
          0{idx + 1}
        </span>
        <h4 className="font-serif text-2xl text-charcoal font-medium group-hover:text-accent transition-colors duration-300">
          {category.name}
        </h4>
      </div>

      {/* Right side: Inline Text List of Tech Items */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 lg:w-3/4 relative z-10 pr-4">
        {category.items.map((item) => (
  <Magnetic key={item.name}>
    <motion.span
      onMouseEnter={() => setHoveredTech(item)}
      whileHover={{ scale: 1.05 }}
      className="
        inline-flex items-center gap-2.5
        px-4 py-2
        rounded-full
        border border-border/50
        bg-background/40
        font-sans text-base font-semibold
        text-charcoal-light
        hover:border-accent
        hover:text-accent
        hover:bg-accent/5
        cursor-pointer
        transition-all duration-300
      "
    >
      <img
        src={item.logo}
        alt=""
        className="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
      />
      {item.name}
    </motion.span>
  </Magnetic>
))}
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 section-padding bg-ivory z-10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-sans font-bold tracking-widest text-accent uppercase block mb-2">
            02 / THE PROFILE
          </span>
          <h2 className="font-serif text-heading text-charcoal">
            <SplitText text="Profile & Capabilities" />
          </h2>
          <div className="h-[1px] bg-border w-full mt-4" />
        </motion.div>

        {/* Spacious Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column (Narrative Bio Text) */}
          <div className="lg:col-span-7 space-y-8 max-w-3xl">
            {/* Masked bio paragraphs */}
            <div className="font-sans text-xl md:text-2xl lg:text-3xl leading-snug text-charcoal-light space-y-8 font-light">
              <p className="block">
                <ParagraphReveal text="I architect and ship production-grade systems scalable backends, AI inference pipelines, real-time applications, and the interfaces that bring them to life. From database schema to cloud deployment, I own the full execution. Every system I've built has raised the bar for the next one." />  
              </p>
              <p className="block text-charcoal-muted text-lg md:text-xl font-normal leading-relaxed">
                <ParagraphReveal text="Outside the editor, I ride, read books, and travel when I can. I think a lot about discipline, identity, and long-term decisions — probably why I build things I'd actually use myself." />  
              </p>
            </div>

            {/* Connect Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 text-xs font-sans text-charcoal-light flex-wrap pt-4"
            >
              <Magnetic>
                <a
                  href="https://github.com/AdapalaBhargavaKrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold transition py-1 block cursor-pointer"
                >
                  GitHub ↗
                </a>
              </Magnetic>
              <span>·</span>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/bhargavakrishnaadapala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold transition py-1 block cursor-pointer"
                >
                  LinkedIn ↗
                </a>
              </Magnetic>
              <span>·</span>
              {/* <Magnetic>
                <a
                  href="https://x.com/Bhargava1028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold transition py-1 block cursor-pointer"
                >
                  X ↗
                </a>
              </Magnetic>
              <span>·</span> */}
              <Magnetic>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-semibold transition text-accent py-1 block cursor-pointer"
                >
                  Download Resume
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column (Kinetic 3D About Card) */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <AboutInfoCard />
          </div>
        </div>

        {/* Premium List-Format Capabilities Deck */}
        <div id="skills" className="space-y-6 border-t border-border mt-24 pt-20">
          <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted font-bold block mb-8">
            Capabilities & Stack
          </span>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col"
          >
            {techCategories.map((category, idx) => (
              <SkillsListRow
                key={category.name}
                category={category}
                idx={idx}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
