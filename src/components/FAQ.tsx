import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedGroup } from './core/animated-group';
import { InView } from './core/in-view';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
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

const accordionGroupVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        bounce: 0.2,
      },
    },
  },
};

const faqData = [
  {
    question: 'How do I book a consultation?',
    answer: 'You can easily request a session through our Booking Form. We will ask for your preferred date, time slot, and method of communication (Google Meet or WhatsApp). Our team will reach back within 24 hours to confirm.'
  },
  {
    question: 'What information is required from my end?',
    answer: 'To perform chart calculations, we require your exact date of birth, time of birth (as recorded in official birth records), and location of birth. For compatibility consultations, these details are required for both individuals.'
  },
  {
    question: 'How long does each consultation last?',
    answer: 'Consultation sessions last approximately 60 minutes. This is a conversational session structured to review your chart factors, discuss life timings, and address questions.'
  },
  {
    question: 'Can I book online, or are sessions only offline?',
    answer: 'All sessions are conducted fully online via Google Meet or WhatsApp call, allowing you to connect privately from anywhere in the world.'
  },
  {
    question: 'Do you offer follow-up consultations?',
    answer: 'Yes, we offer follow-up sessions. Many clients return periodically during major transit phases, like Saturn returns or career shifts, to review their alignment.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-[#D4AF37]/10 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-heading text-lg md:text-xl font-light text-[#F8F7F4] hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="ml-4 text-xs font-light text-[#D4AF37]">
          {isOpen ? '✦ Close' : '✦ Open'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-xs md:text-sm text-[#B8B5C4] leading-relaxed pt-4 pb-2 pr-12 font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 md:py-18 bg-[#030510] text-[#F8F7F4] relative z-10 border-b border-[#D4AF37]/10">
      <InView
        variants={containerVariants}
        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
        className="max-w-4xl mx-auto px-6 md:px-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#B8B5C4] font-semibold block mb-4">
            Inquiries
          </span>
          <h2 className="font-heading text-4xl font-light text-[#F8F7F4] tracking-[0.02em]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
        </motion.div>

        {/* Accordion Wrapper */}
        <AnimatedGroup
          className="border-t border-[#D4AF37]/10 w-full"
          variants={accordionGroupVariants}
        >
          {faqData.map((item, idx) => (
            <div key={idx} className="w-full">
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            </div>
          ))}
        </AnimatedGroup>

      </InView>
    </section>
  );
};

export default FAQ;
