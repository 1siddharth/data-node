  
var express = require('express')
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  */
  let url = "mongodb://localhost:27017/";
  const mongodb = require("mongodb").MongoClient;
const router = express.Router();
console.log("choose route to find your result")

/*
readline.question('choose from among ', name => {
    
//console.log(name)
*/
var name = 1


router.get("/specific" ,(req,res)=>{ 
  console.log("choosed 1")
  var devicenam = "DeviceA"
  mongodb.connect(
      url,
     
      (err, client) => {
        if (err) throw err;
        client
          .db("praan2")
          .collection("category")
          .find({"device":devicenam}, (err, res1) => {
            if (err) throw err;
             res.json(res1)
            client.close();
          });
      }
    );  
res.json("reached here page send")
})


router.get("/send1" ,(req,res)=>{
  console.log("choosed 3")
  mongodb.connect(
      url,
     
      (err, client) => {
        if (err) throw err;
        client
          .db("praan2")
          .collection("category")
          .find({device:true ,p1:true}, (err, res1) => {
            if (err) throw err;
            res.json(res1)
            client.close();
          });
      }
    );
  res.json("reached here page send")
  })


router.get("/send25" ,(req,res)=>{
  console.log("choosed 2")
mongodb.connect(
    url, 
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .find({device:true ,p10:true}, (err, res1) => {
          if (err) throw err;
          res.json(res1) 
          client.close();
        });
    }
  );
    res.json("reached here page send")
    })



router.get("/send10" ,(req,res)=>{
  console.log("choosed 4")
mongodb.connect(
    url, 
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .find({device:true ,p25:true}, (err, res1) => {
          if (err) throw err;
          res.json(res1) 
          client.close();
        });
    }
  );
      res.json("reached here page send")
      })




  





module.exports = router;