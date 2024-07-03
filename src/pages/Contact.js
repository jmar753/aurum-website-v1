import { FaFacebook, FaLinkedin, FaPhone, FaMailBulk, FaInstagram, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact(){
    return(
        <div className="bg-aurumgrey h-screen w-full flex items-center justify-center text-gray-800">
            <div className="w-screen">

                {/* Opener */}
                <div className="text-center space-y-5 py-10">
                    <h1 className="text-5xl font-semibold">Contact our team</h1>
                    <p className="">Got any questions? We're here to help. Shoot an email to our team and we will be sure to reach back.</p>
                </div>

                {/* Form */}
                <div className="grid grid-cols-3 divide-x-2 divide-gray-100">
                    {/* Email side */}
                    <div className="p-6 col-span-2">
                        <form className="max-w-3xl mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <label for="small-input" className="block mb-2 font-semibold text-gray-800">First Name</label>
                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <label for="small-input" className="block mb-2 font-semibold text-gray-800">Last Name</label>
                                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-gray-800">Email</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-gray-800">Phone</label>
                                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label for="small-input" className="block mb-2 font-semibold text-gray-800">Message</label>
                                <textarea  type="text" id="small-input" rows="5" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-aurumgreen-500 focus:border-aurumgreen-500"/>
                            </div>
                            <button type="submit" className="text-gray-800 bg-aurumgreen-700 hover:bg-aurumgreen-800 focus:ring-4 focus:outline-none focus:ring-aurumgreen-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-aurumgreen-600 dark:hover:bg-aurumgreen-700 dark:focus:ring-aurumgreen-800">Submit</button>
                        </form>
                    </div>

                    {/* Contact List */}
                    <div className="px-12 py-6 space-y-8">
                        <div className="space-y-1">
                            <h1 className="text-xl font-semibold">Chat with us</h1>
                            <p className="text-neutral-300">Speak to our friendly team VIA phone or email</p>
                            <div className="flex items-center gap-x-2 font-semibold underline">
                                <FaLinkedin/>
                                <p>Message us on LinkedIn</p>
                            </div>
                            <div className="flex items-center gap-x-2 font-semibold underline">
                                <FaFacebook/>
                                <p>Visit our Facebook</p>
                            </div>
                            <div  className="flex items-center gap-x-2 font-semibold underline">
                                <FaInstagram/>
                                <p>Follow our Instagram</p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-xl font-semibold">Contact us</h1>
                            <div  className="flex items-center gap-x-2 font-semibold underline">
                                <FaPhoneAlt/>
                                <p>905-597-4799 | info@aurum-m.com</p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-xl font-semibold">Visit us</h1>
                            <p className="text-neutral-300">Talk to us in person at our Vaughan HQ</p>
                            <div  className="flex items-center gap-x-2 font-semibold underline">
                                <FaLocationDot/>
                                <p>200 Tesma Way #7, Vaughan, ON L4K 0J9</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}