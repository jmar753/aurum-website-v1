import Reveal from "../../animations/Reveal";

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

      	<div className="flex flex-col justify-center items-center text-gray-100 bg-aurumblack">
			<div  className="h-auto w-full max-w-7xl px-8 pt-36">
				<Reveal className="" propDelay={0}>
					<h1 className="text-4xl lg:text-7xl text-gray-100 ">Our History</h1>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">We are proud and honoured to share our family history and the origin of Aurum Manufacturing. Aurum Manufacturing stems from a family with over 50 years of mechanical experience. The Zorzit last name has been through many areas of the mechanical industry beginning with our father, Vittorio Zorzit. </p>
				</Reveal>

				<Reveal className="space-y-8 py-12 grid grid-cols-2" propDelay={0.1}>
					<img src={"https://www.aurum-m.ca/wp-content/themes/twentyseventeen-child/assets/images/Vittorio_and_Boiler.png"} className="rounded-full h-auto w-auto"/>
					<p className="text-xl">Our father Vittorio, began his mechanical experience in 1962 as an electrician while residing in Friuli, Italy. In 1964 he immigrated to Canada. He began attending The Provincial Institution of Trades, which is now George Brown College, to obtain his plumbing license. Upon completion, he began working as an apprentice assisting in the pre-construction plumbing for residential and commercial high-rise buildings. </p>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">During his time as a plumber he worked on several projects that ranged from the basic plumbing elements of installing and running pipes to installing vertical fan coil units. Vittorio worked his way up in the company until he was eventually a site foreman supervising many construction projects from start to finish. Throughout this time, he oversaw the installation of both the plumbing and the vertical fan coil units in high-rise buildings. This practical experience provided him with a better insight on the overall mechanical operation of the vertical fan coil unit.</p>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">After approximately 17 years as a plumber, injuries prevented him from continuing in the trade. In 1981, he took a different path in his career by entering in the HVAC industry. Having been trained as both an electrician and a plumber, he was able to use his extensive knowledge to better the HVAC industry. Vittorio continued in this trade for 36 years, until his retirement in 2017.</p>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">Throughout his time in this trade, he worked as a designer, developer and researcher for a company that manufactured both boilers and fan coil units. He was continuously making modifications to the boilers and fan coil units to improve both efficiency and air flow… “There will always be a smarter way for [him].” Vittorio was responsible for overseeing the production of these units and with his guidance and expertise production skyrocketed. Throughout his first few years, the average per year production of fan coil units increased from 600 to 13,000 units. In addition to these fan coil units, he oversaw the production of 300 boilers a year. The most fan coil units produced under his supervision in a single fiscal year was 18,002! </p>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">Vittorio was also one of the first to develop the integrated HRV/Fan coil unit. Vittorio worked closely with his suppliers to better the entire industry. Vittorio flew back and forth from California to visit the Honeywell headquarters to assist in the design improvement of several fan coil thermostats. He was also one of the few people in the industry to work alongside ETL to find the absolute destruction pressure of a vertical fan coil unit. </p>
				</Reveal>

				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">Not only were Vittorio’s boilers successful in Canada and The United States, the sales also expanded internationally. Vittorio was flying to countries such as Russia, Italy, Belgium and even Austria to educate and help engineers with his boilers. </p>
				</Reveal>

				<Reveal className="space-y-8 py-12 bg-aurumaqua-background rounded-3xl" propDelay={0.1}>
					<p className="text-xl">He designed and oversaw production of 43 container boiler rooms for the United States Army. He designed and manufactured 6 boilers that were installed in Russia with 50,000,000 BTU input. He educated technicians on how to install a 7-pipe vertical fan coil unit in California. He assisted in the designing of Henex stainless steel heat exchangers in Austria. </p>
				</Reveal>

				<Reveal>
					<h1 className="pt-24 pb-32 text-3xl text-center">Vittorio officially patented 3 of his designs: </h1>
				</Reveal>

				{pattents.map((item, index) => (
					<div>
						<p>{item.title}</p>
						<p><span className="font-bold">Pattent Number</span>{item.patNumber}</p>
						<p><span className="font-bold">Abstract:</span>{item.abstract}</p>
						<p><span className="font-bold">Filed:</span>{item.filed}</p>
						<p><span className="font-bold">Date of Patent:</span>{item.DoP}</p>
						<p><span className="font-bold">Inventors:</span>{item.inventors}</p>
					</div>
				))}
				
				{/* QnA */}
				<Reveal className="space-y-8 py-12" propDelay={0.1}>
					<p className="text-xl">Not only were Vittorio’s boilers successful in Canada and The United States, the sales also expanded internationally. Vittorio was flying to countries such as Russia, Italy, Belgium and even Austria to educate and help engineers with his boilers. </p>
				</Reveal>

			</div>
      </div>
    )
}