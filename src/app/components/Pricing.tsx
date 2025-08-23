'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <>
  
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-16 place-items-center">
            {/* Free Trial */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-blue-400 p-8 text-center w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-blue-500 mb-2">Free Trial</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">3 Days Access</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Start with zero commitment
              </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-500 transition-all duration-300">
                Start Trial
              </button>
            </motion.div>

            {/* 1 Month Plan */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 p-8 text-center w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">1 Month</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">$5 only</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Great for testing and short-term use
              </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-500 transition-all duration-300">
                Choose Plan
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        className="bg-blue-600 py-16 px-6 text-center mt-12 mx-4 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Say hello to a stress-free life 😊
        </h2>
        <p className="text-white mb-6 text-base sm:text-lg">
          Join over 1 million users and level‑up with next‑generation Tech.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </motion.div>

      {/* Video Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="mb-8 text-center text-xl font-semibold text-blue-800">
          Why You Need a Chatbot
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-w-16 aspect-h-9">
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
