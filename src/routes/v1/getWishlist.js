const Wishlist = require("../../models/wishlist");
const router = require("express").Router();

router.get("/api/v1/getWishlist/:email", async (req, res) => {
  const email = req.params.email;
  const query = { userEmail: email };
  try {
    const result = await Wishlist.find(query);
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
