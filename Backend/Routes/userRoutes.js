import express from "express";
import { loginUser, createUser, getUsers } from "../Controllers/userController.js";

const router = express.Router();

router.post("/login", loginUser); // Login route
router.post("/register", createUser); // Register route
router.get("/", getUsers); // Get all users

export default router;
