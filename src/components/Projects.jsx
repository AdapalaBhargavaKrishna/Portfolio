import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact'
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
      if (window.innerWidth < 760) {
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
    <>
      <div className="bg-black min-h-screen text-white px-4 md:px-8 py-28 pb-[15%]">
        <p className="text-center text-neutral-400 text-sm">From Idea to Interface</p>
        <motion.div
          className="text-3xl ml-2 md:text-6xl font-bold text-center mb-5 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <span className="text-white">Code &</span>
          <span className="project-heading inline-block mt-1 md:mt-3 bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
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

        <div className={`${isVertical ? 'hidden md:flex ' : 'hidden'} relative gap-10`}>

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
                    transform: `perspective(800px) rotateY(${isHovered ? '2deg' : '0deg'}) rotateX(${isHovered ? '-2deg' : '0deg'})`,
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
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-3xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <img src={techMap[tech]} alt={tech} className="w-5 h-5" />
                    <span className="text-sm font-mono text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex gap-7 "
                key={currentIndex + 'buttons'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <a
                  href={projectData[currentIndex].code}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-1 transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={githublogo}
                    alt="GitHub Logo"
                    className="w-8 h-8 transition-all"
                  />
                </a>
 
                <a href={projectData[currentIndex].live} target="_blank" rel="noreferrer">
                  <button className="hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] group relative inline-flex h-10 md:h-11 items-center justify-center rounded-full px-4 bg-white font-normal text-black">
                    <span>Check It Out</span>
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
      <Contact />
    </>
  );
};

export default Projects;