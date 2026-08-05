import { motion } from 'framer-motion';

export function ConstellationDivider() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-24 flex items-center justify-center pointer-events-none z-0">
      <svg viewBox="0 0 800 100" className="w-full max-w-4xl h-full text-[#D4AF37] opacity-[0.12]" fill="none" stroke="currentColor" strokeWidth="0.5">
        <motion.path
          d="M 50 50 L 150 20 L 220 70 L 350 40 L 450 60 L 580 30 L 680 80 L 750 45"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {[
          { cx: 50, cy: 50 },
          { cx: 150, cy: 20 },
          { cx: 220, cy: 70 },
          { cx: 350, cy: 40 },
          { cx: 450, cy: 60 },
          { cx: 580, cy: 30 },
          { cx: 680, cy: 80 },
          { cx: 750, cy: 45 }
        ].map((star, idx) => (
          <g key={idx}>
            <circle cx={star.cx} cy={star.cy} r="2.5" fill="currentColor" className="animate-pulse" />
            <circle cx={star.cx} cy={star.cy} r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.25" className="animate-ping" style={{ animationDuration: '4s' }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
