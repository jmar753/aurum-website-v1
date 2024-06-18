import { NavLink } from "react-router-dom"
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"
// for navigation: text-xl text-neutral-500 font-thin

export default function Header(){
    return(
        <header className="bg-aurumblack text-white h-[4rem] shrink-0 px-8 grid grid-cols-8 items-center fixed top-0 z-40 w-full">
            <div className="col-span-3">
                <img src={logo} className="h-16"/>
            </div>
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