const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 5000;
const authRoute = require('./routes/v1/auth');
const allProperties = require('./routes/v1/allPropertie')
const PropertieDetail = require('./routes/v1/PropertieDetail');
const applyMiddlewares = require("./middlewares");

applyMiddlewares(app);
app.use(authRoute)
app.use(allProperties)
app.use(PropertieDetail)
app.get("/api", (req, res) => {
  res.send("server is running");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port);
};
main()
