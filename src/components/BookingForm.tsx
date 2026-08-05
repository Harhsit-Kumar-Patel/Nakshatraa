import { useState, useEffect } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from './core/in-view';
import { GlowEffect } from './core/glow-effect';
import { cn } from '@/lib/utils';

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

const methods = [
  { id: 'meet', name: 'Google Meet (Video Call)' },
  { id: 'whatsapp', name: 'WhatsApp (Audio/Chat)' }
];

const consultationTypes = [
  'Life Consultation',
  'Relationship Guidance',
  'Marriage Guidance',
  'Career Direction',
  'Family Guidance',
  'Personal Growth',
  'Traditional Insight Sessions'
];

const MaybeMotionDiv = ({ children, isModal }: { children: ReactNode; isModal: boolean }) => {
  if (isModal) return <>{children}</>;
  return <motion.div variants={itemVariants}>{children}</motion.div>;
};

const CelestialChart = ({ formData, isRelational }: { formData: any; isRelational: boolean }) => {
  const getSunAngle = () => {
    if (!formData.birthDate) return 0;
    const date = new Date(formData.birthDate);
    const day = date.getDate() || 1;
    const month = date.getMonth() || 0;
    return ((day * 11 + month * 30) % 360) * (Math.PI / 180);
  };

  const getMoonAngle = () => {
    if (!formData.birthTime) return 120 * (Math.PI / 180);
    const [hours, minutes] = formData.birthTime.split(':').map(Number);
    const timeVal = (hours || 0) * 60 + (minutes || 0);
    return ((timeVal * 0.25) % 360) * (Math.PI / 180);
  };

  const getAscendantAngle = () => {
    if (!formData.birthPlace) return 240 * (Math.PI / 180);
    let hash = 0;
    for (let i = 0; i < formData.birthPlace.length; i++) {
      hash = formData.birthPlace.charCodeAt(i) + ((hash << 5) - hash);
    }
    return (Math.abs(hash) % 360) * (Math.PI / 180);
  };

  const getPartnerAngle = () => {
    if (!formData.partnerBirthDate) return 60 * (Math.PI / 180);
    const date = new Date(formData.partnerBirthDate);
    const day = date.getDate() || 1;
    const month = date.getMonth() || 0;
    return ((day * 7 + month * 19) % 360) * (Math.PI / 180);
  };

  const sunAngle = getSunAngle();
  const moonAngle = getMoonAngle();
  const ascAngle = getAscendantAngle();
  const partnerAngle = getPartnerAngle();

  const cx = 150;
  const cy = 150;

  const sunX = cx + 80 * Math.cos(sunAngle);
  const sunY = cy + 80 * Math.sin(sunAngle);

  const moonX = cx + 65 * Math.cos(moonAngle);
  const moonY = cy + 65 * Math.sin(moonAngle);

  const ascX = cx + 95 * Math.cos(ascAngle);
  const ascY = cy + 95 * Math.sin(ascAngle);

  const partnerX = cx + 80 * Math.cos(partnerAngle);
  const partnerY = cy + 80 * Math.sin(partnerAngle);

  return (
    <div className="bg-[#0A0E1F]/50 backdrop-blur-md text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[420px] shadow-2xl border border-[#D4AF37]/15">
      <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#FAF8F5 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px'
      }} />

      <div>
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
          Stellar Map Projection
        </span>
        <h4 className="font-heading text-xl font-light text-[#F8F7F4] leading-tight">
          Birth Coordinates
        </h4>
      </div>

      <div className="my-6 flex justify-center items-center relative">
        <svg viewBox="0 0 300 300" className="w-52 h-52 md:w-56 md:h-56 relative z-10 text-[#D4AF37]">
          <circle cx={cx} cy={cy} r="100" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.75" />
          <circle cx={cx} cy={cy} r="80" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="65" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="45" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5" />

          <line x1={cx - 110} y1={cy} x2={cx + 110} y2={cy} stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.75" />
          <line x1={cx} y1={cy - 110} x2={cx} y2={cy + 110} stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.75" />
          
          <line x1={cx - 77} y1={cy - 77} x2={cx + 77} y2={cy + 77} stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1={cx - 77} y1={cy + 77} x2={cx + 77} y2={cy - 77} stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="2 2" />

          {formData.birthDate && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={sunX}
              y2={sunY}
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ x2: cx, y2: cy }}
              animate={{ x2: sunX, y2: sunY }}
              transition={{ type: 'spring', stiffness: 60 }}
            />
          )}
          {formData.birthTime && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={moonX}
              y2={moonY}
              stroke="#FAF8F5"
              strokeOpacity="0.3"
              strokeWidth="0.75"
              strokeDasharray="2 2"
              initial={{ x2: cx, y2: cy }}
              animate={{ x2: moonX, y2: moonY }}
              transition={{ type: 'spring', stiffness: 60 }}
            />
          )}
          {formData.birthPlace && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={ascX}
              y2={ascY}
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.25"
              initial={{ x2: cx, y2: cy }}
              animate={{ x2: ascX, y2: ascY }}
              transition={{ type: 'spring', stiffness: 50 }}
            />
          )}
          {isRelational && formData.partnerBirthDate && (
            <motion.line
              x1={cx}
              y1={cy}
              x2={partnerX}
              y2={partnerY}
              stroke="#C67B5C"
              strokeOpacity="0.4"
              strokeWidth="1"
              strokeDasharray="3 1"
              initial={{ x2: cx, y2: cy }}
              animate={{ x2: partnerX, y2: partnerY }}
              transition={{ type: 'spring', stiffness: 60 }}
            />
          )}

          <circle cx={cx} cy={cy} r="3" fill="currentColor" />

          {formData.birthDate && (
            <motion.g
              initial={{ x: cx, y: cy }}
              animate={{ x: sunX, y: sunY }}
              transition={{ type: 'spring', stiffness: 60 }}
            >
              <circle cx="0" cy="0" r="6" fill="currentColor" className="shadow-[0_0_12px_#D4AF37]" />
              <circle cx="0" cy="0" r="1.5" fill="#0A0E1F" />
              <text x="8" y="4" className="font-mono text-[8px] fill-[#D4AF37] font-semibold">☉</text>
            </motion.g>
          )}

          {formData.birthTime && (
            <motion.g
              initial={{ x: cx, y: cy }}
              animate={{ x: moonX, y: moonY }}
              transition={{ type: 'spring', stiffness: 60 }}
            >
              <circle cx="0" cy="0" r="5" fill="#FAF8F5" fillOpacity="0.9" />
              <text x="8" y="4" className="font-mono text-[8px] fill-[#FAF8F5] font-semibold">☽</text>
            </motion.g>
          )}

          {formData.birthPlace && (
            <motion.g
              initial={{ x: cx, y: cy }}
              animate={{ x: ascX, y: ascY }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <polygon points="0,-6 2,-2 6,0 2,2 0,6 -2,2 -6,0 -2,-2" fill="currentColor" />
              <text x="8" y="4" className="font-mono text-[8px] fill-[#D4AF37] font-semibold">ASC</text>
            </motion.g>
          )}

          {isRelational && formData.partnerBirthDate && (
            <motion.g
              initial={{ x: cx, y: cy }}
              animate={{ x: partnerX, y: partnerY }}
              transition={{ type: 'spring', stiffness: 60 }}
            >
              <circle cx="0" cy="0" r="5" fill="#C67B5C" />
              <text x="8" y="4" className="font-mono text-[8px] fill-[#C67B5C] font-semibold">♀</text>
            </motion.g>
          )}
        </svg>
      </div>

      <div className="font-mono text-[9px] uppercase tracking-widest text-[#FAF8F5]/50 space-y-1.5 border-t border-[#D4AF37]/10 pt-4 text-left">
        <div className="flex justify-between">
          <span>Transit Angle (Sun):</span>
          <span className="text-[#D4AF37] font-semibold">
            {formData.birthDate ? `${Math.round(sunAngle * (180 / Math.PI))}°` : '0°'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Lunar Degree (Moon):</span>
          <span className="text-[#F8F7F4] font-semibold">
            {formData.birthTime ? `${Math.round(moonAngle * (180 / Math.PI))}°` : '120°'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Ascendant point:</span>
          <span className="text-[#D4AF37] font-semibold truncate max-w-[120px]">
            {formData.birthPlace || 'PENDING DATA'}
          </span>
        </div>
      </div>
    </div>
  );
};

interface BookingFormProps {
  isModal?: boolean;
  onClose?: () => void;
  defaultService?: string;
}

const BookingForm = ({ isModal = false, onClose, defaultService }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    phone: '',
    type: defaultService || '',
    method: '',
    date: '',
    time: '',
    
    // Client Astrological Details
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    gender: '',

    // Partner Astrological Details (Conditional)
    partnerName: '',
    partnerBirthDate: '',
    partnerBirthTime: '',
    partnerBirthPlace: '',
    partnerGender: '',

    message: ''
  });

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, type: defaultService }));
    }
  }, [defaultService]);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isRelational = formData.type === 'Relationship Guidance' || formData.type === 'Marriage Guidance';

  const validateStep = (stepNumber: number) => {
    const tempErrors: Record<string, string> = {};
    if (stepNumber === 1) {
      if (!formData.name.trim()) tempErrors.name = 'Please provide your name';
      if (!formData.contact.trim()) {
        tempErrors.contact = 'Please provide your email';
      } else if (!formData.contact.includes('@')) {
        tempErrors.contact = 'Provide a valid email address';
      }
      if (!formData.phone.trim()) tempErrors.phone = 'Please provide your mobile number';
    }
    if (stepNumber === 2) {
      if (!formData.type) tempErrors.type = 'Select a consultation type';
      if (!formData.method) tempErrors.method = 'Select your preferred method';
      if (!formData.date) tempErrors.date = 'Select preferred session date';
      if (!formData.time) tempErrors.time = 'Select preferred time slot';
    }
    if (stepNumber === 3) {
      if (!formData.birthDate) tempErrors.birthDate = 'Required';
      if (!formData.birthTime) tempErrors.birthTime = 'Required';
      if (!formData.birthPlace.trim()) tempErrors.birthPlace = 'Required';
      if (!formData.gender) tempErrors.gender = 'Required';

      if (isRelational) {
        if (!formData.partnerName.trim()) tempErrors.partnerName = 'Required';
        if (!formData.partnerBirthDate) tempErrors.partnerBirthDate = 'Required';
        if (!formData.partnerBirthTime) tempErrors.partnerBirthTime = 'Required';
        if (!formData.partnerBirthPlace.trim()) tempErrors.partnerBirthPlace = 'Required';
        if (!formData.partnerGender) tempErrors.partnerGender = 'Required';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(1)) {
      setStep(1);
      return;
    }
    if (!validateStep(2)) {
      setStep(2);
      return;
    }
    if (!validateStep(3)) {
      setStep(3);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '27d94ba6-8596-4c68-a4f8-c343733c8099',
          name: formData.name,
          contact: formData.contact,
          phone: formData.phone,
          type: formData.type,
          method: formData.method,
          date: formData.date,
          time: formData.time,
          
          birthDate: formData.birthDate,
          birthTime: formData.birthTime,
          birthPlace: formData.birthPlace,
          gender: formData.gender,

          partnerName: formData.partnerName,
          partnerBirthDate: formData.partnerBirthDate,
          partnerBirthTime: formData.partnerBirthTime,
          partnerBirthPlace: formData.partnerBirthPlace,
          partnerGender: formData.partnerGender,

          message: formData.message,
          subject: `New Nakshatra Consultation Request - ${formData.name}`,
          from_name: 'Nakshatra Bookings'
        })
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setErrors({ submit: 'Failed to send request. Check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      phone: '',
      type: '',
      method: '',
      date: '',
      time: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      gender: '',
      partnerName: '',
      partnerBirthDate: '',
      partnerBirthTime: '',
      partnerBirthPlace: '',
      partnerGender: '',
      message: ''
    });
    setIsSubmitted(false);
    setStep(1);
  };

  return (
    <div className={`relative ${isModal ? '' : 'py-14 md:py-18 bg-[#030510] border-b border-[#D4AF37]/10'}`} id="booking">
      <InView
        variants={isModal ? undefined : containerVariants}
        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
        className={isModal ? 'w-full' : 'max-w-6xl mx-auto px-6 md:px-12 text-left'}
      >
        {!isModal && (
          <motion.div variants={itemVariants} className="text-left mb-12 md:mb-16 max-w-xl">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#B8B5C4] font-semibold block mb-4">
              Consultation
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#F8F7F4] leading-tight tracking-[0.02em]">
              Request a session.
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mt-6 mb-8" />
            <p className="font-body text-sm text-[#B8B5C4] leading-relaxed font-light">
              Complete the form below to propose a consultation. We will reach back to confirm your session timing and coordinator.
            </p>
          </motion.div>
        )}

        <div className={isModal ? 'w-full' : 'grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'}>
          {!isModal && (
            <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
              <CelestialChart formData={formData} isRelational={isRelational} />
            </motion.div>
          )}
          <div className={isModal ? 'w-full' : 'lg:col-span-7 w-full bg-[#0A0E1F]/50 p-8 md:p-10 border border-[#D4AF37]/10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-md'}>
            <MaybeMotionDiv isModal={isModal}>
              <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-10"
                >
                  {/* Step Indicator Tracker Tabs */}
                  <div className="flex justify-between items-center mb-10 border-b border-[#D4AF37]/10 pb-6">
                    {[
                      { num: 1, label: 'Coordinates', desc: 'Contact' },
                      { num: 2, label: 'Configuration', desc: 'Session' },
                      { num: 3, label: 'Cosmic details', desc: 'Birth Chart' }
                    ].map((s) => {
                      const isActive = step === s.num;
                      const isCompleted = step > s.num;
                      return (
                        <button
                          key={s.num}
                          type="button"
                          onClick={() => {
                            if (s.num < step) setStep(s.num);
                            else if (s.num > step) {
                              if (s.num === 2 && validateStep(1)) setStep(2);
                              else if (s.num === 3 && validateStep(1) && validateStep(2)) setStep(3);
                            }
                          }}
                          className="flex flex-col items-start focus:outline-none group text-left cursor-pointer"
                        >
                          <div className="flex items-center space-x-2">
                            <div className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border transition-all duration-300",
                              isActive 
                                ? "bg-[#1C3326] text-[#FAF8F5] border-[#D4AF37] scale-110 shadow-[0_0_8px_rgba(212,175,55,0.2)]" 
                                : isCompleted 
                                  ? "bg-[#D4AF37] text-[#030510] border-[#D4AF37]" 
                                  : "bg-transparent text-[#B8B5C4]/30 border-[#D4AF37]/20"
                            )}>
                              {s.num}
                            </div>
                            <span className={cn(
                              "font-body text-[10px] uppercase tracking-wider font-semibold transition-colors hidden sm:inline",
                              isActive ? "text-[#FAF8F5]" : isCompleted ? "text-[#D4AF37]" : "text-[#B8B5C4]/40"
                            )}>
                              {s.label}
                            </span>
                          </div>
                          <span className={cn(
                            "font-body text-[8px] uppercase tracking-widest mt-1 ml-7 hidden sm:inline",
                            isActive ? "text-[#D4AF37]/80" : "text-[#B8B5C4]/20"
                          )}>
                            {s.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait">
                    {/* STEP 1: Basic Contact Information */}
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <h4 className="font-heading text-xl text-[#F8F7F4] font-light border-b border-[#D4AF37]/10 pb-2 text-left tracking-[0.02em]">
                          1. Personal Coordinates
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                          {/* Name */}
                          <div className="flex flex-col">
                            <label htmlFor="name" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors({ ...errors, name: '' });
                              }}
                              placeholder="Your full name"
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                            />
                            {errors.name && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</span>}
                          </div>

                          {/* Email Contact */}
                          <div className="flex flex-col">
                            <label htmlFor="contact" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="contact"
                              value={formData.contact}
                              onChange={(e) => {
                                setFormData({ ...formData, contact: e.target.value });
                                if (errors.contact) setErrors({ ...errors, contact: '' });
                              }}
                              placeholder="you@example.com"
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                            />
                            {errors.contact && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.contact}</span>}
                          </div>

                          {/* Mobile Phone */}
                          <div className="flex flex-col md:col-span-2">
                            <label htmlFor="phone" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              WhatsApp / Mobile Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                if (errors.phone) setErrors({ ...errors, phone: '' });
                              }}
                              placeholder="+91 XXXXX XXXXX"
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                            />
                            {errors.phone && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.phone}</span>}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: Consultation Configurations */}
                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <h4 className="font-heading text-xl text-[#F8F7F4] font-light border-b border-[#D4AF37]/10 pb-2 text-left tracking-[0.02em]">
                          2. Transit Configuration
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                          {/* Service/Consultation Type */}
                          <div className="flex flex-col">
                            <label htmlFor="type" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Consultation Type *
                            </label>
                            <select
                              id="type"
                              value={formData.type}
                              onChange={(e) => {
                                setFormData({ ...formData, type: e.target.value });
                                if (errors.type) setErrors({ ...errors, type: '' });
                              }}
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0A0E1F] text-[#B8B5C4]">Select type</option>
                              {consultationTypes.map((t) => (
                                <option key={t} value={t} className="bg-[#0A0E1F] text-[#FAF8F5]">{t}</option>
                              ))}
                            </select>
                            {errors.type && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.type}</span>}
                          </div>

                          {/* Method */}
                          <div className="flex flex-col">
                            <label htmlFor="method" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Session Method *
                            </label>
                            <select
                              id="method"
                              value={formData.method}
                              onChange={(e) => {
                                setFormData({ ...formData, method: e.target.value });
                                if (errors.method) setErrors({ ...errors, method: '' });
                              }}
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0A0E1F] text-[#B8B5C4]">Select method</option>
                              {methods.map((m) => (
                                <option key={m.id} value={m.name} className="bg-[#0A0E1F] text-[#FAF8F5]">{m.name}</option>
                              ))}
                            </select>
                            {errors.method && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.method}</span>}
                          </div>

                          {/* Date */}
                          <div className="flex flex-col">
                            <label htmlFor="date" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              id="date"
                              value={formData.date}
                              onChange={(e) => {
                                setFormData({ ...formData, date: e.target.value });
                                if (errors.date) setErrors({ ...errors, date: '' });
                              }}
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                            />
                            {errors.date && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.date}</span>}
                          </div>

                          {/* Time Slot */}
                          <div className="flex flex-col">
                            <label htmlFor="time" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                              Preferred Time Slot *
                            </label>
                            <select
                              id="time"
                              value={formData.time}
                              onChange={(e) => {
                                setFormData({ ...formData, time: e.target.value });
                                if (errors.time) setErrors({ ...errors, time: '' });
                              }}
                              className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0A0E1F] text-[#B8B5C4]">Select slot</option>
                              <option value="Morning (10:00 AM — 01:00 PM)" className="bg-[#0A0E1F] text-[#FAF8F5]">Morning (10:00 AM — 01:00 PM)</option>
                              <option value="Afternoon (01:00 PM — 04:00 PM)" className="bg-[#0A0E1F] text-[#FAF8F5]">Afternoon (01:00 PM — 04:00 PM)</option>
                              <option value="Evening (04:00 PM — 08:00 PM)" className="bg-[#0A0E1F] text-[#FAF8F5]">Evening (04:00 PM — 08:00 PM)</option>
                            </select>
                            {errors.time && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.time}</span>}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: Cosmic Coordinates */}
                    {step === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="space-y-8">
                          <h4 className="font-heading text-xl text-[#F8F7F4] font-light border-b border-[#D4AF37]/10 pb-2 text-left tracking-[0.02em]">
                            3. Cosmic Coordinates
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                            {/* Birth Date */}
                            <div className="flex flex-col col-span-2 md:col-span-1">
                              <label htmlFor="birthDate" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                Date of Birth *
                              </label>
                              <input
                                type="date"
                                id="birthDate"
                                value={formData.birthDate}
                                onChange={(e) => {
                                  setFormData({ ...formData, birthDate: e.target.value });
                                  if (errors.birthDate) setErrors({ ...errors, birthDate: '' });
                                }}
                                className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                              />
                              {errors.birthDate && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthDate}</span>}
                            </div>

                            {/* Birth Time */}
                            <div className="flex flex-col col-span-2 md:col-span-1">
                              <label htmlFor="birthTime" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                Time of Birth *
                              </label>
                              <input
                                type="time"
                                id="birthTime"
                                value={formData.birthTime}
                                onChange={(e) => {
                                  setFormData({ ...formData, birthTime: e.target.value });
                                  if (errors.birthTime) setErrors({ ...errors, birthTime: '' });
                                }}
                                className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                              />
                              {errors.birthTime && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthTime}</span>}
                            </div>

                            {/* Birth Place */}
                            <div className="flex flex-col col-span-2 md:col-span-1">
                              <label htmlFor="birthPlace" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                Place of Birth *
                              </label>
                              <input
                                type="text"
                                id="birthPlace"
                                value={formData.birthPlace}
                                onChange={(e) => {
                                  setFormData({ ...formData, birthPlace: e.target.value });
                                  if (errors.birthPlace) setErrors({ ...errors, birthPlace: '' });
                                }}
                                placeholder="City, State, Country"
                                className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                              />
                              {errors.birthPlace && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthPlace}</span>}
                            </div>

                            {/* Gender */}
                            <div className="flex flex-col col-span-2 md:col-span-1">
                              <label htmlFor="gender" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                Gender *
                              </label>
                              <select
                                id="gender"
                                value={formData.gender}
                                onChange={(e) => {
                                  setFormData({ ...formData, gender: e.target.value });
                                  if (errors.gender) setErrors({ ...errors, gender: '' });
                                }}
                                className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                              >
                                <option value="" disabled className="bg-[#0A0E1F] text-[#B8B5C4]">Select</option>
                                <option value="Male" className="bg-[#0A0E1F] text-[#FAF8F5]">Male</option>
                                <option value="Female" className="bg-[#0A0E1F] text-[#FAF8F5]">Female</option>
                                <option value="Non-binary" className="bg-[#0A0E1F] text-[#FAF8F5]">Non-binary / Other</option>
                              </select>
                              {errors.gender && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.gender}</span>}
                            </div>
                          </div>
                        </div>

                        {/* Partner Coordinates (Conditional) */}
                        {isRelational && (
                          <div className="pt-8 border-t border-[#D4AF37]/10 space-y-8">
                            <h4 className="font-heading text-xl text-[#F8F7F4] font-light border-b border-[#D4AF37]/10 pb-2 text-left tracking-[0.02em]">
                              3.2 Partner Cosmic Coordinates
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                              {/* Partner Name */}
                              <div className="flex flex-col col-span-2 md:col-span-1">
                                <label htmlFor="partnerName" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                  Partner Name *
                                </label>
                                <input
                                  type="text"
                                  id="partnerName"
                                  value={formData.partnerName}
                                  onChange={(e) => {
                                    setFormData({ ...formData, partnerName: e.target.value });
                                    if (errors.partnerName) setErrors({ ...errors, partnerName: '' });
                                  }}
                                  placeholder="Partner's full name"
                                  className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                                />
                                {errors.partnerName && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerName}</span>}
                              </div>

                              {/* Partner Birth Date */}
                              <div className="flex flex-col col-span-2 md:col-span-1">
                                <label htmlFor="partnerBirthDate" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                  Date of Birth *
                                </label>
                                <input
                                  type="date"
                                  id="partnerBirthDate"
                                  value={formData.partnerBirthDate}
                                  onChange={(e) => {
                                    setFormData({ ...formData, partnerBirthDate: e.target.value });
                                    if (errors.partnerBirthDate) setErrors({ ...errors, partnerBirthDate: '' });
                                  }}
                                  className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                                />
                                {errors.partnerBirthDate && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthDate}</span>}
                              </div>

                              {/* Partner Birth Time */}
                              <div className="flex flex-col col-span-2 md:col-span-1">
                                <label htmlFor="partnerBirthTime" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                  Time of Birth *
                                </label>
                                <input
                                  type="time"
                                  id="partnerBirthTime"
                                  value={formData.partnerBirthTime}
                                  onChange={(e) => {
                                    setFormData({ ...formData, partnerBirthTime: e.target.value });
                                    if (errors.partnerBirthTime) setErrors({ ...errors, partnerBirthTime: '' });
                                  }}
                                  className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                                />
                                {errors.partnerBirthTime && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthTime}</span>}
                              </div>

                              {/* Partner Birth Place */}
                              <div className="flex flex-col col-span-2 md:col-span-1">
                                <label htmlFor="partnerBirthPlace" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                  Place of Birth *
                                </label>
                                <input
                                  type="text"
                                  id="partnerBirthPlace"
                                  value={formData.partnerBirthPlace}
                                  onChange={(e) => {
                                    setFormData({ ...formData, partnerBirthPlace: e.target.value });
                                    if (errors.partnerBirthPlace) setErrors({ ...errors, partnerBirthPlace: '' });
                                  }}
                                  placeholder="City, State, Country"
                                  className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4]"
                                />
                                {errors.partnerBirthPlace && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthPlace}</span>}
                              </div>

                              {/* Partner Gender */}
                              <div className="flex flex-col col-span-2 md:col-span-1">
                                <label htmlFor="partnerGender" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                                  Gender *
                                </label>
                                <select
                                  id="partnerGender"
                                  value={formData.partnerGender}
                                  onChange={(e) => {
                                    setFormData({ ...formData, partnerGender: e.target.value });
                                    if (errors.partnerGender) setErrors({ ...errors, partnerGender: '' });
                                  }}
                                  className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors text-[#F8F7F4] cursor-pointer"
                                >
                                  <option value="" disabled className="bg-[#0A0E1F] text-[#B8B5C4]">Select</option>
                                  <option value="Male" className="bg-[#0A0E1F] text-[#FAF8F5]">Male</option>
                                  <option value="Female" className="bg-[#0A0E1F] text-[#FAF8F5]">Female</option>
                                  <option value="Non-binary" className="bg-[#0A0E1F] text-[#FAF8F5]">Non-binary / Other</option>
                                </select>
                                {errors.partnerGender && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerGender}</span>}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Additional Notes or Questions */}
                        <div className="flex flex-col text-left">
                          <label htmlFor="message" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                            Additional Notes or Questions
                          </label>
                          <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Share any specific context or questions you want addressed..."
                            rows={3}
                            className="py-3 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/30 text-[#F8F7F4] resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {errors.submit && (
                    <div className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-4 text-left">
                      {errors.submit}
                    </div>
                  )}

                  {/* Navigation Action Buttons */}
                  <div className="flex justify-between items-center pt-8 border-t border-[#D4AF37]/10 mt-10">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-2.5 border border-[#D4AF37]/20 text-[#B8B5C4] hover:border-[#D4AF37] hover:text-[#F8F7F4] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all focus:outline-none cursor-pointer"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3 bg-[#1C3326] text-[#FAF8F5] hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_12px_#D4AF37] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none cursor-pointer"
                      >
                        Continue
                      </button>
                    ) : (
                      <div className="relative inline-block group">
                        <GlowEffect
                          colors={['#D4AF37', '#8B7BB3', '#C67B5C', '#1B1035']}
                          mode="colorShift"
                          blur="soft"
                          duration={4}
                          scale={0.92}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative inline-flex items-center gap-2 rounded-full bg-[#1C3326] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_12px_#D4AF37] shadow-md disabled:opacity-50 cursor-pointer"
                        >
                          {isSubmitting ? 'Submitting Details...' : 'Submit Session Request'}
                        </button>
                      </div>
                    )}
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-left space-y-6"
                >
                  <h3 className="font-heading text-3xl font-light text-[#F8F7F4] tracking-[0.02em]">
                    Session request received.
                  </h3>
                  <p className="font-body text-sm text-[#B8B5C4] leading-relaxed font-light max-w-lg">
                    Thank you for sharing your alignment details. Your data has been securely forwarded. Our coordinator will review your chart timeline options and reach back within 24 to 48 hours to confirm.
                  </p>
                  <div className="flex space-x-6 pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-[#D4AF37]/20 text-[#B8B5C4] hover:border-[#D4AF37] hover:text-[#F8F7F4] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
                    >
                      New Booking
                    </button>
                    {isModal && onClose && (
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-[#D4AF37] text-[#030510] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all hover:bg-[#FAF8F5] cursor-pointer"
                      >
                        Close Window
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </MaybeMotionDiv>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default BookingForm;
