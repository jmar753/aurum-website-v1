import owner1 from "../ProductPhotos/Resources/OwnersGuide/1721063683490-57b54984-fd15-49f1-a026-3a9ed1398af2_1.jpg"
import owner2 from "../ProductPhotos/Resources/OwnersGuide/1721063683490-57b54984-fd15-49f1-a026-3a9ed1398af2_2.jpg"

export default function Resources(){
    const Tabs = [
        {
            name: "Owner's Guide",
            description: "This owner’s manual will outline key information that may be necessary for you and your new fan coil unit. Providing information on the operations of your fan coil unit, the maintenance of your fan coil unit, simplified thermostat instructions, and brief troubleshooting instructions."
        },
        {
            name: "Maintenance Guide",
            description: "The Aurum maintenance guide will teach you how to clean and handle your Aurum product to ensure that your retrofit runs smoothly. Simple maintenance can be done by the owner, but when handling electrical and water lines, a professional is recommended!"
        },
        {
            name: "Simplified Thermostat Guides",
            description: "This guide will instruct you how to use 	Honeywell thermostat that comes installed with your fan coil. Full instructions from Honeywell can also be found within the user manual."
        },
        {
            name: "Standard Limited Warranty",
            description: "The Aurum standard-limited warranty will go over your product protection plan whilst explaining your rights as an Aurum product owner. It will also go over Aurum’s rights as a product distributor."
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
                                <img src={owner1} className="absolute h-[200px] z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black"/>
                                <img src={owner2} className="absolute h-[200px] z-10 top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 border border-black"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}