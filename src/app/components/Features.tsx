'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


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
    <section 
    id='services'
    className="w-full bg-gray-50 relative z-10 py-16 px-4 sm:px-6 lg:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Our Services
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white p-6 sm:p-8 w-full md:w-80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={90}
              height={90}
              className="rounded-[10px] p-[10px]"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600">{feature.text}</p>

            <motion.a
              href="#"
              className="relative overflow-hidden bg-blue-600 text-white font-semibold text-sm sm:text-base px-4 py-2 rounded-lg inline-flex items-center justify-center mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <motion.span
                  whileHover={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 opacity-0"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          </motion.div>
        ))}
      </div>
   < br />

   
  

   <br />
         </section>
  );
}
