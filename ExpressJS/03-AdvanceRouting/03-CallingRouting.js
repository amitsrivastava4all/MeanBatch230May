var express = require("express");
var app = express();
var myroutes = require('./03-ModularRouting');
//http://localhost:1234/myweb/
//http://localhost:1234/myweb/about
app.use('/admin', myroutes);
app.listen(1234,function(){
   console.log("Server Start...");
});