import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Noise Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Floating Gradient Meshes */}
      <motion.div
        className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#C2662D]/[0.03] blur-[130px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-ivory-300/[0.4] blur-[160px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
