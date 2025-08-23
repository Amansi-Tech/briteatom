'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Features from './Features';

const cards = [
  {
    title: 'Mission',
    text: 'To empower seamless digital connection through innovative automation — making communication effortless for businesses, communities, and individuals.',
  },
  {
    title: 'Vision',
    text: 'To be the go-to automation company that helps everyone—from tiny startups to large organizations—navigate the digital world smarter, not harder.',
  },
  {
    title: 'Value',
    text: 'User-centric by design. Tech should serve people, not the other way around. Keep it simple — and make it powerful.',
  },
];

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen px-4 sm:px-6 lg:px-20 pt-16 md:pt-0 bg-cover bg-center bg-no-repeat flex flex-col justify-center relative"
        style={{
          backgroundImage:
            `linear-gradient(to bottom right, rgba(24,141,236,0.42), rgba(35,150,185,0.62)), url('/side-view-smiley-friends-with-smartphone.jpg')`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Us
        </motion.h1>

        
        <div className="md:hidden mb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center mx-auto max-w-sm"
                >
                  <h2 className="text-xl font-bold text-blue-600 mb-4">{card.title}</h2>
                  <p className="text-gray-700 text-sm">{card.text}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
        <div className="hidden md:flex justify-center items-stretch gap-8 mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 sm:p-8 w-full md:w-80 text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <h2 className="font-bold text-xl sm:text-2xl text-center mb-4 text-blue-600">
                {card.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base text-center mb-6">
                {card.text}
              </p>
              <motion.a
                href="#"
                className="relative overflow-hidden bg-blue-600 text-white font-semibold text-sm sm:text-base px-4 py-2 rounded-lg inline-flex items-center justify-center mx-auto"
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
      </section>

      <Features />

      
      <div className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="mb-8 text-center text-xl font-semibold text-gray-800">
          Why You Need a Chatbot
        </div>
        <div className="relative aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto">
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
}
