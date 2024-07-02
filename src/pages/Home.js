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
        {icon: SiAircanada, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegHandshake, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[7rem]"},
        {icon: FaTree, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegThumbsUp, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
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
                <div className="absolute flex flex-col md:justify-center items-center w-full gap-8 pt-[120px] md:pt-0 z-30 h-screen px-6 text-neutral-100 text-xl font-bold">
                    <div className="max-w-7xl md:grid md:grid-cols-2">
                        <div>
                            <SideReveal propDelay={7.9} className="">
                                <div className="space-y-5">
                                    <p className="text-4xl md:text-5xl lg:text-6xl">Old School <span className="text-galliano-300">Values</span> With A New School <span className="text-aurumgreen-600">Touch</span></p>
                                </div>
                            </SideReveal>
                            <div className="md:flex md:items-center gap-4 py-8 font-semibold text-base space-y-6 md:space-y-0">
                                <motion.div 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.3, ease: 'easeOut', delay: 9.6 }}
                                >
                                    <button className="p-4 h-12 bg-aurumgreen-600 hover:bg-aurumgreen-700 flex justify-center items-center gap-x-4 transition duration-200 w-48 sm:w-auto rounded-3xl">
                                        <p>View Retrofits</p>
                                        <FaArrowRight className="hidden sm:block"/>
                                    </button>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.3, ease: 'easeOut', delay: 9.8 }}
                                >
                                    <button className="p-4 h-12 hover:border-aurumgreen-600 hover:text-aurumgreen-600 border-2 flex justify-center items-center gap-x-4 transition duration-200 w-48 sm:w-auto rounded-3xl">
                                        <p>Installation Services</p>
                                        <FaArrowRight className="hidden sm:block"/>
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                    </div>

                    {/* Logos */}
                    <div className="absolute bottom-10 w-full max-w-7xl grid grid-cols-2">
                        <div className="w-full flex flex-col gap-4 items-start justify-start">
                            {/* Canada Logo*/}
                            <motion.div 
                                className="z-40 flex justify-center items-center gap-x-2"
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 0.3, ease: 'easeOut', delay: 10 }}
                            >
                                <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                                    <FaCanadianMapleLeaf className="text-red-600 h-6 w-6"/>
                                </div>
                                <div className="text-sm font-thin text-neutral-100">
                                    <p>ONTARIO MANUFACTURED</p>
                                    <p>PROUDLY CANADIAN</p>
                                </div>
                            </motion.div>

                            {/* Infertek Logo*/}
                            <motion.div 
                                className="z-40 flex justify-center items-center gap-x-2"
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 0.3, ease: 'easeOut', delay: 10 }}
                            >
                                <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                                    <img 
                                        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022019/screen_shot_2019-02-13_at_12.56.04.png?e.R_b5fFMNACARBnxNEus5HKwbGBaZyt&itok=kxol4S9D"
                                        className=""
                                    />
                                </div>
                                <div className="text-sm font-thin text-neutral-100">
                                    <p>ASSURED, TESTED, INSPECTED</p>
                                    <p>AND CERTIFIED BY INTERTEK</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Video BG */}
                <video className='absolute h-screen w-screen object-cover z-10' autoPlay muted>
                    <source src={ShortVideo} type='video/mp4'/>
                </video>
            </div>


            {/* Who Are We? */}
            <div className="h-screen  text-white flex items-center justify-center">
                <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 relative hidden md:block">
                        <div className="bg-aurumgrey relative">
                            <img src="https://images.unsplash.com/photo-1667264921635-0fdd6bab6174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYXRpbmclMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D" className="opacity-40 h-full w-full" />
                            <div className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-aurumgreen-600 z-20 flex flex-col justify-center items-center px-10 space-y-2">
                                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                                    <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className="h-8"></img>
                                </div>
                                <p className="text-center font-semibold">Click here to leave us a review on google</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 px-6 md:px-20 col-span-3 flex justify-center items-center relative">
                        <div className="absolute md:w-1/3 w-3/5 h-1/3 left-0 top-4 bg-neutral-800 z-0">
                            <div className="h-2 w-1/2 bg-aurumgreen-600 opacity-100"></div>
                        </div>
                        <div className="space-y-12 z-10">
                            <h1 className="text-3xl font-semibold">
                                We are leading and educating a new era for air conditioning, heating, cooling, fan coils and retrofits
                            </h1>
                            <p className="w-4/5 text-neutral-300">
                                Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. 
                            </p>
                            <button className="p-4 h-11 bg-aurumgreen-600 flex justify-center items-center gap-x-2 hover:bg-aurumgreen-700 transition duration-200">
                                <p>Contact Us</p>
                                <FaArrowRight/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Why Choose Aurum? */}
            <div className="h-screen w-full flex justify-center items-center bg-aurumblack">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <p className="text-aurumgreen-500">THE AURUM DIFFERENCE</p>
                    <h1 className="text-5xl font-bold py-4">Why choose Aurum for your home?</h1>

                    {/* Banner */}
                    <div className="py-4">
                        <div className="my-6 p-6 grid grid-cols-4 gap-12">
                            {BannerArray.map((item, index) => (
                                <div key={item.description} className="text-left space-y-6">
                                    <div className="h-16 w-16 flex justify-center items-center rounded-full bg-aurumgreen-600">
                                        <item.icon className="text-white h-10 w-10"/>
                                    </div>
                                    <p className="text-2xl font-semibold">{item.title}</p>
                                    <p className="text-lg text-neutral-400">{item.description}</p>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
            </div>

            {/* Final Banner */}
            <div className="flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-aurumgreen-600 to-galliano-600 py-32">
                <h1 className="text-4xl font-bold">Ready to put an end to your old HVAC system?</h1>
                <button className="bg-aurumgrey w-60 rounded-3xl p-3">Contact Support</button>
            </div>
        </div>
    )
}