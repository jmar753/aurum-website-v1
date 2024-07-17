// CataloguePage.js

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5' },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div>
            <h1></h1>
        </div>

        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">AC Systems Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 border rounded-lg cursor-pointer ${
                    selectedProduct === product.id ? 'border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => handleClick(product.id)}
                >
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                </motion.div>
            ))}
            </div>
            <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">For more information, call us at:</p>
            <a href="tel:+1234567890" className="text-blue-500 text-xl">
                <FiPhone className="inline-block mr-2 mb-1" />
                +1 (234) 567-890
            </a>
            </div>
        </div>
    </div>
  );
};
