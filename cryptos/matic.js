const express= require('express');
const router= express.Router();
const cron = require('node-cron');
const {matic}=require("../db.js")
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")

const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const options ={
    method:"GET",
    url:`https://api.polygonscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.poygonscan_api}`,
    headers:{'content-type': 'application/json'}
  }
const symbol="MATIC"

const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
  balanceCall(address,symbol,matic,options)
},{timezone:'Asia/Calcutta'})

const cron2=cron.schedule(`${process.env.cronPriceTimings}`,()=>{
  priceCall(address,symbol,matic)
},{timezone:'Asia/Calcutta'})


cron1.start()
cron2.start()

router.get("/", async(req,res)=>{
    try{
      const val=await matic.find()
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