// import Header from "../navigation/Header"
import Footer from "../navigation/Footer"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div className="bg-aurumblack text-white font-lufga">
            <Header/>
            {props.children}
            {/* <Footer/> */}
        </div>
    )
}