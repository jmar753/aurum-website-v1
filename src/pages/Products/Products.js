import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';

// Placeholder images


const products = [
  { id: 1, name: 'BTR Series', description: 'Description of Product 1', colour: 'bg-[#45bf55]', img: 'https://via.placeholder.com/400x300.png?text=BTR+Series' },
  { id: 2, name: 'DTR Series', description: 'Description of Product 2', colour: 'bg-[#00b26b]', img: 'https://via.placeholder.com/400x300.png?text=BTR+Series' },
  { id: 3, name: 'CFC Series', description: 'Description of Product 3', colour: 'bg-[#00a17e]', img: 'https://via.placeholder.com/400x300.png?text=BTR+Series' },
  { id: 4, name: 'DDR Series', description: 'Description of Product 4', colour: 'bg-[#008f87]', img: 'https://via.placeholder.com/400x300.png?text=BTR+Series' },
  { id: 5, name: 'MHR Series', description: 'Description of Product 5', colour: 'bg-[#007f89]', img: 'https://via.placeholder.com/400x300.png?text=BTR+Series' },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(1);

  const handleClick = (productId) => {
    setSelectedProduct(productId);
  };

  const handlePrev = () => {
    setSelectedProduct((prev) => (prev === 1 ? products.length : prev - 1));
  };

  const handleNext = () => {
    setSelectedProduct((prev) => (prev === products.length ? 1 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className='py-32 px-8'>
        <h1 className="text-4xl font-semibold mb-6">Efficient HVAC Solutions for Apartments and Businesses</h1>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`border rounded-lg cursor-pointer overflow-hidden ${
                selectedProduct === product.id ? 'border-blue-500' : 'border-gray-200'
              }`}
              style={{ display: selectedProduct === product.id ? 'block' : 'none' }}
            >
              <div className={`p-4 rounded-t-lg text-neutral-100 ${product.colour}`}>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              </div>

              <div>
                <img src={product.img} alt={product.name} className="w-full h-auto" />
                <p className="text-gray-600 p-4">{product.description}</p>
              </div>
              
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

        <div className="max-w-7xl w-full p-8 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
              <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border rounded-lg cursor-pointer ${
                  selectedProduct === product.id ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => handleClick(product.id)}
              >
                <div className={`p-4 rounded-t-lg text-neutral-100 ${product.colour}`}>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                </div>
                <div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
          ))}
          </div>
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

export default Products;
