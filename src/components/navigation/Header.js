import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlusCircle, FaMinusCircle, FaMinus } from "react-icons/fa";

import logo from "../../RoughAssets/WhiteLogoNoTree.svg"
import logoblack from "../../RoughAssets/LogoNoTree.svg"

import VerticalAccordion from "../containers/VerticalAccordion";

export default function Header(){

    {/* Dropdown Menu */}
    const FlyoutLink = ({ children, to, FlyoutContent}) => {
        const [open, setOpen] = useState(false)
        const showFlyout = open && FlyoutContent;

        return (
            <div 
                className="group relative h-fit w-fit"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {/* Header */}
                <NavLink to={to} className="relative text-white">
                    {children}
                    <span
                        style={{ 
                            transform: open ? "scaleX(1)" : "scaleX(0)",
                        }}
                        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-logogreen transition-transform duration-300 ease-out"
                    />
                </NavLink>
                <AnimatePresence>
                    {showFlyout && (
                        <motion.div 
                            initial={{ opacity: 0, y:15 }}
                            animate={{ opacity: 1, y:0 }}
                            exit={{ opacity: 0, y:15 }}
                            style={{ x:"-50%" }}
                            transition={{duration: 0.3, ease: 'easeOut'}}
                            className="absolute left-1/2 top-12  bg-white text-black"
                        >
                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"/>
                            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"/>
                            <FlyoutContent/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    {/* Dropdown Menu Components */}
    const AboutSection = () => {
        return(
            <div className="w-64 bg-white p-6 shadow-xl">
                <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Individuals</h3>
                <a to="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a to="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
                </div>
                <div className="mb-6 space-y-3">
                <h3 className="font-semibold">For Companies</h3>
                <a to="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a to="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a to="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
                </div>
                <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
                Contact sales
                </button>
            </div>
        )
    }

    {/* Mobile Navigation */}
    const navArray = [{name:"About", nav:"/aboutus", Flyout:AboutSection}, {name:"Products", nav:"/products", Flyout:AboutSection},{name:"Resources", nav:"/resources"},{name:"Contact", nav:"/contact"}]

    {/* Mobile Assets */}

    const Accordion = ({ question, answer }) => {

        const [isOpen, setIsOpen] = useState(false);
      
        return (
          <motion.div>
            <AnimatePresence>
              <motion.div
                key="question"
                className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div className="text-gray-800 font-bold ml-1">
                  Do you like animations?
                </motion.div>
              </motion.div>
      
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  exit={{ opacity: 0 }}
                  className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
                >
                  Yes, I love them!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      };

    const MobilePopup = () => {
        const [check, setCheck] = useState(false)
        check?document.body.style.overflow ="hidden":document.body.style.overflow="auto"

        return(
            <>
                {/* Pop Up Actuator */}
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100'}}>
                    <div className="sm:hidden flex" onClick={() => {setCheck(true)}}>
                        <HiMenu/>
                    </div>
                </IconContext.Provider>
                <AnimatePresence>
                    { check && (
                        <motion.div 
                            className="text-base text-black text-left absolute left-0 top-0 z-40 w-screen h-screen bg-white opacity-100 overscroll-y-contain"
                            initial={{ opacity: 0,}}
                            animate={{ opacity: 1,}}
                            exit={{ opacity: 0,}}
                            transition={{duration: 0.3, ease: 'easeOut'}}
                        >   

                            {/* Navigation Header */}
                            <div className="flex items-center justify-between px-6">
                                <div className="flex items-center h-[5rem]">
                                    <img src={logoblack} alt="logo" className="h-16"/>
                                </div>
                                <button onClick={() => {setCheck(false)}}>
                                    close
                                </button>
                            </div>

                            {/* Navigation Body */}
                            <div className="bg-neutral-100 overflow-y-scroll h-[calc(100vh-5rem)] w-full">
                                <div className="w-full m-auto bg-neutral-100">
                                    {/* Content Here */}
                                    <VerticalAccordion/>

                                </div>
                            </div>
                        </motion.div> 
                    )}
                </AnimatePresence>
            </>
        )
    }

    return(
        <header className="bg-aurumblack text-white h-[5rem] shrink-0 px-6 sm:px-8 flex sm:grid sm:grid-cols-8 justify-between items-center fixed top-0 z-40 w-full">

            {/* Logo */}
            <div className="col-span-3">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-16"/>
                </NavLink>
            </div>

                {/* Middle Navigation */}
                <div className="sm:flex hidden justify-between">
                    {navArray.map((item, index) => (
                        <FlyoutLink to={item.nav}  FlyoutContent={item.Flyout} key={item.name}>
                            {item.name}
                        </FlyoutLink>
                    ))}
                </div>

            {/* Mobile Pop up */}
            <MobilePopup/>

            {/* Random item */}
            <p className="text-right sm:block hidden">
                EN
            </p>
        </header>
    )
}