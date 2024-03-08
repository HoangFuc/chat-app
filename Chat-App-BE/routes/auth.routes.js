const express = require("express");
const router = express.Router();

const { signin, signup } = require("../controllers/authController");

router.post("/signup", signup);
router.get("/signin", signin);

module.exports = router;
