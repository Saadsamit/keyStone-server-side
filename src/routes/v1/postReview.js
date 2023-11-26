const router = require("express").Router();
const Review = require("../../models/Review");

router.post("/api/v1/post-review", async (req, res) => {
  const data = req.body;
  const query = { propertyId: data.propertyId, userEmail: data.userEmail };
  try {
    const isExist = await Review.findOne(query);
    if (isExist) {
      const updateReview = {
        reviewStar: data.reviewStar,
        reviewDescription: data.reviewDescription,
      };
      const updateData = await Review.updateOne(query, updateReview);
      return res.send(updateData);
    }
    const result = await new Review(data).save();
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
