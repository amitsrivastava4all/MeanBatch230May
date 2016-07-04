var express = require("express");
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    res.send("Hello");
});

    app.get('/callme', function(req, res, next) {
    res.json([{id:1001,name:'Amit',address:'Delhi',phone:2222},{id:1002,name:'Ram',address:'Delhi',phone:3222}]);
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});
app.listen(1234,function(){
console.log("Node Server Starts....");
});