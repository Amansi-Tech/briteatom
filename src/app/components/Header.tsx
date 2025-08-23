'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Atom } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (id === 'home') {
      if (pathname === '/') {
        // Already on homepage, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to homepage
        router.push('/');
      }
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navLinks = ['home', 'about', 'pricing', 'services'];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        bg-blue-500 text-white
        ${scrolled ? 'md:bg-blue-500/80 md:backdrop-blur md:shadow' : ''}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-4 ml-4 p-2 rounded">
          <Atom size={36} strokeWidth={2.5} className="text-white animate-spin-slow" />
          <h1 className="text-lg md:text-xl font-bold text-white">BriteAtom</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className="px-4 py-2 font-bold rounded hover:bg-white/20 transition duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={onOpenModal}
            className="px-6 py-2 font-semibold rounded bg-white text-blue-600 hover:bg-transparent hover:text-white border border-white transition duration-300"
          >
            Get started
          </button>
          <button
            onClick={onOpenModal}
            className="px-6 py-2 font-semibold rounded bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Sign-in
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Side Nav */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-800 shadow-xl z-50 p-6 flex flex-col"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-gray-600 dark:text-gray-200 mb-6 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Close menu"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-4 flex-1">
                {navLinks.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className="px-3 py-2 font-medium rounded text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700 transition text-left"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={() => {
                    onOpenModal();
                    setMenuOpen(false);
                  }}
                  className="px-6 py-2 w-full bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                >
                  Sign-up
                </button>
                <button
                  onClick={() => {
                    onOpenModal();
                    setMenuOpen(false);
                  }}
                  className="px-6 py-2 w-full border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition"
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
