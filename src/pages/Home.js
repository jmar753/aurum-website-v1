//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IconContext } from "react-icons";

//Rough Assets
import ShortVideo from "../RoughAssets/RoughMain.mp4"

//AssetPhotos
import AdamChillin from "../AssetPhotos/AdamChillin.png"
import OfficeBuilding from "../AssetPhotos/AurumFront.png"


import TreePhoto from "../RoughAssets/TreeGold.svg"

//animations
import Reveal from "../animations/Reveal"
import SideReveal from "../animations/SideReveal";


export default function Home(){

    const BannerArray = [
        {icon: SiAircanada, description:"Canadian Based Manufacturer", size: "size-[4rem]"},
        {icon: FaRegHandshake, description:"Trusted by Property Managers & Trade Technicians ", size: "size-[7rem]"},
        {icon: FaTree, description:"A Family Business With Over 40 years Experience", size: "size-[4rem]"},
        {icon: FaRegThumbsUp , description:"100% Satisfaction Guaranteed", size: "size-[4rem]"},
        {icon: GiAchievement, description:"Made With The Highest Quality & Craftsmanship", size: "size-[7rem]"},
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
        <div className="text-white">

            {/* Introduction */}
            <div className="min-h-screen flex flex-col lg:flex-row lg:relative">
                {/* Written Section */}
                <div className="flex flex-col gap-8 justify-center z-30 h-auto w-auto m-8 lg:m-0 lg:h-screen lg:w-1/2 pl-0 lg:pl-16 text-xl font-bold">
                    <SideReveal propDelay={7.9} className="">
                    <div className="pt-10 lg:pt-2 text-left space-y-2">
                        <h1 className="text-4xl lg:text-7xl text-gray-100 font-semibold">Old School Values With A New School Touch</h1>
                        <h1 className="py-2 text-aurumaqua-primary">"40 Years of Excellence in HVAC Solutions for Apartments and Businesses"</h1>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                        <button className="w-full h-12 rounded-lg bg-[#6AB04C] text-white">Our Products</button>
                        <button className="w-full h-12 rounded-lg text-white bg-aurumaqua-primary">Contact Us</button>
                        </div>

                        {/* <div className="flex items-center pt-4">
                            <input type="email" id="input-9" className="w-full h-12 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none focus:outline-none rounded-lg shadow-sm bg-gray-100" placeholder="user@mail.com" />
                            <button className="h-12 px-4 text-sm bg-naturegreen-500 border border-l-0 rounded-r-lg shadow-sm text-gray-100 hover:text-white hover:bg-blue-400 hover:border-naturegreen-200 focus:outline-none">Subscribe</button>
                        </div> */}
                    </div>
                    </SideReveal>

                    {/* Canada Logo */}
                    {/* <div className="z-40 hidden lg:flex items-center gap-x-2">
                        <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                            <FaCanadianMapleLeaf className="text-red-600 h-6 w-6" />
                        </div>
                        <div className="text-sm font-thin tracking-tight text-neutral-200">
                            <p>ONTARIO MANUFACTURED</p>
                            <p>PROUDLY CANADIAN</p>
                        </div>
                    </div> */}
                </div>

                {/* Video BG */}
                <div className="relative w-full lg:absolute lg:h-screen">
                    <video className='h-full w-full lg:object-cover z-10' autoPlay muted>
                        <source src={ShortVideo} type='video/mp4' />
                    </video>
                </div>
            </div>

            {/* Who Are We? */}
            <div className="flex flex-col py-28 items-center justify-center px-3 mx-auto max-w-6xl">
                <Reveal>
                    <div className="">
                        <img src={TreePhoto} alt="logo" className="h-32"/>
                    </div>
                </Reveal>

                <Reveal>           
                    <h1 className="font-bold text-4xl md:text-5xl">Why <span className="text-logogreen">Aurum</span>?</h1>
                </Reveal>
                
                <Reveal>
                    <p className="pt-3 text-center md:text-2xl md:leading-loose">Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. </p>
                </Reveal>
            </div>


            {/* What are we offering? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-naturegreen-800 text-gray-100 text-center lg:text-left">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl lg:text-5xl font-medium py-4">Explore our <span>wide variety of retrofits</span> </h1>
                    
                    {/* Products */}
                    <div className="h-auto text-gray-100 text-left divide-y divide-dashed divide-gray-100">
                        {retrofits.map((item, index) => (
                            <div key={index} className="py-4 space-y-4">
                                <h1 className="text-2xl font-medium">{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="py-20 lg:py-32 px-4 h-auto flex justify-center items-center bg-neutral-900 text-white text-center lg:text-left">
                <div className="max-w-7xl">
                    <div className="flex flex-col justify-center items-center lg:items-start space-y-4 lg:col-span-2">
                        <h1 className="font-semibold text-3xl lg:text-4xl">Old School <span className="text-naturegreen-800 font-semibold">Values</span> With A <span className="text-naturegreen-800 font-semibold">New School Touch</span></h1>
                    </div>
                    <div className="flex flex-col md:flex-row pt-16 gap-4 relative">
                        <div className="relative h-80 w-full md:w-1/2 rounded-xl">
                            <div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
                            <img alt="Aurum Office" src={OfficeBuilding} className="absolute h-full w-full rounded-xl object-cover"/>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 z-20">
                                <p className="font-semibold text-2xl">About Us</p>
                                <p className="underline">Read our Journey</p>
                            </div>
                        </div>

                        <div className="relative h-80 w-full md:w-1/2 rounded-xl">
                            <div className="absolute h-full w-full z-20 rounded-xl bg-gradient-to-t from-black to-naturegreen-500/0"></div>
                            <img src={AdamChillin} alt="Aurum Office" className="absolute h-full w-full rounded-xl object-cover z-10"/>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 z-30">
                                <p className="font-semibold text-2xl">Our Story</p>
                                <p className="underline">Read our Journey</p>
                            </div>
                        </div>
                        <div className="absolute hidden bg-naturegreen-800 w-screen h-[300px] -bottom-32 -left-4 z-0"></div>
                    </div>
                </div>
            </div>

            {/* Why Choose Aurum? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center text-center lg:text-left bg-neutral-900">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <p className="text-aurumgreen-500">THE AURUM DIFFERENCE</p>
                    <h1 className="text-3xl lg:text-5xl font-semibold py-4">Why choose Aurum for your home?</h1>

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