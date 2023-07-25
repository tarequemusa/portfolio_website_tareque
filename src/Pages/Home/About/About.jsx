import {Fade, Slide, Zoom} from "react-awesome-reveal";
import AboutPhoto from '../../../assets/Profile/About.svg'
import {FaAngleDoubleRight} from "react-icons/fa";
import {Link} from 'react-scroll';
import {useState} from "react";

const About = () => {
    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)
    return (
        <section id="about">
            <div className="hero-content grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mx-auto my-10 shadow-2xl pt-24">
                <div>
                    <Fade duration={5000}><img src={AboutPhoto} className="w-full rounded-lg" /></Fade>
                </div>
                <div className="g-4">
                    <Zoom>
                        <h3 className="text-info">About Me</h3>
                        <h1 className="font-semibold my-6" style={{fontSize: '2em'}}>Why Hire Me for Your<br /> Next Project?</h1>
                        <p>My name is <span className="font-bold text-info">Md. Tareque Musa</span> based in Dhaka, Bangladesh. I am a skilled web developer specializing in User Interface Design and Developtment. I am passionate about crafting seamless user experiences and constantly expanding my knowledge in the ever-evolving world of web development.</p>
                        <p className="mt-3">
                            I have completed my master of sicence in computer science and engineering (MS IN CSE) from East West University, Dhaka, Bangladesh
                        </p>
                    </Zoom>
                    <Slide cascade damping={0.1}>
                        <div className="mt-8">
                            <a href="#_" className="relative px-28 font-bold text-white rounded-lg group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><span className="flex items-center relative ml-4">Hire Me &nbsp;<FaAngleDoubleRight /></span></Link>
                            </a>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default About;