var express = require("express");
var app = express();
app.set('views', './templates');
app.set('view engine', 'jade');




app.get('/', function (req, res) {
    var obj = { title: 'This is Title', message: 'Hello User'};
    res.render('sample', obj);
});
app.listen(1234,function(){
   console.log("Server Start");
});
