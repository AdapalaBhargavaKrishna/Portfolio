import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/techMap'

const TechStack = () => {

  const rows = [
    techStack.slice(0, 6),
    techStack.slice(6, 13),
    techStack.slice(13, 18),
    techStack.slice(18, techStack.length),
  ];

  return (
    <div className="py-16 text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-neutral-400 tracking-wide">I constantly try to improve</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">My Tech Stack</h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex flex-wrap justify-center gap-4 perspective"
          >
            {row.map((tech, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0}}
                whileInView={{ opacity: 1, scale: 1}}
                whileHover={{scale: 1.1}}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: false, amount: 0 }}
                key={`${tech.name}-${index}`}
                className="flex items-center justify-around gap-2 px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 transition transform duration-300 cursor-pointer"
              >
                <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>

            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
