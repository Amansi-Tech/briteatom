'use client';

import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-200 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        
        <motion.div
          className="text-white text-xl font-bold cursor-pointer"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex justify-center gap-[6px]">
            <Atom size={36} strokeWidth={2.5} className="text-white animate-spin-slow" />
            BriteAtom
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((link, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="hover:text-white transition-colors duration-300 text-gray-300 font-medium"
              whileHover={{ scale: 1.1, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            { icon: FaFacebookF, url: 'https://www.facebook.com/share/16wtvscHxu/' },
            { icon: FaTwitter, url: 'https://x.com/briteAtom?fbclid=IwQ0xDSwMS8z5leHRuA2FlbQIxMAABHkeY8RWYYI-aAgHp-wZVKEorwkvg1HCK9wWX0Z_sfchHe7S2l8xcBPU0Lp91_aem_zF10_xRvEmvK9ZJN4ObjHQ' },
            { icon: FaGithub, url: 'https://github.com/Embeebrite?fbclid=IwQ0xDSwMS8sdleHRuA2FlbQIxMAABHgdx11qguRIEEUlpywMGEbz6L3Mwtq2MvanY9P2ykgxKSRdICnGSGkXv23Lo_aem_jSfltpK7tzPGI0wwtGOmAQ' },
            { icon: FaInstagram, url: 'https://instagram.com' },
          ].map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        className="mt-8 text-gray-500 text-sm text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        © 2025 Your Company. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
