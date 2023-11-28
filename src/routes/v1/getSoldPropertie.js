const router = require("express").Router();
const PropertyBought = require("../../models/PropertyBought");

router.get("/api/v1/getSoldPropertie/:email", async (req, res) => {
  const email = req.params.email;
  const findQuery = { 'agent.email': email,status: 'bougth' };
  try {
    const result = await PropertyBought.find(findQuery);
    res.send(result)
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
