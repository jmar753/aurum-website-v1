// import Header from "../navigation/Header"
import Header from "../navigation/Header"

export default function Layout(props){
    return(
        <div class="bg-aurumgrey">
            <Header/>
            {props.children}
        </div>
    )
}