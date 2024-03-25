const mongoose = require("mongoose");
const chatRoomSchema = new mongoose.Schema(
  {
    members: Array,
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("chat", chatRoomSchema);

module.exports = chatModel;
