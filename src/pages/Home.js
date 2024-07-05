import {motion } from "framer-motion";

//animations
import LeftReveal from "../animations/LeftReveal";

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import Carousel from "../components/containers/Carousel";
import RightReveal from "../animations/RightReveal";
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
            <div className="min-h-screen ">
                {/* Written Section*/}
                <div className="flex flex-col md:justify-center items-center w-full gap-8 pt-[120px] md:pt-0 z-30 h-screen px-4 text-gray-800 text-xl font-bold ">
                    <div className="max-w-7xl w-full space-y-4 flex flex-col sm:space-y-0 md:grid md:grid-cols-2 md:gap-6 min-h-screen ">
                        {/* Right */}
                        <div className="space-y-4 flex flex-col justify-center text-center sm:text-left">
                            <LeftReveal>
                                <div className="">
                                    <p className="text-4xl md:text-5xl lg:text-6xl">Old School <span className="text-galliano-300">Values</span> With A New School <span className="text-aurumgreen-600">Touch</span></p>
                                </div>
                            </LeftReveal>
                            <LeftReveal>
                                <p className="text-gray-600 text-lg sm:text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ornare leo, ut aliquam dolor. Proin quis tincidunt neque, vel aliquet nisl. Etiam id mattis nulla. Etiam vitae libero turpis.</p>
                            </LeftReveal>
                            <div className="grid grid-cols-2 md:flex md:items-center gap-2 sm:gap-4 font-semibold text-base sm:space-y-6 md:space-y-0 sm:pt-2">
                                <motion.div 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.3, ease: 'easeOut', delay: 0.9 }}
                                >
                                    <button className="p-4 h-12 group bg-aurumgreen-600 hover:bg-aurumgreen-700 text-white flex justify-center items-center gap-x-4 transition duration-200 w-full sm:w-auto rounded-3xl">
                                        <p>View Retrofits</p>
                                        <FaArrowRight className="hidden sm:block"/>
                                    </button>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.3, ease: 'easeOut', delay: 1.1 }}
                                >
                                    <button className="p-4 h-12 group hover:border-aurumgreen-600 hover:text-aurumgreen-600 border-2 border-gray-800 flex justify-center items-center gap-x-2 transition duration-200 w-full sm:w-auto rounded-3xl">
                                        <p>Installation <span className="hidden sm:block">Services</span></p>
                                        <FaArrowRight className="hidden sm:block group-hover:translate-x-2 h-2"/>
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Left */}
                        <div className="flex items-center overflow-hidden px-4">
                            <RightReveal propDelay={0.35}>
                                <Carousel/>
                            </RightReveal>
                        </div>
                        {/* <div className="flex justify-center items-center w-full">
                            <ProductDisplay/>
                        </div> */}

                    </div>
                </div>
            </div>


            {/* What is Aurum? */}
            <div className="py-32 bg-zinc-50 grid grid-cols-2 text-gray-800">
                <div className="flex justify-center items-center">1</div>
                <div className="flex justify-center items-center">What is Aurum?</div>

            </div>

            {/* Why Choose Aurum? */}
            <div className="h-screen w-full flex justify-center items-center bg-zinc-50">
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
            <div className="flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-aurumgreen-600 to-sky-600 py-32">
                <h1 className="text-4xl font-bold">Ready to put an end to your old HVAC system?</h1>
                <button className="bg-aurumgrey w-60 rounded-3xl p-3">Contact Support</button>
            </div>
        </div>
    )
}