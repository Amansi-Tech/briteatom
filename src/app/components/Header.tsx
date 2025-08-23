'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-white/60 shadow backdrop-blur text-blue-600'
          : 'bg-blue-500 pt-[1px] pb-[1px] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-[1.5rem] ml-[1rem] bg-blue-600 p-[10px] rounded-[5px]">
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
        <div className="hidden md:block">
          <button
            onClick={onOpenModal}
            className="bg-white text-blue-600 ml-[5px] mr-[16px] font-bold text-[15px] px-4 py-2 rounded hover:bg-transparent hover:text-white border border-white transition-all duration-300"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3 font-medium">
            {['home', 'about', 'pricing'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-gray-600 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <Link
              href="/dashboard"
              className="hover:scale-90 transform transition duration-300 font-bold hover:text-gray-200"
            >
              Dashboard
            </Link>

            <button
              onClick={onOpenModal}
              className="mt-2 bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-blue-100 transition-all duration-300 w-full text-left"
            >
              Sign-up
            </button>
            <button
              onClick={onOpenModal}
              className="mt-2 bg-transparent border border-blue-600 text-blue-600 font-bold px-4 py-2 rounded hover:bg-blue-100 transition-all duration-300 w-full text-left"
            >
              Sign-in
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
