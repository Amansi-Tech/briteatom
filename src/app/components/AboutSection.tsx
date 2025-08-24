'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const cards = [
  {
    title: 'Mission',
    text: 'To empower seamless digital connection through innovative automation — making communication effortless for businesses, communities, and individuals.',
    text2: 'Learn more',
    icon: 'http://www.w3.org/2000/svg',
  },
  {
    title: 'Vision',
    text: 'To be the go-to automation company that helps everyone—from tiny startups to large organizations—navigate the digital world smarter, not harder.',
    text2: 'Learn more',
    icon: 'http://www.w3.org/2000/svg',
  },
  {
    title: 'Value',
    text: 'User-centric by design. Tech should serve people, not the other way around. Keep it simple — and make it powerful.',
    text2: 'Learn more',
    icon: 'http://www.w3.org/2000/svg',
  },
];

export default function AboutSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.8;
    const nearest = Math.round(x.get() / cardWidth) * cardWidth;
    const clamped = Math.max(Math.min(nearest, 0), -width);
    x.set(clamped);
  };

  const LearnMoreButton = ({ text2, icon }: { text2: string; icon: string }) => (
    <motion.a
      className="relative overflow-hidden bg-blue-600 text-white font-semibold text-sm sm:text-base px-4 py-2 rounded-lg inline-flex items-center justify-center mt-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text2}
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
            xmlns={icon}
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
  );

  return (
    <div
      id="about"
      className="min-h-screen px-4 sm:px-6 lg:px-20 flex flex-col justify-center bg-cover bg-center bg-no-repeat pt-16 md:pt-0 relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(24,141,236,0.42), rgba(35,150,185,0.62)), url('/side-view-smiley-friends-with-smartphone.jpg')",
      }}
    >
      <div className="relative z-10 mt-12 mb-[2rem]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Us
        </motion.h1>

        {/* Desktop Cards */}
        <div className="hidden md:flex justify-center items-stretch gap-8">
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
              <p className="text-gray-700 text-sm sm:text-base text-center mb-6">{card.text}</p>
              <div className="flex justify-center">
                <LearnMoreButton text2={card.text2} icon={card.icon} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Carousel */}
        <motion.div ref={carouselRef} className="md:hidden overflow-hidden cursor-grab mt-6">
          <motion.div
            className="flex gap-4"
            drag="x"
            style={{ x }}
            dragConstraints={{ left: -width, right: 0 }}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: 'grabbing' }}
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="w-[80vw] sm:w-[75vw] sm:h-[30rem] flex-shrink-0 bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div>
                  <h2 className="font-bold text-xl sm:text-2xl mb-4 text-blue-600 text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base text-center">{card.text}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <LearnMoreButton text2={card.text2} icon={card.icon} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
