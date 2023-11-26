const User = require("../../models/User");
const router = require("express").Router();

router.post('/api/v1/newUser',async(req,res)=>{
    const data = req.body
    const query = {email: data.email}
    try{
        const isExist = await User.findOne(query)
    if(isExist){
        return res.send({included: true})
    }
    const result = await new User(data).save()
    res.send(result)
    }catch (error) {
        res.send({error: error});
      }
})


module.exports = router;