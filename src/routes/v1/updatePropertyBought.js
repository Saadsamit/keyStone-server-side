const router = require("express").Router();
const isClient = require("../../middlewares/isClient");
const verifyToken = require("../../middlewares/verifyToken");
const PropertyBought = require("../../models/PropertyBought");

router.put("/api/v1/update-PropertyBought/:id",verifyToken,isClient, async (req, res) => {
  const id = req.params.id
  const data = req.body;
  const query = { _id: id };
  const updateDate = {
    transactionId: data.id,
    status: "bougth"
  }
  try {
    const updatePropertyBought = await PropertyBought.updateOne(query,updateDate);
    res.send(updatePropertyBought);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
