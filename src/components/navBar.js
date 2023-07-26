import React from "react";

function NavBar() {
    return (
        <div className="w-full h-16 flex justify-between items-center px-5 py-10 xl:px-16 bg-neutral-950">
            <h1 className="text-xl xl:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-sky-400"> David Downey </h1>

            <div className="w-auto h-auto hidden md:flex space-x-5">
                <li className=" list-none"> <a href="#about" className="w-auto h-auto px-4 py-2 text-base rounded-md transition-all duration-200 ease-linear text-slate-50 hover:text-green-200 hover:cursor-pointer hover:bg-green-500/30"> About </a> </li>
                <li className=" list-none"> <a href="#work" className="w-auto h-auto px-4 py-2 text-base rounded-md transition-all duration-200 ease-linear text-slate-50 hover:text-green-200 hover:cursor-pointer hover:bg-green-500/30"> Work </a> </li>
                <li className=" list-none"> <a href="#contact" className="w-auto h-auto px-4 py-2 text-base rounded-md transition-all duration-200 ease-linear text-slate-50 hover:text-green-200 hover:cursor-pointer hover:bg-green-500/30"> Contact </a> </li>
            </div>
        </div>
    );
}

export default NavBar;