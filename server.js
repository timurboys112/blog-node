require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const passport = require("./config/passport");

app.use(passport.initialize());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected 🌿");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });