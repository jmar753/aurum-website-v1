import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Header(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick)
        };
    });

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setCheck(false)
        }
    };


    {/* Dropdown Meny */}
    const FlyoutLink = ({children, to, FlyoutContent}) => {
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
    const ProductsSection = () => {
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
    const MobilePopup = ({children, to, FlyoutContent}) => {
        return(
                // <AnimatePresence>
                //     <motion.div 
                //         initial={{ opacity: 1, x: '0%' }}
                //         animate={{ opacity: 1, x:'100%' }}
                //         exit={{ opacity: 1, x: '0%' }}
                //         transition={{duration: 0.7, ease: 'easeOut'}}
                //     >
                        <div className="absolute top-0 left-0 w-screen h-screen z-40 bg-yellow-400 text-black p-10">
                            <div className="flex h-full flex-col">
                                <div className="flex justify-between">
                                    <h1 className="text-lg text-black">Portfolio</h1>
                                    <p className="cursor-pointer text-md text-black" onClick={() => {setCheck(false)}}>close</p>
                                </div>
                            </div>

                        </div> 
                //     </motion.div>
                // </AnimatePresence>
            
            // <>
            //     <div className="bg-neutral-950 w-screen h-screen absolute left-0 top-0 opacity-40 sm:hidden"></div>
            //     <div className="text-base text-white text-left absolute left-0 top-0 z-40 w-3/4 p-6 h-screen bg-neutral-900 opacity-100 :hidden" ref={newRef}>
            //         <div className="">
            //             <img src={logo} alt="logo" className="h-16"/>
            //         </div>
            //         <button className="text-left  w-full py-3 pr-3  text-2xl my-1">
            //             Home
            //         </button>
            //         {navArray.map((item, index) => (
            //             <button className="text-left  w-full py-3 pr-3  text-2xl my-1" key={index}>
            //                 {item.name}
            //             </button>
            //         ))}
            //     </div> 
            // </>
        )
    }

    const navArray = [{name:"About", nav:"/aboutus", Flyout:AboutSection}, {name:"Products", nav:"/products", Flyout:ProductsSection},{name:"Resources", nav:"/resources"},{name:"Contact", nav:"/contact"}]

    return(
        <header className="">
            <nav className="h-[4rem] flex justify-between items-center fixed top-0 z-30 w-full px-3 sm:px-8 bg-aurumblack text-white">
                {/* Logo */}
                <div className="">
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="h-16"/>
                    </NavLink>
                </div>

                {/* Middle Navigation */}
                <div className="sm:flex hidden justify-between">
                    {navArray.map((item, index) => (
                        <FlyoutLink to={item.nav}  FlyoutContent={item.Flyout}>
                            {item.name}
                        </FlyoutLink>
                    ))}
                </div>

                {/* Pop Up Actuator */}
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                    <div className="sm:hidden flex" onClick={() => {setCheck(true)}}>
                        <HiMenu/>
                    </div>
                </IconContext.Provider>

                {/* Random item */}
                <p className="text-right sm:block hidden">
                    EN
                </p>
            </nav>
            {/* Mobile Pop up */}
            {check ? 
                <MobilePopup/>
                :
                null
            }
        </header>
    )
}