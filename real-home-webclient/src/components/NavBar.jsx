import React from "react";
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }
    
    const closeNav = () => {
    setNav(false);
    document.body.style.overflow = 'scroll';
  };


    return (
        <div className="absolute w-full flex mt-[0px] justify-between p-4 items-center">
            <NavLink to='/' onClick={closeNav}>
                <h1
                    className=" text-black font-bold text-2xl z-20"> Real State</h1>
            </NavLink>
            <HiMenuAlt3 onClick={handleNav} className="bg-gray-700 z-20 text-white cursor-pointer" size={25} />
            <div className={nav ? "ease-in duration-300 fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10" : "absolute top-0 h-screen right-[-100%] ease-in duration-500 z-10"}>
                <ul className="flex flex-col fixed w-full h-full items-center justify-center">
                <NavLink to='/' onClick={closeNav}>
                    <li className="font-bold text-5xl p-8">Home</li>
                </NavLink>
                <NavLink to='/Properties'onClick={closeNav}>
                    <li className="font-bold text-5xl p-8">Propiedades</li>
                </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

