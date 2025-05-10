import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import githublogo from '../assets/svg/github.svg';
import linkedinlogo from '../assets/svg/linkedin.svg';
import xlogo from '../assets/svg/x.svg';
import downloadlogo from '../assets/svg/download.svg';

import firebaseLogo from '../assets/svg/firebase.svg';
import gitLogo from '../assets/svg/git.svg';
import githubwLogo from '../assets/svg/githubw.svg';
import htmlLogo from '../assets/svg/html.svg';
import cssLogo from '../assets/svg/css.svg';
import javaLogo from '../assets/svg/java.svg';
import javascriptLogo from '../assets/svg/javascript.svg';
import mongodbLogo from '../assets/svg/mongodb.svg';
import mysqlLogo from '../assets/svg/mysql.svg';
import netlifyLogo from '../assets/svg/netlify.svg';
import nodeLogo from '../assets/svg/node.svg';
import postmanLogo from '../assets/svg/postman.svg';
import pythonLogo from '../assets/svg/python.svg';
import reactjsLogo from '../assets/svg/reactjs.svg';
import tailwindLogo from '../assets/svg/tailwind.svg';
import npmLogo from '../assets/svg/npm.svg';
import vercelLogo from '../assets/svg/vercel.svg';
import vscodeLogo from '../assets/svg/vscode.svg';

const About = () => {

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 0.25], ['70vh', '100vh']);
  const width = useTransform(scrollYProgress, [0, 0.25], ['90%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.25], ['70px', '0px']);
  const padding = useTransform(scrollYProgress, [0, 0.25], ['24px', '0px']);

  const techStack = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'React', logo: reactjsLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubwLogo },
    { name: 'Npm', logo: npmLogo },
    { name: 'VS Code', logo: vscodeLogo },
    { name: 'Postman', logo: postmanLogo },
    { name: 'Vercel', logo: vercelLogo },
    { name: 'Netlify', logo: netlifyLogo },
  ];

  return (
    <motion.div
      id='about'
      className='flex flex-col items-center about-background mx-auto overflow-hidden min-h-screen'
      style={{ height, width, borderRadius, padding }}
    >
      <div className="w-full px-3 md:px-6 py-9  ">
        <div className='flex flex-col space-y-5 items-center justify-center'>

          <div className='bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center p-1'>
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg">
              <span className="font-display text-xl md:text-2xl font-bold tracking-wider">BK</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-md space-y-4 p-4 rounded-2xl border border-white/10 shadow-xl w-full max-w-4xl"
          >
            <h1 className='font-bold text-[1.7rem] md:text-4xl text-center text-black'>About Me</h1>
            <p className='text-center text-gray-900'>
              I'm a passionate software engineer in the making, skilled in full-stack development with technologies like JavaScript, React.js, Node.js, MongoDB, Python, and Java. Currently pursuing my B.Tech in Computer Science, I've built impactful projects like AttendEz, SafePass, and Recipe Mate that reflect both my technical proficiency and creative approach. With a strong grasp of data structures and algorithms, I thrive in environments that encourage innovation, collaboration, and continuous learning.
            </p>
          </motion.div>

          <div className="flex items-center justify-around md:w-[60%]">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-lg p-6 rounded-3xl shadow-2xl w-full max-w-2xl bg-white/10 border border-white/20"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
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
                      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-blue-50 border border-blue-100 px-6 font-medium text-blue-600 duration-300 hover:bg-blue-100"
                    >
                      <div className="flex items-center gap-2">
                        <span>Resume</span>
                        <img src={downloadlogo} alt="Download" className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                      </div>
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="backdrop-blur-0 md:p-6 py-4 rounded-2xl md:shadow-xl md:max-w-5xl w-full md:border md:border-white/10 text-white"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">Technologies I Work With</h2>
            <div>
              <div>

                <div className='hidden md:grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4'>
                  {techStack.map((tech, index) => (
                    <div
                      key={`desktop-${index}`}
                      className='flex md:border items-center justify-around rounded-xl backdrop-blur-sm md:bg-white/5 p-1 md:w-40 text-sm text-white hover:scale-105 transition cursor-pointer'>
                      <img src={tech.logo} alt={tech.name} className='w-10 h-10' />
                      <span className='hidden md:block mt-2 text-xs text-center'>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className='md:hidden space-y-4 mt-4'>

                  <div className='relative overflow-x-auto scrollbar-hide group'>
                    <div className='flex animate-marquee-left group-hover:animation-pause w-max gap-4'>
                      {techStack.slice(0, Math.ceil(techStack.length / 2)).map((tech, index) => (
                        <div
                          key={`mobile-top-${index}`}
                          className='flex-shrink-0 flex border items-center justify-around rounded-xl backdrop-blur-sm bg-white/5 p-2 w-32 text-sm text-white hover:scale-105 transition cursor-pointer'>
                          <img src={tech.logo} alt={tech.name} className='w-8 h-8' />
                          <span className='mt-1 text-xs text-center block'>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='relative overflow-x-auto scrollbar-hide group'>
                    <div className='flex animate-marquee-right group-hover:animation-pause w-max gap-4'>
                      {techStack.slice(Math.ceil(techStack.length / 2)).map((tech, index) => (
                        <div
                          key={`mobile-bottom-${index}`}
                          className='flex-shrink-0 flex border items-center justify-around rounded-xl backdrop-blur-sm bg-white/5 p-2 w-32 text-sm text-white hover:scale-105 transition cursor-pointer'>
                          <img src={tech.logo} alt={tech.name} className='w-8 h-8' />
                          <span className='mt-1 text-xs text-center block'>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
