export default function OurSolution(){

    const threats = [
        {
            id: 1,
            title:"Threat 1 Rust",
            span1:"Risk of Flooding",
            text1: "Rust chips can clog drain pans and condensate hoses causing backup and overflow. This may result in water damage.",
            span2: "Health Hazard",
            text2: "Rust can become airborne. These airborne particles can lead to prolonged coughing and lung irritation.",
        },
        {
            id: 2,
            title:"Threat 2 Mold",
            span1:"Health Hazard",
            text1: "Airborne mold particles can cause major allergen irritations and in severe cases can lead to respiratory problems.",
            span2: "",
            text2: "",
        },
        {
            id: 3,
            title:"Threat 3 Low Electrical Efficiency",
            span1:"Old Technology",
            text1: "Inefficient and outdated components cause unnecessary power consumption",
            span2: "Coil Clogging",
            text2: "Lack of maintenance and/or improper operation can result in dirt and debris clogging your coil. This clogged coil reduces airflow efficiency.",
        },
    ]

    const gridinfo = [
        {
            id: 1,
            title: "ECM Technology",
            note1: "- 80% electrically efficient (30-40% increase)",
            note2: "- 90,000+ hours operating life span",
            note3: "",
        },
        {
            id: 2,
            title: "20 Gauge Stainless Steel Construction",
            note1: "- Virtually eliminates the possibility of rust occurrence",
            note2: "",
            note3: "",
        },
        {
            id: 3,
            title: "Control Valve and Actuato",
            note1: "- Zero Leakage ",
            note2: "- Self-cleaning technology to be clog resistance",
            note3: "- Consumes 95% less power than conventional actuator ",
        },
        {
            id: 4,
            title: "24V Control Centre",
            note1: "- Easy plug and play compatible with most smart thermostats on the market",
            note2: "",
            note3: "",
        },
        {
            id: 5,
            title: "Safety Features",
            note1: "- Float Sensor to detect drain pan water backup",
            note2: "",
            note3: "",
        },
        {
            id: 6,
            title: "Easy Future Serviceability",
            note1: "- Union connections from valve bodies",
            note2: "- Braided stainless steel hoses are equipped with union connections for easy connect/disconnect from building supply and return. ",
            note3: "",
        },
    ]

    return(
        <>
            {/* Header Padding */}
            <div className="pt-28 w-full"/>

            {/* Intro */}
            <div className="w-full pb-14 relative border-b text-white" >
                <div className="flex justify-between pr-4 absolute h-28 w-full">
                    <h1 className="text-lg text-gray-100 px-4 col-span-2 z-10">OUR SOLUTION</h1>
                </div>
            </div>




            <div className="flex flex-col justify-center items-center text-gray-100 bg-aurumblack">
                <div  className="h-auto w-full max-w-7xl px-8 pt-36">
                    {/* About Banner */}
                    <div className="" propDelay={0}>
                        <h1 className="text-4xl lg:text-7xl text-gray-100 ">Our Solution</h1>
                    </div>

                    {/* Written */}
                    <div className="text-center space-y-8 pb-20">
                        <p className="text-2xl  text-aurumgold-700">“Can’t See It, Can’t Feel It, Can’t Be Bothered by It”</p>
                        <p>This is the common misconception made by many homeowners regarding their outdated fan coil units. Your HVAC system is crucial in your everyday living and should be held at such standards. Retrofitting your fan coil unit drastically improves this essential system.</p>
                    </div>

                    {/* Retrofit Section */}
                    <div className="text-center space-y-8 pb-20">
                        <h1>Understanding Why to Retrofi</h1>
                        <p>Aside from your fan coil system not look appealing there are also some threatening qualities that pictures
                        cannot capture.</p>
                        <p>Three of the biggest threats of aging fan coils are:</p>
                        <ul>
                            <li>Rust</li>
                            <li>Mold Growth</li>
                            <li> Low Electrical Efficiency</li>
                        </ul>
                    </div>

                    {/* Threat Section */}
                    <div className="text-center space-y-8 pb-20">
                        {threats.map((items, index) => (
                            <div>
                                <h1>{items.title}</h1>
                                <p>{items.span1}</p>
                                <p>{items.text1}</p>
                                <p>{items.span2}</p>
                                <p>{items.text2}</p>
                            </div>
                        ))}
                    </div>

                    {/*The Aurum Solution*/}
                    <div className="text-center space-y-8 pb-20">
                        <h1>THE AURUM SOLUTION</h1>
                        <p>Aurum Manufacturing is proud to be one of the pioneers in retrofit development. This solution completely transforms your fan coil unit into an up-to-date modern and efficient system</p>
                        <div className="grid grid-cols-2 space-x-8">
                            <div className="bg-aurumgreen-600 w-auto h-[400px]"></div>
                            <div className="bg-aurumgreen-600 w-auto h-[400px]"></div>
                        </div>
                    </div>

                    {/*Homeowner Benefits*/}
                    <div className="text-center space-y-8 pb-20">
                        <h1>HOMEOWNER BENEFITS</h1>
                        <p>Besides being cosmetically appealing and sleek, there are benefits and features of this new system that pictures cannot capture.</p>
                        <ul>
                            <li>Increases air circulation in your home</li>
                            <li>Increases efficiency in fan coil operations</li>
                            <li>Includes safety features for flood prevention</li>
                            <li>Creates and enhances optimal comfort in your home</li>
                            <li>Reduces operational noise</li>
                            <li>Lowers fan coil energy consumption</li>
                        </ul>
                    </div>

                    {/* Essential Components */}
                    <div className="text-center space-y-8 pb-20">
                        <div className="grid grid-cols-2 gap-5">
                            <h1>ECM MOTOR</h1>
                            <h1>FLOAT SENSOR</h1>
                            <div className="bg-aurumgreen-600 h-[300px] w-full"></div>
                            <div className="bg-aurumgreen-600 h-[300px] w-full"></div>
                            <div className="bg-aurumgreen-600 h-[300px] w-full"></div>
                            <div className="bg-aurumgreen-600 h-[300px] w-full"></div>
                        </div>
                    </div>

                    {/* 6 grid */}
                    <div className="text-center space-y-8 pb-20">
                        <div className="grid grid-cols-2">
                            {gridinfo.map((item, index) => (
                                <div className="border-aurumgreen-1">
                                    <h1>{item.title}</h1>
                                    <p>{item.note1}</p>
                                    <p>{item.note2}</p>
                                    <p>{item.note3}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Optional Features */}
                    <div className="text-center space-y-8 pb-20">
                        <ul>
                            <li>Audible Water Sensor</li>
                            <li>Cabinet Floor Moisture Sensor</li>
                            <li>Secondary Room Temperature Sensors</li>
                            <li>Smart Thermostats</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}