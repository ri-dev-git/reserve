const axios = require("axios");
const express = require('express')
const ethers = require('ethers');
const app = express()
const port = process.env.PORT || 3030;
const cors = require('cors');

require('dotenv').config()

app.use(cors())

// const walletAddress = ["0x848A75fE41d5B269Ca007f63FbE60ce8B15a6E60","0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5","0x7Fa3891bB083acd8F27F50588e5B2C1Bfa2d2FA4"];



// config object for making a request with axios

app.get("/",(req,res)=>{
    res.send("Hello")
})

const getETHRoute=require("./cryptos/eth.js")
const getBSCRoute=require("./cryptos/bsc.js")
const getMATICRoute=require("./cryptos/matic.js")
const getBTCRoute=require("./cryptos/btc.js")
const getSOLRoute=require("./cryptos/sol.js")

app.use("/eth",getETHRoute)
app.use("/bsc",getBSCRoute)
app.use("/matic",getMATICRoute)
app.use("/btc",getBTCRoute)
app.use("/sol",getSOLRoute)




app.get("/getLtcBalance",(req,res)=>{


    const ltcAddress="LfmssDyX6iZvbVqHv6t9P6JWXia2JG7mdb"


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
app.get("/getLtcPrice",(req,res)=>{

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

app.get("/getAVAXBalance",(req,res)=>{
  
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

app.get("/getAVAXPrice",(req,res)=>{

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


app.get("/getDOTBalance",(req,res)=>{
  
    async function getDOTBalance() {
        // https://eth-mainnet.g.alchemy.com/v2/
        const address=`${req.query.address}`
        const config = {
            method: 'post',
            url: `https://polkadot.api.subscan.io/api/v2/scan/search`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-API-Key':"2fc93446270146a086571427427d4cc1",
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

app.get("/getDOTPrice",(req,res)=>{

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


app.get("/getADABalance",(req,res)=>{

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
//   main("0x5A885FC412a0F9506723bCa8de1AD68c95BE1340");
// }




    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })




//CpYsXhYHng9dnD73jC8VSKkUL4RocNol