const router = require("express").Router();
const Review = require("../../models/Review");

router.get('/api/v1/getReview',async(req,res)=>{
    const id = req.query.id
    let query = {}
    try{
        if(id){
            query = {propertyId: id}
        }
        const findReview = await Review.find(query).sort({ reviewTime: -1 })
        res.send(findReview)
    }catch(error){
        res.send({error: error});
    }
})


module.exports = router;