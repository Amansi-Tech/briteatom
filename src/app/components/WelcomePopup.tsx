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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-5 right-5 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4 border border-blue-600 dark:border-white/10 max-w-sm w-full"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-blue-600 dark:text-white font-bold text-lg">👋 Welcome to BriteAtom</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Glad to have you here. Let’s explore the power of smart automation!
              </p>
            </div>
            <button onClick={() => setShow(false)} className="ml-4 text-blue-600 dark:text-white">
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
