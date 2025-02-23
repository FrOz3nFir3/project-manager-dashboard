import { NavLink } from "react-router-dom"
import { HEADER_NAVIGATION_LINKS } from "../../utils/constant"
import React from "react";

const Header = () => {
    
    return <header className="flex gap-4 flex-wrap justify-between px-10 py-4 bg-slate-700 text-white">
        {/* can import svg / logo instead */}
        <h2 className="font-bold text-xl"><span className="text-cyan-500">H</span> O U R S</h2>
        <ul className="flex flex-wrap gap-4">
            {HEADER_NAVIGATION_LINKS.map((item) => {
                return <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-cyan-500' : '')}
                key={crypto.randomUUID()} to={item.href}>{item.name}</NavLink>
            })}
        </ul>
   </header>
}

export default Header;