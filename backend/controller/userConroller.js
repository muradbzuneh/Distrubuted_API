import connectDB from "../config/db.js";
import User from "../models/usermodel.js";
// Connect to the database
connectDB();

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, age, bankacc } = req.body;
    const newUser = new User({ name, email, password, age, bankacc });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};


