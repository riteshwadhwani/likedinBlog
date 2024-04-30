const mongoose = require("mongoose");
const { string } = require("zod");

const postSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
        }
    ]

})

module.exports = mongoose.model("post",postSchema);