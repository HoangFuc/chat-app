const express = require('express');
const router = express.Router();
const {getUser} = require('../controllers/userController');

// Định nghĩa tuyến đường API danh sách người dùng
router.get('/listAccount', async (req, res) => {
  try {
    const users = await getUser.find();
    res.json(users);
  } catch (error) {
    console.error('Failed to get users:', error);
    res.status(500).json({ message: 'Failed to get users' });
  }
});

module.exports = router;