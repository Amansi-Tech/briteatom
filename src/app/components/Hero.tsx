'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutSection from './AboutSection';
import Pricing from './Pricing';
import Features from './Features';

interface HeroProps {
  setModalOpen?: (open: boolean) => void;
}

const Hero = ({ setModalOpen }: HeroProps) => {
  const openModal = () => {
    if (setModalOpen) {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div
        id="home"
        className="min-h-screen w-full flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(173, 216, 230, 0.65), rgba(54, 108, 124, 0.38)), url('/young-man-laid-couch-playing.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full py-12">
          {/* Left Text */}
          <motion.div
            className="text-center md:text-left px-4 md:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Brite-Atom
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Meet your smart WhatsApp chatbot assistant — fast, friendly, and focused on you.
              Whether you're a business or creator, BriteAtom automates the boring stuff, giving you more time for what matters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={openModal}
                className="bg-white text-blue-600 font-bold text-sm px-6 py-2 rounded hover:bg-transparent hover:text-white border border-white transition-all duration-300"
              >
                Get started
              </button>
            </div>
          </motion.div>

          {/* Robot Image Floating */}
          <motion.div
            className="relative w-[250px] sm:w-[320px] md:w-[400px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/20 rounded-full blur-md z-0" />
              <div className="absolute inset-0 bg-gradient-radial from-blue-300 via-blue-100 to-transparent rounded-full blur-2xl z-0" />
              <Image
                width={400}
                height={400}
                src="/robot-2-removebg-preview.png"
                alt="Robot assistant"
                className="relative w-full h-auto"
                priority
              />
              <div
                className="absolute z-20 w-[14px] h-[14px] bg-cyan-400 rounded-full blink-dot"
                style={{ top: '42%', left: '49%' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <AboutSection />
      <Features />
      <Pricing />
    </>
  );
};

export default Hero;
