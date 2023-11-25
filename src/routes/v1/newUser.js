const User = require("../../models/User");
const router = require("express").Router();

router.post('/api/v1/newUser',async(req,res)=>{
    const data = req.body
    const query = {email: data.email}
    const isExist = await User.findOne(query)
    if(isExist){
        return res.send({included: true})
    }
    const result = await new User(data).save()
    res.send(result)
})


module.exports = router;