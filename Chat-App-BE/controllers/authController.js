const bcrypt = require('bcrypt');

const userModel = require('../models/users');

exports.signup = async (req, res) => {
  const { username, password, isAdmin, email } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      username: username,
      email: email,
      password: hashed,
      isAdmin: isAdmin,
    });
    await userModel.create(newUser);
    return res.status(200).json(newUser);
  } catch (err) {
    res.status(500).err;
  }
};

exports.signin = async (req, res) => {
  console.log('-------------------------', req.body);
  const { username, password } = req.body;

  try {
    const data = await userModel.findOne({
      username: username,
    });
    const validate = await bcrypt.compare(password, data.password);
    return validate === true
      ? res.status(200).json('Ban dang nhap thanh cong')
      : res.status(400).json('Sai thong tin ! Moi ban nhap lai ');
  } catch (err) {
    console.log('[ERR] :', err);
  }
};
