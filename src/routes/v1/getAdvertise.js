const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/getAdvertise", async (req, res) => {
  const query = { advertise: true };
  try {
    const result = await Propertie.find(query);
    res.send(result);
  
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
