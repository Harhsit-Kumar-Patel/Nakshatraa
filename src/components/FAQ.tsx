import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    answer: 'All sessions are conducted online via Google Meet or WhatsApp call, allowing you to connect privately from anywhere. We also offer face-to-face sessions at our Bandra, Mumbai office by appointment.'
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
    <div className="border-b border-[#243C2F]/10 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-heading text-lg md:text-xl font-light text-[#1E221F] hover:text-[#C3B091] transition-colors focus:outline-none cursor-none"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="ml-4 text-xs font-light text-[#C3B091]">
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
            <p className="font-body text-xs md:text-sm text-[#79857B] leading-relaxed pt-4 pb-2 pr-12 font-light">
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
    <section id="faq" className="py-32 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold block mb-4">
            Inquiries
          </span>
          <h2 className="font-heading text-4xl font-light text-[#1E221F]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mx-auto mt-6" />
        </div>

        {/* Accordion Wrapper */}
        <div className="border-t border-[#243C2F]/10">
          {faqData.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
