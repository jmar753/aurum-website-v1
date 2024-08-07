// Libraries
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// svgs
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

// components
import NavMenu from "./NavMenu";

export default function Header() {
    const [hidden, setHidden] = useState(false);

    // Dropdown Menu
    const FlyoutLink = ({ children, to, FlyoutContent }) => {
        const [open, setOpen] = useState(false)
        const showFlyout = open && FlyoutContent;

        return (
            <div 
                className="group relative h-[4rem] px-5 flex items-center justify-center"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {/* Header */}
                <a href={to} className="relative">
                    {children}
                    <span
                        style={{ 
                            transform: open ? "scaleX(1)" : "scaleX(0)",
                        }}
                        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-leafgreen transition-transform duration-300 ease-out"
                    />
                </a>
                <AnimatePresence>
                    {showFlyout && (
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            style={{ x: "-50%" }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="absolute left-1/2 top-20 bg-white text-black"
                        >
                            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                            <FlyoutContent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

    // Dropdown Menu Components
    const AboutSection = () => {
        return (
            <div className="w-64 bg-white p-6 shadow-xl">
                <div className="mb-3 space-y-3">
                    <h3 className="">About Aurum</h3>
                    <a href="/aboutus" className="block text-sm hover:underline pl-4">
                        About us
                    </a>
                    <a href="/ourhistory" className="block text-sm hover:underline pl-4">
                        Our History
                    </a>
                </div>
                <div className="mb-6 space-y-3">
                    <h3 className="">About Design</h3>
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
        return (
            <div className="w-64 bg-white p-6 shadow-xl z-50">
                <div className="mb-3 space-y-3">
                    <h3 className="">Older Series</h3>
                    <a href="/products/cfc" className="block text-sm hover:underline pl-4">
                        CFC Series
                    </a>
                    <a href="/products/dtr" className="block text-sm hover:underline pl-4">
                        DTR Series
                    </a>
                    <a href="/products/btr" className="block text-sm hover:underline pl-4">
                        BTR Series
                    </a>
                </div>
                <div className="mb-6 space-y-3">
                    <h3 className="">Newer Series</h3>
                    <a href="/products/mhr" className="block text-sm hover:underline pl-4">
                        MHR Series
                    </a>
                    <a href="/products/ddr" className="block text-sm hover:underline pl-4">
                        DDR Series
                    </a>
                </div>
            </div>
        )
    }

    const ContactSection = () => {
        return (
            <div className="w-64 bg-white p-6 shadow-xl">
                <div className="mb-3 space-y-3">
                    <p to="#" className="block text-sm hover:underline">
                        <span className="">Phone: </span>
                        905-597-4799
                    </p>
                    <p to="#" className="block text-sm hover:underline">
                        <span className="">Email: </span>
                        info@aurum-m.com
                    </p>
                    <p to="#" className="block text-sm hover:underline">
                        <span className="">Address: </span>
                        200 Tesma Way #7, Vaughan, ON L4K 0J9
                    </p>
                </div>
                <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2  transition-colors hover:bg-neutral-950 hover:text-gray-800">
                    Contact Zorzit
                </button>
            </div>
        )
    }

    // Mobile Navigation
    const navArray = [
        { name: "About", nav: "/aboutus", Flyout: AboutSection }, 
        { name: "Products", nav: "/products", Flyout: ProductSection },
        { name: "Blog", nav: "/blog" },
        { name: "Resources", nav: "/resources" },
        { name: "Contact", nav: "/contactus", Flyout: ContactSection }
    ]

    return (
        <nav 
            className="bg-aurumblack  h-[4rem] px-8 fixed -top-1 z-50 w-screen flex justify-center items-center"
        >
            <div className="w-full h-full justify-between items-center flex">

                {/* Logo */}
                <div className="flex justify-center items-center">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-10" />
                    </a>
                </div>

                {/* Middle Navigation */}
                <div className="lg:flex hidden justify-between">
                    {navArray.map((item, index) => (
                        <FlyoutLink to={item.nav} FlyoutContent={item.Flyout} key={item.name}>
                            <div className="flex justify-center items-center space-x-2 group">
                                <p className="font-medium text-base">{item.name}</p>
                                {item.name === "About" || item.name === "Contact" || item.name === "Products" ? (
                                    <IoIosArrowDown className="group-hover:text-leafgreen duration-200" />
                                ) : null}
                            </div>
                        </FlyoutLink>
                    ))}
                </div>

                {/* Mobile Pop up */}
                <div className="lg:hidden">
                    <NavMenu />
                </div>

                {/* Random item */}
                <div className="lg:flex hidden items-end justify-end">
                    <button className="text-right flex h-10 w-44  rounded-3xl border-2 border-white text-white justify-center items-center">
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    )
}
