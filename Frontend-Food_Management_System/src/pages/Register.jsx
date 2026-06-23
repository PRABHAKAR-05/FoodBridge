import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/register",
                {
                    name,
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert(
                "Registration Successful"
            );

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    }

    return (

        <div className="register-container">

            <form
                className="register-form"
                onSubmit={handleRegister}
            >

                <h2>
                    Join FoodBridge
                </h2>

                <p>
                    Create your account and start helping communities
                </p>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Create Account
                </button>

                <div className="login-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </form>

        </div>
    );
}

export default Register;