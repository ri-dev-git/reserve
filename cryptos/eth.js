const express= require('express');
const router= express.Router();
const app = express()
const {eth}=require('../db.js')
const cron = require('node-cron');
const call=require("./utils/updateCall.js")

const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
const options ={
  method:"GET",
  url:`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`,
  headers:{'content-type': 'application/json'}
}
const symbol="ETH"

cron.schedule(`${process.env.cronTimings}`,()=>{  
  call(address,symbol,eth,options)
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