const jwt = require("jsonwebtoken");

const auth = async(req,res,next) =>{
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({});
        }
    
        const token = req.body.token || authHeader.split(' ')[1];
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decode;
        next();
        
    } catch (error) {
        res.status(403).json({
            sucess:false,
            message:"Error on getting the Token",
        })
    }
}

module.exports = auth;