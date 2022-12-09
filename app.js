const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
var cors = require('cors')
const mongoose = require("mongoose")
const requestSchema = require('./models/request')
app.use(require("./api/req.api"));
app.use(cors())
var corsOptions = {
    origin: "http://localhost:3000/all",
    optionsSuccessStatus: 200 
  }
  
  var corsOptions = {
    origin: function (origin, callback) {
      if ((origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }


app.get("/all" ,cors(corsOptions),async (req,res)=>{
// 1- gender
    let femaleCount = await requestSchema.find({gender:'F'}).count()
    let maleCount = await requestSchema.find({gender:'M'}).count()
// end -gender

//2- nationality
    let one = await requestSchema.find({nationality:"1"}).count()
    let two = await requestSchema.find({nationality:"2"}).count()
    let three = await requestSchema.find({nationality:"3"}).count()
    let four = await requestSchema.find({nationality:"4"}).count()
// end nationality
// end age

    res.json({femaleCount,maleCount,one,two,three,four})
})
mongoose.connect('mongodb://localhost:27017/beneficiaries' , {
    useNewUrlParser : true , UseUnifiedTopology : true
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`running server.... ${port}!`))

