import {motion } from "framer-motion";

//animations
import LeftReveal from "../animations/LeftReveal";

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import FloatingImage from "../components/styles/FloatingImage";

import ShortVideo from "../RoughAssets/DTRMOV.mp4"
import BTR from "../ProductPhotos/CFC.png"
import GoldTree from "../RoughAssets/TreeGold.svg"

export default function Home(){

    const BannerArray = [
        {icon: SiAircanada, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegHandshake, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[7rem]"},
        {icon: FaTree, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegThumbsUp, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
    ]

    return(
        <div className="text-gray-800">

            {/* Introduction */}
            <div className="h-screen relative bg-gradient-to-bl from-naturegreen-500 to-naturegreen-900 lg:bg-aurumwhite px-4 overflow-hidden">
                {/* Accent Divs */}
                <div className="absolute hidden lg:block m-auto bottom-0 left-0 right-0 bg-naturegreen-800 h-2/3 w-full max-w-3xl z-10 mix-blend-multiply"></div>
                <div className="absolute -bottom-14 -right-16 z-20">
                    <img src={BTR} className="h-[500px] brightness-75"/>
                </div>
                <div className="absolute bg-aurumwhite h-[800px] w-[500px] -rotate-45 -bottom-80 -left-72 shadow-2xl"></div>
                <div className="absolute bottom-10 left-4 z-10">
                    <div className="grid grid-cols-2 gap-4">
                        <p className="font-semibold text-naturegreen-800 text-4xl">11.12</p>
                        <p className="w-1/2 text-sm">Nov 2024</p>

                    </div>
                    <h1 className="text-xl text-naturegreen-300">Tradeshow</h1>
                    <h1 className="text-xl text-naturegreen-300">Showcasing</h1>
                    <h1 className="text-xl text-naturegreen-300 ">New Products</h1>
                    <h1 className="text-xl pt-4 text-naturegreen-500 underline font-semibold">Explore</h1>
                </div>


                {/* Written */}
                <div className="flex absolute justify-center h-full w-[calc(100%-32px)] z-20 py-0 lg:py-32">
                    <div className="w-full max-w-7xl lg:grid lg:grid-cols-2">
                        <div className="pt-24 lg:pt-2 h-1/3">
                            <p className="text-aurumaqua-background hidden lg:block">Old School Values With A New School Touch</p>
                            <h1 className="text-4xl lg:text-7xl text-aurumwhite">Comfort, Quality</h1>
                            <h1  className="text-4xl lg:text-8xl font-semibold text-aurumaqua-primary">Expertise</h1>
                            <h1  className="py-2 text-naturegreen-300">Cooling homes with 40+ years of experience</h1>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <button className="w-full h-12 rounded-3xl bg-neutral-800 text-white">Our Products</button>
                                <button className="w-full h-12 rounded-3xl bg-aurumwhite">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* What is Aurum? */}
            <div className="relative px-4 py-20 lg:py-32 flex justify-center items-center bg-naturegreen-800 text-aurumwhite lg:text-left">
                {/* Style */}
                <div className="absolute m-auto left-0 -right-96 opacity-40">
                    <img src={GoldTree} className="h-[1000px]"/>
                </div>

                {/* Written */}
                <div className="max-w-7xl grid lg:grid-cols-5 gap-14 z-10">
                    <div className="lg:items-start space-y-4 lg:col-span-2">
                        <div>
                            <h1 className="font-semibold text-3xl lg:text-4xl underline decoration-aurumgold-500 decoration-4">What is <span className="text-aurumaqua-primary">Aurum</span>?
                            </h1>
                            {/* <svg height="20" width="200" viewBox="50 50 1 10" className="fill-aurumgold-600">
                                <path d="M 0 60 Q 50 40 100 60 Q 50 45 0 60 Z" />
                            </svg> */}
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                    </div>
                    <div className="flex justify-center items-center lg:col-span-3">
                        <video className='object-cover z-10 rounded-3xl' autoPlay muted>
                            <source src={ShortVideo} type='video/mp4'/>
                        </video>
                    </div>
                </div>

            </div>

            {/* Explore Our Products */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-aurumwhite text-naturegreen-800 text-center lg:text-left">
                <div className="max-w-7xl grid lg:grid-cols-5 gap-14">
                    <div className="flex flex-col justify-center items-center lg:items-start space-y-4 lg:col-span-2">
                        <h1 className="font-semibold text-3xl lg:text-4xl">Old School <span className="text-aurumgold-700">Values</span> With A <span className="text-aurumgold-700">New School Touch</span></h1>
                    </div>
                    <div className="flex justify-center items-center lg:col-span-3 w-full">
                        {/* <img src={TempPhoto} className="w-full rounded-3xl shadow-2xl"/> */}
                        <FloatingImage/>
                    </div>
                </div>

            </div>

            {/* Why Choose Aurum? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-white text-center lg:text-left">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <p className="text-aurumgreen-500">THE AURUM DIFFERENCE</p>
                    <h1 className="text-3xl lg:text-5xl font-bold py-4">Why choose Aurum for your home?</h1>

                    {/* Banner */}
                    <div className="py-4">
                        <div className="my-6 p-6 grid lg:grid-cols-4 gap-12">
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
            <div className="flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-aurumgreen-600 to-sky-600 py-32 text-white px-4 text-center lg:text-left">
                <h1 className="text-2xl lg:text-4xl font-bold">Ready to put an end to your old HVAC system?</h1>
                <button className="bg-aurumgrey w-60 rounded-3xl p-3">Contact Support</button>
            </div>
        </div>
    )
}