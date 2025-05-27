import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import downarrow from '../assets/svg/downarrow.svg'; // Adjust the path as necessary

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
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <div className="fixed inset-0 z-[-2] bg-[url('/space.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-[#0a0a0a55] to-black animate-pulse opacity-70" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className={`relative flex items-center justify-center h-full text-white transition-all duration-300 ease-out ${disablePointerEvents ? 'pointer-events-none' : ''
          }`}
      >
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 mb-28 w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-2 md:px-4 py-1 inline-flex items-center"
          >
            <span className="text-xs font-semibold bg-gradient-to-tr bg-blue-500 text-white rounded-full px-2 md:py-0.5 mr-2">
              New
            </span>
            <a
              href="https://newzzx.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-gray-200 hover:underline"
            >
              Check out my latest creation{' '}
              <span className="text-white font-semibold">NewzX</span> →
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2rem] md:text-6xl font-bold leading-tight max-w-5xl tracking-tight"
          >
            Hello, I'm{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            >
              Bhargava
            </motion.span>
            <br />
            <span className="italic text-gray-300 mt-4 text-center max-w-xl leading-snug">
              Turning ideas into interactive<br /> <span className="block">digital experiences.</span>
            </span>
          </motion.h1>

          {/* Animated Roles */}
          <div className="h-12 mt-1 overflow-hidden flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-2xl font-medium bg-gradient-to-r bg-clip-text text-transparent from-[#a7f3d0] via-[#67e8f9] to-[#93c5fd]"
              >
                {'<'} {roles[roleIndex]} {'/>'}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-5 items-center justify-center">

            <a href="#projects">
            <button className="hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-black px-4 md:px-6 font-medium text-white duration-500">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                Explore my work
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <img className="h-6 w-6" src={downarrow} alt="" />
              </div>
            </button>
            </a>  
            <a href="#contact"> 
            <button className="hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] group relative inline-flex h-10 md:12 items-center justify-center rounded-full px-4 md:px-6 bg-white font-medium text-black">
              <span>Lets Connect</span>
              <div className="relative ml-1 h-5 w-5 overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -translate-x-4"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
