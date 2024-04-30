const express = require("express");
const router = express.Router();

const {user_login,user_signup} = require("../controllers/Auth");

router.post("/signup",user_signup);
router.post("/sigin",user_login)

module.exports = router;