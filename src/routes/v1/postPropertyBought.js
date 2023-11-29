const router = require("express").Router();
const Wishlist = require("../../models/wishlist");
const PropertyBought = require("../../models/PropertyBought");
const verifyToken = require("../../middlewares/verifyToken");
const isClient = require("../../middlewares/isClient");

router.post("/api/v1/post-PropertyBought",verifyToken,isClient, async (req, res) => {
  const data = req.body;
  const query = { _id: data.wishlistId };
  const findQuery = { propertyId: data.propertyId, userEmail: data.userEmail };
  try {
    const isExist = await PropertyBought.findOne(findQuery);
    if (isExist) {
      return res.send({ isExist: true });
    }
    const postPropertyBought = await new PropertyBought(data).save();
    const deleteWishlist = await Wishlist.deleteOne(query);
    res.send({ postPropertyBought, deleteWishlist });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
