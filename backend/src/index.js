import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is listening");
});
