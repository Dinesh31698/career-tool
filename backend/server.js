require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const resultRoutes = require("./routes/resultRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// ==========================
// Middleware
// ==========================
app.use(cors());
app.use(express.json());

// ==========================
// Routes
// ==========================
app.use("/api/results", resultRoutes);
app.use("/api/admin", adminRoutes);

// ==========================
// MongoDB Connection
// ==========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error ❌", err);
  });

// ==========================
// Start Server
// ==========================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});