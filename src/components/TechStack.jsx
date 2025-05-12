import React from 'react';
import { motion } from 'framer-motion';

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
import cloudLogo from '../assets/svg/cloud.svg';
import pythonLogo from '../assets/svg/python.svg';
import reactjsLogo from '../assets/svg/reactjs.svg';
import expressjsLogo from '../assets/svg/expressjs.svg';
import FramerLogo from '../assets/svg/framermotion.svg';
import gsapLogo from '../assets/svg/gsap.svg';
import tailwindLogo from '../assets/svg/tailwind.svg';
import npmLogo from '../assets/svg/npm.svg';
import vercelLogo from '../assets/svg/vercel.svg';
import vscodeLogo from '../assets/svg/vscode.svg';

const TechStack = () => {
  const techStack = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'React', logo: reactjsLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Express.js', logo: expressjsLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Framer Motion', logo: FramerLogo },
    { name: 'GSAP', logo: gsapLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Cloud', logo: cloudLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubwLogo },
    { name: 'npm', logo: npmLogo },
    { name: 'VS Code', logo: vscodeLogo },
    { name: 'Postman', logo: postmanLogo },
    { name: 'Vercel', logo: vercelLogo },
    { name: 'Netlify', logo: netlifyLogo },
  ];

  const rows = [
    techStack.slice(0, 6),
    techStack.slice(6, 13),
    techStack.slice(13, 18),
    techStack.slice(18, techStack.length),
  ];

  return (
    <div className="min-h-max py-16 text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-gray-400 uppercase tracking-wide">I constantly try to improve</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">My Tech Stack</h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex flex-wrap justify-center gap-4"
          >
            {row.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center justify-around gap-2 px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 transition transform duration-300"
              >
                <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
