const isClient = require('../../middlewares/isClient');
const verifyToken = require('../../middlewares/verifyToken');

require('dotenv').config()
const router = require("express").Router();
const stripe = require("stripe")(process.env.Stripe_Key);


router.post("/api/v1/create-payment-intent",verifyToken,isClient, async (req, res) => {
  const {price} = req.body
  const amount = parseInt(price * 100)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        "payment_method_types": [
            "card"
          ],
          
    })
    res.send({clientSecret: paymentIntent.client_secret})
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
