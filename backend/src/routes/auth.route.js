import express from "express";
import {
  checkAuth,
  login,
  logout,
  signUp,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Signup Router
router.post("/signup", signUp);

// Login Router
router.post("/login", login);

// Logout Router
router.post("/logout", logout);

// Update Profile Router
router.put("update-profile", protectRoute, updateProfile);

// Check Auth Router
router.get("/check", protectRoute, checkAuth);

export default router;
