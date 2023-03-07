const express= require('express');
const router= express.Router();
const app = express()
const {eth}=require('../db.js')
const cron = require('node-cron');
const balanceCall=require("./utils/updateBalance.js")
const priceCall=require("./utils/updatePrice.js")
const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const options ={
  method:"GET",
  url:`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`,
  headers:{'content-type': 'application/json'}
}
const symbol="ETH"

cron.schedule(`30 5 * * *`,()=>{
  balanceCall(address,symbol,eth,options) 
})
cron.schedule(`30 2 * * *`,()=>{
  priceCall(address,symbol,eth)
})

  router.get("/", async(req,res)=>{
    try{
      const val=await eth.find()
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