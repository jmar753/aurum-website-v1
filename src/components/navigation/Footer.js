import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Footer(){

    return(
        <footer className="bg-neutral-900 py-6 text-white z-40 w-full px-3 lg:px-8">

            {/* Top */}
            <div className="grid grid-cols-2 lg:flex flex-col lg:flex-row justify-between lg:h-48 gap-y-4 lg:gap-y-0 pb-4">

                {/* Contact */}
                <div className="col-span-2 lg:col-span-1 w-full space-y-2 lg:space-y-0 lg:text-base text-sm">
                    <h1 className="font-semibold text-lg hidden lg:block">Contact</h1>
                    <h1 className="font-semibold text-lg lg:hidden block">Stay Up To Date</h1>

                    <p>Subscribe to our newsletter to keep up to date with all things Aurum!</p>
                    <div className="flex items-center mt-1">
                        <input type="email" id="input-9" className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded-3xl shadow-sm bg-gray-100" placeholder="user@mail.com"/>
                        <button className="h-10 px-4 text-sm bg-naturegreen-500 border border-l-0  rounded-r-3xl shadow-sm text-gray-100 hover:text-white hover:bg-blue-400 hover:border-naturegreen-200 focus:outline-none">Subscribe</button>
                    </div>
                </div>

            </div>

            {/* Divide */}
            <hr/>

            {/* Bottom */}
            <div className="grid grid-cols-2 justify-between items-center py-4">
                {/* Logo */}
                <div className="">
                    <img src={logo} alt="logo" className="h-16"/>
                </div>

                {/* Copyright */}
                <p className="hidden lg:block">Copyright © 2024 Aurum Manufacturing Inc. All Rights Reserved</p>

                {/* Socials */}
                <div className="flex flex-row-reverse gap-4 text-right">
                    <FaFacebook className="h-6 w-6 fill-gray-100"/>
                    <FaInstagram className="h-6 w-6 fill-gray-100"/>
                    <FaLinkedin className="h-6 w-6 fill-gray-100"/>
                </div>
            </div>

            {/* Divide */}
            <hr/>

            <div className="col-span-2 block lg:hidden">
                <p className="text-xs font-neutral-300 py-4">Copyright © 2024 Aurum Manufacturing Inc. All Rights Reserved</p>
            </div>
        </footer>
    )
}