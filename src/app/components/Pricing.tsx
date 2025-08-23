'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PricingProps {
  setModalOpen: (open: boolean) => void;
}

const Pricing: React.FC<PricingProps> = ({ setModalOpen }) => {
  return (
    <>
      {/* Pricing Section */}
      <section
        id="pricing"
        className="min-h-screen px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat pt-16 md:pt-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(173, 216, 230, 0.75), rgba(54, 108, 124, 0.55)), url('/3d-rendering-biorobots-concept.jpg')",
        }}
      >
        <div className="max-w-6xl w-full text-center py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-12"
          >
            Our Pricing
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 w-full place-items-center">
            {/* Free Trial Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-blue-400 p-6 sm:p-8 text-center w-full max-w-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-2">Free Trial</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">3 Days Access</p>
                <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Start with zero commitment
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300"
                >
                  Start Trial
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* 1 Month Plan Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 p-6 sm:p-8 text-center w-full max-w-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">1 Month</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">$5 only</p>
                <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Great for testing and short-term use
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300"
                >
                  Choose Plan
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        className="bg-blue-600 py-12 sm:py-16 px-6 sm:px-12 text-center mt-12 mx-4 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Say hello to a stress-free life 😊
        </h2>
        <p className="text-white mb-6 text-base sm:text-lg">
          Join over 1 million users and level‑up with next‑generation Tech.
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </motion.div>

      {/* Video Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="mb-8 text-center text-xl sm:text-2xl font-semibold text-blue-800">
          Why You Need a Chatbot
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-video sm:aspect-video">
          <iframe
            src="https://www.youtube.com/embed/sNkEy48ZwpQ"
            title="Top 9 reasons why you should use a Chatbot"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
