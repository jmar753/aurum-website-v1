import { NavLink } from "react-router-dom"

export default function SideBar(){
    return(
        <aside className="bg-neutral-900 text-gray-800 w-1/5 overflow-y-auto">
            <h1 className="flex px-8 items-center font-semibold text-3xl h-16">Aurum</h1>
            <div className="p-8">
                <div>
                    <p><NavLink to="/">Home</NavLink></p>
                    <p><NavLink to="NoPage">-</NavLink></p>
                </div>
            </div>
        </aside>
    )
}