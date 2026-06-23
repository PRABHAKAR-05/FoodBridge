import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        }
    }

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <h2>
                    Welcome Back
                </h2>

                <p>
                    Login to FoodBridge
                </p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;