const Food = require("../models/Food");

// Create Food
exports.createFood = async (req, res) => {
    try {

        const food = await Food.create(req.body);

        res.status(201).json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Get All Foods
exports.getFoods = async (req, res) => {
    try {

        const foods = await Food.find();

        res.status(200).json(foods);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Update Food
exports.updateFood = async (req, res) => {
    try {

        const food = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.status(200).json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Delete Food
exports.deleteFood = async (req, res) => {
    try {

        const food = await Food.findByIdAndDelete(
            req.params.id
        );

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.status(200).json({
            message: "Food deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.getFoodById = async (req, res) => {
    try {

        const food = await Food.findById(
            req.params.id
        );

        if (!food) {

            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.status(200).json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateFoodStatus = async (req, res) => {

    try {

        const food =
            await Food.findByIdAndUpdate(

                req.params.id,

                {
                    status: req.body.status
                },

                {
                    new: true,
                    runValidators: true
                }
            );

        if (!food) {

            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.status(200).json(food);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};
