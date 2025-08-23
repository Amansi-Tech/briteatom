'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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

  // Snap to nearest card on drag end
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.8; // approx card width with gap
    const nearest = Math.round(x.get() / cardWidth) * cardWidth;
    const clamped = Math.max(Math.min(nearest, 0), -width);
    x.set(clamped);
  };

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

        {/* Desktop Layout */}
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
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <motion.div ref={carouselRef} className="md:hidden overflow-hidden cursor-grab">
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
                className="w-[80vw] sm:w-[75vw] flex-shrink-0 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h2 className="font-bold text-xl sm:text-2xl mb-4 text-blue-600 text-center">
                  {card.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base text-center">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
