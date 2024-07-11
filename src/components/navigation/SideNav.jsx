// SideNav.jsx

import React from 'react';
import { motion } from 'framer-motion';

const SideNav = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className="fixed inset-y-0 left-0 w-64 bg-gray-900 shadow-lg z-50"
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? '0%' : '-100%' }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      {/* Navigation content goes here */}
      <div className="p-4">
        <h2 className="text-white text-xl font-bold">Navigation Menu</h2>
        <ul className="mt-4">
          <li className="text-white">Link 1</li>
          <li className="text-white">Link 2</li>
          <li className="text-white">Link 3</li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white focus:outline-none"
      >
        Close
      </button>
    </motion.div>
  );
};

export default SideNav;
