'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Atom, Sun, Moon, User, LogOut, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-white/60 dark:bg-gray-900/60 shadow' : 'bg-white/30 dark:bg-gray-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Atom className="text-blue-600 dark:text-white animate-spin-slow" size={28} />
          <span className="text-xl font-bold text-blue-600 dark:text-white">BriteAtom</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-medium text-blue-600 dark:text-white">
          {['home', 'about', 'pricing', 'services'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="hover:opacity-80">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Right-side */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Started
          </button>
          <button
            onClick={onOpenModal}
            className="border border-blue-600 text-blue-600 dark:text-white dark:border-white px-4 py-2 rounded text-sm hover:bg-blue-50 dark:hover:bg-white/10"
          >
            Sign In
          </button>

          <button onClick={() => setDarkMode(!darkMode)} className="text-blue-600 dark:text-white">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* 🔔 Notification Bell */}
          <div className="relative cursor-pointer">
            <Bell className="text-blue-600 dark:text-white" size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
          </div>

          {/* 🧊 Avatar dropdown */}
          <div className="relative">
            <Image
              src="https://i.pravatar.cc/100?img=12"
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full cursor-pointer border-2 border-blue-500"
              onClick={() => setAvatarOpen(!avatarOpen)}
            />
            <AnimatePresence>
              {avatarOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 overflow-hidden"
                >
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <User size={16} /> Profile
                  </Link>
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LogOut size={16} /> Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-600 dark:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Slide-in Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start p-6 gap-4">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('pricing')}>Pricing</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <Link href="/dashboard">Dashboard</Link>

          <button
            onClick={onOpenModal}
            className="bg-blue-600 text-white font-bold px-4 py-2 rounded w-full"
          >
            Sign Up
          </button>
          <button
            onClick={onOpenModal}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-full"
          >
            Sign In
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 flex items-center gap-2 text-sm"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />} Toggle Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}
