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
        <>
            {/* Header Padding */}
			<div className="pt-28 w-full"/>

            {/* Intro */}
            <div className="w-full pb-14 relative border-b text-white" >
                <div className="flex justify-between pr-4 absolute h-28 w-full">
                    <h1 className="text-lg text-gray-100 px-4 col-span-2 z-10">ABOUT US</h1>{/* Intro */}
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col justify-center items-center text-gray-100 bg-aurumblack">
                <div  className="h-auto w-full max-w-7xl px-8 pt-10">
                    <div className="" propDelay={0}>
                        <h1 className="text-3xl text-gray-100 ">Meet The Team</h1>
                    </div>
                    {/* Meet the Team */}
                    <div className="space-y-8 py-12" propDelay={0.1}>
                        <p className="text-lg">Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit.</p>
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
                    </div>

                    {/* I wanna play yugioh so bad */}
                    <div className="bg-gradient-to-bl from-leafgreen to-naturegreen-900 text-white p-12 rounded-3xl w-full space-y-8">
                        <h1 className="text-xl">Our Achievements</h1>
                        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 gap-12">
                            <div className="space-y-3">
                                {blurbData.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-2xl text-aurumgold-500">{item.header}</p>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-8">
                                <p className="text-lg">
                                    Aurum Manufacturing, based in Canada, specializes in replacing outdated fan coil systems. We collaborate with suppliers, vendors, and contractors to deliver high-quality, energy-efficient, and precisely crafted fan coil units. With extensive experience in residential and commercial projects, we customize models to exceed customer expectations. Known for design flexibility, our units fit seamlessly into buildings of various dimensions, reflecting our commitment to superior HVAC solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div  className="h-auto w-full max-w-7xl px-8 pt-24">
                    <div className="" propDelay={0}>
                        <h1 className="text-3xl lg:text-7xl text-gray-100 ">Who We Are</h1>
                    </div>
                    {/* Meet the Team */}
                    <div className="space-y-8 py-12" propDelay={0.1}>
                        <p className="text-lg">At Aurum, our core values define who we are and the decisions we make. We design with old school values, while adding a new school touch. We are dedicated to building products with the same type of precision, detail, craftsmanship and reliability as they were built years ago. Our expertise allows us to build our products using the same reliable ideas that have supported us through decades but by revolutionizing these concepts using modern day technologies and superior efficiencies. Here at Aurum, our priority is to provide you with quality, reliability, comfort and care. We value integrity because without it, our success is meaningless. Aurum promises to work tirelessly to meet and exceed the expectations of our customers with everything we do.</p>
                    </div>
                </div>

                <div  className="h-auto w-full max-w-7xl px-8 pt-20">
                    <div className="" propDelay={0}>
                        <h1 className="text-3xl lg:text-7xl text-gray-300">What We Do</h1>
                    </div>
                    {/* Meet the Team */}
                    <div className="space-y-8 py-12" propDelay={0.1}>
                        <p className="text-lg">Aurum Manufacturing is a Canadian based manufacturer specializing in the replacement solutions for outdated fan coil systems. We are dedicated to working closely with suppliers, vendors and contractors to deliver superior products for the end user. All Aurum model fan coil units are made with the highest degree of quality and craftsmanship. Aurum has focused their goal on creating solutions for energy efficiency and effective air control and movement.  Over the years, we have manufactured equipment for thousands of projects and applications including residential and commercial multi-story buildings. We stand by our designs and being a leader in the HVAC industry, we pride ourselves in being able to customize our models to meet and exceed our customer’s needs. Our various fan coil unit sizes have been manufactured to fit the dimensions of almost all buildings that have been built within the past 50+ years. Aurum’s flexibility and expertise allows us to provide designs that fit the building, rather than forcing the building to fit the equipment.</p>
                    </div>
                </div>

                <div>
                    <h1 className="pt-24 pb-32  text-aurumgold-700 text-3xl text-center">"Old School Values with a New School Touch"</h1>
                </div>
            </div>
        </>
    )
}