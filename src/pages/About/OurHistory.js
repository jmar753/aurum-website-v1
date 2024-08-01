import Reveal from "../../animations/Reveal";
import tree from "../../RoughAssets/TreeGold.svg"

export default function OurHistory(){
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
					<h1 className="text-lg  px-4 col-span-2 z-10">OUR HISTORY</h1>{/* Intro */}
					<img src={"https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"} className="rounded-full h-auto w-auto"/>
				</div>
			</div>

			{/* Timeline Block 1 */}
			<div className="flex flex-col justify-center items-center text-gray-200 bg-aurumblack">
				<div className="h-auto w-auto max-w-7xl border-l mx-8 px-4">

					<div className="pt-10 pb-6 text-white" >
						<p className="text-xl font-bold">Vittorio Zorzit</p>
						<p className="text-base lg:text-xl text-leafgreen">Founder / Heart of the company</p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">We are proud and honoured to share our family history and the origin of Aurum Manufacturing. Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit. </p>
					</div>

					<div className="space-y-8 py-6">
						<p className="text-base lg:text-xl">Our father Vittorio, began his mechanical experience in 1962 as an electrician while residing in Friuli, Italy. In 1964 he immigrated to Canada. He began attending The Provincial Institution of Trades, which is now George Brown College, to obtain his plumbing license. Upon completion, he began working as an apprentice assisting in the pre-construction plumbing for residential and commercial high-rise buildings. </p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">During his time as a plumber he worked on several projects that ranged from the basic plumbing elements of installing and running pipes to installing vertical fan coil units. Vittorio worked his way up in the company until he was eventually a site foreman supervising many construction projects from start to finish. Throughout this time, he oversaw the installation of both the plumbing and the vertical fan coil units in high-rise buildings. This practical experience provided him with a better insight on the overall mechanical operation of the vertical fan coil unit.</p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">After approximately 17 years as a plumber, injuries prevented him from continuing in the trade. In 1981, he took a different path in his career by entering in the HVAC industry. Having been trained as both an electrician and a plumber, he was able to use his extensive knowledge to better the HVAC industry. Vittorio continued in this trade for 36 years, until his retirement in 2017.</p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Throughout his time in this trade, he worked as a designer, developer and researcher for a company that manufactured both boilers and fan coil units. He was continuously making modifications to the boilers and fan coil units to improve both efficiency and air flow… “There will always be a smarter way for [him].” Vittorio was responsible for overseeing the production of these units and with his guidance and expertise production skyrocketed. Throughout his first few years, the average per year production of fan coil units increased from 600 to 13,000 units. In addition to these fan coil units, he oversaw the production of 300 boilers a year. The most fan coil units produced under his supervision in a single fiscal year was 18,002! </p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Vittorio was also one of the first to develop the integrated HRV/Fan coil unit. Vittorio worked closely with his suppliers to better the entire industry. Vittorio flew back and forth from California to visit the Honeywell headquarters to assist in the design improvement of several fan coil thermostats. He was also one of the few people in the industry to work alongside ETL to find the absolute destruction pressure of a vertical fan coil unit. </p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Not only were Vittorio’s boilers successful in Canada and The United States, the sales also expanded internationally. Vittorio was flying to countries such as Russia, Italy, Belgium and even Austria to educate and help engineers with his boilers. </p>
					</div>
				</div>

				<div className="space-y-8 p-4 mx-8 mt-8 mb-24 border-leafgreen border-2 rounded-3xl" >
					<p className="text-base lg:text-xl">He designed and oversaw production of 43 container boiler rooms for the United States Army. He designed and manufactured 6 boilers that were installed in Russia with 50,000,000 BTU input. He educated technicians on how to install a 7-pipe vertical fan coil unit in California. He assisted in the designing of Henex stainless steel heat exchangers in Austria. </p>
				</div>


				{/* Patents */}
				<div className="bg-aurumgrey">
					<div>
						<h1 className="pt-24 pb-12 px-4 text-3xl text-center">Vittorio's officially patented designs: </h1>
					</div>

					{pattents.map((item, index) => (
						<div className="space-y-8 p-4 m-8 bg-aurumblack rounded-3xl">
							<p className="font-bold text-lg text-aurumgold-500">{item.title}</p>
							<p className="text-neutral-300"><span className="font-bold text-white">Pattent Number: </span>{item.patNumber}</p>
							<p className="text-neutral-300"><span className="font-bold text-white">Abstract: </span>{item.abstract}</p>
							<p className="text-neutral-300"><span className="font-bold text-white">Filed: </span>{item.filed}</p>
							<p className="text-neutral-300"><span className="font-bold text-white">Date of Patent: </span>{item.DoP}</p>
							<p className="text-neutral-300"><span className="font-bold text-white">Inventors: </span>{item.inventors}</p>
						</div>
					))}
				</div>

				<div className="px-8 pb-12 border-b relative">
					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Vittorio was and still is very respected through the plumbing and HVAC industry as many engineers, developers and designers still look to him for guidance and advice. He continues his legacy in the mechanical industry by consulting our design and research teams at Aurum Manufacturing.</p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Not only were Vittorio’s boilers successful in Canada and The United States, the sales also expanded internationally. Vittorio was flying to countries such as Russia, Italy, Belgium and even Austria to educate and help engineers with his boilers. </p>
					</div>

					<div className="absolute -bottom-3 right-6 h-6 w-6 border-2 border-white bg-aurumblack rounded-full flex justify-center items-center"/>
				</div>
				
				{/* QnA */}
				<div className="px-8 pb-12">
					<div className="pt-24 pb-6">
						<h1 className="text-3xl">Questions and Answers</h1>
						<h1 className="text-neutral-300">With Vittorio Zorzit</h1>
					</div>

					<div className="py-6">
						<div className="flex w-full text-xl text-white gap-x-3">
							<p className="w-4">1.</p>
							<div className="space-y-4">
								<p>“What is your greatest success?”</p>
								<p className="text-base lg:text-xl text-neutral-300">It’s hard to narrow down my greatest success. The thing is when you do things, to me it didn’t sound like a big deal. It was a big deal for someone who didn’t know anything about it. I was one of the few leaders in the industry while being honest.</p>
							</div>
						</div>
					</div>

					<div className="py-6 space-y-4" >
						<div className="flex w-full text-xl text-white gap-x-3">
							<p className="w-4">2.</p>
							<div className="space-y-4">
								<p>“What’s one of the most challenging obstacles you went through?”</p>
								<p className="text-base lg:text-xl text-neutral-300">Probably the most annoying thing was sitting down with a patent lawyer. Every little thing that would take up a quarter of a page they wrote 20 pages for. I would be still reading today if I read it all.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Second Part */}
				<div className="px-8">
					<div className="pt-12 pb-4" >
						<h1 className="text-3xl lg:text-7xl ">The Introduction of Aurum Manufacturing</h1>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Adam Zorzit began his mechanical experience at the age of 16. After 10 years of servicing for a manufacturing company under the guidance of his father, Adam began to research a solution for outdated fan coil systems. With sparked interest and determination, Adam set off to manufacture and install newly designed retrofit models. Adam’s visionary retrofit design production began in his home garage. </p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">After many small success stories and when production began to grow, Adam was inspired and motivated to build Aurum with his sister, Stacy. Together, Stacy and Adam continued to grow Aurum by purchasing a manufacturing building, hiring staff and building close relationships with new trusted suppliers, one of which is their brother Richard. </p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">After many small success stories and when production began to grow, Adam was inspired and motivated to build Aurum with his sister, Stacy. Together, Stacy and Adam continued to grow Aurum by purchasing a manufacturing building, hiring staff and building close relationships with new trusted suppliers, one of which is their brother Richard. </p>
					</div>

					<div className="space-y-8 py-6 flex flex-col items-center justify-center" >
						<img src="https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/Adam_and_Stacy.png" className="rounded-3xl"></img>
						<p className="text-neutral-300 text-sm">Founders Adam (Right) and Stacy Zorzit (Middle) with their brother Richard Zorzit (Left), 2017</p>
					</div>

					<div className="space-y-8 py-6" >
						<p className="text-base lg:text-xl">Adam and Stacy are determined to lead Aurum and the entire HVAC industry with the same drive, purpose and honesty as their father led before them. The name Aurum was not randomly selected. With the knowledge from their father, there was one family member whose encouragement and support could not go without recognition. Therefore, they believed to properly show their appreciation and love for their mother Ornella, they decided to name the company after her. </p>
					</div>
				</div>

				<div className="space-y-8 py-6 px-8 flex flex-col items-center justify-center" >
					<img src="https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/Ornella.png"  className="rounded-3xl"></img>
					<p className="text-neutral-300 text-sm">Founder Adam (Left) and Ornella Zorzit (Right), 2020</p>
				</div>

				<div className="space-y-8 p-4 mx-8 mt-8 mb-24 border-leafgreen border-2 rounded-3xl relative">
					<div>
						<h1 className="border-b">Ornella</h1>
						<p className="text-xs text-neutral-300">From Wikipedia, the free encyclopedia</p>
					</div>
					<p><span className="font-bold">Ornella</span> is an Italian name. It means flowering ash tree and is a female's name. Ornella is derived from the term " aurum ," the Roman equivalent of "gold" . It is a fairly recent name and it was used the first time by Gabriele D'Annunzio in his book "The daughter of Iorio" in 1904.</p>

					<img src={tree} className="h-full w-full opacity-15 absolute inset-0 "/>
				</div>

			</div>
		</>
    )
}