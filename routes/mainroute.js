  
var express = require('express')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const router = express.Router();
console.log("choose route to find your result")
dn ={
    "1" : "for specific device",
    "2" : "for 1pm particle",
    "3" : "for 2.5pm particle",
    "4" : "for 10pm particle",
    
}
console.log(dn)
readline.question('choose from among ', name => {
    
console.log(name)

if(name == 1)
{
console.log("choosed 1")
}
if(name == 3)
{
console.log("choosed 3")
}
if(name == 2)
{
console.log("choosed 2")
}
if(name == 4)
{
console.log("choosed 4")
}
  });

router.post('/device')



module.exports = router;