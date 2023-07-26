import { React } from "react";
import reactLogo from "../assets/technology-logos/react-icon.svg";
import cssLogo from "../assets/technology-logos/icons8-css-logo.svg";
import htmlLogo from "../assets/technology-logos/icons8-html-logo.svg";
import jsLogo from "../assets/technology-logos/icons8-javascript.svg";
import tailwindLogo from "../assets/technology-logos/tailwindcss.svg";
import gitLogo from "../assets/technology-logos/icons8-git.svg";
import githubLogo from "../assets/technology-logos/icons8-github.svg";
import nikeCloneImg from "../assets/projects-images/nike-clone-img.svg";
import personalWebpageImg from "../assets/projects-images/personal-webpage-img.png";
import shopifyLandingPage from "../assets/projects-images/shopify-landing-page.png";

function TechnologyBlock( { img, alt, title, desc } ) {
    return (
        <a href="#" className="w-auto min-w-fit h-auto py-7 px-5 flex flex-col transition-all duration-700 ease-in-out rotate-0 hover:bg-slate-600/30 hover:rounded-3xl hover:scale-105 group">
            <div className=" w-11/12 h-11/12 absolute grid grid-cols-3 space-x-7 space-y-6 -z-50 blur-xl">
                <img src={ reactLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ tailwindLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ jsLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ cssLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ htmlLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ gitLogo } alt="react logo." className="w-14 h-14"></img>
                <img src={ githubLogo } alt="react logo." className="w-14 h-14"></img>
            </div>
            
            <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 flex justify-center items-center rounded-full transition-all ease-linear duration-700 -rotate-45 group-hover:rotate-0 group-hover:shadow-2xl shadow-slate-50">
                <img src={ img } alt={ alt } className="w-14 h-14"></img>
            </div>

            <div className="w-auto h-auto mt-7 ml-2">
                <p className="text-xl font-semibold text-slate-50"> { title } </p>

                <p className="text-base xl:leading-loose font-thin leading-relaxed text-slate-200  mt-3"> { desc } </p>
            </div>
        </a>
    );
}

function ProjectBlock( { img, alt, link, title, desc } ) {
    return (
        <div className="w-full h-auto flex flex-col py-5 transition-all ease-linear duration-500 hover:scale-95 group">
            <div className="w-full h-auto">
                <img src={ img } alt={ alt } className="w-full h-auto transition-all ease-linear duration-500 group-hover:rounded-3xl group-hover:scale-95 group-hover:shadow-special"></img>
            </div>

            <div className="w-auto h-auto mt-5 px-4">
                <p className="text-xl md:text-2xl font-semibold transition-all ease-linear duration-500 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-fuchsia-300 group-hover:text-green-300 group-hover:font-medium"> { title } </p>

                <p className="text-base md:text-lg xl:leading-loose font-thin leading-loose text-slate-50 mt-3"> { desc } </p>

                <div className="w-56 h-12 xl:w-60 xl:h-12 xl:mt-7 mt-5 rounded-full flex justify-center items-center transition-all ease-linear duration-200 group-hover:bg-slate-50 group-hover:hover:bg-gradient-to-r from-green-400 to-fuchsia-400 hover:scale-105 hover:cursor-pointer group">
                    <a href={ link } className="text-base font-semibold tracking-wide text-slate-950"> Check out </a>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    const technologiesList = [
        { "img": reactLogo, "alt": "react logo.", "title": "React JS", "desc": "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. Tech giants such as Netflix, PayPal and others use React." },
        { "img": tailwindLogo, "alt": "tailwind logo.", "title": "Tailwind CSS", "desc": "Tailwind CSS is an open source CSS framework. OpenAI, NASA, Netflix, Shopify and others use Tailwind CSS on their platforms." },
        { "img": jsLogo, "alt": "javascript logo.", "title": "JavaScript", "desc": "JavaScript is one of the core technologies of the WWW. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior." },
        { "img": cssLogo, "alt": "css logo.", "title": "CSS", "desc": "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML." },
        { "img": htmlLogo, "alt": "html logo.", "title": "HTML", "desc": "HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content." },
        { "img": githubLogo, "alt": "github logo.", "title": "Git & GitHub", "desc": "Git VCS that tracks changes in any set of computer files. GitHub is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code." },
    ];

    const renderTechnologiesList = technologiesList.map( technology => 
        <TechnologyBlock img={ technology.img } alt={ technology.alt } title={ technology.title } desc={ technology.desc } />    
    );

    const projectsList = [
        { "img": nikeCloneImg, "alt": "nike clone image.", "link": "https://downey587.github.io/shopify-landing-page/", "title": "Nike Clone", "desc": "Fully responsive clone of Nike online store, the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US $46 billion in its fiscal year 2022." },
        { "img": shopifyLandingPage, "alt": "shopify landing page image.", "link": "https://downey587.github.io/shopify-landing-page/", "title": "Shopify landing page", "desc": "Recreated Shopify landing page. The company that has more than 2,000,000 businesses in approximately 175 countries using its platform. 1.58 million websites run on the Shopify platform as of 2021." },
        { "img": personalWebpageImg, "alt": "personal webpage image.", "link": "https://downey587.github.io/personal-website/", "title": "Personal webpage", "desc": "Personal webpage of a Front-end developer with experience. I build websites and landing pages using modern technologies to improve user experience of your website and grow your business." }
    ];

    const renderProjectsList = projectsList.map( technology => 
        <ProjectBlock img={ technology.img } alt={ technology.alt } title={ technology.title } desc={ technology.desc } />    
    );

    return (
        <div className="w-full h-auto mt-0 bg-neutral-950 overflow-hidden">
            <div className="w-full h-screen flex items-center">
                <h1 className="text-7xl sm:text-8xl xl:px-16 px-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-fuchsia-400 z-50"> Hi, <br /> I'm David, <br /> Front-End Developer </h1>
            </div>

            <div className="w-full h-full mt-48 flex flex-col items-center">
                <h1 className="text-3xl xl:text-4xl font-thin text-slate-200 px-5"> TECHNOLOGIES I USE </h1>

                <div className="w-full h-auto mt-24 xl:mt-32 py-5 px-5 xl:px-6 flex md:grid md:grid-cols-2 md:space-x-3 md:space-y-6 xl:grid-cols-3 2xl:gap-7 2xl:px-10 items-center space-x-5 overflow-x-scroll no-scrollbar bg-slate-750">
                    { renderTechnologiesList }
                </div>
            </div>

            <div id="work" className="w-full h-auto mt-48 mb-28 flex flex-col items-center">
                <h1 className="text-3xl mt-24 xl:text-4xl font-thin text-slate-200"> MY WORK </h1>

                <div className="w-full h-auto mt-24 xl:mt-24 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                    { renderProjectsList }
                </div>
            </div>

            <div id="about" className="w-full h-auto mt-64 mb-24 flex flex-col items-center px-5">
                <div className="w-full md:w-1/2 h-auto flex flex-col items-center">
                    <h1 className="text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-orange-300"> ABOUT ME 👨‍💻 </h1>
                    <h1 className="text-xl font-medium leading-loose text-center text-slate-200 mt-6"> MY NAME IS DAVID DOWNEY. I'M A FREELANCE FRONT-END DEVELOPER WITH EXPERIENCE SPECIALIZED IN BUILDING FULLY RESPONSIVE WEBSITES AND LANDING PAGES. </h1>
                    <h1 className="text-xl font-medium leading-loose text-center text-slate-200 mt-6"> IF YOU'RE INTERESTED IN WHAT I'M DOING EMAIL ME </h1>
                    <h1 id="contact" className="text-xl font-medium leading-loose text-center text-slate-200 mt-6 rounded-2xl px-5 py-3 transition-all duration-150 ease-linear bg-slate-800 hover:bg-slate-700"> ✉️ <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-green-400"> EMAIL:</span> email@gmail.com </h1>
                </div>
            </div>
        </div>
    );
}

export default Hero;