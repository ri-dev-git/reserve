const express= require('express');
const router= express.Router();
const cron = require('node-cron');
const {btc}=require('../db.js')

const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")

  const address="1UzZGqBkP7YV7jMqUpB8o2ksa1xGiHbKo"
  const options ={
    method:"GET",
    url:`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`,
    headers:{'content-type': 'application/json'}
  }
  const symbol="BTC"
  
  // const timeZones = Intl.supportedValuesOf('timeZone')

  // timeZones.forEach(timeZone => {
  //   console.log(timeZone)
  // })
  const cron1=cron.schedule(`${process.env.cronBalanceTimings}`,()=>{
    balanceCall(address,symbol,btc,options)
  },{timezone:'Asia/Calcutta'})

 const cron2=cron.schedule(`${process.env.cronPriceTimings}`,()=>{
    priceCall(address,symbol,btc)
  },{timezone:'Asia/Calcutta'})


  cron1.start()
  cron2.start()

  router.get("/", async(req,res)=>{
  try{
    const val=await btc.find()
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
