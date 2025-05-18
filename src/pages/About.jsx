import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import githublogo from '../assets/svg/github.svg';
import linkedinlogo from '../assets/svg/linkedin.svg';
import xlogo from '../assets/svg/x.svg';
import downloadlogo from '../assets/svg/download.svg';
import ImageCarousel from '../layout/ImageCarousel'
import TechStack from '../layout/TechStack'

const About = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 0.25], ['70vh', '100vh']);
  const width = useTransform(scrollYProgress, [0, 0.1], ['80%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.22], ['70px', '0px']);
  const padding = useTransform(scrollYProgress, [0, 0.25], ['24px', '0px']);

  return (
    <motion.div
      id='about'
      className='flex flex-col items-center about-background mx-auto min-h-max'
      style={{ height, width, borderRadius, padding }}
    >
      <div className="w-full px-3 md:px-6 py-4">
        <div className='flex flex-col items-center justify-center'>

          <div className='bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center p-1'>
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg">
              <span className="font-display text-xl md:text-2xl font-bold tracking-wider">BK</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-sm space-y-2 p-4 rounded-2xl border border-white/10 shadow-xl w-full max-w-4xl mt-2"
          >
            <h1 className='font-bold text-[1.7rem] md:text-4xl text-center text-black'>About Me</h1>
            <p className='text-center font-normal text-base'>I'm Bhargava, a passionate full-stack developer driven by a love for building seamless digital experiences. From crafting responsive frontends to designing robust backends, I enjoy turning complex challenges into clean, scalable code. My stack includes React.js, Node.js, and more, and I'm constantly leveling up my skills.</p>
            <p className='text-center font-normal text-base'>Beyond the screen, I'm a curious mind—always exploring fresh ideas and innovative solutions. I believe in staying up-to-date with the ever-evolving tech world, keeping learning fun and exciting. Whether it's a new framework or a unique side project, I'm always ready to dive in.</p>
            <p className='text-center font-normal text-base'>Each day, I aim to grow, create, and spread positivity. For me, success isn't just about code—it's about living with purpose, learning with intention, and making a difference wherever I can.</p>

          </motion.div>

          <div className="flex md:flex-row flex-col-reverse items-center justify-around md:w-[60%]">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-sm p-6 rounded-3xl shadow-2xl max-w-2xl border border-white/20 mt-10 md:mt-0">
              <div className="flex flex-col items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold text-center text-black">
                  Let's Connect
                </h2>
                <div className="flex justify-center items-center gap-4">
                  <a href="https://github.com/AdapalaBhargavaKrishna" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition shadow-sm"
                    >
                      <img src={githublogo} alt="GitHub" className="w-6 h-6" />
                    </motion.button>
                  </a>
                  <a href="https://www.linkedin.com/in/bhargavakrishnaadapala/" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition shadow-sm"
                    >
                      <img src={linkedinlogo} alt="LinkedIn" className="w-6 h-6" />
                    </motion.button>
                  </a>
                  <a href="https://x.com/Bhargava383755" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition shadow-sm"
                    >
                      <img src={xlogo} alt="X" className="w-6 h-6" />
                    </motion.button>
                  </a>
                  <a href="/path/to/your_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 h-12 bg-blue-50 border border-blue-100 px-6 font-medium text-blue-600 rounded-xl hover:bg-blue-100 shadow-2xl"
                    >
                      <span>Resume</span>
                      <img src={downloadlogo} alt="Download" className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                    </motion.button>
                  </a>
                </div>
              </div>

            </motion.div>

            <div className='w-1/2'>
              <ImageCarousel />
            </div>
          </div>

        </div>

        
      </div>
      
      <div className='mt-10'>
        <TechStack />
      </div>
    </motion.div>
  );
};

export default About;