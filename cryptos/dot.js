const express= require('express');
const router= express.Router();
const axios = require("axios");



router.get("/balance",(req,res)=>{
  
    async function getDOTBalance() {
        // https://eth-mainnet.g.alchemy.com/v2/
        const address=`${req.query.address}`
        const config = {
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
        
        axios(config)
            .then(function (response) {
                // console.log(response["data"]["result"])
                console.log(response["data"])
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
        
          getDOTBalance();

      
})

router.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/DOT/USD`,
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