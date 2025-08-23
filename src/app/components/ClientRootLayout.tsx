'use client';

import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import Footer from './Footer';

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'signin' | 'signup' | null>(null);

  const handleOpenModal = (mode: 'signin' | 'signup') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onOpenModal={handleOpenModal} />

      {children}
      {isModalOpen && modalMode && (
          <Modal mode={modalMode} onClose={() => setIsModalOpen(false)} />
        )}

        <Footer />
    </>
  );
}
