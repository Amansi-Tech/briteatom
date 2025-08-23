'use client';

import Hero from './components/Hero';

export default function Home({ isModalOpen, setIsModalOpen }: any) {
  return <Hero isOpen={isModalOpen} setIsOpen={setIsModalOpen} />;
}

