// src/components/NavMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { HiMenu } from "react-icons/hi";
import Logo from "../../RoughAssets/WhiteLogoAurumOnly.svg"

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu('');
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const menuVariants = {
    hidden: {opacity: 0 },
    visible: {opacity: 1 },
    exit: { opacity: 0 },
  };

  const subMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <div>
      <button onClick={toggleMenu} className="text-aurumwhite lg:hidden flex">
        <HiMenu className="fill-aurumwhite size-10 hover:cursor-pointer"/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-screen h-screen bg-neutral-800/90 p-6 z-50"
          >
            <div className='w-full h-full bg-naturegreen-500 rounded-3xl'>
                {/* Banner */}
                <div className='flex justify-between px-6 py-3 rounded-t-3xl'>
                    <img src={Logo} className='h-16'/>
                    <button onClick={toggleMenu} className="text-aurumwhite">
                    Close
                    </button>
                </div>

                {/* Navigation Section */}
                <nav className="p-6">
                <ul>
                    <li className="mb-4">
                    <a href="#home" className="text-aurumwhite">Home</a>
                    </li>
                    <li className="mb-4">
                    <button onClick={() => toggleSubMenu('about')} className="text-aurumwhite flex items-center w-full">
                        About <FiChevronDown className={`ml-2 transition-transform ${activeMenu === 'about' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeMenu === 'about' && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-2"
                        >
                            <li><a href="#about-us" className="text-aurumwhite block">About Us</a></li>
                            <li><a href="#our-solution" className="text-aurumwhite block">Our Solution</a></li>
                            <li><a href="#our-history" className="text-aurumwhite block">Our History</a></li>
                        </motion.ul>
                        )}
                    </AnimatePresence>
                    </li>
                    <li className="mb-4">
                    <button onClick={() => toggleSubMenu('products')} className="text-aurumwhite flex items-center w-full">
                        Products <FiChevronDown className={`ml-2 transition-transform ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {activeMenu === 'products' && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={subMenuVariants}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-2"
                        >
                            <li><a href="#our-products" className="text-aurumwhite block">Our Products</a></li>
                            <li><a href="#cfc-series" className="text-aurumwhite block">CFC Series</a></li>
                            <li><a href="#dtr-series" className="text-aurumwhite block">DTR Series</a></li>
                            <li><a href="#btr-series" className="text-aurumwhite block">BTR Series</a></li>
                            <li><a href="#mhr-series" className="text-aurumwhite block">MHR Series</a></li>
                            <li><a href="#ddr-series" className="text-aurumwhite block">DDR Series</a></li>
                        </motion.ul>
                        )}
                    </AnimatePresence>
                    </li>
                    <li className="mb-4 w-full">
                    <a href="#blog" className="text-aurumwhite w-full">Blog</a>
                    </li>
                    <li className="mb-4 w-full">
                    <a href="#contact" className="text-aurumwhite w-full">Contact</a>
                    </li>
                </ul>
                </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
