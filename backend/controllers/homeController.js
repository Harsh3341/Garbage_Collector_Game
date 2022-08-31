const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const UserGameData = require("../models/userGameData");

const getData = asyncHandler(async (req, res) => {
  const gameData = await UserGameData.find({ user: req.user.id });

  res.json(gameData);
});

const setData = asyncHandler(async (req, res) => {
  if (!req.body.game || !req.body.score) {
    res.status(400);
    throw new Error("Invalid data");
  }

  const gameData = await UserGameData.create({
    user: req.user.id,
    game: req.body.game,
    score: req.body.score,
  });
  res.status(200).json(gameData);
});

module.exports = {
  getData,
  setData,
};
