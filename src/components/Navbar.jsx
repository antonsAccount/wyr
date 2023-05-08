import {NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav id="navBar" className="white-B" >
                <NavLink to="/">Game</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="developer">Developer</NavLink>
        </nav>
    )
}