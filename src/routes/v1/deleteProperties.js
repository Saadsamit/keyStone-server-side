const router = require("express").Router();
const isAgent = require("../../middlewares/isAgent");
const verifyToken = require("../../middlewares/verifyToken");
const Properties = require("../../models/Properties");

router.delete("/api/v1/deleteProperties/:id",verifyToken,isAgent, async (req, res) => {
  const id = req.params.id;
  let query = {
    _id: id,
  };
  try {
    const deleteProperties = await Properties.deleteOne(query);
    res.send(deleteProperties);
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
