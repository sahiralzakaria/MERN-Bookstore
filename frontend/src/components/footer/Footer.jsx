import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-medai-text">Follow us on social media</div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: "blue" }} className="bi bi-telegram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: "red" }} className="bi bi-youtube"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
                    </div>
                </div>
            </div>

            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Useful Links</h3>
                    <ul className="footer-links">
                        <Link to='/' className="footer-link">Home</Link>
                        <Link to='/authors' className="footer-link">Authors</Link>
                        <Link to='/' className="footer-link">Blog</Link>
                        <Link to='/about' className="footer-link">About Us</Link>
                        <Link to='/contact' className="footer-link">Contact Us</Link>
                    </ul>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Information</h3>
                    <div className="footer-address-wrapper">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            Syria – Damascus – Al Hamra Street
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill"></i>
                            +963 944 123 456
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill"></i>
                            info@syriaexample.com
                        </div>
                    </div>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About Us</h3>
                    <p className="footer-description">
                        We are a digital platform focused on sharing knowledge, books, and
                        articles with readers across Syria and the Arab world. Our goal is to
                        provide high-quality content and create a community that encourages
                        learning, creativity, and growth.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer