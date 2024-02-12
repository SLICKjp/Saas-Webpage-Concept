import logo from "../../assets/logo-white.png";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <img src={logo} alt="" />

                        <div className="card">
                            <h3>Subscribe to newsletter</h3>
                            <p>Subscribe now to receie tips on how to take your business to the next level</p>
                            <form>
                                <input type="email" className="email" placeholder="Enter your email" />
                                <button className="footer-card-btn" type="submit">Subscribe</button>
                            </form>
                        </div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="company-links">
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Process</li>
                            <li>Join Our Team</li>
                        </ul>
                    </div>
                    <div className="research-links">
                        <h4>Resources</h4>
                        <ul>
                            <li>News</li>
                            <li>Research</li>
                            <li>Recent Projects</li>
                        </ul>
                    </div>
                    <div className="contact-link">
                        <h4>Contact</h4>
                        <ul>
                            <li>hello@growthapp.com</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer