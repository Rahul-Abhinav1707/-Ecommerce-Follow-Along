import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json()); // Parse JSON request body


app.use("/api/users", userRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));
