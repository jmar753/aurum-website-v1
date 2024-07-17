import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPhone } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';

// Placeholder image
const PlaceholderImage = 'https://via.placeholder.com/400x300.png?text=Product+Image';

const products = [
  { id: 1, name: 'BTR Series', description: 'Description of Product 1', colour: 'bg-gray-500', img: PlaceholderImage, specs: { Capacity: '5000 BTU', Efficiency: '20 SEER', Price: '$499' } },
  { id: 2, name: 'DTR Series', description: 'Description of Product 2', colour: 'bg-gray-600', img: PlaceholderImage, specs: { Capacity: '6000 BTU', Efficiency: '22 SEER', Price: '$599' } },
  { id: 3, name: 'CFC Series', description: 'Description of Product 3', colour: 'bg-gray-700', img: PlaceholderImage, specs: { Capacity: '7000 BTU', Efficiency: '24 SEER', Price: '$699' } },
  { id: 4, name: 'DDR Series', description: 'Description of Product 4', colour: 'bg-gray-800', img: PlaceholderImage, specs: { Capacity: '8000 BTU', Efficiency: '26 SEER', Price: '$799' } },
  { id: 5, name: 'MHR Series', description: 'Description of Product 5', colour: 'bg-gray-900', img: PlaceholderImage, specs: { Capacity: '9000 BTU', Efficiency: '28 SEER', Price: '$899' } },
];

export default function Products() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-500 via-gray-300 to-gray-700">

    </div>
  );
};