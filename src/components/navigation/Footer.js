import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Footer(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
    const navArray = [{name:"AC Units"},{name:"Buisness"},{name:"Guides"},{name:"Contact"},]

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
        <header className="bg-neutral-800 text-white h-[4rem] px-3 sm:px-8 flex justify-between items-center z-40 w-full">
            {check ? 
                <>
                    <div className="bg-neutral-950 w-screen h-screen absolute left-0 top-0 opacity-40 sm:hidden"></div>
                    <div className="text-base text-white text-left absolute left-0 top-0 z-40 w-3/4 p-6 h-screen bg-neutral-900 opacity-100 :hidden" ref={newRef}>
                        <div className="">
                            <img src={logo} className="h-16"/>
                        </div>
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
            <div className="">
                <img src={logo} className="h-16"/>
            </div>
            <div className="sm:flex hidden justify-between">
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
            <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                <div className="sm:hidden flex" onClick={() => {setCheck(true)}}>
                    <HiMenu/>
                </div>
            </IconContext.Provider>
            <p className="text-right sm:flex hidden ">
                EN
            </p>
        </header>
    )
}