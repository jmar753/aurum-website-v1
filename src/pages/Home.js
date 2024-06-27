import {motion } from "framer-motion";

import ShortVideo from "../RoughAssets/RoughMain.mp4"
import TreePhoto from "../RoughAssets/TreeGold.svg"
import logo from "../RoughAssets/WhiteLogoNoTree.svg"

//animations
import Reveal from "../animations/Reveal"
import SideReveal from "../animations/SideReveal";

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function Home(){

    const BannerArray = [
        {icon: SiAircanada, description:"Canadian Based Manufacturer", size: "size-[4rem]"},
        {icon: FaRegHandshake, description:"Trusted by Property Managers & Trade Technicians ", size: "size-[7rem]"},
        {icon: FaTree, description:"A Family Business With Over 40 years Experience", size: "size-[4rem]"},
        {icon: FaRegThumbsUp , description:"100% Satisfaction Guaranteed", size: "size-[4rem]"},
        {icon: GiAchievement, description:"Made With The Highest Quality & Craftsmanship", size: "size-[7rem]"},
    ]

    return(
        <div className="text-neutral-100">

            {/* Animated Intro */}
            <div className="min-h-screen relative">

                    {/* <motion.div 
                            initial={{ opacity: 1}}
                            animate={{ opacity: 0}}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 4 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
                    >
                        <img src={logo} alt="logo" className="h-36"/>
                    </motion.div> */}

                    {/* Written Section*/}
                    <div className="absolute text-neutral-100 flex flex-col gap-8 justify-center z-30 h-screen w-1/2 pl-3 sm:pl-16 md:pl-24 text-xl font-bold">
                        <div>
                            <SideReveal propDelay={7.9} className="">
                                <div className="space-y-5">
                                    <p className="text-2xl md:text-5xl lg:text-7xl">Old School <span className="text-galliano-300">Values</span> With A New School <span className="text-apple-600">Touch</span></p>
                                </div>
                            </SideReveal>
                                <div className="flex gap-4 py-8 font-semibold text-base">
                                    <motion.div 
                                        initial={{ opacity: 0}}
                                        animate={{ opacity: 1}}
                                        transition={{ duration: 0.3, ease: 'easeOut', delay: 9.6 }}
                                    >
                                        <button className="p-4 h-14 bg-apple-600 flex justify-center items-center gap-x-4 hover:bg-apple-700 transition duration-200">
                                            <p>View Retrofits</p>
                                            <FaArrowRight/>
                                        </button>
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0}}
                                        animate={{ opacity: 1}}
                                        transition={{ duration: 0.3, ease: 'easeOut', delay: 9.8 }}
                                    >
                                        <button className="p-4 h-14 hover:border-apple-600 hover:text-apple-600 border-2 flex justify-center items-center gap-x-4 transition duration-200">
                                            <p>Installation Services</p>
                                            <FaArrowRight/>
                                        </button>
                                    </motion.div>
                                </div>
                        </div>
                        
                        {/* Canada Logo*/}
                        <motion.div 
                            className="absolute z-40 flex justify-center items-center  sm:left-16 md:left-24 bottom-10 gap-x-2"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 10 }}
                        >
                            <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                                <FaCanadianMapleLeaf className="text-red-600 h-6 w-6"/>
                            </div>
                            <div className="text-sm font-thin tracking-tight text-neutral-100">
                                <p>ONTARIO MANUFACTURED</p>
                                <p>PROUDLY CANADIAN</p>
                            </div>
                        </motion.div>
                    </div>

                {/* Video BG */}
                <video className='absolute h-screen w-screen object-cover z-10' autoPlay muted>
                    <source src={ShortVideo} type='video/mp4'/>
                </video>
            </div>


            {/* Who Are We? */}
            <div className="h-screen  text-white flex items-center">
                <div className="grid grid-cols-5">
                    <div className="col-span-2 relative">
                        <div className="bg-aurumgrey relative">
                            <img src="https://images.unsplash.com/photo-1667264921635-0fdd6bab6174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYXRpbmclMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D" className="opacity-40 h-full w-full"/>
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-aurumgreen-600 z-20 flex flex-col justify-center items-center p-12 space-y-2">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                                    <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className="h-10"></img>
                                </div>
                                <p className="text-center">Click here to leave us a review on google</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 px-20 col-span-3 flex justify-center items-center relative">
                        <div className="absolute w-1/3 h-1/3 left-0 top-4 bg-neutral-800 z-0">
                            <div className="h-2 w-1/2 bg-aurumgreen-600 opacity-100"></div>
                        </div>
                        <div className="space-y-12 z-10">
                            <h1 className="text-3xl font-semibold">
                                We are leading and educating a new era for air conditioning, heating, cooling, fan coils and retrofits
                            </h1>
                            <p className="w-4/5 text-neutral-300">
                                Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. 
                            </p>
                            <button className="p-4 h-11 bg-aurumgreen-600 flex justify-center items-center gap-x-4 hover:bg-apple-700 transition duration-200">
                                <p>Contact Us</p>
                                <FaArrowRight/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="h-screen p-3 sm:p-16 md:p-24 text-white">
                <hr class="h-px my-8 border-0 bg-apple-600"></hr>

                <div className="grid grid-cols-3 gap-12">
                    <div className="col-span-2 text-5xl font-semibold">
                        <h1>We are leading and educating a new era for air conditioning, heating, cooling, fan coils and retrofits</h1>
                    </div>

                    <div className="grid gap-y-4 pb-16">
                        <p>Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity</p>
                        <p className="underline font-semibold">Read More</p>

                    </div>

                </div>

                <div className="grid grid-cols-4 gap-8 w-full">
                    <div className="h-48 bg-blue-600">filler</div>
                    <div className="h-48 bg-blue-600">filler</div>
                    <div className="h-48 bg-blue-600">filler</div>
                    <div className="h-48 bg-blue-600">filler</div>
                </div>
            </div> */}

            {/* Banner */}
            <div className="py-10">
                <div className="my-6 p-6 bg-neutral-800 grid grid-cols-5 gap-4">
                    {BannerArray.map((item, index) => (
                        <IconContext.Provider value={{ className: `text-xl text-galliano-300 ${item.size}` }} key={item.description}>
                            <div className="flex justify-center items-center gap-x-2 p-2">
                                <item.icon/>
                                <p className="">{item.description}</p>
                            </div>
                        </IconContext.Provider>
                    ))}
                </div> 
            </div>
        </div>
    )
}