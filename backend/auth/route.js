const express = require("express");
const { login, signup, getProfile } = require("./controller");
const { validateSignup, validateLogin } = require("./middleware");
const authenticateToken = require("../middlewares/verifyToken");

const authRoutes = express.Router();

// Public routes
authRoutes.post("/login", validateLogin, login);
authRoutes.post("/signup", validateSignup, signup);

// Protected route - only valid token holders can access
authRoutes.get("/profile", authenticateToken, getProfile);

module.exports = { authRoutes };