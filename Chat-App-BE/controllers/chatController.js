const chatModel = require("../models/chatRoom");

exports.createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: [firstId, secondId],
    });
    if (chat) return res.status(404).json("The Room has existed");

    const newChat = new chatModel({
      members: [firstId, secondId],
    });

    const response = await newChat.save();

    res.status(200).json(response);
  } catch (err) {
    console.log("=========[ERR CreateChat] : ", err);
    res.status(500).json(err);
  }
};

exports.findUserChat = async (req, res) => {
  const userId = req.params.userId;
  console.log("===================userId", userId);
  try {
    const chat = await chatModel.find({
      members: { $in: [userId] },
    });

    console.log("=================chat", chat);

    res.status(200).json(chat);
  } catch (err) {
    console.log("======[ERR FindUserChat] :", err);
    res.status(500).json(err);
  }
};

exports.findChat = async (req, res) => {
  const { firstId, secondId } = req.params;
  try {
    const chat = await chatModel.find({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.log("=====[ERR FindChat]: ", err);
    res.status(500).json(err);
  }
};
