const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/getAdvertise", async (req, res) => {
  const query = { advertise: true};
  const result = await Propertie.find(query);
  res.send(result);
});

module.exports = router;
