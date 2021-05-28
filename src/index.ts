/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 const csv = require('csv-parser');
 const fs = require('fs');
 const routes = require("../routes/mainroute")
 dotenv.config();

 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 const app = express();

 const fs = require("fs");
 const fastcsv = require("fast-csv");
 
 let stream = fs.createReadStream("test_dataset_all.csv");
 let csvData = [];
 let csvStream = fastcsv
   .parse()
   .on("data", function(data) {
     csvData.push({
       
       device: data[0],
       t:data[1],
       w:data[2],
       h:data[3],
       p1:data[4],
       p25:data[5],
       p10:data[6],
       
     });
   })
   .on("end", function() {
     // remove the first line: header
     csvData.shift();
 
     // save to the MongoDB database collection
   });
 
 stream.pipe(csvStream);

 const mongodb = require("mongodb").MongoClient;

// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb://localhost:27017/";

mongodb.connect(
  url,
 
  (err, client) => {
    if (err) throw err;
    client
      .db("praan2")
      .collection("category")
      .insertMany(csvData, (err, res) => {
        if (err) throw err;
        console.log(`Inserted: ${res.insertedCount} rows`);
        client.close();
      });
  }
);


app.use('/routes', routes)
 app.listen(PORT, () => {
    //console.log(`Listening on port ${PORT}`);
  });

 
