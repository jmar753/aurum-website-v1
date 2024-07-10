// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-aurumwhite text-gray-800">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}