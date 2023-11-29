const router = require("express").Router();
const isAgent = require("../../middlewares/isAgent");
const verifyToken = require("../../middlewares/verifyToken");
const PropertyBought = require("../../models/PropertyBought");

router.put("/api/v1/Requested/:id",verifyToken,isAgent, async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const findQuery = { _id: id };
  const update = { status: data.status };
  const findData = {'agent.email': data.email,propertyId: data.propertyId}
  try {
    if (data.status === "accepted") {
      const allUpdate = await PropertyBought.updateMany(findData, { status: 'rejected' });
    } 
    const result = await PropertyBought.updateOne(findQuery, update);
      res.send(result);
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
