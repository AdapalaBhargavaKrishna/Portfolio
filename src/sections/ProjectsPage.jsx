import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../data/projects';
import { techMap } from '../data/techMap';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProjectsPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="min-h-screen py-24 section-padding bg-ivory">
      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-[90%] md:w-[70%] max-w-4xl aspect-video rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Demo"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-16">
          <Link
            to="/"
            className="group font-sans text-sm font-semibold tracking-wide uppercase text-charcoal hover:text-accent transition-colors duration-200"
          >
            <span className="inline-block group-hover:-translate-x-1 transition-transform duration-200 mr-1">
              ←
            </span>{' '}
            Back Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-16">
          <h1 className="font-serif text-display text-charcoal">
            <SplitText text="All Creations" />
          </h1>
          <p className="font-sans text-sm text-charcoal-muted mt-2 tracking-widest uppercase">
            A archive of frontend experiments, UI practice clones, and full-stack utilities.
          </p>
          <div className="h-[1px] bg-border w-full mt-6" />
        </div>

        {/* Grid of remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-border bg-ivory-200 mb-6">
                <motion.div
                  className="w-full h-full cursor-pointer relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                  data-cursor={project.video ? 'demo' : 'view'}
                  onClick={() => {
                    if (project.video) {
                      setActiveVideo(project.video);
                    } else if (project.live) {
                      window.open(project.live, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow">
                <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted mb-1">
                  {project.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tag) => {
                    const logo = techMap[tag];
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-ivory-200 text-charcoal-light border border-border"
                      >
                        {logo && <img src={logo} alt="" className="w-2.5 h-2.5 opacity-80" />}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.live && (
                    <Magnetic>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors duration-200"
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
                        className="text-xs font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors duration-200"
                        whileHover={{ x: 2, y: -2 }}
                      >
                        Code ↗
                      </motion.a>
                    </Magnetic>
                  )}
                  {project.video && (
                    <Magnetic>
                      <motion.button
                        onClick={() => setActiveVideo(project.video)}
                        className="text-xs font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                        whileHover={{ x: 2, y: -2 }}
                      >
                        Demo →
                      </motion.button>
                    </Magnetic>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
