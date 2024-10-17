const express = require("express");
const { testuserController } = require("../controllers/testController");

const router = express.Router();
router.get("/test-user", testuserController)
module.exports = router;