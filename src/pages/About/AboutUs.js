import Reveal from "../../animations/Reveal"

export default function AboutUs(){

    const ceoCard = [
        {
            name: "Vittorio Zorzit",
            pos: "Co-Founder / CEO"
        },
        {
            name: "Adam Zorzit",
            pos: "Co-Founder / CEO"
        },
        {
            name: "Stacy Zorzit",
            pos: "Co-Founder / CEO"
        },
    ]

    const blurbData = [
        {
            header:'50+',
            text:'Years of experience'
        },
        {
            header:'20+',
            text:'Dedicated Partners'
        },
        {
            header:'20+',
            text:'Full-time professional employees'
        },
        {
            header:'5+',
            text:'Innovative Patents'
        },
        
    ]

    return(
        <div className="flex flex-col justify-center items-center text-gray-100 bg-aurumblack">
            <div  className="h-auto w-full max-w-7xl px-8 py-36">
                <Reveal className="" propDelay={0}>
                    <h1 className="text-4xl lg:text-7xl text-gray-100 ">Meet The Team</h1>
                </Reveal>
                {/* Meet the Team */}
                <Reveal className="space-y-8 py-12" propDelay={0.1}>
                    <p className="text-zinc-400g">Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit.</p>
                    <div className="space-y-8 lg:space-y-0 lg:py-10 lg:flex lg:justify-between">
                        {ceoCard.map((item, index) =>(
                            <div className="flex items-center gap-4" key={index}>
                                <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" className="h-12 w-12 lg:h-16 lg:w-16 rounded-full object-fill"/>
                                <div>
                                    <h1 className="lg:text-2xl">{item.name}</h1>
                                    <h1 className="lg:text-xl lg:text-zinc-400">{item.pos}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* I wanna play yugioh so bad */}
                <div className="bg-gradient-to-bl from-leafgreen to-naturegreen-900 text-white p-4 rounded-3xl w-full space-y-8">
                    <h1 className="text-4xl ">Our Acheivements</h1>
                    <div className="space-y-8 lg:space-x-0 lg:grid lg:grid-cols-2 ">
                        <p>Aurum Manufacturing, based in Canada, specializes in replacing outdated fan coil systems. We collaborate closely with suppliers, vendors, and contractors to deliver high-quality products. Our fan coil units are crafted with precision for energy efficiency and optimal air control. With extensive experience in residential and commercial projects, we customize our models to exceed customer expectations. Aurum is recognized for flexibility in design, ensuring our units fit seamlessly into buildings of varying dimensions, reflecting our commitment to superior HVAC solutions.</p>
                        <div className="py-10 lg:py-0 space-y-6">
                            {blurbData.map((item, index) => (
                                <div>
                                    <p className="text-2xl ">{item.header}</p>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h1 className="pt-16 pb-32  text-aurumgold-700 text-3xl text-center">"Old School Values with a New School Touch"</h1>
            </div>
        </div>
    )
}