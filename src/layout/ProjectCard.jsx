import React, { useState } from "react";
import { motion } from 'framer-motion'
import { techMap } from '../data/techMap'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, image, live, code, tech, video } = project;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-transparent transition-all duration-500 cursor-pointer
                 bg-[#090c14] bg-opacity-90 flex flex-col"
      style={{
        transform: `perspective(1000px) rotateY(${isHovered ? "3deg" : "0deg"}) rotateX(${isHovered ? "-3deg" : "0deg"})`,
        transition: "transform 0.5s ease-out, box-shadow 0.3s ease, background-color 0.3s ease",
        boxShadow: isHovered
          ? "0 50px 100px -20px rgba(0, 0, 0, 0.3), 0 30px 60px -30px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(123, 31, 162, 0.2)"
          : "0 20px 40px -20px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-full object-fit object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow p-4 gap-4">
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((techName) => (
            <motion.div
              key={techName}
              className="flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#2a2a2a] rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={techMap[techName]} alt={techName} className="w-5 h-5" />
              <span className="text-sm font-mono text-gray-300">{techName}</span>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 opacity-80 flex-grow">{description}</p>

        {/* Links - always bottom aligned */}
        <div className="mt-auto flex gap-6 pt-3 border-t border-gray-800">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-purple-400 hover:text-purple-600 transition"
          >
            Live Demo
          </a>

          {video && (
            <button
              onClick={() => window.open(video, "_blank")}
              className="text-sm font-semibold text-purple-400 hover:text-purple-600 transition"
            >
              Watch Video
            </button>
          )}
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-purple-400 hover:text-purple-600 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
