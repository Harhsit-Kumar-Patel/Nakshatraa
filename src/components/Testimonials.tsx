import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GlowEffect } from './core/glow-effect';
import { Carousel, CarouselContent, CarouselItem } from './core/carousel';
import { cn } from '@/lib/utils';
import { InView } from './core/in-view';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


const testimonials = [
  {
    id: 1,
    name: "Dr. Neeraj Singh",
    role: "Varanasi",
    quote: "I had a wonderful consultation and was truly blown away by the depth and accuracy of the reading. Without asking many details upfront, my current life situation were pinpointed and I got profound clarity on my career and personal life. The given remedies and suggestions are simple, logical, and very practical to follow, rather than being confusing or fear-driven. I left the session feeling calm, positive, and deeply guided. Highly recommended to anyone seeking honest and meaningful direction!"
  },
  {
    id: 2,
    name: "Shivangi Singh",
    role: "Delhi",
    quote: "I recently consulted this astrologer regarding my horoscope, and I was genuinely impressed by the experience. The analysis was detailed, thoughtful, and based on a thorough understanding of my birth chart. She explained the planetary influences in a clear and practical manner, making it easy to understand both current challenges and future opportunities. What stood out most was the honest and balanced guidance. Rather than making unrealistic promises, the advice was realistic, insightful, and focused on actionable remedies and personal growth."
  },
  {
    id: 3,
    name: "Shreya Patel",
    role: "Teacher, Ghazipur",
    quote: "Consulting with Nakshatra was a truly eye-opening experience. What impressed me most was how deeply they understood my chart and how seamlessly they translated complex astrological concepts into plain, actionable advice. Their predictions were accurate, and their logical approach gave me immense confidence. I will definitely be returning for future guidance."
  },
  {
    id: 4,
    name: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India",
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading."
  },
  {
    id: 5,
    name: "Sumant K. Singh",
    role: "Prayagraj",
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance."
  },
  {
    id: 6,
    name: "Divya Singh",
    role: "Lucknow",
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life."
  },
  {
    id: 7,
    name: "Sneha Singh",
    role: "Noida",
    quote: "Very accurate predictions and timely solution,very patiently listens to all our problems and also explains the solutions in detail 🙏"
  },
  {
    id: 8,
    name: "Kirti Agrawal",
    role: "Student, Ghazipur",
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction."
  },
  {
    id: 9,
    name: "Tripti Singh",
    role: "Mirzapur",
    quote: "I am very happy with the consultation. The guidance was clear, easy to understand, and gave me a better way to look at my situation. It was a very positive experience, and I would happily recommend this service to anyone looking for honest and helpful astrology advice."
  },
  {
    id: 10,
    name: "Divya Mishra",
    role: "Ghazipur",
    quote: "Your knowledge of planets and constellations is truly amazing. Heartfelt congratulations to you for that. My dear friend, besides being a wonderful teacher for children, you are also an excellent expert in astrology. Thank you for your guidance and dedication."
  },
  {
    id: 11,
    name: "Shalini Singh",
    role: "Varanasi",
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service."
  },
  {
   id: 12,
    name: "Aishwarya Gupta",
    role: "Noida",
    quote: "had an amazing experience . I usually don't trust astrology services easily, but after taking a consultation from you, my perspective completely changed. The way you explained my horoscope, personality traits, and current life situations felt extremely accurate and personal. Thank you 😊"
  }, 
  {
    id: 13,
    name: "Mohit Kumar",
    role: "Noida",
    quote: "I was feeling completely confused about my career and future. The counseling session at Nakshatraa gave me much-needed clarity and confidence. The guidance wasn't based only on astrology—it was practical, thoughtful, and easy to understand. Every prediction and suggestion was explained patiently, and I left the session feeling positive and hopeful. Thank you for such a genuine experience!"
  },
  {
    id: 14,
    name: "Divya Mishra",
    role: "Noida",
    quote: "I booked a consultation to understand some personal challenges I was facing, and I'm really glad I did. The session was calm, respectful, and insightful. Instead of creating fear, the counselor focused on solutions and explained my birth chart in simple language. I felt heard, supported, and more confident about the decisions ahead. I would definitely recommend Nakshatraa to anyone looking for honest guidance and counseling."
  },
  {
    id: 15,
    name: "Nidhi Verma",
    role: "Noida",
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service."
  }
];

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const maxIdx = testimonials.length - 1;

  // Defensive index bounding check after resize events
  useEffect(() => {
    if (activeIdx > maxIdx) {
      setActiveIdx(maxIdx);
    }
  }, [maxIdx, activeIdx]);

  // Helper to truncate text for card previews
  const truncateText = (text: string, maxLength: number = 130) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="testimonials" className="py-14 md:py-18 bg-[#FAF8F5] relative z-10 border-b border-[#A6823C]/10 overflow-hidden">
      
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#A6823C]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#A6823C]/10" />

      <InView
        variants={containerVariants}
        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-left mb-16 max-w-xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#4F5651] font-semibold block mb-4">
            Client Reflections
          </span>
          <h2 className="font-heading text-4xl font-light text-[#0F1110]">
            Stories of clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#A6823C] mt-6" />
        </motion.div>

        {/* Stage Slider Window */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto relative">
          <Carousel index={activeIdx} onIndexChange={setActiveIdx}>
            <CarouselContent className="relative flex">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="w-full shrink-0 px-4">
                  <div
                    onClick={() => setSelectedReview(item)}
                    className="w-full bg-[#FFFFFF] border border-[#A6823C]/10 hover:border-[#A6823C]/35 p-8 md:p-10 rounded-3xl text-left flex flex-col justify-between min-h-[250px] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    <div className="space-y-4">
                      <span className="font-heading text-4xl text-[#A6823C]/30 leading-none block select-none">“</span>
                      <p className="font-body text-base text-[#4F5651] leading-relaxed font-light">
                        {truncateText(item.quote, 180)}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#A6823C]/10 flex justify-between items-baseline">
                      <div>
                        <span className="block font-body text-xs uppercase tracking-wider text-[#0F1110] font-semibold">
                          {item.name}
                        </span>
                        <span className="block font-body text-[10px] text-[#4F5651] font-light mt-0.5">
                          {item.role}
                        </span>
                      </div>
                      <span className="font-body text-xs text-[#A6823C] font-semibold transition-colors duration-300 group-hover:text-[#1C3326] whitespace-nowrap ml-4">
                        Read Full Review →
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Carousel Custom Indicators */}
        <motion.div variants={itemVariants} className="flex w-full justify-center gap-3 px-4 mt-12 flex-wrap">
          {testimonials.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "h-10 w-10 rounded-full border text-[10px] font-semibold tracking-widest transition-all duration-300 font-body flex items-center justify-center shadow-sm",
                  isSelected
                    ? "bg-[#1C3326] text-white border-[#1C3326] scale-110"
                    : "bg-white text-[#4F5651] border-[#A6823C]/15 hover:border-[#A6823C] hover:text-[#0F1110]"
                )}
              >
                {String(idx + 1).padStart(2, '0')}
              </button>
            );
          })}
        </motion.div>
      </InView>



      {/* Full Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1110]/60 backdrop-blur-md px-6"
          >
            {/* Click backdrop to exit */}
            <div
              className="absolute inset-0 "
              onClick={() => setSelectedReview(null)}
            />

            {/* Modal Card Container */}
            <div className="relative w-full max-w-2xl z-10 flex items-center justify-center">
              <GlowEffect
                colors={['#A6823C', '#A6823C', '#4F5651', '#E8E5DF']}
                mode="breathe"
                blur="strong"
                duration={5}
                scale={1}
                className="rounded-3xl"
              />
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-[#FAF8F5] w-full rounded-3xl p-8 md:p-16 shadow-2xl text-left paper-grain border border-[#A6823C]/5 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-6 right-6 p-2 text-[#4F5651] hover:text-[#0F1110] transition-colors focus:outline-none "
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-8 mt-4">
                  {/* Decorative quote mark */}
                  <span className="font-heading text-7xl text-[#A6823C] leading-none block select-none h-4">“</span>

                  {/* Full Quote */}
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#0F1110] leading-relaxed italic pr-4 md:pr-12">
                    {selectedReview.quote}
                  </h3>

                  <div className="w-12 h-[1px] bg-[#A6823C]" />

                  {/* Author Credentials */}
                  <div className="space-y-1">
                    <span className="block font-body text-sm uppercase tracking-widest text-[#0F1110] font-bold">
                      — {selectedReview.name}
                    </span>
                    <span className="block font-body text-xs text-[#4F5651] font-light">
                      {selectedReview.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Testimonials;
