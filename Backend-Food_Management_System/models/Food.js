const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    foodType: {
        type: String,
        required: true
    },

    cookedTime: {
        type: String,
        required: true
    },

    expiryTime: {
        type: String,
        required: true
    },

    donorName: {
        type: String,
        required: true
    },

    donorPhone: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

status: {
    type: String,
    enum: ["Available", "Claimed", "Delivered"],
    default: "Available"
}

}, {
    timestamps: true
});

module.exports = mongoose.model("Food", foodSchema);