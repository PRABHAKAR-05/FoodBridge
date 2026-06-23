import { Link } from "react-router-dom";

import hero from "../assets/hero.png";
import volunteer from "../assets/volunteer.png";
import donation from "../assets/donation.png";
import orphanage from "../assets/orphanage.png";
import oldage from "../assets/oldage.png";

import "../styles/Home.css";

function Home() {

    return (

        <div className="home">

            {/* Hero Section */}

            <section className="hero">

                <div className="hero-content">

                    <h1>
    Save Food.
    <span>Feed Lives.</span>
</h1>

                    <p>
                        FoodBridge connects hotels,
                        restaurants, caterers and event
                        organizers with NGOs,
                        orphanages and old-age homes
                        to reduce food wastage and
                        help communities.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/add-food"
                            className="donate-btn"
                        >
                            Donate Food
                        </Link>

                        <Link
                            to="/foods"
                            className="view-btn"
                        >
                            View Foods
                        </Link>

                    </div>

                </div>

                <img
                    src={hero}
                    alt="Food Donation"
                    className="hero-image"
                />

            </section>

            {/* Volunteer Section */}

            <section className="section">

                <img
                    src={volunteer}
                    alt="Volunteers"
                />

                <div>

                    <h2>
                        Trusted Volunteers
                    </h2>

                    <p>
                        Verified volunteers collect,
                        inspect and deliver food
                        safely to orphanages,
                        old-age homes and
                        needy communities.
                    </p>

                </div>

            </section>

            {/* Donation Section */}

            <section className="section reverse">

                <div>

                    <h2>
                        Smart Food Redistribution
                    </h2>

                    <p>
                        Surplus food from events,
                        hotels and restaurants is
                        distributed efficiently
                        before it becomes waste.
                    </p>

                </div>

                <img
                    src={donation}
                    alt="Donation"
                />

            </section>

            {/* Impact Section */}

            <section className="impact">

                <h2>
                    Creating Social Impact
                </h2>

                <div className="impact-cards">

                    <div className="impact-card">

                        <img
                            src={orphanage}
                            alt="Orphanage"
                        />

                        <h3>
                            Supporting Orphanages
                        </h3>

                    </div>

                    <div className="impact-card">

                        <img
                            src={oldage}
                            alt="Old Age Home"
                        />

                        <h3>
                            Supporting Old Age Homes
                        </h3>

                    </div>

                </div>

            </section>

            {/* Statistics Section */}

            <section className="stats">

                <div className="stat-box">

                    <h2>500+</h2>

                    <p>
                        Food Donations
                    </p>

                </div>

                <div className="stat-box">

                    <h2>100+</h2>

                    <p>
                        Volunteers
                    </p>

                </div>

                <div className="stat-box">

                    <h2>50+</h2>

                    <p>
                        NGOs
                    </p>

                </div>

                <div className="stat-box">

                    <h2>1000+</h2>

                    <p>
                        People Helped
                    </p>

                </div>

            </section>

        </div>

    );
}

export default Home;