import { motion } from 'framer-motion';

function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] md:w-[70%] max-w-4xl aspect-video rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={videoUrl}
          title="Video"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          aria-label="Close video"
        >
          <span className="text-white text-sm font-light leading-none">✕</span>
        </button>
      </div>
    </motion.div>
  );
}

export default VideoModal;
