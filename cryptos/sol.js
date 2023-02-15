const express= require('express');
const router= express.Router();
const app = express()
const axios = require("axios");


app.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/SOL/USD`,
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

app.get("/balance",(req,res)=>{


    const sol_address=req.query.address
    const options = {
        method: 'POST',
        url: `https://solana-mainnet.g.alchemy.com/v2/${process.env.alchemy_solana_api}`,
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        data: {
          id: 1,
          jsonrpc: '2.0',
          method: 'getBalance',
          params: [`${sol_address}`]
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
            res.json(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });

})


module.exports = router;