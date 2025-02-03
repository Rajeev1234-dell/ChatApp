import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import connectDB from "./lib/connectDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is listening");
});
