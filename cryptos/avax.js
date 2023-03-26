const express= require('express');
const router= express.Router();
const axios = require("axios");
const {avax}=require('../db.js')
const cron = require('node-cron');
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")
const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const avaxBSCAddress="0x1ce0c2827e2ef14d5c4f29a091d735a204794041"
const options ={
  method:"GET",
  url:`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${avaxBSCAddress}&address=${address}&tag=latest&apikey=${process.env.bscscan_api}}`,
  headers:{'content-type': 'application/json'}
}
const symbol="AVAX"
const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,async()=>{
  await balanceCall(address,symbol,avax,options)
},{timezone:'Asia/Calcutta'})

const cron2=cron.schedule(`${process.env.cronPriceTimings}`,async()=>{
  await priceCall(address,symbol,avax)
},{timezone:'Asia/Calcutta'})


cron1.start()
cron2.start()

  router.get("/", async(req,res)=>{
    try{
      const val=await avax.find()
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