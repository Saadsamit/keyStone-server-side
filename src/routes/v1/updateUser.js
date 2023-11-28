const User = require("../../models/User");
const router = require("express").Router();

router.put("/api/v1/updateUser/:email", async (req, res) => {
  const email = req.params.email;
  const data = req.body
  const query = { email: email };
  let option ={name: data.name}
  try {
    
    if(data.image){
        option ={name: data.name,image: data.image}
    }
    const result = await User.updateOne(query,option);
    res.send(result)
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = router;
