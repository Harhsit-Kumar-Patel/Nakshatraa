import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if current consultation type is relational
  const isRelational = formData.type === 'Relationship Guidance' || formData.type === 'Marriage Guidance';

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name';
    if (!formData.contact.trim()) {
      tempErrors.contact = 'Please provide your email';
    } else if (!formData.contact.includes('@')) {
      tempErrors.contact = 'Provide a valid email address';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Please provide your mobile number';
    if (!formData.type) tempErrors.type = 'Select a consultation type';
    if (!formData.method) tempErrors.method = 'Select your preferred method';
    if (!formData.date) tempErrors.date = 'Select preferred session date';
    if (!formData.time) tempErrors.time = 'Select preferred session time slot';

    // Birth Details Validation
    if (!formData.birthDate) tempErrors.birthDate = 'Required';
    if (!formData.birthTime) tempErrors.birthTime = 'Required';
    if (!formData.birthPlace.trim()) tempErrors.birthPlace = 'Required';
    if (!formData.gender) tempErrors.gender = 'Required';

    // Partner Details Validation (Only if relational)
    if (isRelational) {
      if (!formData.partnerName.trim()) tempErrors.partnerName = 'Required';
      if (!formData.partnerBirthDate) tempErrors.partnerBirthDate = 'Required';
      if (!formData.partnerBirthTime) tempErrors.partnerBirthTime = 'Required';
      if (!formData.partnerBirthPlace.trim()) tempErrors.partnerBirthPlace = 'Required';
      if (!formData.partnerGender) tempErrors.partnerGender = 'Required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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
          
          // Chart Details
          gender: formData.gender,
          birth_date: formData.birthDate,
          birth_time: formData.birthTime,
          birth_place: formData.birthPlace,

          // Conditional Partner Details
          partner_name: isRelational ? formData.partnerName : 'N/A',
          partner_gender: isRelational ? formData.partnerGender : 'N/A',
          partner_birth_date: isRelational ? formData.partnerBirthDate : 'N/A',
          partner_birth_time: isRelational ? formData.partnerBirthTime : 'N/A',
          partner_birth_place: isRelational ? formData.partnerBirthPlace : 'N/A',

          message: formData.message,
          subject: `New Nakshatraa Booking Request - ${formData.name}`,
          from_name: 'Nakshatraa Website'
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
  };

  return (
    <div className={`relative ${isModal ? '' : 'py-32 bg-[#FDFBF7] border-b border-[#243C2F]/10'}`} id="booking">
      <div className={isModal ? 'w-full' : 'max-w-3xl mx-auto px-6 md:px-12 text-left'}>
        
        {!isModal && (
          <div className="text-left mb-20 max-w-xl">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold block mb-4">
              Consultation
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1E221F] leading-tight">
              Request a session.
            </h2>
            <div className="w-12 h-[1px] bg-[#C3B091] mt-6 mb-8" />
            <p className="font-body text-sm text-[#79857B] leading-relaxed font-light">
              Complete the form below to propose a consultation. We will reach back to confirm your session timing and coordinator.
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="booking-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              
              {/* SECTION: Contact Details */}
              <div className="space-y-8">
                <h4 className="font-heading text-xl text-[#1E221F] font-light border-b border-[#243C2F]/10 pb-2">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Your name"
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="contact" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        if (errors.contact) setErrors({ ...errors, contact: '' });
                      }}
                      placeholder="you@email.com"
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                    />
                    {errors.contact && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.contact}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Mobile / WhatsApp *
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
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.phone}</span>}
                  </div>
                </div>
              </div>

              {/* SECTION: Consultation Details */}
              <div className="space-y-8">
                <h4 className="font-heading text-xl text-[#1E221F] font-light border-b border-[#243C2F]/10 pb-2">
                  2. Consultation Preferences
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="type" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Consultation Type *
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => {
                        setFormData({ ...formData, type: e.target.value });
                        if (errors.type) setErrors({ ...errors, type: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    >
                      <option value="" disabled className="bg-[#FDFBF7]">Select experience type</option>
                      {consultationTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#FDFBF7]">{type}</option>
                      ))}
                    </select>
                    {errors.type && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.type}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="method" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Method *
                    </label>
                    <select
                      id="method"
                      value={formData.method}
                      onChange={(e) => {
                        setFormData({ ...formData, method: e.target.value });
                        if (errors.method) setErrors({ ...errors, method: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    >
                      <option value="" disabled className="bg-[#FDFBF7]">Select meet method</option>
                      {methods.map((method) => (
                        <option key={method.id} value={method.id} className="bg-[#FDFBF7]">{method.name}</option>
                      ))}
                    </select>
                    {errors.method && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.method}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="date" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Preferred Session Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    />
                    {errors.date && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.date}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="time" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Session Time Slot *
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => {
                        setFormData({ ...formData, time: e.target.value });
                        if (errors.time) setErrors({ ...errors, time: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    >
                      <option value="" disabled className="bg-[#FDFBF7]">Select time slot</option>
                      <option value="morning" className="bg-[#FDFBF7]">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="afternoon" className="bg-[#FDFBF7]">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="evening" className="bg-[#FDFBF7]">Evening (6:00 PM - 8:00 PM)</option>
                    </select>
                    {errors.time && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.time}</span>}
                  </div>
                </div>
              </div>

              {/* SECTION: Astrological Details */}
              <div className="space-y-8">
                <h4 className="font-heading text-xl text-[#1E221F] font-light border-b border-[#243C2F]/10 pb-2">
                  3. Birth Details (for Chart Calculation)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                  
                  {/* DOB */}
                  <div className="flex flex-col">
                    <label htmlFor="birthDate" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
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
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    />
                    {errors.birthDate && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthDate}</span>}
                  </div>

                  {/* TOB */}
                  <div className="flex flex-col">
                    <label htmlFor="birthTime" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Exact Time of Birth *
                    </label>
                    <input
                      type="text"
                      id="birthTime"
                      placeholder="e.g., 02:45 PM"
                      value={formData.birthTime}
                      onChange={(e) => {
                        setFormData({ ...formData, birthTime: e.target.value });
                        if (errors.birthTime) setErrors({ ...errors, birthTime: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                    />
                    {errors.birthTime && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthTime}</span>}
                  </div>

                  {/* POB */}
                  <div className="flex flex-col">
                    <label htmlFor="birthPlace" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Place of Birth *
                    </label>
                    <input
                      type="text"
                      id="birthPlace"
                      placeholder="City, Country"
                      value={formData.birthPlace}
                      onChange={(e) => {
                        setFormData({ ...formData, birthPlace: e.target.value });
                        if (errors.birthPlace) setErrors({ ...errors, birthPlace: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                    />
                    {errors.birthPlace && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.birthPlace}</span>}
                  </div>

                  {/* Gender */}
                  <div className="flex flex-col">
                    <label htmlFor="gender" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={(e) => {
                        setFormData({ ...formData, gender: e.target.value });
                        if (errors.gender) setErrors({ ...errors, gender: '' });
                      }}
                      className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                    >
                      <option value="" disabled className="bg-[#FDFBF7]">Select</option>
                      <option value="Male" className="bg-[#FDFBF7]">Male</option>
                      <option value="Female" className="bg-[#FDFBF7]">Female</option>
                      <option value="Non-binary" className="bg-[#FDFBF7]">Non-binary / Other</option>
                    </select>
                    {errors.gender && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.gender}</span>}
                  </div>

                </div>
              </div>

              {/* SECTION: Partner Birth Details (Conditional) */}
              <AnimatePresence>
                {isRelational && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden space-y-8"
                  >
                    <h4 className="font-heading text-xl text-[#C3B091] font-light border-b border-[#C3B091]/20 pb-2">
                      4. Partner's Birth Details (for Compatibility Assessment)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                      
                      {/* Partner Name */}
                      <div className="flex flex-col">
                        <label htmlFor="partnerName" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                          Partner's Name *
                        </label>
                        <input
                          type="text"
                          id="partnerName"
                          placeholder="Name"
                          value={formData.partnerName}
                          onChange={(e) => {
                            setFormData({ ...formData, partnerName: e.target.value });
                            if (errors.partnerName) setErrors({ ...errors, partnerName: '' });
                          }}
                          className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                        />
                        {errors.partnerName && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerName}</span>}
                      </div>

                      {/* Partner DOB */}
                      <div className="flex flex-col">
                        <label htmlFor="partnerBirthDate" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
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
                          className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                        />
                        {errors.partnerBirthDate && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthDate}</span>}
                      </div>

                      {/* Partner TOB */}
                      <div className="flex flex-col">
                        <label htmlFor="partnerBirthTime" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                          Birth Time *
                        </label>
                        <input
                          type="text"
                          id="partnerBirthTime"
                          placeholder="e.g. 10:15 AM"
                          value={formData.partnerBirthTime}
                          onChange={(e) => {
                            setFormData({ ...formData, partnerBirthTime: e.target.value });
                            if (errors.partnerBirthTime) setErrors({ ...errors, partnerBirthTime: '' });
                          }}
                          className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                        />
                        {errors.partnerBirthTime && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthTime}</span>}
                      </div>

                      {/* Partner POB */}
                      <div className="flex flex-col">
                        <label htmlFor="partnerBirthPlace" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                          Birth Place *
                        </label>
                        <input
                          type="text"
                          id="partnerBirthPlace"
                          placeholder="City, Country"
                          value={formData.partnerBirthPlace}
                          onChange={(e) => {
                            setFormData({ ...formData, partnerBirthPlace: e.target.value });
                            if (errors.partnerBirthPlace) setErrors({ ...errors, partnerBirthPlace: '' });
                          }}
                          className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                        />
                        {errors.partnerBirthPlace && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerBirthPlace}</span>}
                      </div>

                      {/* Partner Gender */}
                      <div className="flex flex-col">
                        <label htmlFor="partnerGender" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                          Gender *
                        </label>
                        <select
                          id="partnerGender"
                          value={formData.partnerGender}
                          onChange={(e) => {
                            setFormData({ ...formData, partnerGender: e.target.value });
                            if (errors.partnerGender) setErrors({ ...errors, partnerGender: '' });
                          }}
                          className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors text-[#1E221F]"
                        >
                          <option value="" disabled className="bg-[#FDFBF7]">Select</option>
                          <option value="Male" className="bg-[#FDFBF7]">Male</option>
                          <option value="Female" className="bg-[#FDFBF7]">Female</option>
                          <option value="Non-binary" className="bg-[#FDFBF7]">Non-binary / Other</option>
                        </select>
                        {errors.partnerGender && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.partnerGender}</span>}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message & Context */}
              <div className="flex flex-col">
                <label htmlFor="message" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                  Additional Notes or Questions
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific context or questions you want addressed..."
                  rows={3}
                  className="py-3 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F] resize-none"
                />
              </div>

              {errors.submit && (
                <div className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">
                  {errors.submit}
                </div>
              )}

              <div className="pt-8 text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-3.5 border border-[#243C2F] text-[#243C2F] rounded-full font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#243C2F] hover:text-[#FDFBF7] transition-all duration-500 focus:outline-none disabled:opacity-50 cursor-none"
                >
                  {isSubmitting ? 'Submitting Details...' : 'Submit Request'}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-left space-y-6"
            >
              <h3 className="font-heading text-3xl font-light text-[#1E221F]">
                Session request received.
              </h3>
              <p className="font-body text-sm text-[#79857B] leading-relaxed font-light max-w-lg">
                Thank you for sharing your alignment details. Your data has been securely forwarded. Our coordinator will review your chart timeline options and reach back within 24 to 48 hours to confirm.
              </p>
              <div className="flex space-x-6 pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-[#243C2F]/20 text-[#79857B] hover:border-[#243C2F] hover:text-[#1E221F] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all cursor-none"
                >
                  New Booking
                </button>
                {isModal && onClose && (
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#243C2F] text-[#FDFBF7] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all cursor-none"
                  >
                    Close Window
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingForm;
