const express = require('express');
const router = express.Router();

const { signin, signup } = require('../controllers/authController');

router.post('/signup', signup); //đăng kí
router.post('/signin', signin); //đăng nhập

module.exports = router;
