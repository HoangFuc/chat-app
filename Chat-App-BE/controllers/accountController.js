const userModel = require("../models/users");

exports.listAccount = async (req, res) => {
  const dataAccount = await userModel.find();

  return dataAccount.length > 0
    ? res.status(200).json(dataAccount)
    : res.status(500).json("Hệ thống gặp gián đoạn");
};
