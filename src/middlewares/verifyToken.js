require("dotenv").config();

const jwt = require("jsonwebtoken");
const verifyToken = (req,res,next)=>{
    const token = req?.cookies?.token
    if(!token){
      return res.status(401).send({ message: 'unauthorized access' })
    }
     jwt.verify(token,process.env.Access_Token,(err, decoded) =>{
      if(err){
        return res.status(401).send({ message: 'unauthorized access' })
      }
      req.user = decoded
      next()
    })
  
  }
module.exports = verifyToken