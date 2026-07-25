import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading.",
    author: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India"
  },
  {
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance.",
    author: "Sumant Krishna Singh",
    role: "Prayagraj"
  },
  {
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction.",
    author: "Kirti Agrawal",
    role: "Student, Ghazipur"
  },
  {
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life.",
    author: "Divya Singh",
    role: "Lucknow"
  }
];

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const hasReviews = testimonials.length > 0;

  return (
    <section id="testimonials" className="py-36 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10 overflow-hidden">
      
      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold block mb-8">
          Client Reflections
        </span>

        {/* Big Editorial Quote Frame */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hasReviews ? (
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="space-y-8"
              >
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-[#1E221F] leading-relaxed italic max-w-4xl mx-auto">
                  "{testimonials[activeIdx].quote}"
                </h3>
                
                <div className="space-y-1">
                  <span className="block font-body text-xs uppercase tracking-widest text-[#1E221F] font-semibold">
                    — {testimonials[activeIdx].author}
                  </span>
                  <span className="block font-body text-[10px] text-[#79857B] font-light">
                    {testimonials[activeIdx].role}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 max-w-2xl mx-auto"
              >
                <p className="font-heading text-xl md:text-2xl text-[#79857B] font-light italic leading-relaxed">
                  "Real reflections from our client consultations will be presented here. We respect client privacy and only publish testimonials with explicit consent."
                </p>
                <div className="w-8 h-[1px] bg-[#C3B091] mx-auto mt-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Magazine Pagination Dots (Only if there are multiple reviews) */}
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-6 mt-16">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="py-2 cursor-none focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className={`block w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === idx ? 'bg-[#C3B091] scale-125' : 'bg-[#79857B]/30'
                }`} />
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
