const express= require('express');
const router= express.Router();
const axios = require("axios");
const {uni}=require('../db.js')
const cron = require('node-cron');
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")

const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const uniETH="0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
const options ={
  method:"GET",
  url:`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${uniETH}&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`,
  headers:{'content-type': 'application/json'}
}
const symbol="UNI"

cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
  balanceCall(address,symbol,uni,options) 
})
cron.schedule(`${process.env.cronPriceTimings}`,()=>{
  priceCall(address,symbol,uni)
})


  router.get("/", async(req,res)=>{
    try{
      const val=await uni.find()
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