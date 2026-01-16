const express = require("express");
const { register, login, profile, updateProfile } = require("../controllers/authController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, profile);
router.put("/profile", auth, updateProfile);


module.exports = router;
