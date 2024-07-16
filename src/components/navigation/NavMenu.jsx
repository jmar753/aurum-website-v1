import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { HiMenu } from "react-icons/hi";
import Logo from "../../RoughAssets/LogoNoTree.svg";
import { IoIosArrowForward, IoIosClose, IoIosArrowBack } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const cataloguelinks = [
    { title: "Our Products", link: "/catalogue" },
    { title: "CFC Series", link: "/catalogue/cfc" },
    { title: "DTR Series", link: "/catalogue/dtr" },
    { title: "BTR Series", link: "/catalogue/btr" },
    { title: "MHR Series", link: "/catalogue/mhr" },
    { title: "DDR Series", link: "/catalogue/ddr" }
  ]

  const aboutlinks = [
    { title: "About Us", link: "/aboutus" },
    { title: "Our Solutions", link: "/oursolution" },
    { title: "Our History", link: "/ourhistory" }
  ]

  isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

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
          <div className="fixed top-0 left-0 w-screen h-screen bg-aurumwhite z-30 text-neutral-900 block lg:hidden">
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
                <div>
                  {/* About */}
                  <button
                    className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 w-full mb-6 group'
                    onClick={() => toggleSubMenu('About')}
                  >
                    <h1 className='font-semibold text-lg text-neutral-900 group-hover:cursor-pointer'>About</h1>
                    <IoIosArrowForward className=' group-hover:cursor-pointer'/>
                  </button>

                  {/* Catalogue */}
                  <button
                    className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 w-full mb-6 group'
                    onClick={() => toggleSubMenu('Catalogue')}
                  >
                    <h1 className='font-semibold text-lg text-neutral-900 group-hover:cursor-pointer'>Catalogue</h1>
                    <IoIosArrowForward className=' group-hover:cursor-pointer'/>
                  </button>

                  {/* Blog */}
                  <a href="/blog">
                    <button
                      className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 w-full mb-6 group'
                    >
                      <h1 className='font-semibold text-lg text-neutral-900 group-hover:cursor-pointer'>Blog</h1>
                    </button>
                  </a>

                  {/* Resources */}
                  <a href="/resources">
                    <button
                      className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 w-full mb-6 group'
                    >
                      <h1 className='font-semibold text-lg text-neutral-900 group-hover:cursor-pointer'>Resources</h1>
                    </button>
                  </a>

                  {/* Contact */}
                  <a href="/contactus">
                    <button
                      className='flex justify-between items-center border-b-2 border-dashed border-neutral-300 h-12 w-full mb-6 group'
                    >
                      <h1 className='font-semibold text-lg text-neutral-900 group-hover:cursor-pointer'>Contact</h1>
                    </button>
                  </a>
                </div>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-24 w-full p-8 bg-aurumwhite">
                <div className="mb-6">
                  <h1 className="font-semibold text-lg text-neutral-900">Contact Us</h1>
                  <p className="text-neutral-600">Phone: (123) 456-7890</p>
                  <p className="text-neutral-600">Address: 123 HVAC Street, City, Country</p>
                  <p className="text-neutral-600">Email: info@hvaccompany.com</p>
                </div>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-neutral-900 size-6 hover:text-blue-600" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-neutral-900 size-6 hover:text-blue-400" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-neutral-900 size-6 hover:text-pink-500" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-neutral-900 size-6 hover:text-blue-700" />
                  </a>
                </div>
              </div>
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
                  transition={{ duration: 0.2 }}
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
                      {aboutlinks.map((item, index) => (
                        <a href={item.link} key={index}>
                          <li className='flex justify-between items-center mb-6 font-semibold text-lg text-neutral-900'>{item.title}</li>
                        </a>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Catalogue Sub Menu */}
            <AnimatePresence>
              {activeMenu === 'Catalogue' && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.2 }}
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
                      {cataloguelinks.map((item, index) => (
                        <a href={item.link} key={index}>
                          <li className='flex justify-between items-center mb-6 font-semibold text-lg text-neutral-900'>{item.title}</li>
                        </a>
                      ))}
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
