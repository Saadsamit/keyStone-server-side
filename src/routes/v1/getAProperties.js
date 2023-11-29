const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/get-a-propertie/:id",verifyToken, async (req, res) => {
  const id = req.params.id;
  const query = {_id: id}
  try {
    const result = await Propertie.findOne(query);
    res.send(result);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
