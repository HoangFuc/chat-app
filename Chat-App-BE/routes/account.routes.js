const express = require("express");
const router = express.Router();

const { listAccount } = require("../controllers/accountController");

router.get("/listAccount", listAccount); //danh sach account

module.exports = router;
