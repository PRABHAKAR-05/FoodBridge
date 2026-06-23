import "../styles/Contact.css";

function Contact() {

    return (

        <div className="contact-page">

            <h1>
                Contact FoodBridge
            </h1>

            <p className="contact-subtitle">
                Have questions, suggestions,
                or want to collaborate with us?
                We'd love to hear from you.
            </p>

            <div className="contact-container">

                <div className="contact-card">

                    <h2>Email</h2>

                    <p>
                        foodbridge@gmail.com
                    </p>

                </div>

                <div className="contact-card">

                    <h2>Phone</h2>

                    <p>
                        +91 98765 43210
                    </p>

                </div>

                <div className="contact-card">

                    <h2>Address</h2>

                    <p>
                        Visakhapatnam,
                        Andhra Pradesh,
                        India
                    </p>

                </div>

            </div>

            <div className="contact-message">

                <h2>
                    Together We Can Reduce Food Waste
                </h2>

                <p>
                    Join FoodBridge in creating
                    a sustainable future where
                    surplus food reaches people
                    who need it most.
                </p>

            </div>

        </div>

    );
}

export default Contact;