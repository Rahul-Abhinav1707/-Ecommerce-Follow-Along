import express from "express";
import { getUsers, createUser } from "../Controllers/userController.js";
import upload from "../Middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", upload.single("profileImage"), createUser);

export default router;
