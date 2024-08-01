import { IoIosCheckmark } from "react-icons/io";

export default function OurSolution(){

    const threats = [
        {
            id: 1,
            title:"Rust",
            span1:"Risk of Flooding",
            text1: "Rust chips can clog drain pans and condensate hoses causing backup and overflow. This may result in water damage.",
            span2: "Health Hazard",
            text2: "Rust can become airborne. These airborne particles can lead to prolonged coughing and lung irritation.",
        },
        {
            id: 2,
            title:"Mold",
            span1:"Health Hazard",
            text1: "Airborne mold particles can cause major allergen irritations and in severe cases can lead to respiratory problems.",
            span2: "",
            text2: "",
        },
        {
            id: 3,
            title:"Low Electrical Efficiency",
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

    const pattents = [
        {
			patNumber: 8939826,
			title: "HVAC apparatus with HRV/ERV unit and vertical fan coil unit",
			abstract: "An apparatus for heating, ventilation and/or air conditioning of an interior space includes a heat exchanger core and a heating/cooling device in fluid connection with the heat exchanger core. A recirculation port is arranged between a supply air chamber and an outside air chamber. A damper is adapted to move between a first position in which the damper blocks the recirculation port and a second position in which the recirculation port is unblocked. When the damper is in the second position, at least a portion of supply air is guided to flow from the supply air chamber through the outside air chamber to the heat exchanger core so as to defrost the heat exchanger core.",
			type: "Grant",
			filed: "July 15, 2011",
			DoP: "January 27, 2015",
			inventors: "Vittorio Zorzit, Sheng Chu",
        },
        {
			patNumber: 7334542,
			title: "Compact high-efficiency boiler and method for producing steam",
			abstract: "An apparatus for heating, ventilation and/or air conditioning of an interior space includes a heat exchanger core and a heating/cooling device in fluid connection with the heat exchanger core. A recirculation port is arranged between a supply air chamber and an outside air chamber. A damper is adapted to move between a first position in which the damper blocks the recirculation port and a second position in which the recirculation port is unblocked. When the damper is in the second position, at least a portion of supply air is guided to flow from the supply air chamber through the outside air chamber to the heat exchanger core so as to defrost the heat exchanger core.",
			type: "Grant",
			filed: "July 15, 2011",
			DoP: "January 27, 2015",
			inventors: "Vittorio Zorzit, Sheng Chu",
        },
        {
			patNumber: 7137360,
			title: "Tube assembly for a boiler",
			abstract: "An apparatus for heating, ventilation and/or air conditioning of an interior space includes a heat exchanger core and a heating/cooling device in fluid connection with the heat exchanger core. A recirculation port is arranged between a supply air chamber and an outside air chamber. A damper is adapted to move between a first position in which the damper blocks the recirculation port and a second position in which the recirculation port is unblocked. When the damper is in the second position, at least a portion of supply air is guided to flow from the supply air chamber through the outside air chamber to the heat exchanger core so as to defrost the heat exchanger core.",
			type: "Grant",
			filed: "July 15, 2011",
			DoP: "January 27, 2015",
			inventors: "Vittorio Zorzit, Sheng Chu",
        },
      ];

    return(
		<>
			{/* Header Padding */}
			<div className="pt-28 w-full"/>

			{/* Intro */}
			<div className="w-full pb-14 relative border-b text-white" >
				<div className="flex justify-between pr-4 absolute h-28 w-full">
					<h1 className="text-lg  px-4 col-span-2 z-10">OUR SOLUTION</h1>{/* Intro */}
				</div>
			</div>

			{/* Timeline Block 1 */}
			<div className="flex flex-col justify-center items-center text-gray-200 bg-aurumblack">
				<div className="h-auto w-auto max-w-7xl border-l mx-8 px-4">

					<div className="pt-10 pb-6 text-white">
						<p className="text-xl font-bold text-aurumgold-500">“Can’t See It, Can’t Feel It, Can’t Be Bothered by It”</p>
						<p className="text-base lg:text-xl pt-4">This is the common misconception made by many homeowners regarding their outdated fan coil units. Your HVAC system is crucial in your everyday living and should be held at such standards. Retrofitting your fan coil unit drastically improves this essential system.</p>
					</div>

					<div className="pt-10 pb-6 text-white">
						<p className="text-xl font-bold">Understanding Why to Retrofit</p>
						<p className="text-base lg:text-xl pt-4">Aside from your fan coil system not look appealing there are also some threatening qualities that pictures cannot capture.</p>
					</div>

					<div className="pt-10 text-white">
						<p className="text-xl font-bold">Three of the biggest threats of aging fan coils are:</p>
                        <p className="text-aurumgold-500">Rust</p>
                        <p className="text-aurumgold-500">Mold Growth</p>
                        <p className="text-aurumgold-500">Low Electrical Efficiency</p>
					</div>
                </div>
			</div>

            <div className="p-8 space-y-8">
                {threats.map((item, index) => (
                    <div key={index} className="space-y-8 p-4 border-aurumgold-500 border-2 rounded-3xl grid">
                        <h1 className="text-xl">Threat {item.id} <span className="text-aurumgold-500">{item.title}</span></h1>
                        <p className="font-bold text-lg">{item.span1}</p>
                        <p>{item.text1}</p>
                        <p className="font-bold text-lg">{item.span2}</p>
                        <p>{item.text2}</p>
                    </div>
                ))}
            </div>

            {/* Solution */}
            <div className="p-8">
                <div className="pt-12 pb-4" >
                    <h1 className="text-3xl lg:text-7xl">The Aurum Solution</h1>
                </div>

                <div className="space-y-8 pb-6" >
                    <p className="text-base lg:text-xl">Aurum Manufacturing is proud to be one of the pioneers in retrofit development. This solution completely transforms your fan coil unit into an up-to-date modern and efficient system.</p>
                </div>

                <div className="relative grid grid-cols-2 gap-4 pt-8">
                    <div>
                        <p className="pb-2 font-bold">Before</p>
                        <img 
                            src={"https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/autum_solution_product_before.png"} 
                            className="w-full h-64 object-cover rounded-3xl"
                        />
                    </div>
                    <div className="pb-12">
                        <p className="pb-2 font-bold">After</p>
                        <img 
                            src={"https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/autum_solution_product_after.png"} 
                            className="w-full h-64 object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="px-8 bg-aurumgrey py-24 text-center">
                <div className="bg-leafgreen p-4 rounded-3xl shadow-xl shadow-aurumblack text-left">
                    <div className="pb-12" >
                        <h1 className="text-3xl lg:text-7xl pb-4">Homeowner Benefits</h1>
                        <p className="text-neutral-300">Besides being cosmetically appealing and sleek, there are benefits and features of this new system that pictures cannot capture.</p>
                    </div>

                    <ul>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Increases air circulation in your home</span>
                        </li>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Increases efficiency in fan coil operations</span>
                        </li>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Includes safety features for flood prevention</span>
                        </li>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Creates and enhances optimal comfort in your home</span>
                        </li>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Reduces operational noise</span>
                        </li>
                        <li className="flex mb-6 items-center">
                            <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 text-aurumgold-800">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="ml-2">Lowers fan coil energy consumption</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Components */}
            <div className="py-20 px-8">
                <div className="pb-12" >
                    <h1 className="text-3xl lg:text-7xl pb-4">Our Essential Components</h1>
                    <p className="text-neutral-300">Besides being cosmetically appealing and sleek, there are benefits and features of this new system that pictures cannot capture.</p>
                </div>
                <ul className="bg-leafgreen p-4 rounded-3xl shadow-xl shadow-aurumblack text-left">
                    <p className="pb-2">Increases air circulation in your home</p>
                    <p className="pb-2">Increases efficiency in fan coil operations</p>
                    <p className="pb-2">Includes safety features for flood prevention</p>
                    <p className="pb-2">Creates and enhances optimal comfort in your home</p>
                    <p className="pb-2">Reduces operational noise</p>
                    <p className="pb-2">Lowers fan coil energy consumption</p>
                </ul>
            </div>
		</>
    )
}