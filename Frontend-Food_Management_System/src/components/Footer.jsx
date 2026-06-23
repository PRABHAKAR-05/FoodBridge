import "../styles/Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <h2>FoodBridge</h2>

                    <p>
                        Reducing food waste and
                        feeding lives through
                        technology.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <p>Home</p>

                    <p>About</p>

                    <p>Contact</p>

                </div>

                <div className="footer-section">

                    <h3>Our Mission</h3>

                    <p>
                        Connect food donors,
                        volunteers and NGOs to
                        ensure surplus food
                        reaches people in need.
                    </p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 FoodBridge | Smart Food
                    Redistribution & Donation Platform
                </p>

            </div>

        </footer>

    );
}

export default Footer;