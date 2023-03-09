const express= require('express');
const router= express.Router();
const axios = require("axios");
const {link}=require('../db.js')
const cron = require('node-cron');
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")
const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const linkETH="0x514910771AF9Ca656af840dff83E8264EcF986CA"
const options ={
  method:"GET",
  url:`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${linkETH}&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`,
  headers:{'content-type': 'application/json'}
}
const symbol="LINK"

cron.schedule(`30 10 * * *`,()=>{
  balanceCall(address,symbol,link,options) 
})
cron.schedule(`30 10 * * *`,()=>{
  priceCall(address,symbol,link)
})
  router.get("/", async(req,res)=>{
    try{
      const val=await link.find()
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