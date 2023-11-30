const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// "http://localhost:5173",
const applyMiddlewares = (app)=>{
    app.use(
        cors({
          origin: ["https://keystone-4eb5f.web.app","https://keystone-4eb5f.firebaseapp.com"],
          credentials: true,
        })
      );
      app.use(express.json());
      app.use(cookieParser());
}
module.exports= applyMiddlewares