import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'Web Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Python Programmer',
    'Creative Thinker',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-[#e6e6e6] flex py-40">
      <div className="md:w-3/5 px-6 py-1 md:py-3 ml-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hello! I'm <span className="text-purple-600">Bhargava</span>
          </h1>

          <h2 className="text-lg md:text-xl text-gray-700 mt-0">
            Passionate about building digital products that make a difference.
          </h2>

          <div className="h-14 relative overflow-hidden" aria-live="polite">
            {roles[roleIndex] && (
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center"
              >
                <span>&lt;</span>
                <span className="mx-2">{roles[roleIndex]}</span>
                <span>/&gt;</span>
              </motion.div>
            )}
          </div>

          <p className="text-lg text-gray-600 max-w-3xl">
            I design and develop responsive, high-performance web applications with a focus on clean UI and intuitive UX. Always exploring new technologies, I love transforming ideas into impactful digital solutions.
          </p>
        </motion.div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
