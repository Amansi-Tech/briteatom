'use client';

import { useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AboutSection from './AboutSection';
import Pricing from './Pricing';
import Features from './Features';

interface HeroProps {
  setModalOpen?: (open: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setModalOpen }) => {
  const openModal = useCallback(() => {
    setModalOpen?.(true);
  }, [setModalOpen]);

  const chatMessages = [
    { id: 1, sender: 'bot', text: 'Hi! I&apos;m BriteAtom 🤖' },
    { id: 2, sender: 'user', text: 'Hello! How can you help me?' },
    { id: 3, sender: 'bot', text: 'I automate WhatsApp responses for your business.' },
    { id: 4, sender: 'user', text: 'Sounds amazing! Show me how it works.' },
    { id: 5, sender: 'bot', text: 'Sure! I can handle messages, schedule replies, and save you time.' },
  ];

  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    let current = 0;
    let timeout: NodeJS.Timeout;

    const startSequence = () => {
      setVisibleMessages([]);
      current = 0;

      const showNext = () => {
        setVisibleMessages((prev) => [...prev, chatMessages[current].id]);
        current += 1;

        if (current < chatMessages.length) {
          timeout = setTimeout(showNext, 1500); // delay between messages
        } else {
          timeout = setTimeout(startSequence, 2000); // restart after 2s
        }
      };

      showNext();
    };

    startSequence();

    return () => clearTimeout(timeout);
  }, [chatMessages]);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(173, 216, 230, 0.65), rgba(54, 108, 124, 0.38)), url('https://images.unsplash.com/photo-1618005198919-1089e1d0de27?auto=format&fit=crop&w=1470&q=80')",
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
              Meet your smart WhatsApp chatbot assistant — fast, friendly, and focused on you.{' '}
              Whether you&apos;re a business or creator, BriteAtom automates the boring stuff, giving you more time for what matters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                aria-label="Open chatbot modal"
                onClick={openModal}
                className="bg-white text-blue-600 font-bold text-sm px-6 py-2 rounded hover:bg-transparent hover:text-white border border-white transition-all duration-300"
              >
                Get started
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-[250px] sm:w-[320px] md:w-[400px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/20 rounded-full blur-md z-0" />
              <div className="absolute inset-0 bg-gradient-radial from-blue-300 via-blue-100 to-transparent rounded-full blur-2xl z-0" />

              <Image
                src="https://images.unsplash.com/photo-1596496059837-cbc3b93a1a8e?auto=format&fit=crop&w=400&q=80"
                alt="Friendly robot assistant illustration"
                width={400}
                height={400}
                className="relative w-full h-auto"
                priority
              />

              <div
                className="absolute z-20 w-[14px] h-[14px] bg-cyan-400 rounded-full animate-bounce"
                style={{ top: '42%', left: '49%' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Chat Animation */}
        <div className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-xs">
          <div className="space-y-4">
            {chatMessages.map((msg, index) => {
              const isVisible = visibleMessages.includes(msg.id);
              return (
                <AnimatePresence key={msg.id}>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className={`flex items-start gap-3 ${
                        msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      {msg.sender === 'bot' && (
                        <Image
                          src="https://i.ibb.co/zR6m7xv/bot-avatar.png"
                          alt="Bot"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div
                        className={`px-5 py-3 rounded-2xl text-base break-words max-w-[70%] ${
                          msg.sender === 'bot'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === 'user' && (
                        <Image
                          src="https://i.ibb.co/2n0Kz9p/lady-avatar.png"
                          alt="User"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <Features />
      <Pricing />
    </>
  );
};

export default Hero;
