const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");

const router = require("express").Router();

router.get("/api/v1/Properties/:id",verifyToken, async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Propertie.findById(id);
    if (result) {
      res.send(result);
    } else {
      res.send({error:"Document not found"});
    }
  } catch (error) {
    res.send({error: error});
  }

  
});

module.exports = router;
