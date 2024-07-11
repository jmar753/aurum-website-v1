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
        <div className="text-aurumgreen-800 bg-aurumwhite leading-loose flex flex-col justify-center items-center px-6">

            {/* Meet the Team */}
            <div className="pb-20 pt-36 space-y-8">
                <h1 className="font-bold text-3xl">Meet the Team</h1>
                <p className="text-neutral-500">Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit.</p>
                {ceoCard.map((item, index) =>(
                    <div className="flex items-center gap-4">
                        <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" className="h-12 w-12 rounded-full object-fill"/>
                        <div>
                            <h1>{item.name}</h1>
                            <h1>{item.pos}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* I wanna play yugioh so bad */}
            <div className="bg-naturegreen-800 text-white p-2 -m-2 rounded-3xl w-full">
                <h1>Our Acheivements</h1>
            </div>
        </div>
    )
}