import React, {useRef} from "react";
import "styles/Header.scss";
// import Logo from "assets/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes, FaFacebook, FaInstagram, } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Logo from "assets/logo.svg";

const Header = () => {
    const mobileMenu = useRef(null);
    const handleMenuToggle = () => {
        const header = document.querySelector("header");
        
            console.log("Mobile menu ref:", header.classList.contains("active"));
            if(header.classList.contains("active")) {
                header.classList.remove("active");
            } else {
                header.classList.add("active");
            }
    }
    return (
        <header>
            <div className="top-header">
                <div className="container">
                    <div className="top-bar d-flex justify-content-between align-items-center py-2">
                        <div className="contact-info">
                            <span>📧 astroguruvijay@gmail.com</span>
                            <span className="ms-4">📞 +91 XXXXXXXXXX</span>
                        </div>
                        <div className="social-icons d-flex align-items-center">
                            <FaFacebook className="me-3" />
                            <FaInstagram className="me-3" />
                            <FaTimes />
                            <button
                                variant="outline-light"
                                className="ms-3 book-btn"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header ">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="nav-links justify-content-center align-items-center">
                        {[
                            "Home",
                            "About",
                            "Services",
                            "Horoscope",
                            "Remedies",
                            "Gallery",
                            "Testimonials",
                        ].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className="search-wrapper ">
                        <span>
                            {" "}
                            <FaMagnifyingGlass className="search-icon" />
                        </span>
                        <input
                            type="search"
                            className="search-input"
                            placeholder="Search "
                        />
                    </div>
                    <div className="mobile-menu">
                        <button className="menu-toggle" ref={mobileMenu} onClick={handleMenuToggle}>
                            <IoMenu className="menu-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
