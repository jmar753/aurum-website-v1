import owner1 from "../ProductPhotos/Resources/OwnersGuide/1721063683490-57b54984-fd15-49f1-a026-3a9ed1398af2_1.jpg"
import owner2 from "../ProductPhotos/Resources/OwnersGuide/1721063683490-57b54984-fd15-49f1-a026-3a9ed1398af2_2.jpg"

import maintenance1 from "../ProductPhotos/Resources/Maintenance/Maintenance-Guide_page-0001.jpg"
import maintenance2 from "../ProductPhotos/Resources/Maintenance/Maintenance-Guide_page-0002.jpg"

import thermo1 from "../ProductPhotos/Resources/ThermoGuide/Simplified-Thermostat-Guides_page-0001.jpg"
import thermo2 from "../ProductPhotos/Resources/ThermoGuide/Simplified-Thermostat-Guides_page-0002.jpg"

import warranty1 from "../ProductPhotos/Resources/Warranty/Standard-Limited-Warranty_page-0001.jpg"




export default function Resources(){
    const Tabs = [
        {
            name: "Owner's Guide",
            description: "This owner’s manual will outline key information that may be necessary for you and your new fan coil unit. Providing information on the operations of your fan coil unit, the maintenance of your fan coil unit, simplified thermostat instructions, and brief troubleshooting instructions.",
            pic1: owner1,
            pic2: owner2
        },
        {
            name: "Maintenance Guide",
            description: "The Aurum maintenance guide will teach you how to clean and handle your Aurum product to ensure that your retrofit runs smoothly. Simple maintenance can be done by the owner, but when handling electrical and water lines, a professional is recommended!",
            pic1: maintenance1,
            pic2: maintenance2
        },
        {
            name: "Simplified Thermostat Guides",
            description: "This guide will instruct you how to use 	Honeywell thermostat that comes installed with your fan coil. Full instructions from Honeywell can also be found within the user manual.",
            pic1: thermo1,
            pic2: thermo2
        },
        {
            name: "Standard Limited Warranty",
            description: "The Aurum standard-limited warranty will go over your product protection plan whilst explaining your rights as an Aurum product owner. It will also go over Aurum’s rights as a product distributor.",
            pic1: warranty1,
            pic2: warranty1
        },
    ]
    return(
        <div className="flex flex-col justify-center items-center text-aurumwhite bg-gradient-to-bl from-naturegreen-400 to-naturegreen-900 ">
            <div className="h-auto w-full max-w-7xl px-8 py-36">
                <div className="">
                    <h1 className="text-4xl lg:text-7xl text-aurumwhite font-semibold">Resources</h1>
                </div>

                <div className="py-20 gap-4 grid grid-cols-1 divide-y-2">
                    {Tabs.map((item, index) => (
                        <div className="py-8 space-y-4">
                            <h1 className="text-3xl text-aurumwhite font-semibold">{item.name}</h1>
                            <p>{item.description}</p>
                            <div className="relative w-full h-[300px]">
                                <img src={item.pic1} className="absolute h-[200px] z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black"/>
                                <img src={item.pic2} className="absolute h-[200px] z-10 top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 border border-black"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}