const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/api/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check weather any of the input is empty
    if (!email || !password) {
      return res
        .status(422)
        .send({ error: "Please provide an email and password" });
    }

    // check weather the email is already registered
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(422).send({ error: "email is already registered" });
    }

    //post the new user to the database
    const user = new User({ email, password });
    const d = await user.save();

    res.status(201).send({ success: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
