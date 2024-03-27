const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const emailRoutes = require("./routes/email.routes");
<<<<<<< HEAD
const userRouters = require("./routes/user.routes")
=======
const accountRoutes = require("./routes/account.routes");
const chatRoutes = require("./routes/chatRoom.routes");
>>>>>>> dev
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
<<<<<<< HEAD
app.use('/api/users', userRouters);
=======
app.use("/api", accountRoutes);
app.use("/api", chatRoutes);
>>>>>>> dev
app.listen(PORT, console.log("==============Success run in port", PORT));
