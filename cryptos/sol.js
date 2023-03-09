const express= require('express');
const router= express.Router();
const app = express()
const axios = require("axios");
const cron = require('node-cron');
const {sol}=require('../db.js')
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")

  const address="2wrinNutMdqStHDVyXoPzo5S16yUbaAta5buzWPYmW2h"
  const options ={
    method: 'POST',
    url: `https://solana-mainnet.g.alchemy.com/v2/${process.env.alchemy_solana_api}`,
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    data: {
      id: 1,
      jsonrpc: '2.0',
      method: 'getBalance',
      params: [`${address}`]
    }
  };
  const symbol="SOL"
  
  const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
    balanceCall(address,symbol,sol,options)
  },{timezone:'Asia/Calcutta'})
  
  const cron2=cron.schedule(`${process.env.cronPriceTimings}`,()=>{
    priceCall(address,symbol,sol)
  },{timezone:'Asia/Calcutta'})
  
  
  cron1.start()
  cron2.start()
router.get("/", async(req,res)=>{
  try{
    const val=await sol.find()
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