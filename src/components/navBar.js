import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

function NavBar() {
    return (
        <div className="w-full h-16 flex justify-between items-center px-5 bg-neutral-950">
            <img src={ logo } alt="logo." className="w-auto h-5"></img>

            <img src={ menu } alt="logo." className="w-auto h-7"></img>
        </div>
    );
}

export default NavBar;