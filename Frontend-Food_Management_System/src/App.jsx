import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import FoodList from "./pages/FoodList";
import AddFood from "./pages/AddFood";
import EditFood from "./pages/EditFood";

import Beneficiaries from "./pages/Beneficiaries";

function App() {

    return (

        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/foods"
                    element={<FoodList />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-food"
                    element={
                        <ProtectedRoute>
                            <AddFood />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-food/:id"
                    element={
                        <ProtectedRoute>
                            <EditFood />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/beneficiaries"
                    element={
                        <ProtectedRoute>
                            <Beneficiaries />
                        </ProtectedRoute>
                    }
                />

            </Routes>

            <Footer />
        </>
    );
}

export default App;