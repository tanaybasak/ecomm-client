import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Payment from '../../assets/payments.png';
import "./Footer.scss";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo eaque
                    ipsa quae ab illo.
                </div>
            </div>
            <div className="col">
                <div className="title">
                    Contact
                </div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        BTM Layout 2nd Stage, Bangalore, Bangalore Urban District, Karnataka, India, 560076.
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: +91-863-897-4203
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: store@jsdev.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">
                    Categories
                </div>
                <div className="text">
                    Headphones
                </div>
                <div className="text">
                    Smart Watches
                </div>
                <div className="text">
                    Bluetooth Speakers
                </div>
                <div className="text">
                    Wireless Earbuds
                </div>
                <div className="text">
                    Home Theaters
                </div>
                <div className="text">
                    Projectors
                </div>
            </div>
            <div className="col">
                <div className="title">
                    Pages
                </div><div className="text">
                    Home
                </div><div className="text">
                    About
                </div><div className="text">
                    Privacy Policy
                </div><div className="text">
                    Returns
                </div><div className="text">
                    Terms and Conditions
                </div>
                <div className="text">
                    Contact Us
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        EXPO 2023 CREATED BY TANOY. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
