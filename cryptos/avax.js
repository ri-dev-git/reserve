const express= require('express');
const router= express.Router();
const axios = require("axios");


router.get("/balance",(req,res)=>{
  
    async function getAVAXBalance() {
        // https://eth-mainnet.g.alchemy.com/v2/
        const address="0x6d477834817548d0FcAcaB2A066FeF395198234a"
        const config = {
            method: 'post',
            url: `https://api.snowtrace.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.snowtrace_api}`,
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
        
          getAVAXBalance();

      
})

router.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/AVAX/USD`,
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