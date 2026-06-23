import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

import "../styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const location = useLocation();

    const token =
        localStorage.getItem("token");

    function handleLogout() {

        localStorage.removeItem("token");

        navigate("/login");
    }

    return (

        <nav className="navbar">

            <div className="logo-section">

                <Link
                    to="/"
                    className="logo-link"
                >

                    <img
                        src={logo}
                        alt="FoodBridge Logo"
                        className="logo"
                    />

                    <h2>
                        FoodBridge
                    </h2>

                </Link>

            </div>

            <div className="nav-links">

                <Link
                    to="/"
                    className={
                        location.pathname === "/"
                            ? "active-link"
                            : ""
                    }
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className={
                        location.pathname === "/about"
                            ? "active-link"
                            : ""
                    }
                >
                    About
                </Link>

                <Link
                    to="/contact"
                    className={
                        location.pathname === "/contact"
                            ? "active-link"
                            : ""
                    }
                >
                    Contact
                </Link>

                {
                    token ? (

                        <>

                            <Link
                                to="/foods"
                                className={
                                    location.pathname === "/foods"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Foods
                            </Link>

                            <Link
                                to="/add-food"
                                className={
                                    location.pathname === "/add-food"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Add Food
                            </Link>

                            <Link
                                to="/beneficiaries"
                                className={
                                    location.pathname === "/beneficiaries"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Beneficiaries
                            </Link>

                            <Link
                                to="/dashboard"
                                className={
                                    location.pathname === "/dashboard"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Dashboard
                            </Link>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <Link
                                to="/login"
                                className={
                                    location.pathname === "/login"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className={
                                    location.pathname === "/register"
                                        ? "active-link"
                                        : ""
                                }
                            >
                                Register
                            </Link>

                        </>

                    )
                }

            </div>

        </nav>

    );
}

export default Navbar;