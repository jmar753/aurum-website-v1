// import {motion } from "framer-motion";

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp } from "react-icons/fa";

//Rough Assets
import ShortVideo from "../RoughAssets/DTRMOV.mp4"
import BTR from "../ProductPhotos/CFC.png"
import GoldTree from "../RoughAssets/TreeGold.svg"

//AssetPhotos
import AdamChillin from "../AssetPhotos/AdamChillin.png"
import OfficeBuilding from "../AssetPhotos/AurumFront.png"

export default function Home(){

    const BannerArray = [
        {icon: SiAircanada, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegHandshake, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[7rem]"},
        {icon: FaTree, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
        {icon: FaRegThumbsUp, title: "Plan With Confidence", description:"Whether it's for the next 6 months or next 5 years, use our built-in integrations, reports and auto-generated forecasts to develop plans you can rely on.", size: "size-[4rem]"},
    ]

    const retrofits = [
        {
            name: "CFC Series",
            description: "Aurum’s CFC Series is our replacement solution for outdated closet fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement.",
        },
        {
            name: "DTR Series",
            description: "Aurum’s DTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        },
        {
            name: "BTR Series",
            description: "Aurum’s BTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        },
    ]

    return(
        <div className="text-gray-800">

            {/* Introduction */}
            {/* <div className="h-[calc(95vh)] sm:h-screen relative bg-gradient-to-bl from-naturegreen-500 to-naturegreen-900 lg:bg-aurumwhite px-4 overflow-hidden">


                <div className="absolute hidden lg:block m-auto bottom-0 left-0 right-0 bg-naturegreen-800 h-2/3 w-full max-w-3xl z-10 mix-blend-multiply"></div>
                <div className="absolute -bottom-14 -right-16 z-20">
                    <img src={BTR} alt="retrofit" className="h-[500px] brightness-75"/>
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


                <div className="flex absolute justify-center h-full w-[calc(100%-32px)] z-20 py-0 lg:py-32">
                    <div className="w-full max-w-7xl lg:grid lg:grid-cols-2">
                        <div className="pt-24 lg:pt-2 h-1/3 text-center">
                            <p className="text-aurumaqua-background hidden lg:block">Old School Values With A New School Touch</p>
                            <h1 className="text-4xl lg:text-7xl text-aurumwhite">Comfort, Quality</h1>
                            <h1  className="text-5xl lg:text-8xl font-semibold text-aurumaqua-primary">Expertise</h1>
                            <h1  className="py-2 text-naturegreen-300">Cooling homes with 40+ years of experience</h1>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <button className="w-full h-12 rounded-lg bg-[#6AB04C] text-white">Our Products</button>
                                <button className="w-full h-12 rounded-lg text-white bg-aurumaqua-primary">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col justify-center items-center h-auto sm:h-screen bg-gradient-to-bl from-naturegreen-400 to-naturegreen-900 lg:bg-aurumwhite px-4 overflow-hidden">

                <div className="flex justify-center h-full w-[calc(100%-32px)] z-20">
                    <div className="w-full max-w-7xl lg:grid lg:grid-cols-2 pt-36">
                        <div className="pt-10 lg:pt-2 text-left space-y-2">

                            <h1 className="text-4xl lg:text-7xl text-aurumwhite font-semibold">Old School Values With A New School Touch</h1>
                            <h1  className="py-2 text-aurumaqua-primary">"40 Years of Excellence in HVAC Solutions for Apartments and Businesses"</h1>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <button className="w-full h-12 rounded-lg bg-[#6AB04C] text-white">Our Products</button>
                                <button className="w-full h-12 rounded-lg text-white bg-aurumaqua-primary">Contact Us</button>
                            </div>

                            <div class="flex items-center pt-4">
                                <input type="email" id="input-9" class="w-full h-12 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded-lg shadow-sm bg-aurumwhite" placeholder="user@mail.com"/>
                                <button class="h-12 px-4 text-sm bg-naturegreen-500 border border-l-0  rounded-r-lg shadow-sm text-aurumwhite hover:text-white hover:bg-blue-400 hover:border-naturegreen-200 focus:outline-none">Subscribe</button>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                
                {/* Accent Divs */}
                <div className="relative h-[500px] w-full">
                    <div className="absolute m-auto -bottom-[350px] -right-20 h-[400px] w-[calc(200vw)] bg-aurumwhite -rotate-[10deg] z-10"></div>
                    <div className="absolute -bottom-16 -right-16 z-20">
                        <img src={BTR} alt="retrofit" className="h-[500px] brightness-75"/>
                    </div>

                    {/* <div className="absolute top-20 z-10 bg-leafgreen p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <p className="font-semibold text-aurumwhite text-4xl">11.12</p>
                            <p className="w-1/2 text-sm text-aurumwhite">Nov 2024</p>

                        </div>
                        <h1 className="text-naturegreen-300">Tradeshow</h1>
                        <h1 className="text-naturegreen-300">Showcasing</h1>
                        <h1 className="text-naturegreen-300 ">New Products</h1>
                        <h1 className="pt-4 text-naturegreen-500 underline font-semibold">Explore</h1>
                    </div> */}
                </div>
            </div>


            {/* What is Aurum? */}
            <div className="px-4 border-x-2">
                <div className="relative h-auto py-20 lg:py-32 flex justify-center items-center bg-aurumwhite text-naturegreen-800 overflow-hidden lg:text-left">

                    <div className="absolute m-auto left-0 -right-96 opacity-40">
                        <img alt="aurumTree" src={GoldTree} className="h-[1000px]"/>
                    </div>

                    <div className="max-w-7xl grid lg:grid-cols-5 gap-14 z-10 px-4">
                        <div className="lg:items-start space-y-4 lg:col-span-2">
                            <div>
                                <h1 className="font-semibold text-3xl lg:text-4xl">What is Aurum?
                                </h1>
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
            </div>

            {/* About Us */}
            <div className="py-20 lg:py-32 px-4 h-auto flex justify-center items-center bg-aurumwhite text-naturegreen-800 text-center lg:text-left">
                <div className="max-w-7xl">
                    <div className="flex flex-col justify-center items-center lg:items-start space-y-4 lg:col-span-2">
                        <h1 className="font-semibold text-3xl lg:text-4xl">Old School <span className="text-naturegreen-800 font-bold">Values</span> With A <span className="text-naturegreen-800 font-bold">New School Touch</span></h1>
                    </div>
                    <div className="flex flex-col md:flex-row pt-16 gap-4 relative">
                        <div className="relative h-80 w-full md:w-1/2 rounded-xl">
                            <div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
                            <img alt="Aurum Office" src={OfficeBuilding} className="absolute h-full w-full rounded-xl object-cover"/>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-aurumwhite z-20">
                                <p className="font-semibold text-2xl">About Us</p>
                                <p className="underline">Read our Journey</p>
                            </div>
                        </div>

                        <div className="relative h-80 w-full md:w-1/2 rounded-xl">
                            <div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
                            <img src={AdamChillin} alt="Aurum Office" className="absolute h-full w-full rounded-xl object-cover z-10"/>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-aurumwhite z-30">
                                <p className="font-semibold text-2xl">Our Story</p>
                                <p className="underline">Read our Journey</p>
                            </div>
                        </div>
                        <div className="absolute hidden bg-naturegreen-800 w-screen h-[300px] -bottom-32 -left-4 z-0"></div>
                    </div>
                </div>

            </div>

            {/* What are we offering? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-naturegreen-800 text-aurumwhite text-center lg:text-left">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl lg:text-5xl font-medium py-4">Explore our <span>wide variety of retrofits</span> </h1>
                    
                    {/* Products */}
                    <div className="h-auto text-aurumwhite text-left divide-y divide-dashed divide-aurumwhite">
                        {retrofits.map((item, index) => (
                            <div key={index} className="py-4 space-y-4">
                                <h1 className="text-2xl font-medium">{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Aurum? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-aurumwhite text-center lg:text-left">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <p className="text-aurumgreen-500">THE AURUM DIFFERENCE</p>
                    <h1 className="text-3xl lg:text-5xl font-bold py-4">Why choose Aurum for your home?</h1>

                    {/* Banner */}
                    <div className="py-4">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {BannerArray.map((item, index) => (
                                <div key={index} className="text-left space-y-6 rou">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="h-8 w-8 lg:h-16 lg:w-16 flex justify-center items-center rounded-full bg-naturegreen-300">
                                            <item.icon className="text-white h-6 w-6 lg:h-10 lg:w-10"/>
                                        </div>
                                        <p className="text-2xl font-semibold">{item.title}</p>
                                    </div>
                                    <p className="text-lg text-neutral-400">{item.description}</p>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}