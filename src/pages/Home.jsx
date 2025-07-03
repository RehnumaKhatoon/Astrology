import "styles/Home.scss";
import ProfileImg from "assets/profile1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HandBg from "assets/hand_bg.png";

import {
    FaMoon,
    FaClock,
    FaGlobe,
    FaFacebook,
    FaInstagram,
    FaTimes,
} from "react-icons/fa";
const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const cards = Array(8).fill({
        name: "Aacharya Vijay Verma",
        title: "Vedic Astrologer",
        experience: "25+ Years Experience",
        languages: "English, Hindi",
    });
    return (
        <div className="home">
            <section className="top-section">
                <div>
                    <div className="home-img">
                        {/* <img src={Image} alt="" /> */}
                    </div>
                    <div className="overlay"></div>
                    <div className="home-text container zoom-out-animation">
                        <div className="hand-bg">
                            <img src={HandBg} alt="" />
                        </div>
                        <h1>
                            <span>
                                Unlock Your Destiny with <br /> Expert Astrology
                            </span>
                        </h1>
                        <p>
                            Discover the power of the stars to guide your
                            career, relationships, and life path. With over 15
                            years of experience, Astrologer Aacharya Vijay Verma
                            provides personalized consultations rooted in Vedic
                            wisdom and modern insight.
                        </p>
                    </div>
                </div>
            </section>
            <section className="slider container my-5">
                <h2 className="text-center mb-4">Meet Our Experts</h2>
                <Slider {...sliderSettings}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="astro-card px-2 zoom-out-animation"
                        >
                            <div className="card h-100 text-center border-0 shadow-sm p-3 rounded-4">
                                <div className="img-wrapper">
                                    <img
                                        src={ProfileImg}
                                        alt={card.name}
                                        className="border-0 rounded-2"
                                        // style={{
                                        //     width: "98%",
                                        //     height: "200px",
                                        //     objectFit: "cover",
                                        // }}
                                    />
                                    <img
                                        src={ProfileImg}
                                        alt={card.name}
                                        className="border-0 rounded-2"
                                        // style={{
                                        //     width: "100%",
                                        //     height: "200px",
                                        //     objectFit: "cover",
                                        // }}
                                    />
                                </div>
                                <h5 className="text-orange mt-3">
                                    {card.name}
                                </h5>
                                <p className="mb-1">
                                    <FaMoon className="me-2 text-secondary" />{" "}
                                    {card.title}
                                </p>
                                <p className="mb-1">
                                    <FaClock className="me-2 text-secondary" />{" "}
                                    {card.experience}
                                </p>
                                <p className="mb-3">
                                    <FaGlobe className="me-2 text-secondary" />{" "}
                                    {card.languages}
                                </p>
                                <button className="btn btn-warning fw-bold text-white">
                                    Book Consultation
                                </button>
                                <div className="d-flex justify-content-center gap-3 mt-3 fs-5">
                                    <FaFacebook />
                                    <FaInstagram />
                                    <FaTimes />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};
export default Home;
