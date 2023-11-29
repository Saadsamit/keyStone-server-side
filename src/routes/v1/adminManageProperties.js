const router = require("express").Router();
const Properties = require("../../models/Properties");
const isAdmin = require("../../middlewares/isAdmin");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/api/v1/Manage-all-Properties",verifyToken,isAdmin, async (req, res) => {
  try {
    const result = await Properties.find();
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});
router.put("/api/v1/PropertiesAction/:id",verifyToken,isAdmin, async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const query = { _id: id };
  try {
    const result = await Properties.updateOne(query, { status: status });
    res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
