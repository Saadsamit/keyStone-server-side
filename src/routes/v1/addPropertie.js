const isAgent = require("../../middlewares/isAgent");
const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.post("/api/v1/newPropertie",verifyToken,isAgent, async (req, res) => {
  const data = req.body;
  try {
    const result = await new Propertie(data).save();
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});
module.exports = router;
