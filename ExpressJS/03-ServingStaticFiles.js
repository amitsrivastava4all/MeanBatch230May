var express = require("express");
var app = express();
app.use(express.static("public")); //http://localhost:1234/pages/index.html
//app.use('/amit', express.static('public')); // give virtual name of public directory
// http://localhost:1234/amit/pages/index.html
app.listen(1234,function(){
   console.log("Server Start...");
});