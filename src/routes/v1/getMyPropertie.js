const router = require("express").Router();
const PropertyBought = require("../../models/PropertyBought")

router.get("/api/v1/get-MyProperty/:email", async (req, res) => {
  const email = req.params.email;
  const query = { userEmail: email };
  try {
    const findMyProperty = await PropertyBought.find(query)
    res.send(findMyProperty)
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
