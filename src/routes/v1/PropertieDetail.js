const Propertie = require("../../models/Properties");

const router = require("express").Router();

router.get("/api/v1/Properties/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Propertie.findById(id);
  res.send(result);
});

module.exports = router;
