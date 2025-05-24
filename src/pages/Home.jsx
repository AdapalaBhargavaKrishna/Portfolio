import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [disablePointerEvents, setDisablePointerEvents] = useState(false);
  const { scrollYProgress } = useScroll();

  const roles = [
    'Web Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Python Programmer',
    'Tech Explorer',
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setDisablePointerEvents(v >= 0.14);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div id="home" className="relative h-screen w-full">
      <div className="fixed inset-0 z-0">
        <motion.div
          style={{ scale, opacity, position: 'relative', height: '100vh' }}
          className={`flex items-center justify-center w-full text-white ${
            disablePointerEvents ? 'pointer-events-none' : ''
          }`}
        >
          <div className="flex flex-col items-center text-center w-full px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mb-20"
            >
              {/* Notification badge */}
              <div className="inline-flex items-center px-4 py-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <span className="text-xs font-medium bg-gradient-to-tr from-blue-400 to-blue-600 text-white px-2 py-0.5 rounded-full mr-2">
                  New
                </span>
                <a
                  href="https://newzzx.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 hover:underline transition"
                >
                  View my latest project <span className="text-white font-semibold">NewzX</span> →
                </a>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I’m{' '}
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Bhargava
                </span>
                <br />
                turning ideas into{' '}
                <span className="italic text-gray-300">digital experiences</span>
              </h1>

              {/* Animated Role */}
              <div className="h-12 overflow-hidden flex justify-center items-center mt-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-medium text-white"
                  >
                    {roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-lg leading-relaxed">
                Passionate about crafting responsive, performant, and aesthetic web apps with a
                strong UX focus. I thrive at the intersection of creativity and code, turning bold
                concepts into seamless interfaces.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a
                  href="#projects"
                  className="px-6 py-2 text-sm md:text-base bg-white text-black rounded-full shadow-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-200"
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 text-sm md:text-base bg-white text-black rounded-full shadow-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
