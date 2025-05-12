import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const images = [
  { src: image1, caption: 'I Lift' },
  { src: image2, caption: 'I Code' },
  { src: image3, caption: 'I Build' },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getTransformStyle = (index) => {
    const offset = (index - activeIndex + images.length) % images.length;

    switch (offset) {
      case 0: // Center
        return {
          className: 'z-30 scale-105 rotate-0',
          translate: 'translate-x-0'
        };
      case 1: // Right
        return {
          className: 'z-20 rotate-[10deg] opacity-70',
          translate: 'translate-x-10'
        };
      case 2: // Left
        return {
          className: 'z-20 -rotate-[10deg] opacity-70',
          translate: '-translate-x-10'
        };
      default:
        return {
          className: 'hidden',
          translate: ''
        };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Image Carousel */}
      <div className="relative flex items-center justify-center h-[400px] w-full">
        {images.map((img, index) => {
          const { className, translate } = getTransformStyle(index);

          return (
            <motion.div
              key={index}
              className={`absolute w-64 h-80 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 ease-in-out ${translate} ${className}`}
            >
              <img
                src={img.src}
                alt="slide"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
      
      <div className="w-full text-center">
        <motion.p 
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          {images[activeIndex].caption}
        </motion.p>
      </div>
    </div>
  );
}