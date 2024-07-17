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
        <div className="text-aurumgreen-800 bg-gray-100 leading-loose flex flex-col justify-center items-center px-6">

            {/* Meet the Team */}
            <div className="pb-20 pt-36 space-y-8">
                <h1 className="font-semibold text-3xl">Meet the Team</h1>
                <p className="text-neutral-500">Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit.</p>
                {ceoCard.map((item, index) =>(
                    <div className="flex items-center gap-4" key={index}>
                        <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" className="h-12 w-12 rounded-full object-fill"/>
                        <div>
                            <h1>{item.name}</h1>
                            <h1>{item.pos}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* I wanna play yugioh so bad */}
            <div className="bg-gradient-to-bl from-leafgreen to-naturegreen-900 text-white p-4 rounded-3xl w-full space-y-8">
                <h1 className="text-4xl font-semibold">Our Acheivements</h1>
                <p>Aurum Manufacturing, based in Canada, specializes in replacing outdated fan coil systems. We collaborate closely with suppliers, vendors, and contractors to deliver high-quality products. Our fan coil units are crafted with precision for energy efficiency and optimal air control. With extensive experience in residential and commercial projects, we customize our models to exceed customer expectations. Aurum is recognized for flexibility in design, ensuring our units fit seamlessly into buildings of varying dimensions, reflecting our commitment to superior HVAC solutions.</p>
                <div className="py-10 space-y-6">
                    {blurbData.map((item, index) => (
                        <div>
                            <p className="text-2xl font-semibold">{item.header}</p>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="pt-16 pb-32 font-semibold text-aurumgold-700 text-3xl text-center">"Old School Values with a New School Touch"</h1>
        </div>
    )
}