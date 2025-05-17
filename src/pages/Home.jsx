import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [disablePointerEvents, setDisablePointerEvents] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
  const unsubscribe = scrollYProgress.on("change", (v) => {
    if (v < 0.14) {
      setDisablePointerEvents(false);
    } else {
      setDisablePointerEvents(true);
    }
  });

  return () => unsubscribe();
}, [scrollYProgress]);


  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const roles = [
    'Web Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Python Programmer',
    'Creative Thinker',
    'Tech Explorer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full">

      <div className="fixed inset-0 z-0">

        <motion.div
          style={{
            scale,
            opacity,
            position: 'relative',
            height: '100vh',
          }}
          className={`flex items-center justify-center w-full text-white ${
    disablePointerEvents ? 'pointer-events-none' : ''
  }`}
        >
          <div className="flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5 flex flex-col items-center p-6 md:p-20"
            >
              <div className="hidden px-4 rounded-full bg-gradient-to-r from-gray-500/10 to-gray-500/10 border border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#d9d9d9,45%,#1e293b,55%,#d9d9d9)] bg-[length:250%_100%] bg-clip-text text-md  font-semibold text-transparent'>Open to work</span>
                </div>
              </div>

              <div className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-gray-500/10 to-gray-500/10 border border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#2c83ff,45%,#549aff,55%,#2c83ff)] bg-[length:250%_100%] px-2 py-1 rounded-xl text-xs font-medium text-white">New!</span>
                  <a href="https://newzzx.netlify.app/" target="_blank" className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#d9d9d9,45%,#1e293b,55%,#d9d9d9)] bg-[length:250%_100%] bg-clip-text text-md font-semibold text-transparent hover:underline">View my latest project NewzX →</a>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                Hello! I'm <span className="text-rose-400">Bhargava</span>
              </h1>

              <div className="h-16 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent flex items-center"
                  >
                    <span>&lt;</span>
                    <span className="mx-2">{roles[roleIndex]}</span>
                    <span>/&gt;</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="md:text-xl text-lg text-gray-50 max-w-5xl text-center">
                I design and develop responsive, high-performance web applications with a focus on clean UI and intuitive UX. Always exploring new technologies, I love transforming ideas into impactful digital solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Home;