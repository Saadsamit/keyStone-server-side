const router = require("express").Router();
const Review = require("../../models/Review");

router.get("/api/v1/getReviewByEmail/:email", async (req, res) => {
  const email = req.params.email;
  let query = {
    userEmail: email,
  };
  try {
    const findReview = await Review.find(query).sort({ reviewTime: -1 });
    res.send(findReview);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
