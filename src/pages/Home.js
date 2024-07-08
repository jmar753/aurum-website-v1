import {motion } from "framer-motion";

//animations
import LeftReveal from "../animations/LeftReveal";

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import Carousel from "../components/containers/Carousel";
import RightReveal from "../animations/RightReveal";
import FloatingImage from "../components/styles/FloatingImage";

import ShortVideo from "../RoughAssets/DTRMOV.mp4"
import TempPhoto from "../RoughAssets/TempDisplay.png"
import ProductDisplay from "../components/containers/ProductDisplay";

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
            <div className="h-screen relative bg-aurumwhite">
                {/* Accent Divs */}
                <div className="absolute m-auto bottom-0 left-0 right-0 bg-naturegreen h-2/3 w-full max-w-3xl z-10 mix-blend-multiply"></div>

                {/* Written */}
                <div className="flex absolute justify-center h-full w-full z-20 py-32">
                    <div className="w-full max-w-7xl grid grid-cols-2">
                        <div className="pt-2">
                            <p>Old School Values With A New School Touch</p>
                            <h1 className="text-7xl text-naturegreen">Comfort, Quality</h1>
                            <h1  className="text-8xl font-semibold text-[#d2ba1a] mix-blend-multiply">Expertise</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* What is Aurum? */}
            <div className="px-4 py-20 md:py-32 flex justify-center items-center bg-zinc-50 text-gray-800 text-center md:text-left">
                <div className="max-w-7xl grid md:grid-cols-5 gap-14">
                    <div className="flex justify-center items-center md:col-span-3">
                        <video className='object-cover z-10 rounded-3xl' autoPlay muted>
                            <source src={ShortVideo} type='video/mp4'/>
                        </video>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:col-span-2">
                        <h1 className="font-semibold text-3xl md:text-4xl">What is <span className="text-aurumgreen-600">Aurum</span>?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                        <button className="p-4 h-12 max-w-fit px-8 group bg-aurumgreen-600 hover:bg-aurumgreen-700 text-white flex justify-center items-center gap-x-4 transition duration-200 sm:w-auto rounded-3xl">
                            <p>Learn More</p>
                            <FaArrowRight className="hidden sm:block"/>
                        </button>
                    </div>
                </div>

            </div>

            {/* Explore Our Products */}
            <div className="py-20 md:py-32 px-4 flex justify-center items-center bg-aurumwhite text-gray-800 text-center md:text-left">
                <div className="max-w-7xl grid md:grid-cols-5 gap-14">
                    <div className="flex flex-col justify-center items-center md:items-start space-y-4 md:col-span-2">
                        <h1 className="font-semibold text-3xl md:text-4xl">Explore Our Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                        <button className="p-4 h-12 max-w-fit px-8 group bg-aurumgreen-600 hover:bg-aurumgreen-700 text-white flex justify-center items-center gap-x-4 transition duration-200 sm:w-auto rounded-3xl">
                            <p>View Products</p>
                            <FaArrowRight className="hidden sm:block"/>
                        </button>
                    </div>
                    <div className="flex justify-center items-center md:col-span-3 w-full">
                        {/* <img src={TempPhoto} className="w-full rounded-3xl shadow-2xl"/> */}
                        <FloatingImage/>
                    </div>
                </div>

            </div>

            {/* Why Choose Aurum? */}
            <div className="py-20 md:py-32 px-4 flex justify-center items-center bg-white text-center md:text-left">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <p className="text-aurumgreen-500">THE AURUM DIFFERENCE</p>
                    <h1 className="text-3xl md:text-5xl font-bold py-4">Why choose Aurum for your home?</h1>

                    {/* Banner */}
                    <div className="py-4">
                        <div className="my-6 p-6 grid md:grid-cols-4 gap-12">
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
            <div className="flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-aurumgreen-600 to-sky-600 py-32 text-white px-4 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold">Ready to put an end to your old HVAC system?</h1>
                <button className="bg-aurumgrey w-60 rounded-3xl p-3">Contact Support</button>
            </div>
        </div>
    )
}