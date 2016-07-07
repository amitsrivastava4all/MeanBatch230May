function checkLogin(userid, password,response){
var User = require("./commondao");
    console.log("Inside Check Login ",User);
User.find({"uid":userid,"password":password},function(error,docs){
    if(error){
        console.log("Error in Searching....");
    }
    else{
        var resultObject;
        var path = require("path");
        var jade = require("jade");
        var fs = require("fs");
        var jadePath = path.join(__dirname,'/sample.jade');
        console.log("Docs is ",docs);
        //console.log(docs[0].uid+" "+docs[0].password);
        if(docs && docs.length>0) {
             resultObject = {"message":"Welcome","user":docs[0].uid};
        }
        else
        {
            resultObject = {"message":"Invalid Userid or Password"};
        }
        fs.readFile(jadePath, 'utf-8', function(error, source){
            var template = jade.compile(source);
            console.log(resultObject);
            var html = template(resultObject);
            response.end(html);
        });
    }



});
}
module.exports=checkLogin;