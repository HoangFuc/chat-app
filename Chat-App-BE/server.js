const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const emailRoutes = require("./routes/email.routes");
const userRouters = require("./routes/user.routes")
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 7777;
const MONGOURL =
  process.env.MONGOURL ||
  "mongodb+srv://chat-app:cuoctrochuyentinhcum@cluster0.aq1nchk.mongodb.net/chat-app";
const corsOptions = {
  origin: "*",
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};
mongoose.connect(MONGOURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", emailRoutes);
app.use('/api/users', userRouters);
app.listen(PORT, console.log("==============Success run in port", PORT));
