const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);

// LOGIN GOOGLE
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// CALLBACK GOOGLE
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleLogin
);

module.exports = router;