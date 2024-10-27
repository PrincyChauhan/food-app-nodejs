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

const updateUserController = async(req,res)=>{

    try {
        const user=await userModel.findByIdAndUpdate({
            _id:req.body.id
        })
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found"    
            })
        }
        const {userName,address,phone}=req.body;
        if(userName){
            user.userName=userName;
        }
        if(address){
            user.address=address;
        }
        if(phone){
            user.phone=phone;
        }   
        await  user.save()
        res.status(200).send({
            success:true,
            message:"User Updated",
            data:user})
              
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error in Update User API",
            error:error
        })
    }
}

module.exports={getUserController,updateUserController}