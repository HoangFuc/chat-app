const express = require("express");
const router = express.Router();

const {
  createChat,
  findUserChat,
  findChat,
} = require("../controllers/chatController");

router.post("/createChat", createChat);
router.get("/chat/:userId", findUserChat);
router.get("/chat/:firstId/:secondId", findChat);

module.exports = router;
