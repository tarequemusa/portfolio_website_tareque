import Marquee from "react-fast-marquee";
import JavaScript from "../../../assets/Skills/javascript--v1.png"
import React from "../../../assets/Skills/react-native.png"
import Tailwind from "../../../assets/Skills/tailwind_css.png"
import Bootstrap from "../../../assets/Skills/bootstrap.png"
import CSS from "../../../assets/Skills/css3.png"
import HTML from "../../../assets/Skills/html-5--v1.png"
import ProgressBar from "@ramonak/react-progress-bar";
import OtherSkills from '../Skills/OtherSkills.jsx'


const Skills = () => {
    return (
        <div className="grid grid-col hero-content mx-auto gap-4 pt-24" id='skills'>
            <h1 className="font-semibold text-center text-info">My Skills Progress So Far</h1>
            <h1 className="font-bold text-center" style={{fontSize: '2em'}}>My Skills</h1>
            <h3 className="flex justify-start mt-12 uppercase font-semibold border-b border-info pb-6" style={{fontSize: '1em'}}>Expertise</h3>
            <Marquee className="mt-12 sm:grid-cols-1" pauseOnHover='true'>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={JavaScript} alt="" /></div>
                    <div>JavaScript</div>
                    <ProgressBar completed={80} />
                </div>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={React} alt="" /></div>
                    <div>React</div>
                    <ProgressBar completed={85} />
                </div>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={Tailwind} alt="" /></div>
                    <div>Tailwind</div>
                    <ProgressBar completed={95} />
                </div>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={Bootstrap} alt="" /></div>
                    <div>Bootstrap</div>
                    <ProgressBar completed={90} />
                </div>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={CSS} alt="" /></div>
                    <div>CSS</div>
                    <ProgressBar completed={100} />
                </div>
                <div className="btn btn-info btn-outline content-around px-16 py-20 grid mx-2 bg-slate-800 bg-opacity-90">
                    <div className="outline outline-warning outline-2 rounded-full p-3"><img className="rounded" src={HTML} alt="" /></div>
                    <div>HTML</div>
                    <ProgressBar completed={100} />
                </div>
            </Marquee>
            <OtherSkills />
        </div>
    );
};

export default Skills;