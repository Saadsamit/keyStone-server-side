const router = require("express").Router();
const verifyToken = require("../../middlewares/verifyToken");
const Review = require("../../models/Review");

router.delete("/api/v1/deleteReview/:id",verifyToken, async (req, res) => {
  const id = req.params.id;
  let query = {
    _id: id,
  };
  try {
    const deleteReview = await Review.deleteOne(query);
    res.send(deleteReview);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
