
import ContactForm from "../../../Components/ContactForm/ContactForm";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
        </div>
    );
};

export default Home;