import Express from "../../../assets/Skills/express-original-wordmark.svg"
import Canva from "../../../assets/Skills/canva.png"
import Figma from "../../../assets/Skills/Figma-logo.png"
import VSCode from "../../../assets/Skills/VSCode.png"
import Firebase from "../../../assets/Skills/firebase-icon.svg"
import Netlify from "../../../assets/Skills/netlify-logo.png"
import Vercel from "../../../assets/Skills/vercel-iconz.png"
import Github from "../../../assets/Skills/github-logo.png"
import NPMvsYarn from "../../../assets/Skills/npm-yarn.png"
import MongoDB from "../../../assets/Skills/mongodb-plain.svg"
import Nodejs from "../../../assets/Skills/node-logos.png"
import Nextjs from "../../../assets/Skills/nextjs-icon.png"
import JWT from "../../../assets/Skills/jwt.png"
import Axios from "../../../assets/Skills/Axios.png"
import Stripe from "../../../assets/Skills/stripe-payment-logo.png"
import chromeDevtools from "../../../assets/Skills/devtools-50x50.png"
import 'aos/dist/aos.css';

const OtherSkills = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="300"
                data-aos-duration="2000">
                <h3 className="flex justify-start mt-12 uppercase font-semibold border-b border-info pb-6" style={{fontSize: '1em'}}>Comfortable</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 mt-6 gap-2">
                    <div className="btn btn-error btn-outline content-around px-16 py-16 mt-6 grid bg-sky-700 bg-opacity-30">
                        <div><img className="rounded p-1" src={Express} alt="" /></div>
                        <div className="mt-2">Express.js</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 mt-6 grid bg-sky-700 bg-opacity-30">
                        <div><img className="rounded p-1" src={MongoDB} alt="" /></div>
                        <div className="mt-2">MongoDB</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 mt-6 grid bg-sky-700 bg-opacity-30">
                        <div><img className="rounded w-full p-1" src={Nodejs} alt="" /></div>
                        <div className="mt-6">Node.js</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 mt-6 grid bg-sky-700 bg-opacity-30">
                        <div><img className="rounded w-full p-1" src={Nextjs} alt="" /></div>
                        <div className="mt-6">Next.js</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 mt-6 grid bg-sky-700 bg-opacity-30">
                        <div><img className="rounded w-full p-1" src={Firebase} alt="" /></div>
                        <div className="mt-6">Firebase</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 grid bg-sky-700 bg-opacity-30 mt-6">
                        <div><img className="rounded mx-auto" src={JWT} alt="" /></div>
                        <div className="mt-6">JSON Web Token</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 grid bg-sky-700 bg-opacity-30 mt-6">
                        <div><img className="rounded w-full p-1" src={Axios} alt="" /></div>
                        <div className="mt-6">Axios</div>
                    </div>
                    <div className="btn btn-error btn-outline content-around px-16 py-16 grid bg-sky-700 bg-opacity-30 mt-6">
                        <div><img className="rounded w-full" src={Stripe} alt="" /></div>
                        <div className="mt-6">Stripe</div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="500"
                data-aos-duration="2000">
                <h3 className="flex justify-start mt-12 uppercase font-semibold border-b border-info pb-6" style={{fontSize: '1em'}}>Tools</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 mt-6">
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={Figma} alt="" /></div>
                        <div className="">Figma</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={VSCode} alt="" /></div>
                        <div className="mt-6">VSCode</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded mx-auto" style={{display: 'block'}} src={chromeDevtools} alt="" /></div>
                        <div className="mt-6">Dev Tools</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={Canva} alt="" /></div>
                        <div className="mt-6">Canva</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={Netlify} alt="" /></div>
                        <div className="mt-6">Netlify</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90 ">
                        <div><img className="rounded w-full p-1" src={Vercel} alt="" /></div>
                        <div className="mt-6">Vercel</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={Github} alt="" /></div>
                        <div className="mt-6">Github</div>
                    </div>
                    <div className="btn btn-success btn-outline content-around px-16 py-16 mt-6 grid bg-slate-800 bg-opacity-90">
                        <div><img className="rounded w-full p-1" src={NPMvsYarn} alt="" /></div>
                        <div>NPM&Yarn</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSkills;