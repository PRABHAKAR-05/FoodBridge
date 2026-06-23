import { Link } from "react-router-dom";
import "../styles/FoodCard.css";

function FoodCard({
    food,
    deleteFood,
    updateStatus
}) {

    return (

        <div className="food-card">

            <div className="food-header">

                <h2>{food.foodName}</h2>

                <span className="status">
                    {food.status}
                </span>

            </div>

            <div className="food-body">

                <p><strong>Quantity:</strong> {food.quantity}</p>

                <p><strong>Food Type:</strong> {food.foodType}</p>

                <p><strong>Cooked Time:</strong> {food.cookedTime}</p>

                <p><strong>Expiry Time:</strong> {food.expiryTime}</p>

                <p><strong>Donor:</strong> {food.donorName}</p>

                <p><strong>Phone:</strong> {food.donorPhone}</p>

                <p><strong>Location:</strong> {food.location}</p>

            </div>

            <div className="food-actions">

                <Link
                    to={`/edit-food/${food._id}`}
                    className="edit-btn"
                >
                    Edit
                </Link>

                {
                    food.status === "Available" && (

                        <button
                            className="claim-btn"
                            onClick={() =>
                                updateStatus(
                                    food._id,
                                    "Claimed"
                                )
                            }
                        >
                            Claim
                        </button>

                    )
                }

                {
                    food.status === "Claimed" && (

                        <button
                            className="deliver-btn"
                            onClick={() =>
                                updateStatus(
                                    food._id,
                                    "Delivered"
                                )
                            }
                        >
                            Deliver
                        </button>

                    )
                }

                <button
                    className="delete-btn"
                    onClick={() =>
                        deleteFood(food._id)
                    }
                >
                    Delete
                </button>

            </div>

        </div>

    );
}

export default FoodCard;