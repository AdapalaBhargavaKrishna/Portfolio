import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import linksvg from '../assets/svg/link.svg'
import githublogo from '../assets/svg/githubw.svg'
import { techMap } from '../data/techMap';
import ProjectCard from '../layout/ProjectCard'
import { useLocation } from 'react-router-dom'
import { projectData } from '../data/projects'
import colsvg from '../assets/svg/horizontal.svg'
import gridsvg from '../assets/svg/grid.svg'

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVertical, setIsVertical] = useState(true)

  const { pathname } = useLocation();
    useEffect(() => {
       window.scrollTo(0, 0);
   }, [pathname]);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760 ) {
        setIsVertical(false);
      } else {
        setIsVertical(true)
      }
    };
      handleResize();

      window.addEventListener('resize', handleResize)
       return () => window.removeEventListener('resize', handleResize);
   }, [])
   

  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-8 py-16 pb-40">
      <p className="text-center text-neutral-400 text-sm">From Idea to Interface</p>
      <motion.div
        className="text-3xl ml-2 md:text-6xl font-bold text-center mb-5 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <span className="text-white">Code &</span>
        <span className="project-heading inline-block mt-3 bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundSize: "200% 200%" }}>
          Creativity
        </span>
      </motion.div>

      <div className='hidden md:flex flex-wrap items-center gap-4 justify-end md:justify-end w-full md:w-11/12 pr-0 md:pr-5 mx-auto mb-2'>
  <button onClick={() => setIsVertical(true)} className={`${isVertical ? 'bg-neutral-800 border border-neutral-600 p-2 rounded-xl' : 'p-2'}`}>
    <img src={colsvg} alt="Vertical layout" className="w-6 h-6" />
  </button>
  <button onClick={() => setIsVertical(false)} className={`${!isVertical ? 'bg-neutral-800 border border-neutral-600 p-2 rounded-xl' : 'p-2'}`}>
    <img src={gridsvg} alt="Grid layout" className="w-6 h-6" />
  </button>
</div>

      <hr className='border border-neutral-800 w-11/12 mx-auto mb-20' />

      {/* Web */}
      <div className={`${isVertical ? 'hidden md:flex ' : 'hidden'} relative gap-10`}>
        
        {/* LEFT */}
        <div className="w-full lg:w-3/5 flex flex-col gap-20">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              id={`project-${index}`}
              initial={{ opacity: 0.4, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.9 }}
              onViewportEnter={() => setCurrentIndex(index)}
              className="flex justify-end items-center min-h-[40vh] md:h-[60vh] scroll-mt-20"
            >
              <div
                className="w-full max-w-[50rem] p-2 rounded-2xl transition-shadow duration-500 cursor-pointer bg-neutral-800"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `perspective(1000px) rotateY(${isHovered ? '2deg' : '0deg'}) rotateX(${isHovered ? '-2deg' : '0deg'})`,
                  transition: 'transform 0.5s ease-out',
                  boxShadow: isHovered
                    ? '0 50px 100px -20px rgba(0, 0, 0, 0.3), 0 30px 60px -30px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(123, 31, 162, 0.2)'
                    : '0 20px 40px -20px rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-xl w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/5">
          <motion.div
            className="sticky top-44 h-[55vh] p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              key={currentIndex + 'title'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {projectData[currentIndex].title}
            </motion.h2>

            <motion.p
              className="mb-6 max-w-md text-gray-400 text-base leading-relaxed"
              key={currentIndex + 'desc'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {projectData[currentIndex].description}
            </motion.p>

            <div className="flex flex-wrap max-w-xs gap-3 mb-6">
              {projectData[currentIndex].tech?.map((tech, i) => (
                <motion.div
                  key={`${tech}-${i}`}
                  className="flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#2a2a2a] rounded-3xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <img src={techMap[tech]} alt={tech} className="w-5 h-5" />
                  <span className="text-sm font-mono text-gray-300">{tech}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex gap-4"
              key={currentIndex + 'buttons'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <a href={projectData[currentIndex].live} target="_blank" rel="noreferrer">
                <button className="group relative inline-flex h-11 w-12 items-center justify-center overflow-hidden rounded-full hover:bg-neutral-800 transition-all duration-300 hover:w-40 text-white">
                  <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                    View Project
                  </div>
                  <div className="absolute right-3.5">
                    <img src={linksvg} alt="" />
                  </div>
                </button>
              </a>
              <a href={projectData[currentIndex].code} target="_blank" rel="noreferrer">
                <button className="group relative inline-flex h-11 w-12 items-center justify-center overflow-hidden rounded-full hover:bg-neutral-800 transition-all duration-300 hover:w-36 text-white">
                  <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                    Github
                  </div>
                  <div className="absolute right-3.5">
                    <img src={githublogo} alt="" />
                  </div>
                </button>
              </a>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Mobile  */}
      <div className={`${!isVertical ? 'grid ' : 'hidden '} md:mx-44 grid-cols-1 sm:grid-cols-2 p-1 gap-20`}>
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    </div>
  );
};

export default Projects;