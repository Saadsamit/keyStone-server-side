const router = require("express").Router();
const Review = require("../../models/Review");

router.delete("/api/v1/deleteReview/:id", async (req, res) => {
  const id = req.params.id;
  let query = {
    _id: id,
  };
  console.log(id);
  try {
    const deleteReview = await Review.deleteOne(query);
    res.send(deleteReview);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
