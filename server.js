require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

require(`${__dirname}/db/dbconnect`);

const User = require("./models/user");

app.use(express.json());
app.use(cookieParser());

app.use(require("./routes/signup"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
