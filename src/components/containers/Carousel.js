import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "framer-motion"

import BTR from "../../ProductPhotos/BTR.png"
import CFC from "../../ProductPhotos/CFC.png"
import DDR from "../../ProductPhotos/DDR.png"
import DTR from "../../ProductPhotos/DTR.png"
import MHR from "../../ProductPhotos/MHR.png"
import CarouselCard from "./CarouselCard"
import useMeasure from "react-use-measure"

export default function Carousel(){

	const images = [
		{
		photo: BTR,
		text: '',
		},
		{
		photo: CFC,
		text: '',
		},
		{
		photo: DDR,
		text: '',
		},
		{
		photo: DTR,
		text: '',
		},
		{
		photo: MHR,
		text: '',
		},
		
	]

	let [ref, {width}] = useMeasure()

	const xTranslation = useMotionValue(0)

	useEffect(() => {
		let controls
		let finalPosition = -width / 2 - 8
		
		controls = animate(xTranslation, [0, finalPosition], {
			ease:'linear',
			duration: 25,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0
		})

		return controls.stop
	}, [xTranslation, width])

	return(
		// <div className="">
		// 	<motion.div 
		// 		className="absolute left-0 flex gap-4 max-w-max" 
		// 		ref={ref}
		// 		style={{ x: xTranslation}}
		// 	>
		// 		{/* Card Layout */}
		// 		{[...images, ...images].map((item, index) => (
		// 			<CarouselCard item={item} index={index} key={index}/>
		// 		))}

		// 	</motion.div>
		// </div>
		<div class="w-1/4 h-[200px] lg:h-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
			<ul class="flex items-center justify-center lg:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
				{images.map((item, index) => (
					<li>
						<CarouselCard item={item} index={index} key={index}/>
					</li>
				))}
			</ul>
			<ul class="flex items-center justify-center lg:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
				{images.map((item, index) => (
					<li>
						<CarouselCard item={item} index={index} key={index}/>
					</li>
				))}
			</ul>
		</div>
	)
}