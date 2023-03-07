const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {dot}=require('../db.js')
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")

  const address="1euducCmquVEKxHPQePAoqQi9oHNtkesP3vNu1jcGMoW9rk"
  const options ={
    method: 'post',
    url: `https://polkadot.api.subscan.io/api/v2/scan/search`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Key':`${process.env.dotscan_api}`,
    },
    data:{
        "key":`${address}`
    }
};
  const symbol="DOT"
  
  cron.schedule(`30 5 * * *`,()=>{
    balanceCall(address,symbol,dot,options) 
  })
  cron.schedule(`30 2 * * *`,()=>{
    priceCall(address,symbol,dot)
  })

router.get("/", async(req,res)=>{
  try{
    const val=await dot.find()
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