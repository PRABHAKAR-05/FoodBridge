import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";
import dashboardImage from "../assets/dashboard.png";

import "../styles/Dashboard.css";

function Dashboard() {

    const [totalFoods, setTotalFoods] = useState(0);
    const [availableFoods, setAvailableFoods] = useState(0);
    const [claimedFoods, setClaimedFoods] = useState(0);
    const [deliveredFoods, setDeliveredFoods] = useState(0);
    const [recentFoods, setRecentFoods] = useState([]);

    useEffect(() => {

        getDashboardData();

    }, []);

    async function getDashboardData() {

        try {

            const response =
                await API.get("/food");

            const foods =
                response.data;

            setTotalFoods(
                foods.length
            );

            const available =
                foods.filter(
                    (food) =>
                        food.status ===
                        "Available"
                );

            const claimed =
                foods.filter(
                    (food) =>
                        food.status ===
                        "Claimed"
                );

            const delivered =
                foods.filter(
                    (food) =>
                        food.status ===
                        "Delivered"
                );

            setAvailableFoods(
                available.length
            );

            setClaimedFoods(
                claimed.length
            );

            setDeliveredFoods(
                delivered.length
            );

            setRecentFoods(
                foods.slice(-5).reverse()
            );

        } catch (error) {

            console.log(error);
        }
    }

    return (

        <div className="dashboard-page">

            <div className="dashboard-header">

                <div>

                    <h1>
                        Volunteer Dashboard
                    </h1>

                    <p>
                        Manage food donations,
                        monitor food availability,
                        and help beneficiaries
                        through FoodBridge.
                    </p>

                </div>

                <img
                    src={dashboardImage}
                    alt="Dashboard"
                />

            </div>

            <div className="stats-container">

                <div className="stat-card">

                    <h2>
                        {totalFoods}
                    </h2>

                    <p>
                        Total Donations
                    </p>

                </div>

                <div className="stat-card">

                    <h2>
                        {availableFoods}
                    </h2>

                    <p>
                        Available Foods
                    </p>

                </div>

                <div className="stat-card">

                    <h2>
                        {claimedFoods}
                    </h2>

                    <p>
                        Claimed Foods
                    </p>

                </div>

                <div className="stat-card">

                    <h2>
                        {deliveredFoods}
                    </h2>

                    <p>
                        Delivered Foods
                    </p>

                </div>

            </div>

            <div className="action-buttons">

                <Link
                    to="/add-food"
                    className="dashboard-btn"
                >
                    Add Food
                </Link>

                <Link
                    to="/foods"
                    className="dashboard-btn green-btn"
                >
                    View Foods
                </Link>

            </div>

            <div className="recent-foods">

                <h2>
                    Recent Donations
                </h2>

                {
                    recentFoods.length === 0 ? (

                        <p>
                            No donations available
                        </p>

                    ) : (

                        recentFoods.map((food) => (

                            <div
                                key={food._id}
                                className="recent-food-card"
                            >

                                <h3>
                                    {food.foodName}
                                </h3>

                                <p>
                                    Quantity:
                                    {" "}
                                    {food.quantity}
                                </p>

                                <p>
                                    Location:
                                    {" "}
                                    {food.location}
                                </p>

                                <p>
                                    Status:
                                    {" "}
                                    {food.status}
                                </p>

                            </div>

                        ))
                    )
                }

            </div>

        </div>

    );
}

export default Dashboard;