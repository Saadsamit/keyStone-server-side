const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 5000;
const authRoute = require('./routes/v1/auth');
const allProperties = require('./routes/v1/allPropertie')
const PropertieDetail = require('./routes/v1/PropertieDetail');
const getReview = require('./routes/v1/getReview');
const getRole = require('./routes/v1/getRole');
const getUser = require('./routes/v1/getUser');
const newUser = require('./routes/v1/newUser');
const updateUser = require('./routes/v1/updateUser');
const getReviewByEmail = require('./routes/v1/getReviewByEmail');
const deleteReview = require('./routes/v1/deleteReview');
const postWishlist = require('./routes/v1/postWishlist');
const postReview = require('./routes/v1/postReview');
const getWishlist = require('./routes/v1/getWishlist');
const deleteWishlist = require('./routes/v1/deleteWishlist');
const postPropertyBought = require('./routes/v1/postPropertyBought');
const createPaymentIntent = require('./routes/v1/create-payment-intent');
const getMyPropertie = require('./routes/v1/getMyPropertie');
const updatePropertyBought = require('./routes/v1/updatePropertyBought');
const applyMiddlewares = require("./middlewares");

applyMiddlewares(app);
app.use(authRoute)
app.use(allProperties)
app.use(PropertieDetail)
app.use(newUser)
app.use(updateUser)
app.use(postReview)
app.use(getRole)
app.use(getReviewByEmail)
app.use(deleteReview)
app.use(postWishlist)
app.use(getUser)
app.use(getWishlist)
app.use(deleteWishlist)
app.use(postPropertyBought)
app.use(createPaymentIntent)
app.use(getMyPropertie)
app.use(updatePropertyBought)
app.use(getReview)
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
