import {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function DownReveal({children, propDelay=0.25}){
    const ref = useRef(null);
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1.0, delay: propDelay}}
            >
                {children}
            </motion.div>
        </div>
    )
}