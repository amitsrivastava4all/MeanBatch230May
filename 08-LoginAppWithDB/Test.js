var mongoose = require("mongoose");
//var jade = require("jade");
var fs = require("fs");
var path=require("path");

function loginCheck(userid,pwd){
    //var isFound = false;
    var db = mongoose.connect("mongodb://localhost:27017/amitdb");
    var userSchema= new mongoose.Schema({"userid":String,
        "password":String
    });
    var User = mongoose.model("login",userSchema);
    console.log("Userid "+userid+" Password "+pwd+" UserObject "+User);
    User.find({},function(error,docs){
        if(error){
            console.log("Error.... ",error);
        }
        if(docs) {
            console.log("DOCS ",docs);
            console.log(typeof docs);
            /*var path2 = path.join(__dirname, '/sample.jade');
            fs.readFile(path2, 'utf-8', function (error, source) {
                var template = jade.compile(source);
                data = {"username": docs.userid};
                var html = template(data)
                res.end(html);
                console.log(html);
                //isFound = true;

            });*/
        }
        else{
            console.log("Error ",error);
            //res.end("Invalid Userid or Password");
        }


    });
    //return isFound;
}
loginCheck("amit","abcd");
//module.exports=loginCheck;