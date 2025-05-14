import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const slideVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

const Projects = () => {
  return (
    <div id="projects" style={{ scrollMarginTop: '50px' }} className="min-h-screen bg- flex flex-col items-center pb-10">
      <h1 className="text-center w-full p-5 text-2xl font-semibold">Explore My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-7xl w-full px-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex justify-center items-center">
            <motion.div
              variants={slideVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className='w-[35rem] h-[35rem]'
            >
              <ProjectCard />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
