import {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function LoadReveal({children, propDelay=0.25}){
    const mainControls = useAnimation()

    useEffect(() => {
        mainControls.start("visible")
    }, [])

    return (
        <div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: propDelay}}
            >
                {children}
            </motion.div>
        </div>
    )
}