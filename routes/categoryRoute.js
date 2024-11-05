const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createController,
  getAllCategoryController,
  updateCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", authMiddleware, createController);
router.get("/getall", getAllCategoryController);
router.put("/update/:id", authMiddleware, updateCategoryController);

module.exports = router;
