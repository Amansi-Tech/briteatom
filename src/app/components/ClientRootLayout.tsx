'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Header from './Header';
import Hero from './Hero';
import BotModal from './BotModal';

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const isHomePage = pathname === '/' || pathname === '/home';

  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      {isHomePage && <Hero onOpenModal={handleOpenModal} />}
      <BotModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {children}
    </>
  );
}
