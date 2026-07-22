import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Loader from './components/Loader';
import MouseFollower from './components/MouseFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Crossroads from './components/Crossroads';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ReviewForm from './components/ReviewForm';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorLog, setErrorLog] = useState<string | null>(null);

  // Global Error Listener for debugging
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

  return (
    <div className="relative min-h-screen bg-[#F2EEE5] text-[#1C2A20] paper-grain overflow-x-hidden selection:bg-[#A25A38]/30 selection:text-[#1C2A20]">
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
          {/* Custom microinteractions */}
          <MouseFollower />

          {/* Sticky Nav */}
          <Navbar />

          {/* Main Layout sections */}
          <main>
            <Hero />
            <Crossroads />
            <Services />
            <About />
            <Process />
            <Testimonials />
            <ReviewForm />
            <FAQ />
            <BookingForm />
            <Contact />
          </main>

          {/* Simple Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
