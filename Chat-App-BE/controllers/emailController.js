const nodeMailer = require("nodemailer");
const userModel = require("../models/users");
const dotenv = require("dotenv").config();

exports.sendEmail = async (req, res) => {
  const { email } = req.body;
  // console.log("===================email", email);
  const data = await userModel.find({
    email: email,
  });
  // console.log("===================data", data);
  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"Admin" <daylafuc@gmail.com>',
      to: email,
      subject: "Cấp lại mật khẩu",
      text: "",
      html: "<b>Hello World<b>",
    });
    return res.status(200).json("Gui Email thanh cong");
  } catch (err) {
    console.log("[ERR] :", err);
  }
};
