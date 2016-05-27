var express = require("express");
var dao = require("./dbcall/dao");
var app = express();
app.use(express.static("public"));
app.get("/hello",function(request,response){
    dao(response);
    //response.send("Hello this is get request");
});
// show post on postman
app.post("/welcome",function(request,response){
   response.send("Hello this is post request");
});
app.listen(1234,function(){
    console.log("Server Start...");
})