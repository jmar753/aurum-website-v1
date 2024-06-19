import { NavLink } from "react-router-dom"
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import logo from "../../RoughAssets/WhiteLogoNoTree.svg"

export default function Header(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
    const navArray = [{name:"About", nav:"/aboutus"}, {name:"Products", nav:"/products"},{name:"Resources", nav:"/resources"},{name:"Contact", nav:"/contact"}]

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
        <header className="bg-aurumblack text-white h-[4rem] shrink-0 px-3 sm:px-8 flex sm:grid sm:grid-cols-8 justify-between items-center fixed top-0 z-40 w-full">
            {check ? 
                <>
                    <div className="bg-neutral-950 w-screen h-screen absolute left-0 top-0 opacity-40 sm:hidden"></div>
                    <div className="text-base text-white text-left absolute left-0 top-0 z-40 w-3/4 p-6 h-screen bg-neutral-900 opacity-100 :hidden" ref={newRef}>
                        <div className="">
                            <img src={logo} alt="logo" className="h-16"/>
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
            <div className="col-span-3">
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-16"/>
                </NavLink>
            </div>
            <div className="sm:flex hidden justify-between col-span-2">
                {/* <p><NavLink to="/">Products</NavLink></p>
                <p><NavLink to="/">Buisness</NavLink></p>
                <p><NavLink to="/">Guides</NavLink></p>
                <p><NavLink to="/">Contact</NavLink></p> */}
                {navArray.map((item, index) => (
                    <NavLink to={item.nav}>
                        <button className="text-left  w-full py-3 pr-3 my-1" key={index}>
                            {item.name}
                        </button>
                    </NavLink>
                ))}
            </div>
            <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                <div className="sm:hidden flex" onClick={() => {setCheck(true)}}>
                    <HiMenu/>
                </div>
            </IconContext.Provider>
            <p className="text-right sm:block hidden col-span-3">
                EN
            </p>
        </header>
    )
}