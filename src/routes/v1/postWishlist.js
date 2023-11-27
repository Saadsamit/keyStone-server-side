const router = require("express").Router();
const Wishlist = require("../../models/wishlist");

router.post("/api/v1/post-Wishlist", async (req, res) => {
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
