var express = require("express");
var app = express();
console.log("Express is ",typeof express);
console.log("App is ", typeof app);
console.log("Router is ",express.Router());
app.get('/', function (req, res) {
    res.send('Hello Express!');
});
app.post('/hello',function(req,res){
    //res.write()
   res.send("Welcome ");
});

app.listen(1234, function () {
    console.log('Example app listening on port 1234!');
});

