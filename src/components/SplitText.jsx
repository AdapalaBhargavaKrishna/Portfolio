import { motion } from 'framer-motion';

export default function SplitText({ text, className = '' }) {
  const words = text.split(' ');

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    initial: { y: '110%' },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em] py-1 -my-1">
          <motion.span className="inline-block" variants={childVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
