const Properties = require("../../models/Properties");
const router = require("express").Router();

router.put("/api/v1/updateProperties/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const query = { _id: id };
  let option = {
    "property.title": data.property.title,
    "property.location": data.property.location,
    "property.details": data.property.details,
    "property.PriceRange": data.property.PriceRange,
  };
  try {
    if (data.property.image) {
      option = {
        "property.image": data.property.image,
        "property.title": data.property.title,
        "property.location": data.property.location,
        "property.details": data.property.details,
        "property.PriceRange": data.property.PriceRange,
      };
    }
    const result = await Properties.updateOne(query, option);
    res.send(result);   
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
