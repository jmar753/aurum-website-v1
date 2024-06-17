// import Header from "../navigation/Header"
import Header from "../navigation/Header"
import SideBar from "../navigation/SideBar"

export default function Layout(props){
    return(
        <div class="flex flex-col">
            <Header/>
            <div class="flex flex-row h-[calc(100vh)]">
                <SideBar/>
                <main class="bg-neutral-800 w-4/5 overflow-y-auto">
                    {props.children}
                </main>
            </div>
        </div>
    )
}