import {Fade, Slide, Zoom} from "react-awesome-reveal";
import profile_photo from "../../../assets/Profile/Tareque_Musa.png"
import TypeMe from 'react-typeme';
import {Link} from "react-router-dom";
import {FaDownload, FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa";
import ResumePdf from '../../../assets/Resume/Resume of Tareque Musa.pdf';

const Hero = () => {
    return (
        <div className="hero pt-24" id='hero'>
            <div className="hero-content flex-col lg:flex-row gap-5 shadow-2xl">
                <div>
                    <Slide duration={3000} e><img src={profile_photo} className="rounded-lg grayscale transition duration-300 hover:grayscale-0 cursor-pointer" /></Slide>
                </div>
                <div>
                    <div style={{fontSize: '2em'}}>
                        <h1 className="text-info">Hi there,</h1>
                        <h1 className="text-sky-600 font-bold" style={{fontSize: '1em'}}>My name is Tareque Musa</h1>
                        <TypeMe className="font-bold" strings={[
                            'I  am a FrontEnd Web Developer'
                        ]}
                        />
                    </div>
                    <Zoom cascade damping={0.9}><p className="py-6">Introducing me, a skilled <span className="font-bold text-info">FrontEnd Web Developer</span> with expertise in JavaScript, React, Node.js, Express, MongoDB, Firebase and front-end frameworks like Bootstrap and Tailwind. With my expertise, I create interactive and dynamic web applications.  With a passion for crafting immersive user experiences, I combines technical prowess and creative problem-solving to build modern and interactive web applications.</p></Zoom>
                    <div className="grid sm:grid-cols-1">
                        <div className="navbar-end lg:invisible visible my-6">
                            <a
                                href={ResumePdf}
                                download="Resume of Tareque Musa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='flex justify-center items-center gap-2 btn btn-outline btn-info rounded shadow-[-10px_-10px_30px_4px,_10px_10px_30px_4px_rgba(255,255,0)]'>RESUME <FaDownload /></button>
                            </a>
                        </div>
                        <div className="flex flex-row items-center gap-2 lg:-mt-24">
                            <h2 className="text-info">Follow Me:</h2>
                            <Fade duration={5000}>
                                <button className="btn btn-outline btn-info rounded shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]" style={{fontSize: '1.5em'}}><Link to="https://github.com/tarequemusa" target="_blank"><FaGithub /></Link></button>
                                <button className="btn btn-outline btn-info rounded shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]" style={{fontSize: '1.5em'}}><Link to="https://www.linkedin.com/in/tarequemusa" target="_blank"><FaLinkedinIn /></Link></button>
                                <button className="btn btn-outline btn-info rounded shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]" style={{fontSize: '1.5em'}}><Link to="https://www.facebook.com/tareque.musa" target="_blank"><FaFacebook /></Link></button>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;