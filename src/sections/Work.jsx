import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projectData } from '../data/projects';
import { techMap } from '../data/techMap';
import SplitText from '../components/SplitText';
import Magnetic from '../components/Magnetic';

const featured = projectData.filter((p) => p.featured);

const springLinkTransition = { type: 'spring', stiffness: 400, damping: 15 };

const ImageReveal = ({ src, alt }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Sliding overlay panel */}
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 1 }} // shrink to the right
        className="absolute inset-0 bg-accent z-10 pointer-events-none"
      />
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

const FeaturedImage = ({ image, title, onClick, hasVideo }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[2rem] overflow-hidden border border-border bg-ivory-200 aspect-[16/10] w-full relative z-0"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{
          scale: 1.015,
          y: -4,
          boxShadow: '0 30px 60px -15px rgba(26, 26, 26, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full h-full rounded-[2rem] overflow-hidden cursor-pointer"
        data-cursor={hasVideo ? 'demo' : 'view'}
      >
        <ImageReveal src={image} alt={title} />
      </motion.div>
    </motion.div>
  );
};

const Work = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="work" className="py-24 md:py-32 section-padding bg-ivory relative z-10 overflow-hidden">
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
            03 / Selected Creations
          </span>
          <h2 className="font-serif text-heading text-charcoal">
            <SplitText text="Selected Work" />
          </h2>
          <div className="h-[1px] bg-border w-full mt-4" />
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                className="relative w-[90%] md:w-[70%] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
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

        {/* Alternating Spacious Project Rows */}
        <div className="space-y-32 md:space-y-44">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image side (Large visual) */}
                <div className="w-full lg:w-[58%]">
                  <FeaturedImage
                    image={project.image}
                    title={project.title}
                    hasVideo={!!project.video}
                    onClick={() => {
                      if (project.video) {
                        setActiveVideo(project.video);
                      } else if (project.live) {
                        window.open(project.live, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  />
                </div>

                {/* Details side */}
                <div className="w-full lg:w-[38%] flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted mb-1 font-semibold block">
                    {project.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-4">
                    <SplitText text={project.title} />
                  </h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-charcoal-light mb-6">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-6 mb-6">
                    {project.live && (
                      <Magnetic>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors inline-block cursor-pointer"
                          whileHover={{ x: 2, y: -2 }}
                          transition={springLinkTransition}
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
                          className="text-sm font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors inline-block cursor-pointer"
                          whileHover={{ x: 2, y: -2 }}
                          transition={springLinkTransition}
                        >
                          Source ↗
                        </motion.a>
                      </Magnetic>
                    )}
                    {project.video && (
                      <Magnetic>
                        <motion.button
                          onClick={() => setActiveVideo(project.video)}
                          className="text-sm font-semibold uppercase tracking-wider text-charcoal-light hover:text-charcoal transition-colors inline-block cursor-pointer bg-transparent border-none p-0"
                          whileHover={{ x: 2, y: -2 }}
                          transition={springLinkTransition}
                        >
                          Demo →
                        </motion.button>
                      </Magnetic>
                    )}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => {
                      const logo = techMap[tag];
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium px-3 py-1 rounded-full bg-accent-soft text-accent"
                        >
                          {logo && <img src={logo} alt="" className="w-4 h-4 opacity-90" />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All creations link */}
        <div className="mt-32 flex justify-center border-t border-border/80 pt-16">
          <Magnetic>
            <Link
              to="/projects"
              className="group flex items-center gap-2 font-sans text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200 cursor-pointer"
            >
              View all projects
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Work;
