import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Header(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
    const navArray = [{name:"Products"},{name:"Buisness"},{name:"Guides"},{name:"Contact"},]

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick)
        };
    });

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setCheck(false)
        }
    };

    return(
        <header className="bg-aurumblack text-white h-[4rem] shrink-0 px-8 grid grid-cols-8 items-center fixed top-0 z-40 w-full">
            {check ? 
                <>
                    <div className="bg-neutral-950 w-screen h-screen absolute left-0 top-0 opacity-40 sm:hidden"></div>
                    <div className="text-base text-white text-left absolute left-0 top-0 z-40 w-3/4 p-6 h-screen bg-neutral-900 opacity-100 :hidden" ref={newRef}>
                        <button 
                        className="text-left  w-full py-3 pr-3  text-2xl my-1">
                            Home
                        </button>
                        {navArray.map((item, index) => (
                            <button 
                                className="text-left  w-full py-3 pr-3  text-2xl my-1" key={index}>
                                    {item.name}
                            </button>
                        ))}
                    </div> 
                </>
                :
                null
            }
            <div className="col-span-3">
                <img src={logo} className="h-16"/>
            </div>
            <div className="flex justify-between col-span-2">
                {/* <p><NavLink to="/">Products</NavLink></p>
                <p><NavLink to="/">Buisness</NavLink></p>
                <p><NavLink to="/">Guides</NavLink></p>
                <p><NavLink to="/">Contact</NavLink></p> */}
                {navArray.map((item, index) => (
                    <button 
                        className="text-left  w-full py-3 pr-3 my-1" key={index}>
                            {item.name}
                    </button>
                ))}
            </div>
            <p className="text-right col-span-3">
                EN
            </p>
        </header>
    )
}