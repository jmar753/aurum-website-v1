// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-aurumgrey text-white">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}