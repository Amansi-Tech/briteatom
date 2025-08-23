'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const messages = [
  "👋 Hi there! Welcome to BriteAtom.",
  "We make WhatsApp automation smart, fast, and simple.",
  "Connect your WhatsApp, activate your bot, and enjoy effortless automation!"
];

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => setShow(true), 1000); // show after 1s

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev < messages.length - 1) return prev + 1;
        clearInterval(messageInterval); // stop after last message
        return prev;
      });
    }, 3000); // new message every 3s

    const autoHide = setTimeout(() => setShow(false), 12000); // hide after 12s

    return () => {
      clearTimeout(delay);
      clearTimeout(autoHide);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl px-8 py-6 border border-blue-600 dark:border-white/10 max-w-md w-full"
        >
          <div className="flex justify-between items-start space-x-4">
            <div className="flex-1">
              {messages.slice(0, currentMessage + 1).map((msg, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                  className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-2"
                >
                  {msg}
                </motion.p>
              ))}
            </div>
            <button
              onClick={() => setShow(false)}
              className="text-blue-600 dark:text-white mt-1 hover:text-blue-800 dark:hover:text-gray-200 transition-colors"
              aria-label="Close popup"
            >
              <X size={22} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
