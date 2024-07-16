// src/components/NavMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { HiMenu } from "react-icons/hi";
import Logo from "../../RoughAssets/LogoNoTree.svg"
import { IoIosArrowForward, IoIosClose } from 'react-icons/io';

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

  return (
    <div>
      <button onClick={toggleMenu} className="lg:hidden flex">
        <HiMenu className="fill-aurumwhite size-11 py-1 hover:cursor-pointer -mx-4"/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-0 left-0 w-screen h-[110vh] bg-aurumwhite z-40 text-neutral-900 block lg:hidden">
            <div className='w-full h-full'>
                {/* Banner */}
                <div className='flex justify-between px-8 py-3'>
                    <img src={Logo} className='h-10'/>
                    <button onClick={toggleMenu} className="">
                      <IoIosClose className="fill-neutral-900 size-11 -mx-4 hover:cursor-pointer"/>
                    </button>
                </div>

                {/* Navigation Section */}
                <nav className="p-8">
                  <ul>
                    <li className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12'>
                      <h1 className='font-semibold text-lg text-neutral-900'>About</h1>
                      <IoIosArrowForward/>
                    </li>

                  </ul>
                </nav>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
