const express= require('express');
const router= express.Router();
const cron = require('node-cron');
const {BitSave}=require("../db.js")
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")
const contractAddress="0x5C560a1375dCcE9d0CC96F4197b7d593a17c6F90"
const options ={
    method:"GET",
    url:`https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${process.env.poygonscan_api}`,
    headers:{'content-type': 'application/json'}
  }
const symbol="BBGCI"

const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,async()=>{
  await balanceCall(contractAddress,symbol,BitSave,options)
},{timezone:'Asia/Calcutta'})

const cron2=cron.schedule(`${process.env.cronPriceTimings}`,async()=>{
  await priceCall(contractAddress,symbol,BitSave)
},{timezone:'Asia/Calcutta'})


cron1.start()
cron2.start()
router.get("/", async(req,res)=>{
    try{
      const val=await BitSave.find()
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