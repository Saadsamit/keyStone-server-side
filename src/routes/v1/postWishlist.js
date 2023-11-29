const router = require("express").Router();
const isClient = require("../../middlewares/isClient");
const verifyToken = require("../../middlewares/verifyToken");
const Wishlist = require("../../models/wishlist");

router.post("/api/v1/post-Wishlist",verifyToken,isClient, async (req, res) => {
  const data = req.body;
  const query = { propertyId: data.propertyId, userEmail: data.userEmail };
  try {
    const isExist = await Wishlist.findOne(query);
    if (isExist) {
      return res.send({ isExist: true });
    }
    const result = await new Wishlist(data).save();
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
