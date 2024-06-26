import {motion } from "framer-motion";

import ShortVideo from "../RoughAssets/RoughMain.mp4"
import TreePhoto from "../RoughAssets/TreeGold.svg"

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

                    {/* Written Section*/}
                    <div className="absolute text-neutral-100 flex flex-col gap-8 justify-center z-30 h-screen w-1/2 pl-3 sm:pl-16 text-xl font-bold">
                        <SideReveal propDelay={7.9} className="">
                            <div className="space-y-5">
                                <p className="text-2xl md:text-5xl lg:text-7xl">Old School <span className="text-galliano-300">Values</span> With A New School <span className="text-aurumgreen-600">Touch</span></p>
                                <button className="p-4 bg-black flex justify-center items-center gap-x-4 rounded-lg hover:bg-aurumgreen-600 transition duration-200">
                                    <p>View Retrofits</p>
                                    <FaArrowRight/>
                                </button>
                            </div>
                        </SideReveal>
                        
                        {/* Canada Logo*/}
                        <motion.div 
                            className="absolute z-40 flex justify-center items-center pl-3 sm:left-16 bottom-10 gap-x-2"
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
            <div className="h-screen bg-codgray-200 p-3 sm:p-16 text-aurumgrey">
                {/* Header */}
                <div className="bg-aurumgrey text-white rounded-3xl p-2 w-28 flex justify-center items-center">
                    <p>01 - About</p>
                </div>
                <hr class="h-px my-8 border-0 bg-aurumgrey"></hr>

                {/* Intro */}
                <div className="grid grid-cols-3 gap-12">
                    <div className="col-span-2 text-5xl font-semibold">We are leading and educating a new era for air conditioning, heating, cooling, fan coils and retrofits</div>
                    <div className="grid gap-y-4 pb-16">
                        <p>Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity</p>
                        <p className="underline font-semibold">Read More</p>

                    </div>

                </div>

                <div className="grid grid-cols-4 gap-8 w-full">
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                </div>
            </div>
            {/* <div className="flex flex-col py-28 items-center justify-center px-3 mx-auto max-w-6xl">
                <Reveal>
                    <div className="">
                        <img src={TreePhoto} alt="logo" className="h-32"/>
                    </div>
                </Reveal>

                <Reveal>           
                    <h1 className="font-bold text-4xl md:text-5xl">Why <span className="text-aurumgreen-600">Aurum</span>?</h1>
                </Reveal>
                
                <Reveal>
                    <p className="pt-3 text-center md:text-2xl md:leading-loose">Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. </p>
                </Reveal>
            </div> */}

           {/* Product List */}
           <div className="h-screen bg-codgray-200 p-3 sm:p-16 text-aurumgrey">
                {/* Header */}
                <div className="bg-aurumgrey text-white rounded-3xl p-2 w-28 flex justify-center items-center">
                    <p>02 - Products</p>
                </div>
                <hr class="h-px my-8 border-0 bg-aurumgrey"></hr>

                {/* Intro */}
                <div className="grid grid-cols-3 gap-12">
                    <div className="col-span-2 text-5xl font-semibold">We are leading and educating a new era for air conditioning, heating, cooling, fan coils and retrofits</div>
                    <div className="grid gap-y-4 pb-16">
                        <p>Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity</p>
                        <p className="underline font-semibold">Read More</p>

                    </div>

                </div>

                <div className="grid grid-cols-4 gap-8 w-full">
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                    <div className="h-48 bg-aurumgreen-600">filler</div>
                </div>
                <hr class="h-px my-8 border-0 bg-aurumgrey"></hr>
            </div>
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