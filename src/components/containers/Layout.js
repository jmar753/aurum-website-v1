// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-aurumblack text-white">
            <Header/>
            <div className="h-[4.5rem] bg-aurumblack"></div>
            {props.children}
            <Footer/>
        </div>
    )
}