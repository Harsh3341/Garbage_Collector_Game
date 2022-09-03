const express = require("express");
const router = express.Router();
const { getData } = require("../controllers/homeController");
const { setData } = require("../controllers/homeController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getData);
router.post("/", protect, setData);

module.exports = router;
