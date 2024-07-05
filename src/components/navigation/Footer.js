import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Footer(){

    return(
        <footer className="bg-neutral-800 text-white z-40 w-full pt-12 px-3 sm:px-8">

            {/* Top */}
            <div className="grid grid-cols-2 md:flex flex-col md:flex-row justify-between md:h-48 gap-y-4 md:gap-y-0">

                {/* About */}
                <div className="w-full gap-y-4 space-y-2 md:space-y-0 md:text-base text-sm">
                    <h1 className="font-bold text-lg">About</h1>
                    
                    <p>About Us</p>
                    <p>Our Solution</p>
                    <p>Our History</p>

                </div>

                {/* Products */}
                <div className="w-full space-y-2 md:space-y-0 md:text-base text-sm">
                    <h1 className="font-bold text-lg">Products</h1>

                    <p>BTR Series</p>
                    <p>DTR Series</p>
                    <p>CFC Series</p>
                    <p>MHR Series</p>
                    <p>DDR Series</p>
                    
                </div>

                {/* Resources */}
                <div className="w-full space-y-2 md:space-y-0 md:text-base text-sm">
                    <h1 className="font-bold text-lg">Resources</h1>

                    <p>Owner's Guide</p>
                    <p>Maintnence Guide</p>
                    <p>Simplified Thermostat Guides</p>
                    <p>Standard Limited Warranty</p>
 
                </div>

                {/* Contact */}
                <div className="col-span-2 md:col-span-1 w-full space-y-2 md:space-y-0 md:text-base text-sm">
                    <h1 className="font-bold text-lg hidden md:block">Contact</h1>
                    <h1 className="font-bold text-lg md:hidden block">Subscribe to our newsletter</h1>

                    <p>Subscribe to our newsletter to keep up to date with all things Aurum!</p>

                    <div className="mt-4 mb-3 xl:pl-3 inline-block md:max-w-xl w-full overflow-hidden border bg-aurumgreen-200 border-gray-200 rounded-sm focus-within:ring focus-within:ring-aurumgreen-300">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full xl:flex-1">
                            <input className="p-3 xl:p-0 xl:pr-6 w-full text-sm font-roboto-regular bg-aurumgreen-200 text-gray-500 placeholder-gray-500 outline-none" id="footerInput1-1" type="text" placeholder="Enter your e-mail address"/></div>
                            <div className="w-full xl:w-auto">
                                <div className="block">
                                    <button className="py-2 px-8 w-full text-gray-800 font-productsans-medium border border-aurumgreen-700 focus:ring focus:ring-aurumgreen-300 bg-aurumgreen-600 hover:bg-aurumgreen-700 transition ease-in-out duration-200" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Divide */}
            <hr/>

            {/* Bottom */}
            <div className="grid grid-cols-2 justify-between items-center py-8">
                {/* Logo */}
                <div className="">
                    <img src={logo} alt="logo" className="h-16"/>
                </div>

                {/* Copyright */}
                <p className="hidden md:block">Copyright © 2024 Aurum Manufacturing Inc. All Rights Reserved</p>

                {/* Socials */}
                <div className="flex flex-row-reverse gap-4 text-right">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>

                <div className="col-span-2 block md:hidden">
                    <p className="text-xs font-neutral-300 py-4">Copyright © 2024 Aurum Manufacturing Inc. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}