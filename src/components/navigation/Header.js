//Libraries

import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

//svgs
import logoblack from "../../RoughAssets/LogoNoTree.svg"
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

//components
import VerticalAccordion from "../containers/VerticalAccordion";

export default function Header(){
    const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll();

    //Dropdown Menu
    const FlyoutLink = ({ children, to, FlyoutContent}) => {
        const [open, setOpen] = useState(false)
        const showFlyout = open && FlyoutContent;

        return (
            <div 
                className="group relative h-[4rem] px-5 flex items-center justify-center"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {/* Header */}
                <a href={to} className="relative text-gray-800">
                    {children}
                    <span
                        style={{ 
                            transform: open ? "scaleX(1)" : "scaleX(0)",
                        }}
                        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-aurumgreen-600 transition-transform duration-300 ease-out"
                    />
                </a>
                <AnimatePresence>
                    {showFlyout && (
                        <motion.div 
                            initial={{ opacity: 0, y:15 }}
                            animate={{ opacity: 1, y:0 }}
                            exit={{ opacity: 0, y:15 }}
                            style={{ x:"-50%" }}
                            transition={{duration: 0.3, ease: 'easeOut'}}
                            className="absolute left-1/2 top-20  bg-white text-black"
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

    //Dropdown Menu Components
    const AboutSection = () => {
        return(
            <div className="w-64 bg-white p-6 shadow-xl">
                <div className="mb-3 space-y-3">
                    <h3 className="font-semibold">About Aurum</h3>
                    <a href="/aboutus" className="block text-sm hover:underline pl-4">
                        About us
                    </a>
                    <a href="/ourhistory" className="block text-sm hover:underline pl-4">
                        Our History
                    </a>
                </div>
                <div className="mb-6 space-y-3">
                    <h3 className="font-semibold">About Design</h3>
                    <div className="pl-4">
                        <a href="/oursolution" className="block text-sm hover:underline">
                            Our Solution
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    const ProductSection = () => {
        return(
            <div className="w-64 bg-white p-6 shadow-xl z-40">
                <div className="mb-3 space-y-3">
                    <h3 className="font-semibold">Older Series</h3>
                    <a href="/catalogue/cfc" className="block text-sm hover:underline pl-4">
                        CFC Series
                    </a>
                    <a href="/catalogue/dtr" className="block text-sm hover:underline pl-4">
                        DTR Series
                    </a>
                    <a href="/catalogue/btr" className="block text-sm hover:underline pl-4">
                        BTR Series
                    </a>
                </div>
                <div className="mb-6 space-y-3">
                    <h3 className="font-semibold">Newer Series</h3>
                    <a href="/catalogue/mhr" className="block text-sm hover:underline pl-4">
                        MHR Series
                    </a>
                    <a href="/catalogue/ddr" className="block text-sm hover:underline pl-4">
                        DDR Series
                    </a>
                </div>
            </div>
        )
    }

    const ContactSection = () => {
        return(
            <div className="w-64 bg-white p-6 shadow-xl">
                <div className="mb-3 space-y-3">
                    <p to="#" className="block text-sm hover:underline">
                        <span className="font-semibold">Phone: </span>
                        905-597-4799
                    </p>
                    <p to="#" className="block text-sm hover:underline">
                        <span className="font-semibold">Email: </span>
                        info@aurum-m.com
                    </p>
                    <p to="#" className="block text-sm hover:underline">
                        <span className="font-semibold">Address: </span>
                        200 Tesma Way #7, Vaughan, ON L4K 0J9
                    </p>
                </div>
                <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-gray-800">
                    Contact Zorzit
                </button>
            </div>
        )
    }

    //Mobile Navigation
    const navArray = [{name:"About", nav:"/aboutus", Flyout:AboutSection}, {name:"Catalogue", nav:"/catalogue", Flyout:ProductSection},{name:"Blog", nav:"/blog"},{name:"Contact", nav:"/contactus", Flyout:ContactSection}]

    //Mobile Assets
    const MobilePopup = () => {
        const [check, setCheck] = useState(false)
        // check?document.body.style.overflow ="hidden":document.body.style.overflow="auto"

        return(
            <>
                {/* Pop Up Actuator */}
                <div className="lg:hidden flex" onClick={() => {setCheck(true)}}>
                    <HiMenu className="fill-aurumwhite size-10 hover:cursor-pointer"/>
                </div>
                <AnimatePresence>
                    { check && (
                        <motion.div 
                            className="text-base text-black text-left absolute left-0 top-0 z-40 w-screen h-screen bg-white opacity-100 lg:hidden"
                            initial={{ opacity: 0,}}
                            animate={{ opacity: 1,}}
                            exit={{ opacity: 0,}}
                            transition={{duration: 0.3, ease: 'easeOut'}}
                        >   

                            {/* Navigation Header */}
                            <div className="flex items-center justify-between px-4">
                                <a href="/"  onClick={() => setCheck(false)}>
                                    <div className="flex items-center h-[4rem]">
                                        <img src={logoblack} alt="logo" className="h-12"/>
                                    </div>
                                </a>
                                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100'}}>
                                    <div className="lg:hidden flex" onClick={() => {setCheck(false)}}>
                                        <IoClose/>
                                    </div>
                                </IconContext.Provider>
                            </div>

                            {/* Navigation Body */}
                            <div className="bg-neutral-100 overflow-y-scroll h-[calc(100vh-4rem)] w-full">
                                <div className="w-full m-auto bg-neutral-100">
                                    {/* Content Here */}
                                    <VerticalAccordion check={check} setCheck={setCheck}/>

                                </div>
                            </div>
                        </motion.div> 
                    )}
                </AnimatePresence>
            </>
        )
    }

    return(
        <motion.nav 
            className="bg-naturegreen-800/90 backdrop-blur-md shadow-lg shadow-slate-900/20 shadow-b-2 text-naturegreen-800 h-[4rem] px-4 fixed top-0 z-40 w-screen flex justify-center items-center"
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.2, ease:"easeInOut"}}
        >
            <div className="w-full h-full max-w-7xl justify-between items-center flex">

                {/* Logo */}
                <div className="flex justify-center items-center">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-12"/>
                    </a>
                </div>

                {/* Middle Navigation */}
                <div className="lg:flex hidden justify-between">
                    {navArray.map((item, index) => (
                        <FlyoutLink to={item.nav}  FlyoutContent={item.Flyout} key={item.name}>
                            <div className="flex justify-center items-center space-x-2 group">
                                <p className="font-medium text-base">{item.name}</p>
                                {item.name === "About" || item.name === "Contact" || item.name === "Catalogue" ? <IoIosArrowDown className="group-hover:text-aurumgreen-600 duration-200"/> : null}
                            </div>
                        </FlyoutLink>
                    ))}
                </div>

                {/* Mobile Pop up */}
                <MobilePopup/>

                {/* Random item */}
                <div className="lg:flex hidden items-end justify-end">
                    <button className="text-right flex h-10 w-44 font-semibold rounded-3xl border-2 border-aurumgreen-600 text-aurumgreen-600 justify-center items-center">
                        Join Us
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}