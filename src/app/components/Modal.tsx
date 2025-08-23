'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ModalProps {
  mode: 'signin' | 'signup';
  onClose: () => void;
}

export default function Modal({ mode, onClose }: ModalProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full"
        initial={{ scale: 0.5, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 100 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Cancel Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            {mode === 'signup' ? (
              <>
                <h2 className="text-blue-600 text-xl font-bold mb-4">
                  Get WhatsApp Bot Access
                </h2>
                <form className="space-y-4 text-sm">
                  <input
                    type="text"
                    placeholder="Your WhatsApp Number"
                    className="w-full border border-gray-300 p-3 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 p-3 rounded-md outline-none"
                  />
                  <div className="flex gap-3">
                    <select className="w-full border border-gray-300 p-3 rounded-md outline-none">
                      <option value="">Select Plan</option>
                      <option value="1mo">1 month – $5</option>
                      <option value="3mo">3 months – $12</option>
                      <option value="6mo">6 months – $20</option>
                    </select>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/3 border border-gray-300 p-3 rounded-md outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Pay & Subscribe
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 underline block w-full text-center mt-2"
                    onClick={onClose}
                  >
                    Start Free Demo
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-blue-600 text-xl font-bold mb-4">
                  Sign In to Your Account
                </h2>
                <form className="space-y-4 text-sm">
                  <input
                    type="text"
                    placeholder="WhatsApp Number"
                    className="w-full border border-gray-300 p-3 rounded-md outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 p-3 rounded-md outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 underline block w-full text-center mt-2"
                    onClick={onClose}
                  >
                    Forgot Password?
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              width={500}
              height={350}
              src="/3d-rendering-biorobots-concept.jpg"
              alt="WhatsApp Chatbot"
              className="rounded-xl w-full h-auto shadow-md"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}