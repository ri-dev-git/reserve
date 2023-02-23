const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {btc}=require('../db.js')

// const collec=db.btc
async function makeAxiosCall() {
  var bal=0;

const address="1UzZGqBkP7YV7jMqUpB8o2ksa1xGiHbKo"

  const options = 
  // method: 'GET',
   `https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`
  // headers: {accept: 'application/json', 'content-type': 'application/json'},

// };


  bal = await axios.get(options)

  console.log(bal.data,"545")
  
  // console.log(val)
  // const priceOptions = {
  //           method: 'GET',
  //           url: `https://rest.coinapi.io/v1/exchangerate/BTC/USD`,
  //           headers: {accept: 'application/json', 'content-type': 'application/json',
  //           "X-CoinAPI-Key":`${process.env.coin_api}`},

  //         };
          
  // const price=await axios.request(priceOptions)
  
  // const documentCount = await btc.countDocuments({});

  // if(address)

  // if(documentCount==0){
  //   console.log("hello")
  //   btc.create({address:`${bal.data.address}`,balance:`${bal.data.balance}`,price:`${price.data.rate}`},function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted")
  //   })
  // }else{
  // var myquery = { address: `${address}` };
  // var newvalues = { $set: { price: `${price.data.rate}`,balance:`${bal.data.balance}` } };
  
  // btc.updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  // })
  
  // }
}

// 
makeAxiosCall()
// cron.schedule("*/5 * * * * *",()=>{
  

//   })

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

// // setInterval(() => {
// //   makeAxiosCall()
// // }, 1000);