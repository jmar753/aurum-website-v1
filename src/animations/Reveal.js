import {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal({children, propDelay=0.25, className}){
    const ref = useRef(null);
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: propDelay}}
            className={className}
            div ref={ref}
        >
            {children}
        </motion.div>
    )
}