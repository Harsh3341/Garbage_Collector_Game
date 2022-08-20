require("dotenv").config();
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

require(`${__dirname}/db/dbconnect`);

const User = require(`${__dirname}/models/user`);

app.use(express.json());
app.use(cookieParser());

app.use(require("./routes/signup"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./user/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "user", "build", "index.html"));
  });
}

app.get("/api", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
