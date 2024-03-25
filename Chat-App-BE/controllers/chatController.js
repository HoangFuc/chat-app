const chatModel = require("../models/chatRoom");

exports.createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
    if (chat) return res.json(404).json(chat);

    const newChat = new chatModel({
      members: { $all: [firstId, secondId] },
    });

    const response = await newChat.save();

    res.status(200).json(response);
  } catch (err) {
    console.log("=========[ERR] : ", err);
    res.status(500).json(err);
  }
};

exports.findUserChat = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chat = await chatModel.findOne({
      members: { $id: [userId] },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.log("======[ERR] :", err);
    res.status(500).json(err);
  }
};

exports.findChat = async (req, res) => {
  const { firstId, secondId } = req.params;
  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.log("=====[ERR]: ", err);
    res.status(500).json(err);
  }
};
