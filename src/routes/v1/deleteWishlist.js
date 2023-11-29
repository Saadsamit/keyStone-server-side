const router = require("express").Router();
const isClient = require("../../middlewares/isClient");
const verifyToken = require("../../middlewares/verifyToken");
const Wishlist = require("../../models/wishlist");

router.delete("/api/v1/delete-Wishlist/:id",verifyToken,isClient, async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  try {
    const deleteWishlist = await Wishlist.deleteOne(query);
    res.send(deleteWishlist);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
