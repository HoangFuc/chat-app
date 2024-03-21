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

module.exports = {
  getUsers,
  createUser,
};