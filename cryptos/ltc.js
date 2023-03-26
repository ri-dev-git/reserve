const express= require('express');
const router= express.Router();
const axios = require("axios");
const {ltc}=require('../db.js')
const cron = require('node-cron');
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")
require('dotenv').config()

const address=`LKhwpV91q3MbjvRX1coUQp6X5nPERug5p9`
const options ={
  method:"GET",
  url: `https://api.blockcypher.com/v1/ltc/main/addrs/${address}/balance`,
  headers:{'content-type': 'application/json'}
}
const symbol="LTC"

const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,async()=>{
  await balanceCall(address,symbol,ltc,options)
},{timezone:'Asia/Calcutta'})

const cron2=cron.schedule(`${process.env.cronPriceTimings}`,async()=>{
await  priceCall(address,symbol,ltc)
},{timezone:'Asia/Calcutta'})


cron1.start()
cron2.start()

  router.get("/", async(req,res)=>{
    try{
      const val=await ltc.find()
      // .then(function(response){
        res.json(val[0])
      // });
      // console.log(val[0])
    
    }catch(e){ 
      console.log(e)
      res.status(404).json(
        {
            "status":404,
            "reason":"Page Not Found"
        }
    )
    }
         
  })



module.exports = router;