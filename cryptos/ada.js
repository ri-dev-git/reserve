// const express= require('express');
// const router= express.Router();
// const axios = require("axios");
// const cron = require('node-cron');
// const {ada}=require('../db.js')
// const balanceCall=require("./utils/updateBalance.js")
// const priceCall=require("./utils/updatePrice.js")


//   const address="addr1v83pr86wyfkmvhalljkrhlfnryestrny34t44gaurmvx4tshfnjv3"
//   const options = {
//       method: 'get',
//       url: `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
//       headers: {
//           // 'Content-Type': 'application/json',
//           // 'Accept': 'application/json',
//           "project_id":`${process.env.adaAPIKey}`,
//       }
//   };
//   const symbol="ADA"
  
//   const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
//     balanceCall(address,symbol,ada,options)
//   },{timezone:'Asia/Calcutta'})
  
//   const cron2=cron.schedule(`${process.env.cronPriceTimings}`,()=>{
//     priceCall(address,symbol,ada)
//   },{timezone:'Asia/Calcutta'})
  
  
//   cron1.start()
//   cron2.start()
// router.get("/", async(req,res)=>{
//   try{
//     const val=await ada.find()
//     // .then(function(response){
//       res.json(val[0])
//     // });
//     // console.log(val[0])
  
//   }catch(e){ 
//     console.log(e)
//     res.status(404).json(
//       {
//           "status":404,
//           "reason":"Page Not Found"
//       }
//   )
//   }
       
// })


// module.exports = router;