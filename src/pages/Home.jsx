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
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 md:mb-28 mb-20 w-full">

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
              href="https://fileswitch.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-gray-200 hover:underline"
            >
              Check out my latest creation{' '}
              <span className="text-white font-semibold">FileSwitch</span> →
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

              <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-full bg-white px-2 md:px-4 font-medium text-black duration-500">
                <div className="relative flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                  <div className=" translate-x-0 mt-[2px] opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round"></path>
                  </svg></div>
                  <span className="pl-2">Lets Connect</span>
                  <div className=" right-0 translate-x-12 opacity-0 transition mt-[2.5px] group-hover:translate-x-4 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></div>
              </button>

              {/* <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full backdrop-blur-lg bg-white/10 py-1 pl-6 pr-14 font-medium text-neutral-50 hover:text-black">
                <span className="z-10 pr-2">Lets Connect</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white transition-[width] group-hover:w-[calc(100%-8px)]">
                  <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white font-medium text-black">
                    <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </button> */}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
