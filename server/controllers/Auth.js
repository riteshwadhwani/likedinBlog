const User = require('../models/User');
const jwt = require("jsonwebtoken");
const zod = require("zod");
require("dotenv").config();

exports.user_signup = async (req,res) =>{
    try {
        const {firstName,lastName,email,password} = req.body;
        if(!firstName || !lastName || !email || !password){
            return res.status(401).json({
                sucess:false,
                message:"All fields are required"
            })
        }
        const existing_user = await User.findOne({email});
        if(existing_user){
            return res.status(401).json({
                sucess:false,
                message:"User Already Exists"
            })
        }
        const created_user =await User.create({
            firstName,lastName,email,password
        })
        
        const token = jwt.sign( created_user.id,process.env.JWT_SECRET)
        res.json({
            success:true,
            created_user,
            token:token,
        })
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:"Error while creating the User"
        })
    }
};

exports.user_login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const existing_user = await User.findOne({email});
        if(!existing_user){
            return res.status(401).json({
                sucess:false,
                message:"User Not Registered Yet"
            })
        }
        if(existing_user.password !== password){
            return res.status(401).json({
                sucess:false,
                message:"Invalid Credentials"
            })
        }
        const token = jwt.sign(existing_user._id,process.env.JWT_SECRET);
        res.json({
            sucess :true,
            existing_user,
            token :token,
        })
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:"Error while LoggIn"
        })
    }
}

