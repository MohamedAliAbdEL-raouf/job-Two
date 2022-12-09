const { reqAdd, getreq } = require('../services/request.service')

const app = require('express').Router()

app.post("/add",reqAdd);
// app.get("/all", getreq)

module.exports=app;