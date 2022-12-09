const mongoose = require("mongoose")

const reqSchema = mongoose.Schema({

    name:String,
    age:String,
    phone:Number,
    nationality:String,
    gender:String,
    nid:Number,
    
});

const requestSchema = mongoose.model('request',reqSchema)

module.exports=requestSchema