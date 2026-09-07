import React from 'react';

const ITEMS = [
  "AI Systems",
  "Full Stack Engineering",
  "High-Performance WebGL",
  "UI/UX Architecture",
  "LLM Integrations",
  "Generative AI",
  "Creative Coding"
];

export default function HeroTicker() {
  return (
    <div className="w-full bg-accent text-ivory py-3 overflow-hidden whitespace-nowrap border-y border-accent-hover/30 relative z-20">
      <div className="inline-block animate-marquee">
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm md:text-base font-semibold tracking-wide uppercase px-6">
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ivory/50 mx-6" />
          </span>
        ))}
      </div>
    </div>
  );
}
