const isAdmin = require("../../middlewares/isAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const Propertie = require("../../models/Properties");
const router = require("express").Router();

router.get("/api/v1/adminAdvertiseProperty",verifyToken,isAdmin, async (req, res) => {
  const query = { status: 'verified'};
    const findLength = await Propertie.countDocuments({advertise: true})
  const result = await Propertie.find(query);
  res.send([result,findLength]);
});
router.put("/api/v1/Advertise-Property/:id",verifyToken,isAdmin, async (req, res) => {
    const id = req.params.id
    const query = {_id: id}
    const {advertise} = req.body
    const data = {advertise: advertise}
    const result = await Propertie.updateOne(query,data);
    res.send(result);
  });

module.exports = router;
