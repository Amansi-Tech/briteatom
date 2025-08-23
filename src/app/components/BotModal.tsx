'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
}

const BotModal: React.FC<BotModalProps> = ({ isOpen, onClose, onStartTrial }) => {
  const [duration, setDuration] = useState('1 Month - $5');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-full max-w-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Image Side */}
              <div className="md:w-1/2 w-full">
                <Image
                  width={600}
                  height={400}
                  src="/cute-text-messages-mobile-phone-screen-media-mix.jpg"
                  alt="Chatbot UI"
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>

              {/* Form Side */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Get Started with WhatsApp Bot
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Enter your details and activate your subscription plan or start a free trial.
                </p>

                <form className="space-y-3">
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <div className="flex gap-2">
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-1/2 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>1 Month - $5</option>
                      <option>Free 3-Day Plan</option>
                    </select>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 text-sm font-semibold transition"
                    >
                      Pay & Activate
                    </button>
                    <button
                      type="button"
                      onClick={onStartTrial}
                      className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 text-sm font-semibold transition"
                    >
                      Start Free Trial
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full text-center text-sm text-gray-500 dark:text-gray-300 mt-4 hover:underline"
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
  );
};

export default BotModal;
