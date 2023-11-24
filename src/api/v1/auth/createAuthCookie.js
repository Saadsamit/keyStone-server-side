require("dotenv").config();
const jwt = require('jsonwebtoken')
const createAuthCookie = (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.Access_Token, {
      expiresIn: "365d",
    });
    res.cookie('token',token,{
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
    })
    .send({ success: true });
  };
  module.exports = createAuthCookie