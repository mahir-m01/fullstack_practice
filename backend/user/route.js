// user/route.js
const express = require("express");
const { login, signup } = require("../user/controller");

const userRoutes = express.Router();

userRoutes.post("/login", login);
userRoutes.post("/signup", signup);

module.exports = { userRoutes };