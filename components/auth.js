const express = require("express");
var router = express.Router();
const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

// REGISTER
router.post("/register", authController.registerUser);

// LOGIN
router.post("/login", authController.loginUser);

// REFRESH
router.post("/refresh", authController.requestRefreshToken);

// LOGOUT
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);
module.exports = router;
