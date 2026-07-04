import { motion } from 'framer-motion';

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full mb-12"
    >
      <div className="flex items-center gap-6">
        <h2 className="font-serif text-heading text-charcoal whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 border-b border-border" />
      </div>
      {subtitle && (
        <p className="mt-3 font-sans text-sm text-charcoal-muted tracking-widest uppercase">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
