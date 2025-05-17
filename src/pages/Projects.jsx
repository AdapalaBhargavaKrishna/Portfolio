import React, { useState } from 'react';
import { motion } from 'framer-motion';
import linksvg from '../assets/svg/link.svg'
import arrowsvg from '../assets/svg/arrow.svg'
import githublogo from '../assets/svg/githubw.svg'
import { techMap } from '../data/techMap';


const projectData = [
  {
    title: "Attendz - Attendance Calculator",
    description: "A comprehensive college management platform for students and faculty. It centralizes attendance tracking, academic performance, fee management, timetables, and announcements in a user-friendly interface with responsive design.",
    image: "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/attendz.png",
    live: "https://adapalabhargavakrishna.github.io/Web-Development/AttendEz/index.html",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "NewzX - News That Matters to You",
    description: "A dynamic news website with real-time headlines and powerful search functionality. Users can filter topics and get personalized news with a sleek, intuitive design that works seamlessly across devices.",
    image: "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/newzx.png",
    live: "https://newzzx.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development",
    tech: ["React", "Tailwind", "Framer Motion", "API", "Netlify"],
  },
  {
    title: "MovieShelf - Your Personal Cinema Universe",
    description: "A movie watchlist app with Firebase authentication, allowing users to search, save, and organize films. It provides detailed movie info, including ratings, cast, and trailers, creating a perfect companion for movie lovers.",
    image: "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/movieshelf.png",
    live: "https://movieshelf-bk.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development",
    tech: ["React", "Tailwind", "GSAP", "API", "Firebase"],
  },
  {
    title: "RecipeMate - Your Kitchen Companion",
    description: "A recipe discovery platform with step-by-step instructions, ingredient lists, and video tutorials. It offers diverse culinary options through API integration, making cooking easier for all skill levels.",
    image: "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/RecipeMate.png",
    live: "https://recipemate-bk.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/",
    tech: ["React", "Tailwind", "GSAP", "API", "Netlify"],
  },
  {
    title: "SafePass - Security Simplified",
    description: "A secure password manager that stores and organizes login credentials in an encrypted vault. Users can easily view and copy passwords, eliminating the hassle of forgotten logins.",
    image: "https://adapalabhargavakrishna.github.io/Web-Development/Portfolio/assets/safepass.png",
    live: "https://safepassx.netlify.app/",
    code: "https://github.com/AdapalaBhargavaKrishna/Web-Development/",
    tech: ["React", "Tailwind", "GSAP", "MongoDB", "Node.js", "Express.js"],
  },
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="projects" className="bg-black min-h-screen text-white px-4 md:px-8 py-16">
      <p className="text-center text-neutral-400 text-sm">From Idea to Interface</p>
      <motion.div
        className="text-3xl ml-2 md:text-6xl font-bold text-center mb-20 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white">Code &</span>
        <span
          className="project-heading inline-block mt-3 bg-gradient-to-r from-[#ff8000] via-[#f0c] to-[#04f] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
          style={{ backgroundSize: "200% 200%" }}
        >
          Creativity
        </span>

      </motion.div>


      <div className="flex relative gap-10">
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

      <a href="#" className="group flex w-fit items-center justify-center gap-2 group-hover:text-neutral-100 md:mt-20 mx-auto rounded-full px-2">
        <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#ffffff,45%,#939393,55%,#ffffff)] bg-[length:250%_100%] bg-clip-text text-base font-semibold text-transparent mb-1'>
          see more projects
        </span>
        <button className="group relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full font-medium text-neutral-200"><div className="translate-x-0 transition group-hover:translate-x-[300%]"><img src={arrowsvg} alt="" /></div><div className="absolute -translate-x-[300%] transition group-hover:translate-x-0"><img src={arrowsvg} alt="" /></div></button>
      </a>
    </div>
  );
};

export default Projects;