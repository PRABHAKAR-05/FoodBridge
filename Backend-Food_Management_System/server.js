const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/food", require("./routes/foodRoutes"));

// Home Route
app.get("/", (req, res) => {
    res.send("Food Management API Running");
});

// Test Route
app.get("/test", (req, res) => {
    res.send("Server Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});