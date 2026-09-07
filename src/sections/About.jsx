import React, { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Magnetic from '../components/Magnetic';
import { techCategories } from '../data/techMap';

gsap.registerPlugin(ScrollTrigger);

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
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="skill-row border-b border-border/80 py-8 flex flex-col lg:flex-row gap-8 justify-between items-start transition-all duration-300 relative overflow-hidden group"
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
            className="absolute pointer-events-none w-20 h-20 bg-ivory/90 border border-border/60 backdrop-blur-md rounded-2xl flex items-center justify-center p-4 z-20 shadow-xl"
          >
            <img src={hoveredTech.logo} alt="" className="w-12 h-12 object-contain filter drop-shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left side: Category Index & Title */}
      <div className="flex items-center gap-6 lg:w-1/3 select-none relative z-10 pl-4 group-hover:text-accent transition-colors duration-300">
        <span className="font-serif text-lg text-accent font-semibold tracking-wider">
          0{idx + 1}
        </span>
        <h4 className="font-serif text-3xl text-charcoal font-medium group-hover:text-accent transition-colors duration-300">
          {category.name}
        </h4>
      </div>

      {/* Right side: Inline Text List of Tech Items */}
      <div className="flex flex-wrap gap-x-10 gap-y-4 lg:w-2/3 relative z-10 pr-4">
        {category.items.map((item) => (
          <Magnetic key={item.name}>
            <motion.div
              onMouseEnter={() => setHoveredTech(item)}
              whileHover={{ scale: 1.05 }}
              className="
                group/skill inline-flex items-center
                px-5 py-2.5
                rounded-full
                border border-border/80
                bg-white/50
                font-sans text-base font-semibold
                text-charcoal-light
                hover:border-accent
                hover:text-accent
                hover:bg-accent/10
                cursor-pointer
                transition-all duration-500 ease-out
                shadow-sm hover:shadow-md
              "
            >
              <img 
                src={item.logo} 
                alt="" 
                className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-500 group-hover/skill:scale-110" 
              />
              <span className="pl-2.5 whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // Bio text reveal (scrubbed)
      gsap.from(".bio-text span", {
        scrollTrigger: {
          trigger: bioRef.current,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        stagger: 0.1,
      });

      // Stats: fade-in AND count-up driven by the SAME scrubbed timeline,
      // so the numbers can never finish before the card is visible --
      // both progress together as you scroll, locked to scroll position.
      const tlStats = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 95%",
          end: "top 55%",
          scrub: 1,
        }
      });

      tlStats.fromTo(".stat-card",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power2.out" },
        0
      );

      // Drive each [data-value] number in lockstep with the same timeline
      // position (the "0" third argument = starts at the same instant).
      gsap.utils.toArray(".stat-counter").forEach((el) => {
        const target = parseFloat(el.getAttribute("data-value") || "0");
        const counter = { val: 0 };
        tlStats.to(counter, {
          val: target,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(counter.val);
          },
        }, 0);
      });

      // Skills rows reveal
      gsap.utils.toArray(".skill-row").forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 95%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          x: -10,
          duration: 0.4,
          ease: "power3.out"
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const bioWords = "I architect and ship production-grade systems: scalable backends, AI inference pipelines, real-time applications, and the beautiful interfaces that bring them to life. From complex database schemas to cloud deployments and stunning web animations, I own the full execution. Every system I build aims to push boundaries and set a new standard for performance and aesthetics.".split(" ");

  return (
    <section ref={containerRef} id="about" className="relative w-full bg-ivory text-charcoal py-32 z-20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Section Header */}
        <div className="mb-24">
          <span className="text-[10px] font-sans font-bold tracking-widest text-accent uppercase block mb-4">
            02 / THE PROFILE
          </span>
          <h2 className="font-serif text-heading text-charcoal leading-none tracking-tight">
            Capabilities & <br/><span className="text-accent italic">Execution</span>
          </h2>
        </div>

        {/* Narrative Bio */}
        <div ref={bioRef} className="bio-text font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl mb-32">
          {bioWords.map((word, idx) => (
            <span key={idx} className="mr-3 md:mr-4 inline-block">{word}</span>
          ))}
        </div>

        {/* Stats Strip */}
        <div
          ref={statsRef}
          className="flex flex-col md:flex-row md:items-stretch border border-border rounded-2xl overflow-hidden mb-40 bg-white/50 backdrop-blur-md"
        >
          <div className="stat-card flex-1 flex items-center gap-5 px-6 py-6 md:px-10 md:py-8 border-b md:border-b-0 md:border-r border-border">
            <span className="font-serif text-[2.25rem] md:text-[3rem] leading-none text-charcoal tracking-tighter shrink-0">
              <span className="stat-counter" data-value="500">0</span><span className="text-accent">+</span>
            </span>
            <span className="font-sans text-xs md:text-sm uppercase tracking-widest font-bold text-charcoal-muted leading-snug">
              LeetCode Problems Solved
            </span>
          </div>

          <div className="stat-card flex-1 flex items-center gap-5 px-6 py-6 md:px-10 md:py-8 bg-accent text-ivory">
            <span className="font-serif text-[2.25rem] md:text-[3rem] leading-none tracking-tighter shrink-0">
              <span className="stat-counter" data-value="20">0</span><span className="text-white/50">+</span>
            </span>
            <span className="font-sans text-xs md:text-sm uppercase tracking-widest font-bold text-white/80 leading-snug">
              Production Grade Projects
            </span>
          </div>
        </div>

      </div>

      {/* Technical Stack - Wider Breakout Layout */}
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 w-full mt-32">
        <div id="skills" className="space-y-6">
          <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted font-bold block mb-12">
            Technical Stack
          </span>

          <div className="flex flex-col">
            {techCategories.map((category, idx) => (
              <SkillsListRow key={category.name} category={category} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}