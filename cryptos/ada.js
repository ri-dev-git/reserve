const express= require('express');
const router= express.Router();
const axios = require("axios");

router.get("/balance",(req,res)=>{

    async function getADABalance() {
        // https://eth-mainnet.g.alchemy.com/v2/
        const stake_address="stake1uxm7j5wggvmupqq3v04fn6ayqva5egnxrnyapqy4vcqsx6grxjutl"
        const config = {
            method: 'get',
            url: `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${stake_address}`,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                "project_id":"mainnetul8wuKbWgQnFYPIwsgQ6drwykq1OXsX5",
            }
        };
        
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