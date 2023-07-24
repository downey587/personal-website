import { React } from "react";
import reactLogo from "../assets/technology-logos/react-icon.svg";
import cssLogo from "../assets/technology-logos/icons8-css-logo.svg";
import htmlLogo from "../assets/technology-logos/icons8-html-logo.svg";
import jsLogo from "../assets/technology-logos/icons8-javascript.svg";
import tailwindLogo from "../assets/technology-logos/tailwindcss.svg";
import gitLogo from "../assets/technology-logos/icons8-git.svg";
import githubLogo from "../assets/technology-logos/icons8-github.svg";
import nikeCloneImg from "../assets/projects-images/nike-clone-img.svg";

function TechnologyBlock( { img, alt, title, desc } ) {
    return (
        <a href="#" className="w-auto min-w-fit h-80 py-5 px-1 flex flex-col bg-slate-500/40 backdrop-blur-xl transition-all duration-700 ease-in-out rotate-3d hover:rotate-0 hover:bg-slate-600/30 hover:rounded-3xl group">
            <div className="w-20 h-20 flex justify-center items-center rounded-full transition-all ease-linear duration-700 -rotate-45 group-hover:rotate-0 group-hover:shadow-2xl shadow-slate-50 hover:bg-slate-950">
                <img src={ img } alt={ alt } className="w-14 h-14"></img>
            </div>

            <div className="w-auto h-auto mt-7 ml-2">
                <p className="text-xl font-semibold text-slate-50"> { title } </p>

                <p className="text-base font-thin leading-relaxed text-slate-200  mt-3"> { desc } </p>
            </div>
        </a>
    );
}

function ProjectBlock( { img, alt, title, desc } ) {
    return (
        <div className="w-full h-auto flex flex-col py-5 rounded-3xl -rotate-12 transition-all ease-linear duration-700 hover:rotate-0 hover:scale-95 group">
            <div className="w-full h-auto">
                <img src={ img } alt={ alt } className="w-full h-auto border-b transition-all ease-linear duration-700 group-hover:rounded-3xl group-hover:scale-95 group-hover:shadow-special"></img>
            </div>

            <div className="w-auto h-auto mt-5 px-4">
                <p className="text-xl font-semibold transition-all ease-linear duration-700 text-slate-200 group-hover:text-green-300"> { title } </p>

                <p className="text-base font-thin leading-loose text-slate-50 mt-3"> { desc } </p>

                <div className="w-56 h-12 mt-5 rounded-3xl flex justify-center items-center transition-all ease-linear duration-200 group-hover:bg-slate-50 group-hover:hover:bg-gradient-to-r from-green-400 to-fuchsia-400 hover:scale-105 hover:cursor-pointer group">
                    <a href="#" className="text-base font-semibold tracking-wide text-slate-950"> Check out </a>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    const technologiesList = [
        { "img": reactLogo, "alt": "react logo.", "title": "React JS", "desc": "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." },
        { "img": tailwindLogo, "alt": "tailwind logo.", "title": "Tailwind CSS", "desc": "Tailwind CSS is an open source CSS framework." },
        { "img": jsLogo, "alt": "javascript logo.", "title": "JavaScript", "desc": "JavaScript is one of the core technologies of the WWW. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior." },
        { "img": cssLogo, "alt": "css logo.", "title": "CSS", "desc": "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML." },
        { "img": htmlLogo, "alt": "html logo.", "title": "HTML", "desc": "HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content." },
        { "img": gitLogo, "alt": "git logo.", "title": "Git", "desc": "Git VCS that tracks changes in any set of computer files." },
        { "img": githubLogo, "alt": "github logo.", "title": "GitHub", "desc": "GitHub is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code." }
    ];

    const renderTechnologiesList = technologiesList.map( technology => 
        <TechnologyBlock img={ technology.img } alt={ technology.alt } title={ technology.title } desc={ technology.desc } />    
    );

    const projectsList = [
        { "img": nikeCloneImg, "alt": "nike clone image.", "title": "Nike Clone", "desc": "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." },
        { "img": nikeCloneImg, "alt": "nike clone image.", "title": "Nike Clone", "desc": "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." },
        { "img": nikeCloneImg, "alt": "nike clone image.", "title": "Nike Clone", "desc": "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." }
    ];

    const renderProjectsList = projectsList.map( technology => 
        <ProjectBlock img={ technology.img } alt={ technology.alt } title={ technology.title } desc={ technology.desc } />    
    );

    return (
        <div className="w-full h-auto mt-0 pt-20 bg-neutral-950 overflow-hidden">
            <div className="w-full h-auto px-5 py-5">
                <h1 className="text-7xl font-bold leading-tight text-slate-200"> Hi, <br /> I'm David, <br /> Front-End <br /> Developer </h1>
            </div>

            <div className="w-full h-auto flex flex-col items-center">
                <h1 className="text-2xl font-thin text-slate-200 px-5"> TECHNOLOGIES I USE </h1>

                <div className="w-full h-auto mt-10 py-5 px-5 flex items-center space-x-5 overflow-x-scroll no-scrollbar bg-slate-750">
                    <div className="w-auto h-auto absolute ml-24 grid grid-cols-3 space-x-7 rounded-3xl">
                        <img src={ reactLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ tailwindLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ jsLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ cssLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ htmlLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ gitLogo } alt="react logo." className="w-14 h-14"></img>
                        <img src={ githubLogo } alt="react logo." className="w-14 h-14"></img>
                    </div>

                    { renderTechnologiesList }
                </div>
            </div>

            <div className="w-full h-auto mt-28 mb-28 flex flex-col items-center">
                <h1 className="text-2xl font-thin text-slate-200"> MY WORK </h1>

                <div className="w-full h-auto mt-16 grid grid-cols-1 gap-10">
                    { renderProjectsList }
                </div>
            </div>

            <div className="w-full h-auto mt-20 flex justify-center px-5">
                <h1 className="text-3xl font-medium leading-relaxed text-slate-200"> I'm a Freelance Front-End Developer specialized in building fully responsive websites and landing pages. </h1>
            </div>
        </div>
    );
}

export default Hero;