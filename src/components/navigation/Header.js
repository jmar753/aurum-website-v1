import { NavLink } from "react-router-dom"
// for navigation: text-xl text-neutral-500 font-thin

export default function Header(){
    return(
        <header className="bg-aurumblack text-white h-[4rem] shrink-0 px-8 grid grid-cols-8 items-center sticky top-0">
            <h1 className="text-2xl font-bold col-span-3">Aurum.</h1>
            <div className="flex justify-between col-span-2">
                <p><NavLink to="/">Products</NavLink></p>
                <p><NavLink to="/">Buisness</NavLink></p>
                <p><NavLink to="/">Guides</NavLink></p>
                <p><NavLink to="/">Contact</NavLink></p>
            </div>
            <p className="text-right col-span-3">
                EN
            </p>
        </header>
    )
}