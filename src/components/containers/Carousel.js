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
			duration: 20,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0
		}, [xTranslation, width])

		return controls.stop
	})

	return(
		<div className="">
			<motion.div 
				className="absolute left-0 flex gap-4" 
				ref={ref}
				style={{ x: xTranslation}}
				>
				{/* Card Layout */}
				{[...images, ...images].map((item, index) => (
					<CarouselCard item={item} index={index} key={index}/>
				))}
			</motion.div>
		</div>
	)
}