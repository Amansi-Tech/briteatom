'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setShow(true), 1000);
    const autoHide = setTimeout(() => setShow(false), 6000); // show for 5s
    return () => {
      clearTimeout(delay);
      clearTimeout(autoHide);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl px-8 py-6 border border-blue-600 dark:border-white/10 max-w-md w-full"
        >
          <div className="flex justify-between items-start space-x-4">
            <div className="flex-1">
              <h2 className="text-blue-600 dark:text-white font-extrabold text-xl mb-1">
                👋 Welcome to BriteAtom
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                We're excited to have you here! Dive in and explore the power of smart automation with your personal WhatsApp assistant.
              </p>
            </div>
            <button onClick={() => setShow(false)} className="text-blue-600 dark:text-white mt-1">
              <X size={22} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
