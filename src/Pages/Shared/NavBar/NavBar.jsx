import {FaDownload} from 'react-icons/fa';
import logo from '../../../assets/Logo/tm_logo.png'
import ResumePdf from '../../../assets/Resume/Resume of Tareque Musa.pdf';
import {Link} from 'react-scroll';
import DarkLight from '../../../Components/DarkTheme/DarkTheme';
import {useState} from 'react';
import './NavBar.css'


const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="px-10 navbar bg-slate-900 bg-opacity-30 shadow-2xl invisible lg:visible">
            <div className="navbar-start" onClick={handleClick}>
                <nav className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link></li>
                        <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Portfolio</Link></li>
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contacts</Link></li>
                        <a className='lg:hidden py-1'
                            href={ResumePdf}
                            download="Resume of Tareque Musa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='flex justify-center items-center gap-2 btn btn-outline'>RESUME <FaDownload /></button>
                        </a>
                        <div className="flex py-1 justify-start" ><DarkLight /></div>
                    </ul>
                </nav>
                <div className="navbar-end invisible lg:visible">
                    <Link to="/" className="btn btn-ghost lg:mb-3"><img src={logo} alt="" /></Link>
                </div>
                {/* <div className="navbar-end lg:invisible visible">
                    <Link to="/" className="btn btn-ghost lg:mb-3"><img className='lg:w-[75%] max-w-sm' src={logo} alt="" /></Link>
                </div> */}
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" style={{fontSize: '1em'}}>
                    <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Skills</Link></li>
                    <li><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Portfolio</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contacts</Link></li>
                </ul>
            </nav>
            <div className="navbar-end invisible lg:visible gap-3">
                <a
                    href={ResumePdf}
                    download="Resume of Tareque Musa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='flex justify-center items-center gap-2 btn btn-outline btn-secondary shadow-[5px_5px_0px_0px_RGBA(255,101,80,0.4)]'>RESUME <FaDownload /></button>
                </a>
                &nbsp;  <DarkLight className="btn btn-outline btn-info" />
            </div>

        </div>
    );
};

export default NavBar;