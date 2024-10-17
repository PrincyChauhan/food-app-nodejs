const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const registerController = async(req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body // Use userName instead of username
        if (!userName || !email || !password || !phone || !address) {
            return res.status(500).send({
                success: false,
                message: "Please fill all the fields"
            })
        }
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "Email already exists"
            })
        }

        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await userModel.create({
            userName: userName, // Use userName here as well
            email: email,
            password: hashedPassword,
            address: address,
            phone: phone
        });
        res.status(200).send({
            success: true,
            message: "User Registered Successfully",
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Register Controller",
            error: error
        })
    }
}

const loginController = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please fill email and password fields"
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Invalid Password"
            })
        }

        const token = JWT.sign({ id: user._id }, process.env.JSON_WEB_TOKEN_SECRET, { expiresIn: "1d" })
        user.password = undefined;
        res.status(200).send({
            sucess: true,
            message: "Login success",
            token,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login Controller",
            error
        })
    }

}


module.exports = { registerController, loginController }