const express = require("express");
const { getUserController, updateUserController,updatePasswordController } = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const router=express.Router();

router.get('/getUser',authMiddleware,getUserController)

router.put('/updateUser',authMiddleware,updateUserController)

router.post('/updatePassword',authMiddleware,updatePasswordController)

module.exports=router;