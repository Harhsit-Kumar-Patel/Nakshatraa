import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { X } from 'lucide-react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ReviewForm from './components/ReviewForm';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Spotlight } from './components/core/spotlight';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [errorLog, setErrorLog] = useState<string | null>(null);

  // Global Error Listener for diagnostics
  useEffect(() => {
    const handleGlobalError = (e: ErrorEvent) => {
      setErrorLog(e.message + ' at ' + e.filename + ':' + e.lineno);
    };
    const handlePromiseRejection = (e: PromiseRejectionEvent) => {
      setErrorLog('Unhandled Rejection: ' + e.reason);
    };
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handlePromiseRejection);
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handlePromiseRejection);
    };
  }, []);

  // Initialize Lenis Smooth Scroll ONCE on mount
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isLoading]);

  // Lock background body scroll when booking modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isBookingOpen]);

  const openBookingModal = (serviceName: string = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030510] text-[#F8F7F4] paper-grain overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#F8F7F4]">
      {errorLog && (
        <div className="fixed top-0 left-0 right-0 z-[99999] bg-red-600 text-white p-4 font-mono text-xs select-text">
          <strong>JS Error Encountered:</strong> {errorLog}
        </div>
      )}
      
      {/* Intro Loader Page */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Global Screen Spotlight with Custom Color Gradient & Grid Pattern */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <Spotlight
              className="bg-gradient-to-tr from-[#D4AF37]/10 via-[#2A1B4A]/15 to-[#1B1035]/15 blur-3xl"
              size={550}
              springOptions={{
                bounce: 0.15,
                duration: 0.25,
              }}
            />
            {/* Fine Stardust Chart Grid Overlay */}
            <svg className="h-full w-full opacity-60">
              <defs>
                <pattern
                  id="grid-pattern"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 8H8M8 8V0M8 8H16M8 8V16"
                    stroke="#D4AF37"
                    strokeOpacity="0.06"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="#D4AF37"
                    fillOpacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Sticky Header Nav */}
          <Navbar onOpenBooking={() => openBookingModal('')} />

          {/* Main sections */}
          <main>
            <Hero onOpenBooking={() => openBookingModal('')} />
            <Services onBookService={openBookingModal} />
            <About />
            <Process />
            <Testimonials />
            <ReviewForm />
            <FAQ />
            <BookingForm isModal={false} />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Fullscreen Booking Panel Modal */}
          <AnimatePresence>
            {isBookingOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                 className="fixed inset-0 z-50 flex justify-end bg-[#030510]/60 backdrop-blur-sm"
              >
                {/* Backdrop Click */}
                <div 
                  className="absolute inset-0 " 
                  onClick={() => setIsBookingOpen(false)} 
                />

                {/* Right side slide-over sheet */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  className="relative w-full max-w-2xl bg-[#0A0E1F] h-full shadow-2xl p-8 md:p-12 overflow-y-auto z-10 paper-grain flex flex-col justify-between border-l border-[#D4AF37]/10"
                >
                  {/* Exit header */}
                  <div className="flex justify-between items-center mb-8 border-b border-[#D4AF37]/10 pb-4">
                    <span className="font-heading text-xl font-light tracking-widest text-[#D4AF37]">
                      NAKSHATRA
                    </span>
                    <button
                      onClick={() => setIsBookingOpen(false)}
                      className="p-2 text-[#B8B5C4] hover:text-[#F8F7F4] transition-colors focus:outline-none "
                      aria-label="Close booking modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Form Container */}
                  <div className="flex-grow">
                    <h3 className="font-heading text-3xl font-light text-[#F8F7F4] mb-2 text-left">
                      Consultation Booking
                    </h3>
                    <p className="font-body text-xs text-[#B8B5C4] mb-8 text-left">
                      Please enter your details below. Astrological transits will be calculated based on your birth coordinates.
                    </p>
                    <BookingForm 
                      isModal={true} 
                      onClose={() => setIsBookingOpen(false)} 
                      defaultService={selectedService} 
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default App;
