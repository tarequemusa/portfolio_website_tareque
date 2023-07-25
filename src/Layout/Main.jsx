import {Outlet} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import FooterNavbar from "../Pages/Shared/NavBar/FooterNavbar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <FooterNavbar></FooterNavbar>
        </div>
    );
};

export default Main;