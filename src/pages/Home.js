//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp, FaArrowRight, FaCanadianMapleLeaf } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IconContext } from "react-icons";

//Rough Assets
import ShortVideo from "../RoughAssets/DTRMOV.mp4"

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

            {/* Animated Intro */}
            <div className="min-h-screen relative">

                    {/* Written Section*/}
                    <div className="absolute text-white flex flex-col gap-8 justify-center z-30 h-screen w-1/2 pl-3 sm:pl-16 text-xl font-bold">
                        <SideReveal propDelay={7.9} className="">
                            <div className="space-y-12">
                                <p className="text-2xl md:text-5xl lg:text-7xl">Old School <span className="text-galliano-300">Values</span> With A New School <span className="text-logogreen">Touch</span></p>
                                <div className="flex items-center space-x-3">
                                    <p className="font-semibold">View Fan Coil Line</p>
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </SideReveal>
                        
                        {/* Canada Logo*/}
                        <div className="z-40 flex items-center gap-x-2">
                            <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                                <FaCanadianMapleLeaf className="text-red-600 h-6 w-6"/>
                            </div>
                            <div className="text-sm font-thin tracking-tight text-neutral-200">
                                <p>ONTARIO MANUFACTURED</p>
                                <p>PROUDLY CANADIAN</p>
                            </div>
                        </div>
                    </div>

                {/* Video BG */}
                <video className='absolute h-screen w-screen object-cover z-10' autoPlay muted>
                    <source src={ShortVideo} type='video/mp4'/>
                </video>
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

            {/* Why Choose Aurum? */}
            <div className="py-20 lg:py-32 px-4 flex justify-center items-center bg-gray-100 text-center lg:text-left">
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