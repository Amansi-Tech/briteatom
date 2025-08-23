'use client';

import Hero from './components/Hero';

interface HomeProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export default function Home({ isModalOpen, setIsModalOpen }: HomeProps) {
  return <Hero setModalOpen={setIsModalOpen} />;
}
