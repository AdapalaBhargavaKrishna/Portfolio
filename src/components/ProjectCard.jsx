import React, { useState } from 'react';

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="group relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-500"
      style={{
        transform: `perspective(1000px) rotateY(${isHovered ? '3deg' : '0deg'}) rotateX(${isHovered ? '-3deg' : '0deg'})`,
        transition: 'transform 0.5s ease-out',
        boxShadow: isHovered
          ? '0 50px 100px -20px rgba(0, 0, 0, 0.3), 0 30px 60px -30px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(123, 31, 162, 0.2)'
          : '0 20px 40px -20px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Top Half */}
      <div className="w-full h-1/2 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
          alt="Demo"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="w-full h-1/2 p-4 bg-[#090c14] bg-opacity-80 rounded-b-2xl flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-800">Awesome Project</h3>
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">React</span>
          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">Next.js</span>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">GSAP</span>
        </div>
        <p className="text-sm text-gray-600 opacity-80">
          This project features an innovative design with stunning animations and a smooth UX/UI experience.
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
