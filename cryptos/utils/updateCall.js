const axios = require("axios");
const makeAxiosCall=async(address,symbol,coll,options)=>{
    console.log
    var bal=0;
    
    bal = await axios.request(options)
    
    console.log(bal.data,"565")
    
      const priceOptions = {
                method: 'GET',
                url: `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
                headers: {accept: 'application/json', 'content-type': 'application/json',
                "X-CoinAPI-Key":`${process.env.coin_api}`},
    
              };
              
      const price=await axios.request(priceOptions)
      
      const documentCount = await coll.countDocuments({});


      switch(symbol){
        case "ETH":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,balance:`${bal.data.result}`,price:`${price.data.rate}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { price: `${price.data.rate}`,balance:`${bal.data.result}` } };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              })
              
              }
            break;
        case "BTC":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,balance:`${bal.data.balance}`,price:`${price.data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${price.data.rate}`,balance:`${bal.data.balance}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "MATIC":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,balance:`${bal.data.result}`,price:`${price.data.rate}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { price: `${price.data.rate}`,balance:`${bal.data.result}` } };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              })
              
              }
            break;
        case "DOT":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,balance:`${bal.data.data.account.balance}`,price:`${price.data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${price.data.rate}`,balance:`${bal.data.data.account.balance}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "SOL":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,balance:`${bal.data.result.value}`,price:`${price.data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${price.data.rate}`,balance:`${bal.data.result.value}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        }

}

module.exports=makeAxiosCall