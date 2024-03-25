const express = require("express");
const userModel = require('../models/users');

// Controller để lấy danh sách người dùng
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
};

// Controller để tạo người dùng mới
const createUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  try {
    const newUser = await userModel.create({ email, password, isAdmin });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

//Controller de sua nguoi dung byId

const editUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, isAdmin } = req.body;

  try {
    const editUser = await userModel.findByIdAndUpdate(id, { email, password, isAdmin }, { new: true });
    res.status(200).json(updateUser);
  } catch (error) {
    console.error("Failed to edit user", error.status);
    res.status(500).json({ message: "Failed to edit user" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await userModel.findOneAndDelete({ _id: id, isAdmin: false });
    if (!deleteUser) {
      return res.status(400).json({ message: "Can not Delete Admin" });
    }
    return res.status(200).json({ message: "delete successfully :)))))))))))" })
  } catch (error) {
    console.error('Failed to delete user', error.status);
    res.status(500).json({ message: "Failed to delete user" });

  }
}
module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
};