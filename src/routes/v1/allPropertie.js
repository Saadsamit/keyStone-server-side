const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/Properties",verifyToken, async (req, res) => {
  const search = req.query.search;
  let query = { status: 'verified'};
  if (search) {
    query = { "property.title": new RegExp(search, "i"),status: 'verified' };
  }
  const result = await Propertie.find(query);
  res.send(result);
});

module.exports = router;
