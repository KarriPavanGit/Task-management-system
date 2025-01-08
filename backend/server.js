const mongoose = require("mongoose");
const cors = require('cors');
const express = require("express");
const dotenv = require('dotenv');
const secretKey = process.env.JWT_SECRET_KEY;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());  // Using cors correctly

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log("Error connecting to DB:", err.message);
  });

// Importing Routes
const adminRoutes = require("./routes/AdminRoutes");
const userRoutes = require("./routes/UserRoutes");
const taskRoutes = require("./routes/TaskRoutes");
const authRoutes = require("./routes/IndexRoutes");

// Setting up routes
app.use("/admin", adminRoutes); 
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("",authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
