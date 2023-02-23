const express= require('express');
const router= express.Router();
const app = express()
const axios = require("axios");
const {eth}=require('../db.js')
const cron = require('node-cron');

async function makeAxiosCall() {
    var bal=0;
  
  const address="0x8d207B587018201efC24b288a8b87D5aEfbb9c8e"
  
    const options = 
    // method: 'GET',
     `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`
    // headers: {accept: 'application/json', 'content-type': 'application/json'},
  
  // };
  
  
    bal = await axios.get(options)
  
    console.log(bal.data,"565")
    
    // console.log(val)
    // const priceOptions = {
    //           method: 'GET',
    //           url: `https://rest.coinapi.io/v1/exchangerate/ETH/USD`,
    //           headers: {accept: 'application/json', 'content-type': 'application/json',
    //           "X-CoinAPI-Key":`${process.env.coin_api}`},
  
    //         };
            
    // const price=await axios.request(priceOptions)
    
    // const documentCount = await eth.countDocuments({});
  
    // if(address)
  
    // if(documentCount==0){
    //   console.log("hello")
    //   eth.create({address:`${bal.data.address}`,balance:`${bal.data.balance}`,price:`${price.data.rate}`},function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted")
    //   })
    // }else{
    // var myquery = { address: `${address}` };
    // var newvalues = { $set: { price: `${price.data.rate}`,balance:`${bal.data.balance}` } };
    
    // eth.updateOne(myquery, newvalues, function(err, res) {
    //   if (err) throw err;
    // })
    
    // }
  }

  makeAxiosCall()
//   cron.schedule("*/5 * * * * *",()=>{
  

//   })

// router.use("/balance",(req,res)=>{
  
  
//     async function getEtherBalance() {
//         console.log()
//         const address=`${req.query.address}`
//         const config = {
//             method: 'post',
//             url: `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${process.env.etherscan_api}`,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }
//         };
        
//         axios(config)
//             .then(function (response) {
//                 // console.log(response["data"]["result"])
//                 res.json(response["data"]["result"])
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 res.status(404).json(
//                     {
//                         "status":404,
//                         "reason":error
//                     }
//                 )
//             });
            
            
//       }

//         //   main(walletAddress[i]);
        
//           getEtherBalance();

      
// })


// router.use("/price",(req,res)=>{

//     const options = {
//         method: 'GET',
//         url: `https://rest.coinapi.io/v1/exchangerate/ETH/USD`,
//         headers: {accept: 'application/json', 'content-type': 'application/json',
//         "X-CoinAPI-Key":`${process.env.coin_api}`},
//         // data: {
//         //   id: 1,
//         //   jsonrpc: '2.0',
//         //   method: 'getBalance',
//         //   params: ['7pJbLMNFXqaqr2qnoZmJWuc3mcE14TPWbTs2kjyFwmKm']
//         // }
//       };
      
//       axios
//         .request(options)
//         .then(function (response) {
//             console.log(response.data);
//             res.json(response.data)
//         })
//         .catch(function (error) {
//           console.error(error);
//         });

// })

module.exports = router;