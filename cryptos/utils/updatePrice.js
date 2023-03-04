const axios = require("axios");
const makePriceCall=async(address,symbol,coll)=>{
  
    
      const priceOptions = {
                method: 'GET',
                url: `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD`,
                headers: {accept: 'application/json', 'content-type': 'application/json',
                "X-CoinAPI-Key":`${process.env.coin_api}`},
    
              };
              
      
      const price=symbol=="BBGCI"?1:await axios.request(priceOptions)
      
      const documentCount = await coll.countDocuments({});
      const data=price.data
      console.log(data.rate)

      switch(symbol){
        case "ETH":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { price: `${data.rate}`} };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                console.log("yo")
                if (err) throw err;
              })
              
              }
            break;
        case "BTC":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${data.rate}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "MATIC":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { price: `${data.rate}` } };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              })
              
              }
            break;
        case "DOT":
            if(documentCount==0){
  
                console.log("hello")
                  coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${data.rate}`} };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "SOL":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {price:`${data.rate}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "ADA":
          if(documentCount==0){
            console.log("hello")
              coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
        }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: {price:`${data.rate}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
          }
        break;
        case "AVAX":
          if(documentCount==0){
            console.log("hello")
            coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
              if (err) throw err;
              console.log("1 document inserted")
            })
          }else{
          var myquery = { address: `${address}` };
          var newvalues = { $set: { price: `${data.rate}` } };
          
          coll.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
          })
          
          }
        break;
        case "LTC":
          if(documentCount==0){
            console.log("hello")
              coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
        }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: {price:`${data.rate}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
          }
        break;
        case "LINK":
          if(documentCount==0){
            console.log("hello")
            coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
              if (err) throw err;
              console.log("1 document inserted")
            })
          }else{
          var myquery = { address: `${address}` };
          var newvalues = { $set: { price: `${data.rate}` } };
          
          coll.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
          })
          
          }
          break;
          case "UNI":
            if(documentCount==0){
              console.log("hello")
              coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: { price: `${data.rate}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            }
            break;
          case "ATOM":
            
            if(documentCount==0){
             
              console.log("hello")
              coll.create({address:`${address}`,price:`${data.rate}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{

              var myquery = { address: `${address}` };
            
            var newvalues = { $set: { price: `${data.rate}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            }
          break;
          case "BBGCI":
            if(documentCount==0){
              console.log("hello")
              coll.create({address:`${address}`,price:`${price}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: { price: `${price}`} } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            break;
        }
    }

    module.exports=makePriceCall