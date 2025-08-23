'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Header from './Header';
import Hero from './Hero';
import BotModal from './BotModal';

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleStartTrial = () => {
    alert('🎉 Free 3-Day Trial Activated!');
    handleCloseModal();
  };

  const isHomePage = pathname === '/' || pathname === '/home';

  return (
    <>
      {/* Header always visible */}
      <Header onOpenModal={handleOpenModal} />

      {/* Hero only on home page */}
      {isHomePage && <Hero setModalOpen={setIsModalOpen} />}

      {/* Bot Modal */}
      <BotModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStartTrial={handleStartTrial}
      />

      {/* Render page content */}
      {children}
    </>
  );
}
