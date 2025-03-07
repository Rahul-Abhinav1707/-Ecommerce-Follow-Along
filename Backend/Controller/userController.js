import User from "../Models/userModel.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password when retrieving users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const profileImage = req.file ? req.file.path : null;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user (password will be hashed before saving)
    const user = await User.create({ name, email, password, profileImage });

    res.status(201).json({ message: "User registered successfully", user: { name, email, profileImage } });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
