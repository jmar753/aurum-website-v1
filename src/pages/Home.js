import ShortVideo from "../RoughAssets/RoughMain.mp4"
import TreePhoto from "../RoughAssets/TreeGold.svg"
import LoadReveal from "../animations/LoadReveal"
import Reveal from "../animations/Reveal"

//react-icons library: https://react-icons.github.io/react-icons/
import { SiAircanada } from "react-icons/si";
import { FaRegHandshake, FaTree, FaRegThumbsUp  } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IconContext } from "react-icons";
import { DiEnvato } from "react-icons/di";

export default function Home(){

    const BannerArray = [
        {icon: SiAircanada, description:"Canadian Based Manufacturer"},
        {icon: FaRegHandshake, description:"Trusted by Property Managers & Trade Technicians "},
        {icon: FaTree, description:"A Family Business With Over 40 years Experience"},
        {icon: FaRegThumbsUp , description:"100% Satisfaction Guaranteed"},
        {icon: GiAchievement, description:"Made With The Highest Quality & Craftsmanship"},
    ]

    return(
        <div className="text-white relative">


            {/* Animated Intro */}
            <div className="min-h-screen">
                    {/* Words*/}
                    <div className="absolute text-white flex flex-col gap-8 items-center justify-center z-30 h-screen w-1/2 sm:w-1/3 pl-3 sm:pl-16 text-xl font-bold">
                        <LoadReveal propDelay={8.0} className="">
                            <p className="text-2xl">Old School Values With A New School Touch</p>
                            <p className="">View Products</p>
                        </LoadReveal>
                    </div>

                {/* Video */}
                <video className='absolute h-screen w-screen object-cover z-10' autoPlay muted>
                    <source src={ShortVideo} type='video/mp4'/>
                </video>
            </div>


            {/* Who Are We? */}
            <div className="flex flex-col py-48 items-center justify-center px-3">
                <Reveal>
                    <div className="">
                        <img src={TreePhoto} className="h-32"/>
                    </div>
                </Reveal>

                <Reveal>           
                    <h1 className="font-bold text-4xl">Why <span className="text-logogreen">Aurum</span>?</h1>
                </Reveal>
                
                <Reveal>
                    <p className="pt-3">Aurum is a family owned and operated business that operates with more emphasis on customer relationships rather than sale making. Building a meaningful relationship with our customers, suppliers, vendors, and every individual in our process is our main focus as a company. Aurum prides ourselves in treating each customer like they’re our only customer, not just another number. We believe our success is meaningless without integrity. </p>
                </Reveal>
            </div>


            {/* Banner */}
            <div className="">
                {BannerArray.map((item, index) => (
                    <IconContext.Provider value={{ className: 'text-xl text-aurumgold size-[1.5rem] ' }}>
                        <div className="flex justify-center items-center gap-x-2">
                            <item.icon/>
                            <p className="">{item.description}</p>
                        </div>
                </IconContext.Provider>
        ))}
            </div> 
        </div>
    )
}