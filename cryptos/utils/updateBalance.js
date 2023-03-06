const axios = require("axios");
const makeAxiosCall=async(address,symbol,coll,options)=>{
  
    var bal;
    
    bal = await axios.request(options)
    
    // console.log(bal.data,"565")
    
     
      
      const documentCount = await coll.countDocuments({});


      switch(symbol){
        case "ETH":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,balance:`${parseInt(bal.data.result)/10**18}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { balance:`${parseInt(bal.data.result)/10**18}` } };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              })
              
              }
            break;
        case "BTC":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,balance:`${parseInt(bal.data.final_balance)/10**8}`,},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {balance:`${parseInt(bal.data.final_balance)/10**8}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "MATIC":
            if(documentCount==0){
                console.log("hello")
                coll.create({address:`${address}`,balance:`${parseInt(bal.data.result)/10**18}`},function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted")
                })
              }else{
              var myquery = { address: `${address}` };
              var newvalues = { $set: { balance:`${parseInt(bal.data.result)/10**18}` } };
              
              coll.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
              })
              
              }
            break;
        case "DOT":
            if(documentCount==0){
  
                console.log("hello")
                  coll.create({address:`${address}`,balance:bal.data.code==10004?0:bal.data.data.account.balance},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {balance:bal.data.code==10004?0:bal.data.data.account.balance} };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "SOL":
            if(documentCount==0){
                console.log("hello")
                  coll.create({address:`${address}`,balance:`${parseInt(bal.data.result.value)/10**9}`,},function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted")
                  })
            }else{
                var myquery = { address: `${address}` };
                var newvalues = { $set: {balance:`${parseInt(bal.data.result.value)/10**9}` } };
                
                coll.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                })
                
              }
            break;
        case "ADA":
          if(documentCount==0){
            console.log("hello")
              coll.create({address:`${address}`,balance:bal.data.data.status_code==404?0:`${parseInt(bal.data.amount[0].quantity)/10**6}`,},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
        }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: {balance:bal.data.data.status_code==404?0:`${parseInt(bal.data.amount[0].quantity)/10**6}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
          }
        break;
        case "AVAX":
          if(documentCount==0){
            console.log("hello")
            coll.create({address:`${address}`,balance:`${parseInt(bal.data.result)/10**18}`,},function(err, res) {
              if (err) throw err;
              console.log("1 document inserted")
            })
          }else{
          var myquery = { address: `${address}` };
          var newvalues = { $set: { balance:`${parseInt(bal.data.result)/10**18}` } };
          
          coll.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
          })
          
          }
        break;
        case "LTC":
          if(documentCount==0){
            console.log("hello")
              coll.create({address:`${address}`,balance:`${parseInt(bal.data.final_balance)/10**8}`,},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
        }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: {balance:`${parseInt(bal.data.final_balance)/10**8}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
          }
        break;
        case "LINK":
          if(documentCount==0){
            console.log("hello")
            coll.create({address:`${address}`,balance:`${parseInt(bal.data.result)/10**18}`,},function(err, res) {
              if (err) throw err;
              console.log("1 document inserted")
            })
          }else{
          var myquery = { address: `${address}` };
          var newvalues = { $set: { balance:`${parseInt(bal.data.result)/10**18}` } };
          
          coll.updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
          })
          
          }
          break;
          case "UNI":
            if(documentCount==0){
              console.log("hello")
              coll.create({address:`${address}`,balance:`${parseInt(bal.data.result)/10**18}`,},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: { balance:`${parseInt(bal.data.result)/10**18}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            }
            break;
          case "ATOM":
            
            if(documentCount==0){
              //condintional statement to filter the array with only uatom balaces

              if(bal.data.balances.length==0){
                var u={
                  amount:"0"
                }
              }else{
                var u=bal.data.balances.find(den=>{
                  return den.denom==="uatom"
                })
              }
              console.log("hello")
              coll.create({address:`${address}`,balance:`${parseInt(u.amount)/10**6}`,},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{

              if(bal.data.balances.length==0){
                var u={
                  amount:"0"
                }
              }else{
                var u=bal.data.balances.find(den=>{
                  return den.denom==="uatom"
                })
              }
              
    
              var myquery = { address: `${address}` };
            
            var newvalues = { $set: { balance:`${parseInt(u.amount)/10**6}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            }
          break;
          case "BBGCI":
            if(documentCount==0){
              console.log("hello")
              coll.create({address:`${address}`,totalSupply:`${bal.data.result/10**18}`},function(err, res) {
                if (err) throw err;
                console.log("1 document inserted")
              })
            }else{
            var myquery = { address: `${address}` };
            var newvalues = { $set: {totalSupply:`${parseInt(bal.data.result)/10**18}` } };
            
            coll.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err;
            })
            
            }
          break
        }
}

module.exports=makeAxiosCall