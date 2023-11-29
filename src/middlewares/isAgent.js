const User = require('../models/User');
const isAgent = async(req,res,next)=>{
      const {email} = req.user
      const query = {email: email}
      const findUser = await User.findOne(query)
    if(findUser.role === 'agent'){
        return next() 
    }
    res.status(401).send({ message: 'unauthorized access' })
    }

module.exports = isAgent