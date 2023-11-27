const User = require("../../models/User");
const router = require("express").Router();

router.get("/api/v1/getUser/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  try {
    const result = await User.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
