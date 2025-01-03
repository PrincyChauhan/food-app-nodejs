const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/restaurantController");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController);
router.get("/getAll", getAllResturantController);
router.get("/get/:id", getResturantByIdController);
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
