import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import QuantumBackground from '../components/QuantumBackground';

export default function ProjectsPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // HUD time
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <section className="relative min-h-screen py-24 section-padding bg-ivory" id="projects-section">
      {/* Background quantum nodes */}
      <QuantumBackground />

      {/* HUD */}
      <div className="absolute top-4 right-4 text-xs font-mono text-charcoal/70 z-40 pointer-events-none">
        {formattedTime} UTC+5:30
      </div>

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
              onClick={e => e.stopPropagation()}
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
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <Link
            to="/"
            className="group font-sans text-sm font-semibold tracking-wide uppercase text-charcoal hover:text-accent transition-colors duration-200"
          >
            <span className="inline-block group-hover:-translate-x-1 transition-transform duration-200 mr-1">←</span> Back Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-16">
          <h1 className="font-serif text-display text-charcoal">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              All Creations
            </motion.span>
          </h1>
          <p className="font-sans text-sm text-charcoal-muted mt-2 tracking-widest uppercase">
            A curated archive of frontend experiments, UI practice clones, and full‑stack utilities.
          </p>
          <div className="h-[1px] bg-border w-full mt-6" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => {
                if (project.video) setActiveVideo(project.video);
                else if (project.live) window.open(project.live, '_blank', 'noopener,noreferrer');
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
