const axios = require("axios");
const express = require('express')
const ethers = require('ethers');
const app = express()
const port = process.env.PORT || 3030;
const cors = require('cors');
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');

require('dotenv').config()

app.use(cors())




// config object for making a request with axios

app.get("/",(req,res)=>{
    res.send("Hello")
})

const getETHRoute=require("./cryptos/eth.js")
const getBSCRoute=require("./cryptos/bsc.js")
const getMATICRoute=require("./cryptos/matic.js")
const getBTCRoute=require("./cryptos/btc.js")
const getSOLRoute=require("./cryptos/sol.js")
const getADARoute=require("./cryptos/ada.js")
const getAVAXRoute=require("./cryptos/avax.js")
const getDOTRoute=require("./cryptos/dot.js")
const getLINKRoute=require("./cryptos/link.js")
const getLTCRoute=require("./cryptos/ltc.js")
const getATOMRoute=require("./cryptos/atom.js")
const getUNIRoute=require("./cryptos/uni.js")


app.use("/eth",getETHRoute)
app.use("/bsc",getBSCRoute)
app.use("/matic",getMATICRoute)
app.use("/btc",getBTCRoute)
app.use("/sol",getSOLRoute)
app.use("/ada",getADARoute)
app.use("/avax",getAVAXRoute)
app.use("/dot",getDOTRoute)
// app.use("/link",getLINKRoute)
app.use("/ltc",getLTCRoute)
// app.use("/atom",getATOMRoute)
// app.use("/uni",getUNIRoute)


// async function main(address) {
//   // fetching the token balances

//   let response = await axios({   
//     method: "post",
//     url: baseURL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data:JSON.stringify({
//       jsonrpc: "2.0",
//       method: "alchemy_getTokenBalances",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       params: [`${address}`],
//       id: 42,
//     }) ,
//   });
//   response = response["data"];

//   // Getting balances from the response
//   const balances = response["result"];

//   // Remove tokens with zero balance
//   const nonZeroBalances = await balances.tokenBalances.filter((token) => {
//     return token.tokenBalance !== "0";
//   });

//   console.log(`Token balances of ${address}: \n`);

//   // Counter for SNo of final output
//   let i = 1;

//   // Loop through all tokens with non-zero balance
//   for (let token of nonZeroBalances) {
//     // Get balance of token
//     let balance = token.tokenBalance;

//     // options for making a request to get the token metadata
//     const options = {
//       method: "POST",
//       url: baseURL,
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//       },
//       data: {
//         id: 1,
//         jsonrpc: "2.0",
//         method: "alchemy_getTokenMetadata",
//         params: [token.contractAddress],
//       },
//     };

//     const options2={
//         method: "GET",
//         url: `https://deep-index.moralis.io/api/v2/erc20/${token.contractAddress}/price`,
//         headers: {
//           accept: "application/json",
//           "X-API-Key":"WyJZ3OZ7ZaANAShgOUhNU6zM9hxBoqeIQ6WmaroXjK6qi1R7b8kzreKSKu4VhfU0",
//           "content-type": "application/json",
//         },
    
//       };

//     const price=await axios.request(options2)

//     console.log(price["data"])

//     // getting the token metadata
//     const metadata = await axios.request(options);

//     // Compute token balance in human-readable format
//     balance = balance / Math.pow(10, metadata["data"]["result"].decimals);
//     balance = balance.toFixed(2);
//     // Print name, balance, and symbol of token
//     console.log(
//       `${i++}. ${metadata["data"]["result"].name}: ${balance} ${
//         metadata["data"]["result"].symbol
//       }`
//     );
//   }
// }

// let i=0;

// for(const i in walletAddress){
//   main();
// }

const connect_db=process.env.MONGODB_PASS
mongoose.connect(connect_db,{
    useNewUrlParser:true,
}).then(console.log("connected"))


app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })



