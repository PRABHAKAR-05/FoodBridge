const express = require("express");
const router = express.Router();

const {
    createFood,
    getFoods,
    getFoodById,
    updateFood,
    deleteFood,
    updateFoodStatus
} = require("../controllers/foodController");

const authMiddleware =
    require("../middleware/authMiddleware");

router.post(
    "/create",
    authMiddleware,
    createFood
);

router.put(
    "/:id",
    authMiddleware,
    updateFood
);

router.delete(
    "/:id",
    authMiddleware,
    deleteFood
);

router.get(
    "/",
    getFoods
);

router.get(
    "/:id",
    getFoodById
);

module.exports = router;