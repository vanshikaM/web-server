var  express = require("express");
var middleware = require("./middleware.js");
var app = express();

app.use(middleware.logger);

app.get("/about",middleware.requireAuthentication,function(req,res){
    res.send("Hello from about us page.");
})

app.use(express.static(__dirname+ '/'))
app.listen(3000);