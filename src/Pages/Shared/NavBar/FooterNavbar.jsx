import {useState} from "react";
import {Link} from "react-scroll";
import '../NavBar/FooterNavBar.css'


const FooterNavbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (

        <nav className="fixed z-50 w-full mx-auto max-w-lg h-12 -translate-x-1/2 bg-gray-200 bg-opacity-60 rounded-full bottom-4 left-1/2 dark:bg-gray-900 dark:border-gray-600 ring-offset-2 ring-4">
            <div className="grid h-full max-w-lg grid-cols-5" onClick={handleClick}>
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"><Link to="about" spy={true} smooth={true} offset={50} duration={500} title="About" onClick={closeMenu}>
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3m3 11H2v-2c0-2.21 2.69-4 6-4s6 1.79 6 4M7 9c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m-3 9h8c0-1.1-1.79-2-4-2s-4 .9-4 2m18-6v2h-9v-2m9-4v2h-9V8m9-4v2h-9V4z" />
                    </svg></Link>
                    <span className="sr-only">About</span>
                </button>
                {/* <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                <button data-tooltip-target="tooltip-skills" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"><Link to="skills" spy={true} smooth={true} offset={50} duration={500} title="Skills" onClick={closeMenu}>
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20.1 5.52V1.5h-.18c-3.36.15-6.15 2.31-7.83 4.02l-.09.09-.09-.09C10.2 3.81 7.44 1.65 4.08 1.5H3.9v4.02H0v6.93c0 1.68.06 3.36.18 4.74a5.57 5.57 0 005.19 5.1c2.13.12 4.38.21 6.63.21s4.5-.09 6.63-.24a5.57 5.57 0 005.19-5.1c.12-1.38.18-3.06.18-4.74v-6.9zm0 6.93c0 1.59-.06 3.15-.18 4.41-.09.81-.75 1.47-1.56 1.5a90 90 0 01-12.72 0c-.81-.03-1.5-.69-1.56-1.5-.12-1.26-.18-2.85-.18-4.41V5.52c2.82.12 5.64 3.15 6.48 4.32L12 12.09l1.62-2.25c.84-1.2 3.66-4.2 6.48-4.32z" />
                    </svg></Link>
                    <span className="sr-only">Skills</span>
                </button>
                {/* <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Skills
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"><Link to="hero" spy={true} smooth={true} offset={50} duration={500} title="Home" onClick={closeMenu}>
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg></Link>
                    <span className="sr-only">Home</span>
                </button>
                {/* <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                <button data-tooltip-target="tooltip-portfolio" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} title="Portfolio" onClick={closeMenu}>
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg></Link>
                    <span className="sr-only">Portfolio</span>
                </button>
                {/* <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Portfolio
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
                <button data-tooltip-target="tooltip-contact" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} title="Contact" onClick={closeMenu}>
                        <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 0H4v2h16V0M4 24h16v-2H4v2M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2m-8 2.75A2.25 2.25 0 0114.25 9 2.25 2.25 0 0112 11.25 2.25 2.25 0 019.75 9 2.25 2.25 0 0112 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
                        </svg>
                    </Link>
                    <span className="sr-only">Contact</span>
                </button>
                {/* <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Contact
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
            </div>
        </nav>

    );
};

export default FooterNavbar;