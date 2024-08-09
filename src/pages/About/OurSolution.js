//react libraries
import { motion } from "framer-motion";
import { useState } from "react";

//icons
import { IoIosArrowForward, IoIosCheckmark, IoIosClose } from "react-icons/io";

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

    const items = [
        "Increases air circulation in your home",
        "Increases efficiency in fan coil operations",
        "Includes safety features for flood prevention",
        "Creates and enhances optimal comfort in your home",
        "Reduces operational noise",
        "Lowers fan coil energy consumption",
    ];

    const essentialComponents = [
        {
            name: "ECM MOTOR",
            image: "https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/aurum_manufacturing_ecm-motor.png",

            title: "What is an ECM Motor and How Does it Benefit HVAC Systems?",
            description: "Electronically Commutated Motors (ECM) are advanced electric motors used in modern HVAC systems to enhance efficiency, comfort, and overall performance. Unlike traditional motors, ECM motors are designed with sophisticated electronics that allow them to operate at variable speeds, providing several key advantages:",
            tpoint1: "Energy Efficiency",
            point1: "ECM motors are highly energy-efficient, often reducing energy consumption by up to 60% compared to conventional motors. They adjust their speed based on the system's demand, ensuring that the motor only uses the necessary amount of power, leading to significant energy savings and lower utility bills.",
            tpoint2: "Variable Speed Operation",
            point2: "One of the standout features of ECM motors is their ability to operate at variable speeds. This means they can precisely control the airflow and system performance, maintaining consistent indoor comfort levels. Whether it's heating, cooling, or ventilation, ECM motors provide the exact amount of airflow needed, optimizing system performance.",
            tpoint3: "Improved Air Quality",
            point3: "By maintaining consistent and optimal airflow, ECM motors help in improving indoor air quality. They allow for better filtration and more effective removal of contaminants, contributing to a healthier indoor environment.",
        },
        {
            name: "AQUASTAT",
            image: "https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/aurum_manufacturing_aquastat.png",

            title: "What is an Aquastat and How Does it Benefit HVAC Systems?",
            description: "Aquastats are vital components in HVAC systems, specifically designed to control the temperature of water in boilers and hydronic heating systems. They function as a type of thermostat, ensuring that water temperatures are maintained within a specified range to optimize system performance and efficiency.",
            tpoint1: "Temperature Regulation",
            point1: "An aquastat monitors and regulates the water temperature in a heating system. It ensures that the water temperature remains within the desired range, preventing overheating or underheating. This precise temperature control is crucial for maintaining consistent indoor comfort and protecting the system from damage due to extreme temperatures.",
            tpoint2: "Energy Efficiency",
            point2: "By accurately controlling the water temperature, aquastats help in reducing energy consumption. They prevent the boiler from running unnecessarily, thereby saving fuel and reducing operational costs. This efficiency translates into lower utility bills and a more environmentally friendly heating system.",
            tpoint3: "System Protection",
            point3: "Aquastats play a key role in protecting the HVAC system. By maintaining optimal water temperatures, they prevent potential damage to the boiler and other components caused by excessive heat or freezing conditions. This protection extends the lifespan of the system and reduces the need for costly repairs.",
        },
        {
            name: "FLOAT SENSOR",
            image: "https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/aurum_manufacturing_float-sensor.png",

            title: "What is a Float Sensor and How Does it Benefit HVAC Systems?",
            description: "Float sensors are critical components used in HVAC systems to monitor and control the level of liquids within various components, such as condensate pans, boilers, and cooling towers. They operate by detecting the level of liquid and triggering actions to maintain optimal performance and prevent potential issues.",
            tpoint1: "Liquid Level Monitoring",
            point1: "Float sensors provide precise monitoring of liquid levels in HVAC systems. They detect changes in the liquid level and send signals to the control system, ensuring that the levels remain within the desired range. This is essential for maintaining the efficiency and safety of the system.",
            tpoint2: "Prevention of Overflow and Flooding",
            point2: "By accurately monitoring liquid levels, float sensors help prevent overflow and flooding. When the liquid reaches a critical level, the sensor can trigger a pump to remove excess liquid or shut down the system to prevent damage. This proactive control helps avoid costly repairs and water damage.",
            tpoint3: "System Protection",
            point3: "Float sensors play a vital role in protecting HVAC systems. They prevent situations where low liquid levels could cause damage to pumps, boilers, or other components by ensuring there is always an adequate supply of liquid. This protection extends the lifespan of the system and enhances reliability.",
        },
        {
            name: "CONTROL VALVE & ACTUATOR",
            image: "https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/aurum_manufacturing_actuator.png",

            title: "What are Control Valves & Actuators and How Do They Benefit HVAC Systems?",
            description: "Control valves and actuators are integral components in HVAC systems, responsible for regulating the flow of fluids such as water, steam, or refrigerants. Together, they ensure precise control of temperature, pressure, and flow rates, enhancing the overall efficiency and performance of HVAC systems.",
            tpoint1: "Control Valves",
            point1: "Control valves modulate the flow of fluid within HVAC systems based on signals received from the system's control unit. They can adjust the flow rate to maintain the desired temperature, pressure, or humidity levels.",
            tpoint2: "Actuators",
            point2: "Actuators are devices that control the movement of the valves. They receive signals from the HVAC control system and convert them into mechanical motion to open, close, or modulate the valve.",
            tpoint3: "Precise Temperature and Flow Control",
            point3: "Control valves and actuators enable precise regulation of fluid flow, ensuring that the HVAC system maintains the desired temperature and comfort levels. This precision improves system efficiency and responsiveness.",
        },
    ]

    const features = [
        {
            title: "ECM Technology",
            notes: [" 80% electrically efficient (3040% increase)", " 90,000+ hours operating life span"]
        },
        {
            title: "20 Gauge Stainless Steel Construction",
            notes: [" Virtually eliminates the possibility of rust occurrence"]
        },,
        {
            title: "Control Valve and Actuator",
            notes: [" Zero Leakage - Self-cleaning technology to be clog resistance", " Consumes 95% less power than conventional actuator"]
        },,
        {
            title: "24V Control Centre",
            notes: [" Easy plug and play compatible with most smart thermostats on the market"]
        },,
        {
            title: "Safety Features",
            notes: [" Float Sensor to detect drain pan water backup"]
        },,
        {
            title: "Easy Future Serviceability",
            notes: [" Union connections from valve bodies", " Braided stainless steel hoses are equipped with union connections for easy connect/disconnect from building supply and return"]
        },
    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        console.log(item)
      setSelectedItem(item);
    };
  
    const handleClosePopup = () => {
      setSelectedItem(null);
    };

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

			{/* Line Block 1 */}
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

            <div className="p-8 space-y-8 bg-aurumblack">
                {threats.map((item, index) => (
                    <div key={index} className="space-y-8 p-4 border-aurumgold-500 bg-aurumgrey border-2 rounded-3xl grid">
                        <h1 className="text-xl">Threat {item.id} <span className="text-aurumgold-500">{item.title}</span></h1>
                        <p className="font-bold text-lg underline decoration-aurumgold-500">{item.span1}</p>
                        <p>{item.text1}</p>
                        <p className="font-bold text-lg">{item.span2}</p>
                        <p>{item.text2}</p>
                    </div>
                ))}
            </div>

            {/* Solution */}
            <div className="p-8 bg-aurumblack">
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

                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <div className="h-5 w-5 bg-aurumgold-500 rounded-full flex items-center justify-center">
                                    <IoIosCheckmark className="text-aurumgold-800 h-6 w-6" />
                                </div>
                                <span className="ml-4 text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Components */}
            <div className="pt-20 pb-10 px-8 bg-aurumblack">
                <div className="pb-12" >
                    <h1 className="text-3xl lg:text-7xl pb-4">Our Essential Components</h1>
                    <p className="text-neutral-300">Besides being cosmetically appealing and sleek, there are benefits and features of this new system that pictures cannot capture.</p>
                </div>
                
                {/* Component Cards */}
                <div className="space-y-8">
                    {essentialComponents.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-3xl shadow-xl shadow-aurumblack text-left overflow-hidden group hover:cursor-pointer"
                            onClick={() => handleItemClick(item)}
                        >
                            <img
                                src={item.image}
                                className="rounded-3xl w-full h-64 object-cover duration-300 transform group-hover:scale-110"
                                alt={item.name}
                            />
                            {/* Banner */}
                            <div className="absolute bottom-0 px-4 left-0 flex justify-between items-center w-full bg-black bg-opacity-60 group-hover:bg-opacity-90 duration-300 text-white py-2 text-center rounded-b-3xl">
                                <p className="text-left">{item.name}</p>
                                <div className="rounded-full h-12 w-12 bg-aurumgrey transition duration-100 -mr-2 flex items-center justify-center">
                                    <IoIosArrowForward className="h-6 w-6 text-white"/>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Popup */}
                    {selectedItem && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleClosePopup}>
                            <div className="bg-aurumgrey p-6 rounded-lg w-full h-full max-w-screen-lg max-h-screen-lg mx-8 my-8 overflow-hidden relative">
                                <div className="flex justify-end absolute right-2 top-4">
                                    <button onClick={handleClosePopup} className="">
                                        <IoIosClose className="fill-white size-11 hover:cursor-pointer" />
                                    </button>
                                </div>
                                <div className="w-full h-full overflow-auto scrollbar-hidden pr-6">
                                    <div className="space-y-8">
                                        <div className="text-white">
                                            <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                                            <p className="text-base lg:text-xl pt-4">{selectedItem.description}</p>
                                        </div>

                                        <img src={selectedItem.image} className="w-full object-cover"/>

                                        <div className="text-white">
                                            <p className="text-xl font-bold">{selectedItem.tpoint1}</p>
                                            <p className="text-base lg:text-xl pt-4">{selectedItem.point1}</p>
                                        </div>    

                                        <div className="text-white">
                                            <p className="text-xl font-bold">{selectedItem.tpoint2}</p>
                                            <p className="text-base lg:text-xl pt-4">{selectedItem.point2}</p>
                                        </div>

                                        <div className="text-white">
                                            <p className="text-xl font-bold">{selectedItem.tpoint3}</p>
                                            <p className="text-base lg:text-xl pt-4">{selectedItem.point3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>


			{/* Line Block 2 */}
			<div className="w-full pt-10 pb-8 relative border-b text-white bg-aurumblack" >
				<div className="flex justify-between pl-4 absolute h-28 w-full">
					<h1 className="text-lg px-4 col-span-2 z-10 text-aurumgold-500">Features</h1>{/* Intro */}
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-gray-200 bg-aurumblack">
                {/* Features Container */}
				<div className="h-auto w-auto max-w-7xl border-l mx-8 px-4">
                    {features.map((item, index) => (
                        <div className="pt-10 pb-6 text-white flex gap-3 -ml-6" key={index}>
                            <div className="p-2 h-2 mt-1.5 w-2 rounded-full bg-aurumgold-500"/>
                            <div>
                                <p className="text-lg font-bold text-aurumgold-500">{item.title}</p>
                                <div className="text-base lg:text-xl pt-4 pl-4">
                                    {item.notes.map((item, index) => (
                                        <div className="flex space-x-2">
                                            <p>-</p><p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
			</div>

            <div className="py-20 px-8 bg-aurumblack">
                <h1 className="font-bold text-lg pb-6">Optional Features include but are not limited to</h1>
                <p>- Audible Water Sensor</p>
                <p>- Cabinet Floor Moisture Sensor</p>
                <p>- Secondary Room Temperature Sensors</p>
                <p>- Smart Thermostats</p>
            </div>
		</>
    )
}