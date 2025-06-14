import React, { useState } from 'react';
import { motion } from 'framer-motion';
import videosvg from '../assets/svg/video.svg'
import arrowsvg from '../assets/svg/arrow.svg'
import closesvg from '../assets/svg/close.svg'
import githublogo from '../assets/svg/githubw.svg'
import { techMap } from '../data/techMap';
import ProjectCard from '../layout/ProjectCard'
import { Link } from 'react-router-dom'
import { projectData } from '../data/projects'

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setcurrentVideo] = useState(null)

  const ShowVideo = (video) => {
    
  }

  return (
    <div id="projects" className="bg-black min-h-screen text-white px-4 md:px-8 py-16">
      <p className="text-center text-neutral-400 text-sm">From Idea to Interface</p>
      
      <motion.div
        className="text-4xl ml-2 mt-2 md:text-6xl font-bold text-center mb-20 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <span className="text-white">Code &</span>
        <span className="project-heading inline-block mt-1 md:mt-3 bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundSize: "200% 200%" }}>
          Creativity
        </span>
      </motion.div>

      {currentVideo && (
  <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-70">
    <div className="relative w-[90%] md:w-[70%] lg:w-[50%] aspect-video bg-neutral-950 rounded-xl overflow-hidden shadow-xl p-8">
      
      <iframe className='w-full h-full' src={`${currentVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <button
        onClick={() => setcurrentVideo(null)}
        className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
        title="Close"
      >
        <img src={closesvg} alt="" />
      </button>
    </div>
  </div>
)}


      {/* Web */}
      <div className="hidden md:flex relative gap-10">

        {/* LEFT */}
        <div className="w-full lg:w-3/5 flex flex-col gap-20">
          {projectData.slice(0, 5).map((project, index) => (
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
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-xl cursor-pointer"
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
              <a href={projectData[currentIndex].code} target="_blank" rel="noreferrer" title='GitHub'>
                <img src={githublogo} className='w-8 h-11' alt="" />
              </a>

            {projectData[currentIndex].video &&
              <a onClick={() => setcurrentVideo(projectData[currentIndex].video)} className='cursor-pointer' target="_blank" rel="noreferrer" title='Preview Video'>
                <img src={videosvg} className='w-8 h-11' alt="" />
              </a>
            }
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

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 p-1 gap-20">
        {projectData.slice(0, 5).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <Link to={'/projects'} className="group flex w-fit items-center justify-center gap-2 group-hover:text-neutral-100 mt-20 mx-auto rounded-full px-2 cursor-pointer">
        <button className="group relative inline-flex h-[calc(48px+0px)] group-hover:text-black items-center justify-center rounded-full pl-6 pr-12 font-semibold text-lg text-neutral-50"><span className="z-10 pr-4"> see more projects</span><div className="absolute right-2 inline-flex h-11 w-11 items-center justify-end rounded-full bg-white transition-[width] group-hover:w-[calc(100%-8px)]"><div className="mr-[10px] flex items-center justify-center"><img src={arrowsvg} alt="" /></div></div></button>
      </Link>

    </div>
  );
};

export default Projects;