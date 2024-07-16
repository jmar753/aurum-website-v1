import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { HiMenu } from "react-icons/hi";
import Logo from "../../RoughAssets/LogoNoTree.svg";
import { IoIosArrowForward, IoIosClose, IoIosArrowBack } from 'react-icons/io';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  isOpen?document.body.style.overflow ="hidden":document.body.style.overflow="auto"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu('');
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const closeSubMenu = () => {
    setActiveMenu('');
  };

  return (
    <div>
      <button onClick={toggleMenu} className="lg:hidden flex">
        <HiMenu className="fill-aurumwhite size-11 py-1 hover:cursor-pointer -mx-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-0 left-0 w-screen h-[110vh] bg-aurumwhite z-30 text-neutral-900 block lg:hidden">
            <div className='w-full h-full'>
              {/* Banner */}
              <div className='flex justify-between px-8 py-3'>
                <img src={Logo} className='h-10' />
                <button onClick={toggleMenu} className="">
                  <IoIosClose className="fill-neutral-900 size-11 -mx-4 hover:cursor-pointer" />
                </button>
              </div>

              {/* Navigation Section */}
              <nav className="p-8">
                <ul>
                  {/* About */}
                  <li
                    className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 mb-6'
                    onClick={() => toggleSubMenu('About')}
                  >
                    <h1 className='font-semibold text-lg text-neutral-900'>About</h1>
                    <IoIosArrowForward />
                  </li>
                </ul>
              </nav>
            </div>

            {/* Overlay */}
            <AnimatePresence>
              {activeMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed top-0 left-0 w-full h-[110vh] bg-black z-40"
                />
              )}
            </AnimatePresence>

            {/* About Sub Menu */}
            <AnimatePresence>
              {activeMenu === 'About' && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 right-0 w-full h-screen bg-aurumwhite z-50"
                >
                  <div className='flex justify-between p-4 border-b border-neutral-300 h-[4.25rem]'>
                    <button onClick={closeSubMenu} className="flex items-center justify-between">
                      <IoIosArrowBack className="mr-2" />
                      <p className='pb-0.5'>Back</p>
                    </button>
                  </div>
                  <div className="p-8 bg-aurumwhite">
                    <ul>
                      <li className='flex justify-between items-center mb-6 font-semibold text-lg text-neutral-900'>About Us</li>
                      <li className='flex justify-between items-center mb-6 font-semibold text-lg text-neutral-900'>Our History</li>
                      <li className='flex justify-between items-center mb-6 font-semibold text-lg text-neutral-900'>Our Solution</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
