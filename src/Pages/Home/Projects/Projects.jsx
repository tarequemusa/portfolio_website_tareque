import {Link} from 'react-router-dom';
import '../Projects/Projects.css'
import {Zoom} from 'react-awesome-reveal';


const Projects = () => {
    return (
        <section id='portfolio'>
            <div className='pt-24'>
                <h1 className="font-semibold text-center text-info mt-12">My most notable Projects</h1>
                <h1 className="font-bold text-center" style={{fontSize: '2em'}}>Projects on MERN</h1>
                <div className="px-10 mx-auto mt-16">
                    <Zoom cascade damping={0.9}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-3">
                            <div className="preview">
                                <img className="previewimg" src="https://i.ibb.co/wM44g7z/simple-firebase-1may-web-app.pngg" />
                            </div>
                            <div className='border p-6 bg-sky-300 bg-opacity-10'>
                                <h1 className="text-sky-600 font-bold border-b pb-2" style={{fontSize: '1em'}}>PROJECT TITLE: LENSID | DIGITAL PHOTOGRAPHY COURSES</h1><br />
                                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-4'>
                                    <Link to="https://simple-firebase-1may.web.app/" target='_blank'><button className="btn btn-outline btn-info">Live Website</button></Link>
                                    <Link to="https://github.com/tarequemusa/summer-camp-lensid-client" target='_blank'><button className="btn btn-outline btn-info">GitHub-Client</button></Link>
                                    <Link to="https://github.com/tarequemusa/summer-camp-lensid-server" target='_blank'><button className="btn btn-outline btn-info">GitHub-Server</button></Link>
                                </div>
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Project Details:</h1>
                                <p><span className="text-info">LENSID | DIGITAL PHOTOGRAPHY COURSES</span> is a website for a summer camp school that allows students to enroll and learn specific extra-curricular activities discussed in the requirements. </p>
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Technology Used:</h1>
                                Vite, Node.js, Express.js, MongoDB, React, React-router, React-hooks, Firebase-Authentication, Stripe-Payment-Gateway, Tailwind
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Features: </h1>
                                Slider, Registration & Login System, Private Dashboard, Stripe Payment, User Form, Responsive (Mobile, Tab, Desktop), User Role.
                            </div>
                        </div>
                    </Zoom>
                    <Zoom cascade damping={0.9}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
                            <div className="preview">
                                <img className="previewimg" src="https://i.ibb.co/C2wYg8c/childhood-kids-toys-store-web-app.png" />
                            </div>
                            <div className='border p-6 bg-pink-600 bg-opacity-10'>
                                <h1 className="text-secondary font-bold border-b pb-2" style={{fontSize: '1em'}}>PROJECT TITLE: CHILDHOOD | KIDS TOYS STORE</h1><br />
                                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-4'>
                                    <Link to="https://childhood-kids-toys-store.web.app/" target='_blank'><button className="btn btn-outline btn-accent">Live Website</button></Link>
                                    <Link to="https://github.com/tarequemusa/childhood-client-assignment-11" target='_blank'><button className="btn btn-outline btn-accent">GitHub-Client</button></Link>
                                    <Link to="https://github.com/tarequemusa/childhood-server-assignment-11" target='_blank'><button className="btn btn-outline btn-accent">GitHub-Server</button></Link>
                                </div>
                                <h1 className="text-sky-600 font-bold mt-6" style={{fontSize: '1em'}}>Project Details:</h1>
                                <p>
                                    <span className="text-secondary">CHILDHOOD | KIDS TOYS STORE</span> is a simple full-stack Disney Toy Marketplace website.
                                </p>
                                <h1 className="text-sky-600 font-bold mt-6" style={{fontSize: '1em'}}>Technology Used:</h1>
                                Vite, Node.js, Express.js, MongoDB, React, React-router, React-hooks, Firebase-Authentication, Tailwind
                                <h1 className="text-sky-600 font-bold mt-6" style={{fontSize: '1em'}}>Features: </h1>
                                Homepage with Navbar, Banner, Gallery, Shop By Category, Footer, Login and Registration, Add Delete
                                Update Products etc.
                            </div>
                        </div>
                    </Zoom>
                    <Zoom cascade damping={0.9}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6">
                            <div className="preview">
                                <img className="previewimg" src="https://i.ibb.co/t426vkY/the-chefs-cafe-web-app.png" />
                            </div>
                            <div className='border p-6 bg-green-600 bg-opacity-10'>
                                <h1 className="text-success font-bold border-b pb-2" style={{fontSize: '1em'}}>PROJECT TITLE: THE CHEFS CAFE | CHEFS RECIPE HUNTER</h1><br />
                                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-4'>
                                    <Link to="https://the-chefs-cafe.web.app/" target='_blank'><button className="btn btn-outline btn-accent">Live Website</button></Link>
                                    <Link to="https://github.com/tarequemusa/chefs-cafe-client" target='_blank'><button className="btn btn-outline btn-accent">GitHub-Client</button></Link>
                                    <Link to="https://github.com/tarequemusa/the-chefs-cafe-server" target='_blank'><button className="btn btn-outline btn-accent">GitHub-Server</button></Link>
                                </div>
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Project Details:</h1>
                                <p>
                                    <span className='text-success'>THE CHEFS CAFE | CHEFS RECIPE HUNTER</span> is a website that shows the recipes of all available chefs. The website exclusively dedicated to italian cuisine.
                                </p>
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Technology Used:</h1>
                                Vite, Node.js, Express.js, MongoDB, React, React-router, Firebase-Authentication, React Bootstrap
                                <h1 className="text-sky-600 font-bold mt-3" style={{fontSize: '1em'}}>Features: </h1>
                                Banner, Navbar, Footer, Sign in, Sign Up, Spinner, Active Route, Private Route, Environment Variable, Data from API
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    );
};

export default Projects;