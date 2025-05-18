import React from "react";
import { Link, useLocation } from "react-router-dom";
import NameLogo from '../Asset/Image/Name.jpg';
import { NavLink } from "../Data/Navlink";

const Navbar = () => {
    const matchRoute = (path) => {
        return useLocation().pathname === path;
    }
    return (
        <div className="flex h-10 sm:h-12 md:h-14 lg:h-16 items-center px-2 sm:px-4 md:px-6 lg:px-8 mt-4" >
            <div className="flex items-center w-full sm:w-10/12 md:w-9/12 lg:w-11/12 justify-between">
                <Link to="/"><img src={NameLogo} alt="logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 border-2 border-gray-300 rounded-full lg:ml-16 sm:ml-8 md:ml-10" /></Link>
                <nav className="block">
                    <ul className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-20 text-base sm:text-lg md:text-xl">
                        {NavLink.map((link,index)=>{
                            return(
                                <Link 
                                    to={link.path} 
                                    key={index}
                                    className={`text-white hover:text-yellow-300 transition-colors ${matchRoute(link?.path) ? ' border-b border-yellow-300 text-yellow-300' : ''}`}
                                >
                                    {link.title}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
