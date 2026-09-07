import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ElasticStrings from '../components/ElasticStrings';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const comp = useRef(null);
  const [time, setTime] = useState(new Date());

  // Update time for the HUD
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-pin",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });
      
      tl.to(".bg-typography", {
        yPercent: -20,
        opacity: 0.1,
        ease: "none"
      }, 0);
      
      // Initial cinematic reveal
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.2
      });

    }, comp);
    
    return () => ctx.revert();
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div ref={comp} className="relative z-10 w-full bg-bg-primary overflow-hidden h-screen bg-ivory">
      
      {/* 1. The Interactive Physics Layer (Foreground) */}
      <ElasticStrings />

      <section id="hero-pin" className="relative h-screen w-full flex flex-col justify-between z-10 select-none">
        
        {/* 2. Brutalist Background Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-typography">
          <div className="flex flex-col text-center font-serif leading-[0.8] tracking-tighter text-charcoal/90 w-full px-4">
            <div className="overflow-hidden mb-[-2%]">
               <h1 className="text-[18vw] md:text-[14vw] hero-reveal">ENGINEERING</h1>
            </div>
            <div className="overflow-hidden mb-[-2%]">
               <h1 className="text-[18vw] md:text-[14vw] italic text-accent hero-reveal">INTELLIGENCE</h1>
            </div>
            <div className="overflow-hidden">
               <h1 className="text-[18vw] md:text-[14vw] text-charcoal-light hero-reveal">AESTHETICS</h1>
            </div>
          </div>
        </div>

        {/* 3. Minimal HUD (Top) */}
        <div className="absolute top-0 w-full pt-8 px-6 md:px-12 flex justify-between items-start font-sans z-30 pointer-events-none mix-blend-difference text-white/80">
          <div className="flex flex-col gap-1 hero-reveal">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              SYSTEM ONLINE
            </span>
            <span className="text-xs font-mono">
              [LAT] 17.3850° N, [LON] 78.4867° E
            </span>
          </div>
          
          <div className="flex flex-col items-end gap-1 hero-reveal">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              LOCAL TIME
            </span>
            <span className="text-xs font-mono">
              {formattedTime} UTC+5:30
            </span>
          </div>
        </div>

        {/* 4. Minimal HUD (Bottom/Interactive Elements) */}
        <div className="absolute bottom-0 w-full pb-8 px-6 md:px-12 flex justify-between items-end font-sans z-30 pointer-events-auto mix-blend-difference text-white/80">
          
          <div className="flex flex-col max-w-xs hero-reveal mix-blend-normal text-charcoal">
             {/* Note: The mix-blend-normal and text-charcoal overrides the parent difference so it remains readable over the ivory bg */}
             <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Initialize</span>
             <p className="text-sm text-charcoal-light leading-relaxed font-light">
               Architecting highly aesthetic, performance-driven web experiences and production-grade AI systems.
             </p>
          </div>

          <div className="hero-reveal mix-blend-normal">
            <a 
              href="#work"
              onClick={(e) => handleScroll(e, 'work')}
              className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-charcoal hover:text-accent transition-colors duration-300 group"
            >
              <span>Explore Work</span>
              <span className="w-8 h-[1px] bg-charcoal group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
            </a>
          </div>

        </div>

      </section>
    </div>
  );
}
