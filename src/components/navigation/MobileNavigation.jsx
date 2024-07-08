// MobileNavigation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-10 bg-gray-900 text-white p-2 rounded-lg">
        Menu
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
        >
          {/* Navigation Menu */}
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 top-0 h-full bg-white shadow-lg w-60"
          >
            <ul className="mt-12 text-gray-800">
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Home</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">About</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Services</li>
              <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Contact</li>
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
