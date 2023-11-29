const isAgent = require("../../middlewares/isAgent");
const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/get-added-properties/:email",verifyToken,isAgent, async (req, res) => {
  const email = req.params.email;
  const query = {'agent.email': email}
  try {
    const result = await Propertie.find(query);
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
