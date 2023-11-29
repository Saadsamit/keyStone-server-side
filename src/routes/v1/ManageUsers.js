const router = require("express").Router();
const Uesr = require("../../models/User");
const Properties = require("../../models/Properties");
const verifyToken = require("../../middlewares/verifyToken");
const isAdmin = require("../../middlewares/isAdmin");

router.get("/api/v1/ManageUsers",verifyToken,isAdmin, async (req, res) => {
  const userRole = await Uesr.find();
  res.send(userRole);
});
router.put("/api/v1/updateRole",verifyToken,isAdmin, async (req, res) => {
  const { role, email } = req.body;
  const qurey = { email: email };
  const update = { role: role };
  if(role === 'fraud'){
    const emailQuery = {'agent.email': email}
    const findUser = await Properties.deleteMany(emailQuery);
  }
  const updateRole = await Uesr.updateOne(qurey, update);
  res.send(updateRole);
});
router.delete("/api/v1/deleteUser/:id",verifyToken,isAdmin, async (req, res) => {
  const id = req.params.id;
  const qurey = { _id: id };
  const deleteUser = await Uesr.deleteOne(qurey);
  res.send(deleteUser);
});
module.exports = router;
