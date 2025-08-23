'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import BotModal from './BotModal';

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const isHomePage = pathname === '/' || pathname === '/home';

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      {/* Only render Hero on home page */}
      {isHomePage && <Hero setModalOpen={setIsModalOpen} />}

      {/* Bot Modal */}
      <BotModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStartTrial={() => {
          console.log('Trial started');
          setIsModalOpen(false);
        }}
      />

      {/* Page content */}
      {children}
    </>
  );
}
