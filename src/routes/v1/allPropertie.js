const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/Properties", verifyToken, async (req, res) => {
  const search = req.query.search;
  try {
    const result = await Propertie.aggregate([
      {
        $match: {
          "property.title": { $regex: search, $options: "i" },
          status: "verified",
        },
      },
    ]);
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});
module.exports = router;
