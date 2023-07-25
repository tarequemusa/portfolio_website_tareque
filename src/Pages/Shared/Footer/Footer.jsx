// import {FaFacebook, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";
// import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 rounded mb-16">
            <div className="flex justify-center shadow-2xl items-center w-full py-6">
                <div>
                    <p>Copyright &copy; {(new Date().getFullYear())} - All right reserved by Md. Tareque Musa</p>
                </div>
                {/* <div className="grid grid-flow-col gap-4" style={{fontSize: '2em'}}>
                    <Link to="facebook.com"><FaFacebook /></Link>
                    <Link to="youtube.com"><FaYoutube /></Link>
                    <Link to="twitter.com"><FaTwitter /></Link>
                    <Link to="pinterest.com"><FaPinterest /></Link>
                </div> */}
            </div>

        </footer>
    );
};

export default Footer;