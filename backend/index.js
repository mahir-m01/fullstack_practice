const express = require("express");
const { authRoutes } = require("./auth/route");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
