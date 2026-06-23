import aboutImage from "../assets/about.png";

import "../styles/About.css";

function About() {

    return (

        <div className="about-page">

            <div className="about-header">

                <div className="about-content">

                    <h1>
                        About FoodBridge
                    </h1>

                    <p>
                        FoodBridge is a smart food
                        redistribution platform that
                        helps reduce food wastage by
                        connecting food donors with
                        NGOs, orphanages, old-age
                        homes and needy communities.
                    </p>

                    <p>
                        Our mission is to ensure
                        that surplus food reaches
                        people who need it instead
                        of being wasted.
                    </p>

                </div>

                <img
                    src={aboutImage}
                    alt="About FoodBridge"
                />

            </div>

            <div className="mission-section">

                <div className="mission-card">

                    <h2>
                        Our Mission
                    </h2>

                    <p>
                        Reduce food waste and
                        fight hunger through
                        technology-driven food
                        donation management.
                    </p>

                </div>

                <div className="mission-card">

                    <h2>
                        Our Vision
                    </h2>

                    <p>
                        Create a future where
                        no edible food is wasted
                        and every community has
                        access to nutritious food.
                    </p>

                </div>

                <div className="mission-card">

                    <h2>
                        Our Values
                    </h2>

                    <p>
                        Trust, Transparency,
                        Social Responsibility
                        and Community Service.
                    </p>

                </div>

            </div>

        </div>

    );
}

export default About;