const router = require("express").Router();
const Uesr = require("../../models/User");

router.get("/api/v1/getRole/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  const userRole = await Uesr.findOne(query, 'role');
    res.send(userRole);
});

module.exports = router;
