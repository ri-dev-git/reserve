const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {ada}=require('../db.js')
const call=require("./utils/updateCall.js")


  const address="addr1v83pr86wyfkmvhalljkrhlfnryestrny34t44gaurmvx4tshfnjv3"
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
  
cron.schedule(`${process.env.cronTimings}`,()=>{
    call(address,symbol,ada,options)
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