require("dotenv").config();
const express = require("express");
const app = express();
const colors = require("colors");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", require("./routes/registerRoute"));
app.use("/api/login", require("./routes/loginRoute"));
app.use("/api/", require("./routes/homeRoute"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
