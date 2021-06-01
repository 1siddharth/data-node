  
var express = require('express')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let url = "mongodb://localhost:27017/";
  const mongodb = require("mongodb").MongoClient;
const router = express.Router();
console.log("choose route to find your result")


readline.question('choose from among ', name => {
    
//console.log(name)



if(name == 1)
{
console.log("choosed 1")
var devicenam = "DeviceA"
mongodb.connect(
    url,
   
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .findOne({"device":devicenam}, (err, res) => {
          if (err) throw err;
           console.log(res) 
          client.close();
        });
    }
  );


}
if(name == 3)
{
console.log("choosed 3")


mongodb.connect(
    url,
   
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .find({device:true ,p1:true}, (err, res) => {
          if (err) throw err;
           console.log(res) 
          client.close();
        });
    }
  );

}
if(name == 2)
{
console.log("choosed 2")

mongodb.connect(
    url,
   
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .findOne({device:true ,p10:true}, (err, res) => {
          if (err) throw err;
           console.log(res) 
          client.close();
        });
    }
  );

}
if(name == 4)
{
console.log("choosed 4")

mongodb.connect(
    url,
   
    (err, client) => {
      if (err) throw err;
      client
        .db("praan2")
        .collection("category")
        .find({device:true ,p25:true}, (err, res) => {
          if (err) throw err;
           console.log(res) 
          client.close();
        });
    }
  );
}
  });

router.post('/device')



module.exports = router;