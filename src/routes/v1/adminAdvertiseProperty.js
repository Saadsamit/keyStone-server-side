const isAdmin = require("../../middlewares/isAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/adminAdvertiseProperty",verifyToken,isAdmin, async (req, res) => {
  const query = { status: 'verified'};
  try {
    const findLength = await Propertie.countDocuments({advertise: true})
    const result = await Propertie.find(query);
    res.send([result,findLength]);
  } catch (error) {
    res.send({ error: error });
  }

});
router.put("/api/v1/Advertise-Property/:id",verifyToken,isAdmin, async (req, res) => {
    const id = req.params.id
    const query = {_id: id}
    const {advertise} = req.body
    const data = {advertise: advertise}
    try {
      const result = await Propertie.updateOne(query,data);
      res.send(result);
    } catch (error) {
      res.send({ error: error });
    }
  });

module.exports = router;
