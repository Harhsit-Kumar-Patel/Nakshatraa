import { motion } from 'framer-motion';

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F2EEE5] paper-grain"
    >
      <div className="text-center overflow-hidden">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="block font-body text-[10px] uppercase tracking-[0.25em] text-[#7E8B82] mb-4 font-semibold"
        >
          Guiding Life with Timeless Wisdom
        </motion.span>
        
        {/* Main Title */}
        <div className="overflow-hidden py-1">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-[#1C2A20]"
          >
            NAKSHATRAA
          </motion.h1>
        </div>

        {/* Small terracotta line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          className="w-12 h-[1px] bg-[#A25A38] mx-auto mt-6 origin-center"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
