const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {ada}=require('../db.js')
const call=require("./utils/updateCall.js")


  const address="addr1v83pr86wyfkmvhalljkrhlfnryestrny34t44gaurmvx4tshfnjv3"
  const options = {
      method: 'get',
      url: `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${address}`,
      headers: {
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          "project_id":"mainnetul8wuKbWgQnFYPIwsgQ6drwykq1OXsX5",
      }
  };
  const symbol="ADA"
  
// cron.schedule(`${process.env.cronTimings}`,()=>{
    //call(address,symbol,ada,options)
// })

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


router.get("/balance",(req,res)=>{

    async function getADABalance() {
        // https://eth-mainnet.g.alchemy.com/v2/

        axios(config)
            .then(function (response) {
                console.log(response["data"])
                res.json(response["data"])
            })
            .catch(function (error) {
                console.log(error);
                res.status(404).json(
                    {
                        "status":404,
                        "reason":error
                    }
                )
            });
            
            
      }

        //   main(walletAddress[i]);
        
          getADABalance();

      
})

router.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/ADA/USD`,
        headers: {accept: 'application/json', 'content-type': 'application/json',
        "X-CoinAPI-Key":`${process.env.coin_api}`},
        // data: {
        //   id: 1,
        //   jsonrpc: '2.0',
        //   method: 'getBalance',
        //   params: ['7pJbLMNFXqaqr2qnoZmJWuc3mcE14TPWbTs2kjyFwmKm']
        // }
      };
      
      axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            res.json(response.data)
        })
        .catch(function (error) {
          console.error(error);
        });

})

module.exports = router;