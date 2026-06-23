import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddFood() {

    const navigate = useNavigate();

    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [foodType, setFoodType] = useState("");
    const [cookedTime, setCookedTime] = useState("");
    const [expiryTime, setExpiryTime] = useState("");
    const [donorName, setDonorName] = useState("");
    const [donorPhone, setDonorPhone] = useState("");
    const [location, setLocation] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        if (
            !foodName ||
            !quantity ||
            !foodType ||
            !cookedTime ||
            !expiryTime ||
            !donorName ||
            !donorPhone ||
            !location
        ) {

            alert("Please fill all fields");
            return;
        }

        if (donorPhone.length < 10) {

            alert("Enter a valid phone number");
            return;
        }

        try {

            const token =
                localStorage.getItem("token");

            await API.post(
                "/food/create",
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
                "Food Donation Added Successfully"
            );

            navigate("/foods");

        } catch (error) {

            alert(
                "Failed To Add Food"
            );
        }
    }

    return (

        <div className="register-container">

            <form
                className="register-form"
                onSubmit={handleSubmit}
            >

                <h2>
                    Donate Food
                </h2>

                <input
                    type="text"
                    placeholder="Food Name"
                    value={foodName}
                    onChange={(e) =>
                        setFoodName(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) =>
                        setQuantity(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Food Type"
                    value={foodType}
                    onChange={(e) =>
                        setFoodType(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Cooked Time"
                    value={cookedTime}
                    onChange={(e) =>
                        setCookedTime(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Expiry Time"
                    value={expiryTime}
                    onChange={(e) =>
                        setExpiryTime(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Donor Name"
                    value={donorName}
                    onChange={(e) =>
                        setDonorName(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Donor Phone"
                    value={donorPhone}
                    onChange={(e) =>
                        setDonorPhone(
                            e.target.value
                        )
                    }
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) =>
                        setLocation(
                            e.target.value
                        )
                    }
                />

                <button type="submit">
                    Donate Food
                </button>

            </form>

        </div>
    );
}

export default AddFood;