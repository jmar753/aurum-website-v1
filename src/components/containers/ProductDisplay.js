import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "framer-motion"

import BTR from "../../ProductPhotos/BTR.png"
import CFC from "../../ProductPhotos/CFC.png"
import DDR from "../../ProductPhotos/DDR.png"
import DTR from "../../ProductPhotos/DTR.png"
import MHR from "../../ProductPhotos/MHR.png"
import CarouselCard from "./CarouselCard"
import useMeasure from "react-use-measure"

export default function ProductDisplay(){
    const photos = [BTR, CFC, DDR, DTR, MHR]

	return(
		<div className=" w-full relative">
            <img src={CFC} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-30 h-[400px]"/>
            <img src={DTR} className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/3 z-30 h-[500px]"/>
            <img src={MHR} className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/3 z-30 h-[500px]"/>
        </div>
	)
}