// app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const secretRoutes = require("./routes/secret.routes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
app.use("/api", secretRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

module.exports = app;
