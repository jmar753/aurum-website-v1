import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function CarouselCard({item, index}){
	const [showOverlay, setShowOverlay] = useState(false);
    
    return (
        <motion.div 
            key={index} 
            className="relative overflow-hidden h-[400px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >    
            <AnimatePresence>
            {showOverlay && 
                <motion.div 
                    className="absolute inset-0 z-10 flex justify-center items-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 1}}
                >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
                    <motion.h1 
                        className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center ga-[0-5ch] gover:opacity-75"
                        initial={{y: 10}}
                        animate={{y: 0}}
                        exit={{y: 10}}
                    >
                        <span>View Product</span>
                    </motion.h1>
                </motion.div>
            }
            </AnimatePresence>
            <img src={item.photo} className="object-cover"/>
        </motion.div>
    )
}