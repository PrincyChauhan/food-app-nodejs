const userModel = require("../models/userModel");

const getUserController = async(req,res)=>{
   try {
    const user=await userModel.findById({
        _id:req.body.id
    })
    if (!user) {
        return res.status(500).send({
            success: false,
            message: "User not found"
        })
    }
    user.password=undefined;
    res.status(200).send({
        success:true,
        message:"User Found",
        data:user
    })
   } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message:"Error in Get User API",
        error:error
    })
    
   }
}

module.exports={getUserController}