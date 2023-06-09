const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");
var router = express.Router();

// GET ALL USER
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
// router.get("/", userController.getAllUsers);

// DELETE USER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
