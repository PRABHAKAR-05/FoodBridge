import { useEffect, useState } from "react";

import API from "../services/api";
import FoodCard from "../components/FoodCard";

import "../styles/FoodList.css";

function FoodList() {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredFoods = foods.filter((food) => {

        const matchesSearch =
            food.foodName
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesFilter =
            filter === "All"
                ? true
                : food.status === filter;

        return (
            matchesSearch &&
            matchesFilter
        );
    });

    useEffect(() => {

        getFoods();

    }, []);

    async function getFoods() {

        try {

            const response =
                await API.get("/food");

            setFoods(response.data);

        } catch (error) {

            console.log(error);
        }
    }

    async function deleteFood(id) {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this food donation?"
            );

        if (!confirmDelete) {
            return;
        }

        try {

            const token =
                localStorage.getItem("token");

            await API.delete(
                `/food/${id}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                "Food Deleted Successfully"
            );

            getFoods();

        } catch (error) {

            alert(
                "Delete Failed"
            );
        }
    }

    async function updateStatus(
        id,
        status
    ) {

        try {

            const token =
                localStorage.getItem("token");

        await API.put(
    `/food/${id}`,
                {
                    status
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                `Food marked as ${status}`
            );

            getFoods();

        } catch (error) {

            alert(
                "Status Update Failed"
            );

            console.log(error);
        }
    }

    return (

        <div className="food-list-page">

            <h1>
                Food Donations
            </h1>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Search Food..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="filter-buttons">

                <button
                    onClick={() =>
                        setFilter("All")
                    }
                >
                    All Foods
                </button>

                <button
                    onClick={() =>
                        setFilter("Available")
                    }
                >
                    Available
                </button>

                <button
                    onClick={() =>
                        setFilter("Claimed")
                    }
                >
                    Claimed
                </button>

                <button
                    onClick={() =>
                        setFilter("Delivered")
                    }
                >
                    Delivered
                </button>

            </div>

            {
                filteredFoods.length === 0 ? (

                    <div className="empty-state">

                        <h3>
                            No Food Donations Found
                        </h3>

                        <p>
                            Try another search
                            or add a donation.
                        </p>

                    </div>

                ) : (

                    filteredFoods.map((food) => (

                        <FoodCard
                            key={food._id}
                            food={food}
                            deleteFood={deleteFood}
                            updateStatus={updateStatus}
                        />

                    ))
                )
            }

        </div>

    );
}

export default FoodList;