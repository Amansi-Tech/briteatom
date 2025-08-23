'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 shadow backdrop-blur text-blue-600'
          : 'bg-blue-500 pt-[1px] pb-[1px] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-[1.5rem] ml-[1rem]  p-[10px] rounded-[5px]">
          <Atom size={36} strokeWidth={2.5} className="text-white animate-spin-slow" />
          <h1 className="text-[22px] font-bold leading-tight text-white">BriteAtom</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {['home', 'about', 'pricing', 'services'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:scale-90 transform transition duration-300 font-bold hover:text-gray-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={onOpenModal}
            className="bg-white text-blue-600 font-bold text-[15px] px-4 py-2 rounded hover:bg-transparent hover:text-white border border-white transition-all duration-300"
          >
            Get started
          </button>

          <button
            onClick={onOpenModal}
            className="bg-transparent border border-white text-white text-[15px] font-bold px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Sign-in
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Side Nav with Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Side Nav */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-800 shadow-xl z-50 p-6 flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-gray-600 dark:text-gray-200 mb-6 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 flex-1">
                {['home', 'about', 'pricing', 'services'].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-800 dark:text-gray-200 font-medium text-lg hover:text-blue-600 transition"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </nav>

              {/* Sign-in / Sign-up Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={() => {
                    onOpenModal();
                    setMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                >
                  Sign-up
                </button>
                <button
                  onClick={() => {
                    onOpenModal();
                    setMenuOpen(false);
                  }}
                  className="w-full border border-blue-600 text-blue-600 font-semibold py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  Sign-in
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
