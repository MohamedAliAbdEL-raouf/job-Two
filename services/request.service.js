const requestSchema = require("../models/request");

module.exports.reqAdd =async (req,res)=>{
    const {name,phone,age,nid,gender,nationality} = req.body;
    await requestSchema.insertMany({name,phone,age,nid,gender,nationality});
    res.json({message:"added"});
};

// module.exports.getreq = async (req,res)=>{
//     let allreq = await requestSchema.find({})
//     res.json(allreq)
// };




