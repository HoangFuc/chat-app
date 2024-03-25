const express = require("express");
const router = express.Router();

const {
  createChat,
  findUserChat,
  findChat,
} = require("../controllers/chatController");

router.post("/createChat", createChat);
router.get("/:userId", findUserChat);
router.get("/:firstId/:secondId", findChat);

module.exports = router;
