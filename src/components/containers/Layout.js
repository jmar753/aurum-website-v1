// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-gray-100 text-gray-800">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}