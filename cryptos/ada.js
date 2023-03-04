const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {ada}=require('../db.js')
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")


  const address="addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz2j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq0xmsha"
  const options = {
      method: 'get',
      url: `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
      headers: {
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          "project_id":"mainnetul8wuKbWgQnFYPIwsgQ6drwykq1OXsX5",
      }
  };
  const symbol="ADA"
  
cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
  balanceCall(address,symbol,ada,options) 
})
cron.schedule(`${process.env.cronPriceTimings}`,()=>{
  priceCall(address,symbol,ada)
})
router.get("/", async(req,res)=>{
  try{
    const val=await ada.find()
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