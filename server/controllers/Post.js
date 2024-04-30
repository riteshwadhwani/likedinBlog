const zod = require('zod');
const Post = require("../models/post");
const User = require("../models/User");
const Like = require("../models/like");
const Comment = require("../models/comment");

exports.create_post = async (req,res) =>{
    try {
        const {title} = req.body;
        const userId = req.userId;
        const created_post = await Post.create({userId,title});
        
        await User.findByIdAndUpdate(userId,{$push:{posts:created_post._id}},{new:true});
        console.log("yaha");
        res.json({
            sucess:true,
            message:"Post Created Sucessfully",
        })
    } catch (error) {
        return res.status(403).json({
            sucess:false,
            message:"Error while creating the post"
        })
    }
}
exports.create_like = async(req,res) =>{
    try {
        const {post,user} = req.body;
        const create_like = await Like.create({post,user});
        await Post.findByIdAndUpdate({post},{$push:{likes:create_like._id}},{new:true}).populate("likes").exec();
        res.json({
            sucess:true,
            message:"Liked Sucessfully"
        })
    } catch (error) {
        return res.status(403).json({
            sucess:false,
            message:"Error while liking the post"
        })
    }
}

exports.create_comment = async(req,res) =>{
    try {
        const {post,user,comment} = req.body;
        const created_comment = await Comment.create({post,user,comment});
        await Post.findByIdAndUpdate({post},{$push:{comments:created_comment._id}},{new:true}).populate("comments").exec();
        res.json({
            sucess:true,
            message:"Comment Sucessfully"
        })
    } catch (error) {
        return res.status(403).json({
            sucess:false,
            message:"Error while Commenting the post"
        })
    }
}

exports.get_all_posts = async (req,res) =>{
    try {
        const allPosts = await Post.find({}).populate("user").exec();
        res.json({
            posts:allPosts,
        })
    } catch (error) {
        return res.status(403).json({
            sucess:false,
            message:"Error while fetching the posts"
        })
    }
}
