const axios = require("axios");
const express = require('express')
const ethers = require('ethers');
const app = express()
const port = process.env.PORT || 3030;
const cors = require('cors');
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');

require('dotenv').config()

app.use(cors())




// config object for making a request with axios

app.get("/",(req,res)=>{
    res.send("Hello")
})

const getETHRoute=require("./cryptos/eth.js")
const getBSCRoute=require("./cryptos/bsc.js")
const getMATICRoute=require("./cryptos/matic.js")
const getBTCRoute=require("./cryptos/btc.js")
const getSOLRoute=require("./cryptos/sol.js")
const getADARoute=require("./cryptos/ada.js")
const getAVAXRoute=require("./cryptos/avax.js")
const getDOTRoute=require("./cryptos/dot.js")
const getLINKRoute=require("./cryptos/link.js")
const getLTCRoute=require("./cryptos/ltc.js")
const getATOMRoute=require("./cryptos/atom.js")
const getUNIRoute=require("./cryptos/uni.js")


app.use("/eth",getETHRoute)
app.use("/bsc",getBSCRoute)
app.use("/matic",getMATICRoute)
app.use("/btc",getBTCRoute)
app.use("/sol",getSOLRoute)
app.use("/ada",getADARoute)
app.use("/avax",getAVAXRoute)
app.use("/dot",getDOTRoute)
app.use("/link",getLINKRoute)
app.use("/ltc",getLTCRoute)
// app.use("/atom",getATOMRoute)
app.use("/uni",getUNIRoute)


const connect_db=process.env.MONGODB_PASS
mongoose.connect(connect_db,{
    useNewUrlParser:true,
}).then(console.log("connected"))


app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })



