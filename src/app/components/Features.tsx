'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Pricing from './Pricing';

const features = [
  {
    title: 'Smart Group Control',
    text: 'Auto-moderation, spam filters, slow mode, and full admin tools.',
    icon: '/robot-building-snowman.jpg',
  },
  {
    title: 'AI Auto-Replies',
    text: 'Contextual responses, FAQs, lead qualification, and personalized chats.',
    icon: '/cute-text-messages-mobile-phone-screen-media-mix.jpg',
  },
  {
    title: 'Business Automation',
    text: 'WhatsApp store, payments, order tracking, and customer engagement.',
    icon: '/robot-blank-sign.jpg',
  },
];

export default function Features() {
  return (
    <section className="w-full bg-gray-50 relative z-10 py-16 px-4 sm:px-6 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-16"
      >
        What Makes BriteAtom Shine
      </motion.h2>

      <div className="relative flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-6">
        {features.map((feature, idx) => {
          const yOffset = idx === 0 ? 'translate-y-0' : idx === 1 ? 'sm:-translate-y-8' : 'sm:translate-y-0 sm:mt-12';
          const alignment = idx === 0 ? 'self-start' : idx === 1 ? 'self-center' : 'self-end';

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className={`bg-white p-6 sm:p-8 w-full sm:w-72 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center ${yOffset} ${alignment}`}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={90}
                height={90}
                className="rounded-xl mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.text}</p>

              <motion.a
                href="#"
                className="mt-5 inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          );
        })}
      </div>

      <Pricing />

      <motion.div
        className="bg-blue-600 py-16 px-6 text-center mt-24 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Say hello to a stress‑free life 😊
        </h2>
        <p className="text-white mb-6">
          Join +1M users upgrading to the next‑generation of automation.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}
