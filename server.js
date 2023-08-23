var  express = require("express");
var app = express();

// app.get("/",function(req,res){
//     res.send("Hello from Express");
// })

app.get("/about",function(req,res){
    res.send("Hello from about us page...");
})

app.use(express.static(__dirname+ '/'))
app.listen(3000);