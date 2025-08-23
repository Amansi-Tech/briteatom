'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './AboutSection';

interface HeroProps {
  modalOpen?: boolean;
  setModalOpen?: (open: boolean) => void;
}

const backgroundImages: string[] = [
  'https://images.unsplash.com/photo-1581091012184-d8b6a1f2191e?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1633356122544-9caeebd99859?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1581276879432-15a79e8b2e3e?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1564869734573-b9783a1c4683?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1591696205602-2a1f77ec64d1?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1581092580491-7c9d32e3c2e0?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1549921296-3a9fcd0d1c30?auto=format&fit=crop&w=1920&q=80'
];

const Hero = ({ modalOpen, setModalOpen }: HeroProps) => {
  const [localModalOpen, setLocalModalOpen] = useState(false);
  const [duration, setDuration] = useState('1 Month - $5');
  const [bgIndex, setBgIndex] = useState(0);

  const isOpen = modalOpen !== undefined ? modalOpen : localModalOpen;
  const openModal = () => (setModalOpen ? setModalOpen(true) : setLocalModalOpen(true));
  const closeModal = () => (setModalOpen ? setModalOpen(false) : setLocalModalOpen(false));

  const startTrial = () => {
    alert('🎉 Free 3-Day Trial Activated!');
    closeModal();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.4)), url('${backgroundImages[bgIndex]}')`
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-[5rem] max-w-6xl w-full mt-12 md:mt-[1rem]">
        
          <motion.div
            className="text-center md:text-left px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white font-bold text-4xl md:text-5xl">Brite-Atom</h1>
            <p className="text-white text-lg md:text-xl mt-4 max-w-xl leading-relaxed">
              Meet your smart WhatsApp chatbot assistant — fast, friendly, and focused on you.
              Whether you're a business or creator, BriteAtom automates the boring stuff, giving you more time for what matters.
            </p>
            <div className="mt-6">
              <button
                onClick={openModal}
                className="bg-white text-blue-600 font-bold text-sm px-6 py-2 rounded hover:bg-transparent hover:text-white border border-white transition-all duration-300 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </motion.div>

        
          <motion.div
            className="relative w-full max-w-[400px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              width={400}
              height={400}
              src="/robot-2-removebg-preview.png"
              alt="Robot assistant"
              className="relative z-10 w-full h-auto"
              priority
            />
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/30 rounded-full blur-md z-0" />
          </motion.div>
        </div>
      </motion.div>

  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                
                <div className="md:w-1/2 w-full">
                  <Image
                    width={600}
                    height={400}
                    src="/cute-text-messages-mobile-phone-screen-media-mix.jpg"
                    alt="Chatbot UI"
                    className="rounded-lg w-full h-auto"
                  />
                </div>

                
                <div className="md:w-1/2 w-full">
                  <h2 className="text-lg font-bold text-blue-600 mb-2">Activate WhatsApp Bot</h2>
                  <p className="text-sm text-gray-600 mb-4">Enter your WhatsApp details to get started or try it free.</p>

                  <form className="space-y-3">
                    <input type="tel" placeholder="WhatsApp Number" className="w-full border px-4 py-2 rounded focus:outline-none" />
                    <input type="text" placeholder="Card Number" className="w-full border px-4 py-2 rounded focus:outline-none" />

                    <div className="flex gap-2">
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-1/2 border px-3 py-2 rounded focus:outline-none"
                      >
                        <option>1 Month - $5</option>
                        <option>5 Months - $25</option>
                        <option>8 Months - $40</option>
                        <option>12 Months - $60</option>
                      </select>

                      <input type="text" placeholder="CVV" className="w-1/2 border px-4 py-2 rounded focus:outline-none" />
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 text-sm font-semibold focus:outline-none"
                      >
                        Pay & Activate
                      </button>
                      <button
                        type="button"
                        onClick={startTrial}
                        className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 text-sm font-semibold focus:outline-none"
                      >
                        Free Trial
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full text-center text-sm text-gray-500 mt-4 hover:underline focus:outline-none"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AboutSection />
    </>
  );
};

export default Hero;
