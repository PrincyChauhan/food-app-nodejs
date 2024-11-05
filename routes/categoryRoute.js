const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createController,
  getAllCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", authMiddleware, createController);
router.get("/getall", getAllCategoryController);

module.exports = router;
