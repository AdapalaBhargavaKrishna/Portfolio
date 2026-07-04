import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      {/* Wipe Overlay */}
      <motion.div
        className="fixed inset-0 bg-accent z-[9999] pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ originY: 1 }} // transform-origin: bottom
      />
    </>
  );
};

export default PageTransition;
