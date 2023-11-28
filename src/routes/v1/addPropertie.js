const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.post("/api/v1/newPropertie", async (req, res) => {
  const data = req.body;
  try {
    const result = await new Propertie(data).save();
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
