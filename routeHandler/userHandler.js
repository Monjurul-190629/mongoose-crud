const express = require('express');
const router = express.Router();
const User = require('../model/userModel'); // Ensure the path is correct

// POST: Create a new user
router.post('/', async (req, res) => {
    try {
        console.log("Received POST request with data:", req.body); // Debugging log

        const { name, roll, job } = req.body;

        // Check if all required fields are provided
        if (!name || !roll || !job) {
            return res.status(400).json({ error: "All fields (name, roll, job) are required" });
        }

        // Create a new user and save it to the database
        const newUser = new User({ name, roll, job });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error in POST /users:", error);
        res.status(500).json({ error: "New user not created", details: error.message });
    }
});

// GET: Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in GET /users:", error);
        res.status(500).json({ error: "Failed to fetch data", details: error.message });
    }
});

module.exports = router;
