// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-gradient-to-bl from-naturegreen-400 to-naturegreen-900  text-white font-lufga">
            <Header/>
            {props.children}
            {/* <Footer/> */}
        </div>
    )
}