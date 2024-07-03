// import Header from "../navigation/Header"
import { motion, useScroll, useMotionValueEvent} from "framer-motion"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-white text-gray-800">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}