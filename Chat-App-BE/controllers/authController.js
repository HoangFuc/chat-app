const bcrypt = require("bcrypt");

const userModel = require("../models/users");

exports.signup = async (req, res) => {
  console.log("===[SIGNUP]");
  const { password, isAdmin, email } = req.body;
  try {
    const checkEmail = await userModel.findOne({
      email: email,
    });
    if (checkEmail) {
      return res.status(500).json("Email da ton tai");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      const newUser = new userModel({
        email: email,
        password: hashed,
        isAdmin: isAdmin,
      });
      console.log("=a");
      const data = await userModel.create(newUser);
      console.log("==b");
      return data
        ? res.status(200).json(data)
        : res.status(500).json("Hệ thống bị gián đoạn. Vui lòng thử lại");
    }
  } catch (err) {
    res.status(500).err;
  }
};

exports.signin = async (req, res) => {
  console.log("===[SIGNUP]");
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({
      email: email,
    });
    const validate = await bcrypt.compare(password, data.password);
    return validate === true
      ? res.status(200).json("Ban dang nhap thanh cong")
      : res.status(400).json("Sai thong tin ! Moi ban nhap lai ");
  } catch (err) {
    console.log("[ERR] :", err);
  }
};
