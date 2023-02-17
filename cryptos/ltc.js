const express= require('express');
const router= express.Router();
const axios = require("axios");

router.get("/balance",(req,res)=>{


    const ltcAddress=`${req.query.address}`


    const options = {
        method: 'GET',
        url: `https://api.blockcypher.com/v1/ltc/main/addrs/${ltcAddress}/balance`,
        headers: {accept: 'application/json', 'content-type': 'application/json'},
    
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
router.get("/price",(req,res)=>{

    const options = {
        method: 'GET',
        url: `https://rest.coinapi.io/v1/exchangerate/LTC/USD`,
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