const express= require('express');
const router= express.Router();
const axios = require("axios");
const cron = require('node-cron');
const {atom}=require('../db.js')
const call=require("./utils/updateCall.js")


  const address="cosmos1q495d5hhr6m63t0c72y8wdl850yymcjk6kpgkk"
  const options ={
    method:"GET",
    url:`https://rest.cosmos.directory/cosmoshub/cosmos/bank/v1beta1/balances/${address}`,
    headers:{'content-type': 'application/json'}
  }
  const symbol="ATOM"
  
cron.schedule(`${process.env.cronTimings}`,()=>{
    call(address,symbol,atom,options)
})

router.get("/", async(req,res)=>{
  try{
    const val=await atom.find()
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

// const { Tendermint34Client } = require("@cosmjs/tendermint-rpc");
// const { QueryClient } = require("@cosmjs/stargate");
// const { Bank } = require("@cosmjs/stargate/build/modules/bank/queries.js")
// const bank=cosmos.bank
// const rpcEndpoint = "";

// async function getAccountBalance(address, denom) {
//   const tendermintClient = await Tendermint34Client.connect(rpcEndpoint);
//   const queryClient = new QueryClient(tendermintClient);
//   const bankClient = new Bank(queryClient);

//   const response = await bankClient.balance(address, denom);
//   return response.balance;
// }

// const address = "cosmos1p3ucd3ptpw902fluyjzhq3ffgq4ntddac9sa3s";
// const denom = "uatom";
// getAccountBalance(address, denom).then(balance => {
//   console.log(`Atom balance for ${address}: ${balance}`);
// }).catch(error => {
//   console.error("Error:", error);
// });



module.exports = router; 