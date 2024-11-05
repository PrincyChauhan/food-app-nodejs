const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createController } = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", authMiddleware, createController);

module.exports = router;
