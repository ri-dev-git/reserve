const express= require('express');
const router= express.Router();
const axios = require("axios");

router.get("/balance",(req,res)=>{
  
    async function getBNBBalance() {
        
        const addresses=`${req.query.address}`
        const config = {
            method: 'get',
            url: `https://api.bscscan.com/api?module=account&action=balance&address=${addresses}&apikey=${process.env.bscscan_api}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        };
        
        axios(config)
            .then(function (response) {
                // console.log(response["data"]["result"])
                res.json(response["data"]["result"])
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
        
          getBNBBalance();

      
})


router.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/BNB/USD`,
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