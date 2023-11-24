const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const applyMiddlewares = (app)=>{
    app.use(
        cors({
          origin: ["http://localhost:5173"],
          credentials: true,
        })
      );
      app.use(express.json());
      app.use(cookieParser());
}
module.exports= applyMiddlewares