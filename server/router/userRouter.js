const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {user_login,user_signup,get_user_details} = require("../controllers/Auth");

router.post("/signup",user_signup);
router.post("/signin",user_login);
router.get("/user_details",auth,get_user_details);

module.exports = router;