const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {create_post,create_comment,create_like,get_all_posts} = require("../controllers/Post");

router.post("/createpost",auth,create_post);
router.post("/createcomment",create_comment);
router.post("/createlike",create_like);
router.get("/getposts",get_all_posts);



module.exports = router;