const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../Controlers/usercontorl");
const validateToken = require("../middleware/tokenValidate");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);
module.exports = router;
