import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API from "../services/api";

function EditFood() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [foodType, setFoodType] = useState("");
    const [cookedTime, setCookedTime] = useState("");
    const [expiryTime, setExpiryTime] = useState("");
    const [donorName, setDonorName] = useState("");
    const [donorPhone, setDonorPhone] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {

        getFood();

    }, []);

    async function getFood() {

        try {

            const response =
                await API.get(`/food/${id}`);

            const food = response.data;

            setFoodName(food.foodName);
            setQuantity(food.quantity);
            setFoodType(food.foodType);
            setCookedTime(food.cookedTime);
            setExpiryTime(food.expiryTime);
            setDonorName(food.donorName);
            setDonorPhone(food.donorPhone);
            setLocation(food.location);

        } catch (error) {

            console.log(error);
        }
    }

    async function handleUpdate(e) {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

            await API.put(
                `/food/${id}`,
                {
                    foodName,
                    quantity,
                    foodType,
                    cookedTime,
                    expiryTime,
                    donorName,
                    donorPhone,
                    location
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert(
                "Food Updated Successfully"
            );

            navigate("/foods");

        } catch (error) {

            alert(
                "Failed To Update Food"
            );
        }
    }

    return (

        <div className="register-container">

            <form
                className="register-form"
                onSubmit={handleUpdate}
            >

                <h2>
                    Update Food Donation
                </h2>

                <input
                    type="text"
                    placeholder="Food Name"
                    value={foodName}
                    onChange={(e) =>
                        setFoodName(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Food Type"
                    value={foodType}
                    onChange={(e) =>
                        setFoodType(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Cooked Time"
                    value={cookedTime}
                    onChange={(e) =>
                        setCookedTime(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Expiry Time"
                    value={expiryTime}
                    onChange={(e) =>
                        setExpiryTime(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Donor Name"
                    value={donorName}
                    onChange={(e) =>
                        setDonorName(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Donor Phone"
                    value={donorPhone}
                    onChange={(e) =>
                        setDonorPhone(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)
                    }
                />

                <button type="submit">
                    Update Food
                </button>

            </form>

        </div>
    );
}

export default EditFood;