import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../components/Magnetic';
import { techMap } from '../data/techMap';

export default function ProjectCard({ project, index, onClick }) {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] } },
    // No hover shadow, keep natural look
  };

  return (
    <motion.div
      className="glass-card flex flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      {/* Thumbnail */}
      <motion.div
        className="aspect-[16/10] w-full cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        onClick={onClick}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col p-4 flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-charcoal-muted mb-1">{project.subtitle}</span>
        <h3 className="font-serif text-xl text-charcoal mb-2">{project.title}</h3>
        <p className="text-sm text-charcoal-light mb-4 flex-grow leading-relaxed">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-ivory-200 text-charcoal border border-border">
              {techMap[tag] && <img src={techMap[tag]} alt="" className="w-2.5 h-2.5 opacity-80"/>}
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-4 mt-auto">
          {project.live && (
            <Magnetic>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                whileHover={{ x: 2, y: -2 }}
              >
                Live ↗
              </motion.a>
            </Magnetic>
          )}
          {project.code && (
            <Magnetic>
              <motion.a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors"
                whileHover={{ x: 2, y: -2 }}
              >
                Code ↗
              </motion.a>
            </Magnetic>
          )}
          {project.video && (
            <Magnetic>
              <motion.button
                onClick={onClick}
                className="text-xs font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors cursor-pointer bg-transparent border-none p-0"
                whileHover={{ x: 2, y: -2 }}
              >
                Demo →
              </motion.button>
            </Magnetic>
          )}
        </div>
      </div>
    </motion.div>
  );
}
